import { IStorage } from '../types';
import { readRssURL } from './feed';
import md5 from 'md5';
import { mergeTwo } from '../../utils/list';
import { runTaskInPool } from '../../utils/task';

export interface FeedOptions {
  fetchRssTimeout?: number;
  refreshAll?: boolean;
  cacheOnly?: boolean;
  waitSaveCache?: boolean;
  originalFeeds?: EpisodeData[];
  batchSize?: number;
  onBatchCompleted?: (currentFeeds: EpisodeData[]) => void;
}

export interface FeedProgressData {
  episodes: EpisodeData[];
  total: number;
  done: number;
  fail: number;
}

export enum UserDataKeyEnum {
  Listen = 'listen',
  Playlist = 'playlist',
  Favorite = 'favorite',
  Subscribe = 'subscribe',
  CurrentEpisodeId = 'currentEpisodeId',
}

// 用户数据中不会保存节目数据
export type UserDataKey = UserDataKeyEnum | `episode/${string}` | `podcast/${string}`;

export type EpisodeURL = string;
export type PodcastURL = string;

export interface EpisodeData {
  id: string;
  url: string;
  type: string;
  length: number;
  duration: number;
  title: string;
  artwork: string;
  description: string;
  pubTime: number;
  podcast: {
    id: string;
    url: string;
    title: string;
    image: string;
    author: string;
  };
}

export interface ListenedEpisodeItem extends EpisodeData {
  listenInfo?: ListenInfo;
}

export interface FavoriteEpisodeItem extends EpisodeData {
  favoriteInfo: FavoriteInfo;
}

export interface PodcastData {
  id: string;
  url: string;
  image: string;
  title: string;
  author: string;
  description: string;
  summary: string;
  lastSyncTime: number;
  episodes: EpisodeData[];
}

export interface ListenInfo {
  duration: number;
  position: number;
  lastTouchTime: number;
}

export interface FavoriteInfo {
  favoriteTime: number;
}

export interface SubscribeInfo {
  url: string;
  image: string;
  subscribeTime: number;
}

export type PlayListData = EpisodeURL[];
export type ListenData = Record<EpisodeURL, ListenInfo>;
export type FavoriteData = Record<string, FavoriteInfo>;
export type SubscribeData = Record<string, SubscribeInfo>;

// key schema: @lingjiangtai/{user-data | cache-data}/{type}/{key}
const UserDataKeyPrefix = '@lingjiangtai/user-data/';
const CacheDataKeyPrefix = '@lingjiangtai/cache-data/';

export function userDataKey(key: UserDataKey): string {
  return `${UserDataKeyPrefix}${key}`;
}

export function cacheDataKey(key: string): string {
  return `${CacheDataKeyPrefix}${key}`;
}

export function episodeDataKey(id: string) {
  return `episode/${id}` as const;
}

export function podcastDataKey(id: string) {
  return `podcast/${id}` as const;
}

export function podcastId(podcast: Pick<PodcastData, 'url'>) {
  // return base64.encode(utf8.encode(podcast.url));
  return md5(podcast.url);
}

export function episodeIdFromPodcastId(title: string, pid: string) {
  let raw = `${pid}#${title}`;
  try {
    // return base64.encode(utf8.encode(raw));
    return md5(raw);
  } catch (e) {
    console.error('get episode id err, raw:', raw);
    throw e;
  }
}

export function episodeId(episode: EpisodeData) {
  const pid = podcastId({
    url: episode.podcast.url,
  });
  return episodeIdFromPodcastId(episode.title, pid);
}

function isUserDataKey(key: string): key is UserDataKey {
  return key.startsWith(UserDataKeyPrefix);
}

// function isCacheDataKey(key: string): boolean {
//   return key.startsWith(CacheDataKeyPrefix);
// }

function migrate(userData: any) {
  //TODO: migrate old to v2
  return userData;
}

export class UserDataManager {
  private debug = false;
  private userStorage: IStorage;
  private cacheStorage: IStorage;

