import { makeAutoObservable, reaction, runInAction } from 'mobx';
import api from '../api';
import {
  EpisodeData,
  FavoriteEpisodeItem,
  FeedOptions,
  ListenedEpisodeItem,
  PodcastData,
  SubscribeData,
} from '@podpodium/common/lib/user-data-manager/v2';
import { IPersistedPlaySetting } from '../type';
import { dataManager } from '../user-data';
import PlayerState from './player';
import { mergeTwo, v2 } from '@podpodium/common';
import { cacheDataStorage } from '../util';
import BackgroundFetch from 'react-native-background-fetch';
import _ from 'lodash';
import { getRegion } from '../../i18n';

console.info('load state');

const feedCount = 100;
const LastUpdateTimeKey = 'LastUpdateKey';
const UpdateThreshold = 60 * 60 * 1000;

export class RootState {
  player: PlayerState;

  fetchRssTimeout = 30000;

  feeds: EpisodeData[] = [];
  feedsLoading: boolean = false;
  feedsLastLoadTime: number = 0;

  subscribedPodcasts: SubscribeData = {};
  subscribedPodcastsLoading: boolean = false;

  favoriteEpisodes: FavoriteEpisodeItem[] = [];
  favoriteEpisodesLoading: boolean = false;

  history: ListenedEpisodeItem[] = [];
  historyEpisodesLoading: boolean = false;

