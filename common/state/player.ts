import { makeAutoObservable, runInAction } from 'mobx';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  State,
} from 'react-native-track-player';
import { IPlaySetting } from '../type';
import { EpisodeData, ListenedEpisodeItem } from '@podpodium/common/lib/user-data-manager/v2';
import { RootState } from '.';
import { LayoutAnimation } from 'react-native';
import { isNumber } from 'lodash';
import { IsAndroid } from '../constant';

export class PlayerState {
  root: RootState;
  playlist: ListenedEpisodeItem[] = [];
  isManualChanging: boolean = false;
  playSetting: IPlaySetting = { playRate: 1, playCurrentOnly: false };
  currentEpisode: ListenedEpisodeItem | null = null;

  /**
   * 是否处理 trackChanged 方法
   * trackChanged 方法仅用于自动切换时的处理，避免在用户手动切换或者删除前置 track 时的处罚
   */
  trackChangeFlag: boolean = true;

  constructor(root: RootState) {
    makeAutoObservable(this, {
      trackChangeFlag: false,
    });
    this.root = root;
  }

  async setupPlayer() {
    try {
      await TrackPlayer.getCurrentTrack();
    } catch {
      await TrackPlayer.setupPlayer({
        autoUpdateMetadata: true,
      });
      await TrackPlayer.updateOptions({
        alwaysPauseOnInterruption: false,
        stoppingAppPausesPlayback: true,
        progressUpdateEventInterval: 1,
        android: {
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SeekTo,
          Capability.JumpBackward,
          Capability.JumpForward,
          Capability.Stop,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
        compactCapabilities: [
          Capability.Play,
          // Capability.Pause,
          // Capability.JumpBackward,
          // Capability.JumpForward,
        ],
        // forwardJumpInterval: 30,
        // backwardJumpInterval: 15,
        // forwardIcon: require('../../assets/img/fast-forward.png'),
        // rewindIcon: require('../../assets/img/backward.png'),
      });
      await TrackPlayer.setRepeatMode(RepeatMode.Queue);
      console.info('player is setup');
    }
  }

  clearPlaylist() {
    TrackPlayer.reset();
    this.playlist = [];
  }

  updatePlaylist(playlist: ListenedEpisodeItem[]) {
    this.playlist = playlist;
  }

  async loadPlaylist() {
    const playlist = await this.root.loadPlaylist();
    const currentEpisodeId = await this.root.loadCurrentEpisodeId();

    let current: EpisodeData | undefined;
    let currentIndex = 0;
    if (currentEpisodeId) {
      currentIndex = playlist.findIndex((i) => i.id === currentEpisodeId);
      current = playlist[currentIndex];
    }
    if (!current) {
      current = playlist[0];
      currentIndex = 0;
    }

    console.info('playlist loaded, count:', playlist.length);
    await TrackPlayer.add(playlist.map((i) => this.episodeDataToTrackData(i, i.listenInfo?.position ?? 0)));

    if (currentIndex !== 0) {
      this.trackChangeFlag = false;
      console.info('restore current track, change trackChangeFlag to false');
      await TrackPlayer.skip(currentIndex);
    }
    runInAction(() => {
      this.playlist = playlist;
      this.currentEpisode = current ?? null;
    });
  }

  async loadPlaySetting() {
    const playSetting = await this.root.loadPlaySetting();
    console.info('play setting loaded:', playSetting);
    runInAction(() => {
      if (playSetting) {
        this.playSetting = {
          ...this.playSetting,
          ...playSetting,
        };
      }
      this.setRate(this.playSetting.playRate);
    });
  }

  async setRate(rate: number) {
    try {
      await TrackPlayer.setRate(rate);
    } catch (e) {
      console.error(e);
    }
  }

  async removeFromPlaylist(id: string) {
    const index = this.playlist.findIndex((i) => i.id === id);
    if (index === -1) {
      console.info('not found in playlist');
      return;
    }
    await this.removeTrackFromQueue(index);
    await this.root.clearListenInfo(id);
    runInAction(() => {
      this.playlist = [...this.playlist];
    });
  }

  async addNextToPlayById(episodeId: string) {
    const episode = this.playlist.find((i) => i.id === episodeId);
    if (!episode) {
      return;
    }
    await this.addNextToPlay(episode, episode.listenInfo?.position ?? 0);
  }

  async addNextToPlay(episode: EpisodeData, position: number = 0): Promise<number> {
    const index = this.playlist.findIndex((i) => i.id === episode.id);
    let currentTrackIndex = await TrackPlayer.getCurrentTrack();
    if (index === currentTrackIndex) {
      console.info('target episode is current episode, index:', index);
      return index;
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (index >= 0) {
      this.playlist.splice(index, 1);
      await this.removeTrackFromQueue(index);
    }

    currentTrackIndex = this.playlist.findIndex((i) => i.id === this.currentEpisode?.id);
    const targetIndex = this.playlist.length - 1 > currentTrackIndex ? currentTrackIndex + 1 : undefined;
    if (targetIndex === undefined) {
      this.playlist.push(episode);
    } else {
      this.playlist.splice(targetIndex, 0, episode);
    }

    await TrackPlayer.add(this.episodeDataToTrackData(episode, position), targetIndex);

    runInAction(() => {
      this.playlist = [...this.playlist];
    });

    if (targetIndex === undefined) {
      return this.playlist.length - 1;
    }
    return targetIndex;
  }

  async playById(episodeId: string) {
    const index = this.playlist.findIndex((i) => i.id === episodeId);
    if (index === -1) {
      console.info('no track to play');
      return;
    }
    return this.playByIndex(index);
  }

  episodeDataToTrackData(episode: EpisodeData, position: number) {
    return {
      id: episode.id,
      rssUrl: episode.podcast.url,
      album: episode.podcast.title,
      artist: episode.podcast.author,
      artwork: episode.artwork,
      contentType: episode.type,
      duration: episode.duration,
      contentLength: episode.length,
      position: position,
      title: episode.title,
      url: episode.url,
    };
  }

  async playByIndex(index: number) {
    const episode = this.playlist[index];
    const position = episode.listenInfo?.position || 0;
    const currentIndex = await TrackPlayer.getCurrentTrack();
    console.info('play track at:', index, 'position:', position, 'currentIndex:', currentIndex);
    if (isNumber(currentIndex) && currentIndex !== index) {
      this.trackChangeFlag = false;
      console.info('manually play new episode, change trackChangeFlag to false');
    }
    runInAction(() => {
      this.currentEpisode = this.playlist[index];
    });
    const state = await TrackPlayer.getState();
    if (state !== State.Playing && index !== currentIndex) {
      await TrackPlayer.play();
    }
    if (index === currentIndex) {
      await TrackPlayer.play();
    } else if (index === (currentIndex && currentIndex + 1)) {
      console.info('skip to next');
      await TrackPlayer.skipToNext(position);
    } else {
      console.info('skip to', index);
      await TrackPlayer.skip(index, position);
    }
    await TrackPlayer.seekTo(position);
    await this.root.setCurrentEpisodeId(episode);
  }

  async removeTrackFromQueue(index: number) {
    const currentIndex = await TrackPlayer.getCurrentTrack();
    // 删除 track 时，Android 平台不会触发 track change event
    if (currentIndex !== null && index <= currentIndex && !IsAndroid) {
      this.trackChangeFlag = false;
      console.info('[IOS only] remove track from queue, change trackChangeFlag to false');
    }
    return TrackPlayer.remove(index);
  }

  async trackChanged(prevId: string, nextId: string) {
    if (!this.trackChangeFlag) {
      this.trackChangeFlag = true;
      console.info('skip track changed, reset trackChangeFlag to true');
      return;
    }
    const episode = this.playlist.find((i) => i.id === nextId);
    const prevIndex = this.playlist.findIndex((i) => i.id === prevId);
    if (prevIndex >= 0) {
      await this.removeTrackFromQueue(prevIndex);
      runInAction(() => {
        this.playlist = this.playlist.filter((i) => i.id !== prevId);
      });
    }
    if (episode) {
      console.info('track changed to:', episode.title);
      runInAction(() => {
        this.currentEpisode = episode;
      });
      await this.root.setCurrentEpisodeId(episode);
    } else {
      console.warn('trackChanged, but episode not found in playlist');
    }
  }

  async play(episode: ListenedEpisodeItem) {
    let index = this.playlist.findIndex((i) => i.id === episode.id);
    if (index === -1) {
      console.info('episode', episode.id, 'not exist in queue, try to add and play');
      const position = episode.listenInfo?.position || 0;
      index = await this.addNextToPlay(episode, position);
    }
    await this.playByIndex(index);
  }

  async updatePlaySetting(setting: Partial<IPlaySetting>) {
    this.playSetting = {
      ...this.playSetting,
      ...setting,
    };
    console.info('update play setting:', this.playSetting);
    await this.root.updatePlaySetting(this.playSetting);
    await this.setRate(this.playSetting.playRate);
  }

  // 上报播放中的单集的进度
  async reportCurrentTrackListenInfo(position?: number) {
    let episode = this.currentEpisode;
    if (!episode) {
      console.info('no track to report');
      return;
    }
    if (position === undefined) {
      try {
        position = await TrackPlayer.getPosition();
      } catch (e) {
        console.info('current player is not setup, skip report position, err:', (e as Error).message);
        return;
      }
    }

    await this.root.reportListenInfo(episode, position);
  }
}

export default PlayerState;