  constructor(storage: IStorage, cacheStorage: IStorage, debug = false) {
    this.debug = debug;
    this.userStorage = storage;
    this.cacheStorage = cacheStorage;
  }

  private async getData<T>(key: string, storage: IStorage): Promise<T | null> {
    return storage.getObject<T>(key);
  }

  private async getMultiData<T>(keys: string[], storage: IStorage): Promise<Record<string, T>> {
    const data = await storage.multiGet<T>(keys);
    const ret: Record<string, T> = {};
    data.forEach(([key, value]) => {
      const url = key.split('/').slice(3).join('/');
      if (!url) {
        return;
      }
      ret[url] = value;
    });
    return ret;
  }

  private async getUserData<T>(key: UserDataKey) {
    return this.getData<T>(userDataKey(key), this.userStorage);
  }

  private async getMultiUserData<T>(keys: UserDataKey[]) {
    return this.getMultiData<T>(
      keys.map((i) => userDataKey(i)),
      this.userStorage,
    );
  }

  private async setUserData<T>(key: UserDataKey, data: T): Promise<boolean> {
    return this.userStorage.setObject<T>(userDataKey(key), data);
  }

  private async getCacheData<T>(key: string | string[]): Promise<Record<string, T>> {
    const keys = Array.isArray(key) ? key.map((i) => cacheDataKey(i)) : [cacheDataKey(key)];
    return this.getMultiData(keys, this.cacheStorage);
  }

  private async setCacheData<T>(key: string, data: T): Promise<boolean> {
    return this.cacheStorage.setObject<T>(cacheDataKey(key), data);
  }

  async setPodcastCacheData(podcast: PodcastData): Promise<boolean> {
    const key = podcastDataKey(podcast.id);
    return this.setCacheData<PodcastData>(key, podcast);
  }

  private async getPodcastCacheData(ids: string[]): Promise<Record<string, PodcastData>> {
    const keys = ids.map((i) => podcastDataKey(i));
    return await this.getCacheData<PodcastData>(keys);
  }

  private async getEpisodeUserData(ids: string[]): Promise<Record<string, EpisodeData>> {
    const keys = ids.map((i) => episodeDataKey(i));
    return await this.getMultiUserData<EpisodeData>(keys);
  }

  private async setEpisodeUserData(episode: EpisodeData): Promise<boolean> {
    const key = episodeDataKey(episode.id);
    if (await this.getUserData(key)) {
      return true;
    }
    return await this.setUserData<EpisodeData>(key, episode);
  }

  async loadUserData(content: string) {
    let data = {};
    try {
      data = migrate(JSON.parse(content));
    } catch (e) {
      throw 'invalid content';
    }
    const tasks: Promise<boolean>[] = [];
    Object.entries(data).forEach(([key, value]) => {
      tasks.push(this.userStorage.setObject(key, value));
    });
    await Promise.all(tasks);
  }

  async dumpUserData(): Promise<any> {
    const uData: any = {};
    const allKeys = await this.userStorage.getAllKeys();
    const allUserDataKeys = allKeys.filter((i) => isUserDataKey(i)) as UserDataKey[];
    if (allUserDataKeys.length === 0) {
      return {};
    }
    const tasks = allUserDataKeys.map(async (key) => {
      const data = await this.userStorage.getObject(key);
      uData[key] = data;
    });
    await Promise.all(tasks);
    return uData;
  }

  async setPlaylist(playlist: EpisodeData[]) {
    const urls: string[] = [];
    await Promise.all(
      playlist.map((i) => {
        urls.push(i.id);
        return this.setEpisodeUserData(i);
      }),
    );
    await this.setUserData(UserDataKeyEnum.Playlist, urls);
  }

  async getPlaylist(): Promise<ListenedEpisodeItem[]> {
    const ids = await this.getUserData<string[]>(UserDataKeyEnum.Playlist);
    if (!Array.isArray(ids)) {
      return [];
    }
    const listenData = await this.getUserData<ListenData>(UserDataKeyEnum.Listen);
    const ret: ListenedEpisodeItem[] = [];
    const tasks = ids.map(async (i: EpisodeURL) => {
      const episodeKey = episodeDataKey(i);
      const episode = await this.getUserData<EpisodeData>(episodeKey);
      if (!episode) {
        return;
      }
      const item: ListenedEpisodeItem = { ...episode, listenInfo: listenData?.[i] };
      ret.push(item);
    });
    await Promise.all(tasks);
    return ret;
  }