  newUserRecPodcasts: PodcastData[] = [];
  newUserRecPodcastsLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.player = new PlayerState(this);
  }

  async init() {
    await this.player.setupPlayer();
    await this.player.loadPlaySetting();
    await this.player.loadPlaylist();
  }

  async initBackgroundFetch() {
    const onEvent = async (taskId: string) => {
      console.log('[BackgroundFetch] task: ', taskId);
      // Do your background work...
      await this.addEvent();
      // IMPORTANT:  You must signal to the OS that your task is complete.
      BackgroundFetch.finish(taskId);
    };

    // Timeout callback is executed when your Task has exceeded its allowed running-time.
    // You must stop what you're doing immediately BackgroundFetch.finish(taskId)
    const onTimeout = async (taskId: string) => {
      console.warn('[BackgroundFetch] TIMEOUT task: ', taskId);
      BackgroundFetch.finish(taskId);
    };

    // Initialize BackgroundFetch only once when component mounts.
    let status = await BackgroundFetch.configure({ minimumFetchInterval: 15 }, onEvent, onTimeout);

    console.log('[BackgroundFetch] configure status: ', status);
  }

  // Add a BackgroundFetch event to <FlatList>
  async addEvent() {
    // Simulate a possibly long-running asynchronous task with a Promise.
    const opt: FeedOptions = {
      refreshAll: true,
      fetchRssTimeout: 10000,
    };
    console.info('start refresh all subscribed podcast');
    let feeds = await dataManager.feeds(feedCount, opt);
    console.info('done refresh all subscribed podcast');
    runInAction(() => {
      this.feeds = feeds;
    });
  }

  async loadNewUserRecPodcast() {
    console.info('load new user reco');
    this.newUserRecPodcastsLoading = true;
    const region = getRegion();
    const podRes = await api.podcast.getHotPodcasts(4, { region });
    const podcasts: PodcastData[] = [];
    await new Promise((resolve) => {
      let i = 0;
      podRes.data.forEach(async (podcast) => {
        dataManager
          .getPodcastData(podcast.url, true, this.fetchRssTimeout)
          .then((data) => {
            if (data) {
              podcasts.push(data);
            }
          })
          .finally(() => {
            i += 1;
            if (i >= podRes.data.length) {
              resolve('');
            }
          });
      });
    });

    console.info('load new user reco done, ', podcasts.length);
    runInAction(() => {
      this.newUserRecPodcasts = podcasts;
      this.newUserRecPodcastsLoading = false;
    });
  }

  async recordLastUpdateTime() {
    const date = new Date();
    console.info('record last update time:', date.toLocaleDateString());
    return cacheDataStorage.setString(LastUpdateTimeKey, String(date.getTime()));
  }

  async shouldRefreshAll() {
    const time = await cacheDataStorage.getString(LastUpdateTimeKey);
    if (!time) {
      return true;
    }
    const timestamp = Number(time);
    return Date.now() - timestamp > UpdateThreshold;
  }

  async loadFeeds(options?: FeedOptions) {
    if (!_.isEmpty(this.feeds)) {
      console.info('feeds already in memory');
      return;
    }
    const cachedFeeds = await cacheDataStorage.getObject<EpisodeData[]>(v2.cacheDataKey('feeds'));
    if (cachedFeeds && Array.isArray(cachedFeeds) && cachedFeeds.length > 0) {
      runInAction(() => {
        console.info('load feeds from feeds cache, count:', cachedFeeds.length);
        this.feeds = cachedFeeds;
      });
      return;
    }
    console.info('no feeds loaded from cache(memory/disk), refresh from network');
    await this.refreshFeeds(options);
  }

  async refreshFeeds(options?: FeedOptions, force = false) {
    if (this.feedsLoading) {
      return;
    }
    this.feedsLoading = true;
    console.info('refresh feeds');
    const lastRefreshFeedTimeKey = 'lastRefreshFeedTime';
    let refreshAll = !!options?.refreshAll;
    if (refreshAll && !force) {
      const lastRefreshFeedTime = Number(await cacheDataStorage.getString(lastRefreshFeedTimeKey));
      const refreshAllEnabled = Date.now() - lastRefreshFeedTime > 10 * 60 * 1000;
      console.info('lastRefreshFeedTime', lastRefreshFeedTime, ', enabled:', refreshAllEnabled);
      if (!refreshAllEnabled) {
        refreshAll = false;
      }
    }

    const opt: FeedOptions = {
      ...options,
      refreshAll,
      fetchRssTimeout: 5000,
      originalFeeds: this.feeds,
      onBatchCompleted: (currentFeeds: EpisodeData[]) => {
        runInAction(() => {
          this.feeds = currentFeeds;
        });
      },
    };

    let feeds = await dataManager.feeds(feedCount, opt);
    console.info('load feeds, count:', feeds.length, 'options:', _.omit(opt, 'originalFeeds'));

    if (refreshAll) {
      await this.recordLastUpdateTime();
    } else if (feeds.length === 0) {
      const retryOpts = { ...opt, refreshAll: true };
      console.info('load feeds again, options:', _.omit(retryOpts, 'originalFeeds'));
      feeds = await dataManager.feeds(feedCount, retryOpts);
      console.info('load feeds, count:', feeds.length, 'options:', _.omit(retryOpts, 'originalFeeds'));
      await this.recordLastUpdateTime();
    }

    await cacheDataStorage.setString(lastRefreshFeedTimeKey, String(Date.now()));

    runInAction(() => {
      this.feeds = feeds;
      this.feedsLoading = false;
    });
    return feeds.length;
  }

  updateFeeds(podcast: PodcastData) {
    // clear from feeds
    let feeds = this.feeds.filter((i) => i.podcast.id !== podcast.id);
    feeds = mergeTwo(feeds, podcast.episodes, (a, b) => a.pubTime > b.pubTime);
    this.feeds = feeds;
  }

  async refreshPodcast(rssUrl: string): Promise<PodcastData> {
    const podcast = await dataManager.fetchPodcastRSS(rssUrl, false, this.fetchRssTimeout);
    this.updateFeeds(podcast);
    return podcast;
  }

  async isSubscribed(podcastId: string): Promise<boolean> {
    if (!_.isEmpty(this.subscribedPodcasts)) {
      return !!this.subscribedPodcasts[podcastId];
    }
    return dataManager.isSubscribed(podcastId);
  }

  async subscribe(podcasts: PodcastData[], reloadFeeds: boolean = false) {
    await dataManager.subscribe(podcasts);
    if (reloadFeeds) {
      setTimeout(() => {
        this.loadFeeds({ cacheOnly: true });
      }, 500);
    }
    runInAction(() => {
      podcasts.forEach((podcast) => {
        this.subscribedPodcasts[podcast.id] = {
          url: podcast.url,
          image: podcast.image,
          subscribeTime: Math.floor(Date.now() / 1000),
        };
      });
    });
  }

  async unsubscribe(podcast: PodcastData) {
    await dataManager.toggleSubscribe(podcast);
    const episodeData: Record<string, boolean> = {};
    podcast.episodes.forEach((i: EpisodeData) => {
      episodeData[i.id] = true;
    });
    runInAction(() => {
      this.feeds = this.feeds.filter((i) => i.podcast.id !== podcast.id);
      this.subscribedPodcasts = _.omit(this.subscribedPodcasts, podcast.id);
    });
  }

  async isLiked(episodeId: string): Promise<boolean> {
    return dataManager.isFavorite(episodeId);
  }

  async toggleLike(episode: EpisodeData) {
    const isFavorite = await dataManager.toggleFavorite(episode);
    runInAction(() => {
      if (!isFavorite) {
        this.favoriteEpisodes = this.favoriteEpisodes.filter((i) => i.id !== episode.id);
      } else {
        this.favoriteEpisodes = [
          {
            ...episode,
            favoriteInfo: {
              favoriteTime: Date.now() / 1000,
            },
          },
          ...this.favoriteEpisodes,
        ];
      }
    });
    return isFavorite;
  }

  async loadPlaylist(): Promise<ListenedEpisodeItem[]> {
    return dataManager.getPlaylist();
  }

  async loadCurrentEpisodeId(): Promise<string | null> {
    return dataManager.getCurrentEpisodeId();
  }

  async setCurrentEpisodeId(episode: EpisodeData) {
    return dataManager.setCurrentEpisode(episode);
  }

  async updatePlaySetting(playSetting: IPersistedPlaySetting): Promise<void> {
    console.info(playSetting);
    // return userData.(playSetting);
  }

  async loadPlaySetting(): Promise<IPersistedPlaySetting> {
    return {
      playRate: 1,
    };
  }

  async loadSubscribedPodcast(disableLoading: boolean = false) {
    if (!disableLoading) {
      this.subscribedPodcastsLoading = true;
    }
    const subscribedPodcasts = await dataManager.getSubscribeData();
    runInAction(() => {
      this.subscribedPodcasts = subscribedPodcasts;
      this.subscribedPodcastsLoading = false;
    });
    return subscribedPodcasts;
  }

  async clearFromHistory(episode: EpisodeData) {
    await dataManager.removeListen(episode.id);
    runInAction(() => {
      this.history = this.history.filter((i) => i.id !== episode.id);
    });
  }

  async clearHistory() {
    await dataManager.clearUserDataByKey(v2.UserDataKeyEnum.Listen);
    runInAction(() => {
      this.history = [];
    });
  }

  async loadHistory(limit: number): Promise<boolean> {
    console.info('loading history', limit);
    this.historyEpisodesLoading = true;
    const history = await dataManager.loadHistory(0, limit);
    const noMore = history.length <= this.history.length;
    runInAction(() => {
      this.history = history;
      this.historyEpisodesLoading = false;
    });
    return noMore;
  }

  async clearFavorite() {
    await dataManager.clearUserDataByKey(v2.UserDataKeyEnum.Favorite);
    runInAction(() => {
      this.favoriteEpisodes = [];
    });
  }

  async loadFavorite(limit: number): Promise<boolean> {
    console.info('loading favorite', limit);
    this.favoriteEpisodesLoading = true;
    const favorite = await dataManager.favoriteEpisodes(0, limit);
    const noMore = favorite.length <= this.favoriteEpisodes.length;
    runInAction(() => {
      this.favoriteEpisodes = favorite;
      this.favoriteEpisodesLoading = false;
    });
    return noMore;
  }

  async clearListenInfo(episodeId: string) {
    await dataManager.removeListen(episodeId);
    runInAction(async () => {
      this.player.playlist.forEach((i) => {
        if (i.id === episodeId) {
          delete i.listenInfo;
        }
      });
    });
  }

  async reportListenInfo(episode: EpisodeData, position: number) {
    const listenInfo = await dataManager.listen(episode, position);
    runInAction(async () => {
      if (this.player.currentEpisode && this.player.currentEpisode.id === episode.id) {
        this.player.currentEpisode = {
          ...this.player.currentEpisode,
          listenInfo: listenInfo,
        };
      }
      this.player.playlist = this.player.playlist.map((i) => {
        if (i.id === episode.id) {
          return {
            ...i,
            listenInfo,
          };
        }
        return i;
      });
    });
  }
}

const rootState = new RootState();

const syncPlaylist = _.throttle((queue: EpisodeData[]) => {
  dataManager.setPlaylist(queue);
}, 5000);

reaction(
  () => rootState.player.playlist,
  async (queue: EpisodeData[]) => {
    syncPlaylist(queue);
  },
);

const syncFeeds = _.throttle((feeds: EpisodeData[]) => {
  cacheDataStorage.setObject<EpisodeData[]>(v2.cacheDataKey('feeds'), feeds);
}, 5000);

reaction(
  () => rootState.feeds,
  async (queue: EpisodeData[]) => {
    console.info('sync feeds cache');
    syncFeeds(queue);
  },
);

export default rootState;