  async getSubscribeData() {
    const subscribe = (await this.getUserData<SubscribeData>(UserDataKeyEnum.Subscribe)) || {};
    return subscribe;
  }

  async getFavoriteData() {
    const fav = (await this.getUserData<FavoriteData>(UserDataKeyEnum.Favorite)) || {};
    return fav;
  }

  async getListenData() {
    return (await this.getUserData<ListenData>(UserDataKeyEnum.Listen)) || {};
  }

  async feeds(count: number, options?: FeedOptions): Promise<EpisodeData[]> {
    const {
      cacheOnly = false,
      fetchRssTimeout = 3000,
      refreshAll = false,
      waitSaveCache = true,
      batchSize = 6,
      originalFeeds = [],
      onBatchCompleted,
    } = options || {};
    const subscribe = await this.getSubscribeData();
    const podcastIds = Object.keys(subscribe);
    let podcastData: Record<string, PodcastData> = {};
    let podcastIdsToFetch: string[] = podcastIds;

    if (!refreshAll) {
      podcastData = await this.getPodcastCacheData(podcastIds);
      if (cacheOnly) {
        podcastIdsToFetch = [];
      } else {
        podcastIdsToFetch = podcastIds.filter((i) => !podcastData[i]);
      }
    }

    let episodes: EpisodeData[] = originalFeeds;

    const handleBatchCompleted = () => {
      onBatchCompleted?.(episodes);
    };

    const append = (podcast: PodcastData | undefined) => {
      if (!podcast) {
        return;
      }
      const newEpisodes = podcast.episodes || [];
      episodes = mergeTwo(
        episodes.filter((i) => i.podcast.id !== podcast.id),
        newEpisodes,
        (a, b) => a.pubTime > b.pubTime,
      );
    };

    Object.values(podcastData).forEach(append);

    console.info('load feeds in task pool, task count:', podcastIdsToFetch.length);
    await runTaskInPool(
      podcastIdsToFetch,
      (id: string) => {
        return new Promise((resolve) => {
          const { url } = subscribe[id];
          console.info('subscribe podcast not found in cache:', url);

          this.fetchPodcastRSS(url, waitSaveCache, fetchRssTimeout)
            .then((data) => {
              append(data);
              resolve(data);
            })
            .catch((e) => {
              console.info(`[ERROR] fetch subscribe podcast: ${url}, err:`, e);
              resolve(null);
            });
        });
      },
      batchSize,
      handleBatchCompleted,
    );

    return episodes.slice(0, count);
  }

  async isSubscribed(id: string): Promise<boolean> {
    const data = await this.getUserData<SubscribeData>(UserDataKeyEnum.Subscribe);
    return !!data?.[id];
  }

  async subscribedPodcasts(): Promise<PodcastData[]> {
    const subscribe = await this.getSubscribeData();
    const ids = Object.keys(subscribe);
    const podcasts = await this.getPodcastCacheData(ids);
    ids.sort((a, b) => subscribe[a].subscribeTime - subscribe[b].subscribeTime);
    return ids.map((i) => podcasts[i]);
  }

  async subscribe(podcasts: PodcastData[]): Promise<void> {
    const subscribe = await this.getSubscribeData();
    podcasts.forEach((i) => {
      const id = i.id;
      const before = !!subscribe[id];
      if (before) {
        return;
      }
      subscribe[id] = {
        url: i.url,
        image: i.image,
        subscribeTime: Math.floor(Date.now() / 1000),
      };
    });
    await this.setUserData(UserDataKeyEnum.Subscribe, subscribe);
  }

  async toggleSubscribe(podcast: PodcastData): Promise<[boolean, string]> {
    const id = podcast.id;
    const subscribe = await this.getSubscribeData();
    const before = !!subscribe[id];
    if (before) {
      delete subscribe[id];
    } else {
      subscribe[id] = {
        url: podcast.url,
        image: podcast.image,
        subscribeTime: Math.floor(Date.now() / 1000),
      };
    }
    await this.setUserData(UserDataKeyEnum.Subscribe, subscribe);
    return [!before, id];
  }

  async isFavorite(id: string): Promise<boolean> {
    const data = await this.getFavoriteData();
    return !!data?.[id];
  }

  async favoriteEpisodes(offset: number = 0, limit: number = 20): Promise<FavoriteEpisodeItem[]> {
    const favorites = await this.getFavoriteData();
    const allIds = Object.keys(favorites).sort(
      (a, b) => favorites[a].favoriteTime - favorites[b].favoriteTime,
    );
    if (allIds.length === 0) {
      return [];
    }
    const ids = allIds.slice(offset, offset + limit);
    const episodes = await this.getEpisodeUserData(ids);
    const ret: FavoriteEpisodeItem[] = [];
    ids.forEach((i) => {
      const episode = episodes[i];
      const fav = favorites[i];
      if (!episode || !fav) {
        return;
      }
      ret.push({
        ...episode,
        favoriteInfo: fav,
      });
    });
    return ret.sort((a, b) => b.favoriteInfo.favoriteTime - a.favoriteInfo.favoriteTime);
  }

  async toggleFavorite(episode: EpisodeData): Promise<boolean> {
    const id = episode.id;
    const fav = await this.getFavoriteData();
    const before = !!fav?.[id];
    if (before) {
      delete fav[id];
    } else {
      fav[id] = { favoriteTime: Math.floor(Date.now() / 1000) };
      await this.setEpisodeUserData(episode);
    }
    await this.setUserData(UserDataKeyEnum.Favorite, fav);
    return !before;
  }

  async listen(episode: EpisodeData, position: number): Promise<ListenInfo> {
    const id = episode.id;
    const listenData = await this.getListenData();
    listenData[id] = {
      position,
      duration: 0,
      lastTouchTime: Math.floor(Date.now() / 1000),
    };
    await this.setUserData(UserDataKeyEnum.Listen, listenData);
    await this.setEpisodeUserData(episode);
    return listenData[id];
  }

  async removeListen(id: string) {
    const listenData = await this.getListenData();
    delete listenData[id];
    await this.setUserData(UserDataKeyEnum.Listen, listenData);
  }

  async loadHistory(offset: number = 0, limit: number = 20): Promise<ListenedEpisodeItem[]> {
    const listenData = await this.getListenData();
    const episodeIds = Object.keys(listenData)
      .sort((a, b) => {
        const liA = listenData[a];
        const liB = listenData[b];
        return (liB?.lastTouchTime || 0) - (liA?.lastTouchTime || 0);
      })
      .slice(offset, offset + limit);
    const ret: ListenedEpisodeItem[] = [];
    const episodes = await this.getEpisodeUserData(episodeIds);
    episodeIds.forEach((i) => {
      const episode = episodes[i];
      if (!episode || !listenData[i]) {
        return;
      }
      ret.push({
        ...episode,
        listenInfo: listenData[i],
      });
    });
    return ret;
  }

  async clearCacheData() {
    return this.cacheStorage.clear();
  }

  async clearUserData() {
    return this.userStorage.clear();
  }

  async clearUserDataByKey(key: UserDataKeyEnum) {
    return this.userStorage.removeObject(userDataKey(key));
  }

  async autoClearUserData() {
    const keys = await this.userStorage.getAllKeys();
    const keysToRemove: string[] = [];
    const ePrefix = `${UserDataKeyPrefix}episode/`;
    const playlist = await this.getUserData<string[]>(UserDataKeyEnum.Playlist);
    const tasks = keys.map(async (k) => {
      // episode
      if (k.startsWith(ePrefix)) {
        const url = k.slice(ePrefix.length);
        // check history
        const listenData = await this.getListenData();
        if (listenData[url]) {
          return;
        }
        // check favorite
        const isFav = await this.isFavorite(url);
        if (isFav) {
          return;
        }
        // check playlist
        if (playlist?.includes(url)) {
          return;
        }
        keysToRemove.push(k);
      }
    });
    await Promise.all(tasks);
    return this.userStorage.multiRemove(keysToRemove);
  }

  async fetchPodcastRSS(rssURL: string, waitCacheSave = false, timeout = 30000): Promise<PodcastData> {
    console.info('start fetch rss:', rssURL);
    const start = Date.now();
    const data = await Promise.race<ReturnType<typeof readRssURL>>([
      new Promise<any>((_resolve, reject) => setTimeout(() => reject(new Error('Timeout')), timeout)),
      readRssURL(rssURL),
    ]);
    console.info('success fetch rss:', rssURL, 'title:', data.title, 'time:', Date.now() - start);
    const id = podcastId({ url: rssURL });
    const podcast: PodcastData = {
      id,
      url: rssURL,
      image: data.image || '',
      title: data.title || '<UNKNOWN>',
      author: data.author || '',
      description: data.description || '',
      summary: '',
      lastSyncTime: Date.now(),
      episodes: [],
    };
    (data.entries || []).forEach((i) => {
      const description = i.encoded || i.description || i.summary || '';
      const title = i.title;
      if (!title) {
        return;
      }
      podcast.episodes.push({
        id: episodeIdFromPodcastId(title, id),
        title: title,
        artwork: i.image || '',
        description,
        pubTime: i.published ? new Date(i.published).getTime() : 0,
        url: i.enclosure?.url || '',
        type: i.enclosure?.type || '',
        length: i.enclosure?.length || 0,
        duration: i.duration || 0,
        podcast: {
          id,
          url: rssURL,
          image: podcast.image,
          title: podcast.title,
          author: podcast.author,
        },
      });
    });
    podcast.episodes.sort((a, b) => b.pubTime - a.pubTime);
    if (waitCacheSave) {
      await this.setPodcastCacheData(podcast);
    } else {
      this.setPodcastCacheData(podcast);
    }
    return podcast;
  }

  async getPodcastData(
    rssUrl: string,
    waitSaveCache = false,
    timeout = 30000,
  ): Promise<PodcastData | undefined> {
    const id = podcastId({ url: rssUrl });
    const podcasts = await this.getPodcastCacheData([id]);
    if (podcasts[id]) {
      return podcasts[id];
    }
    const data = await this.fetchPodcastRSS(rssUrl, waitSaveCache, timeout);
    return data;
  }

  async getEpisodeData(rssUrl: string, id: string): Promise<EpisodeData | undefined> {
    // user data
    const episodes = await this.getEpisodeUserData([id]);
    if (episodes[id]) {
      return episodes[id];
    }

    // cache
    const podcast = await this.getPodcastData(rssUrl);
    if (podcast) {
      return podcast.episodes.find((i) => i.id === id);
    }
  }

  async getRandomEpisodes(limit: number): Promise<EpisodeData[]> {
    const randomPodcastKeys = await this.cacheStorage.getAllKeys(limit);
    const podcasts = await this.getMultiData<PodcastData>(randomPodcastKeys, this.cacheStorage);
    const ret: EpisodeData[] = [];

    let tryTimes = 0;
    while (ret.length < limit) {
      for (let podcast of Object.values(podcasts)) {
        const idx = Math.floor(Math.random() * podcast.episodes.length);
        const ep = podcast.episodes[idx];
        if (!ret.find((i) => i.id === ep.id)) {
          ret.push(ep);
        }
        if (ret.length === limit) {
          break;
        }
      }
      tryTimes += 1;
      if (tryTimes >= 2 * limit) {
        break;
      }
    }

    return ret;
  }

  async setCurrentEpisode(episode: EpisodeData) {
    return this.userStorage.setObject(userDataKey(UserDataKeyEnum.CurrentEpisodeId), episode.id);
  }

  async getCurrentEpisodeId() {
    const id = await this.userStorage.getObject<string>(userDataKey(UserDataKeyEnum.CurrentEpisodeId));
    return id;
  }
}
