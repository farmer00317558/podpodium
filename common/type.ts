import {
  ScreenEpisode,
  ScreenEpisodeNoteEditor,
  ScreenEpisodeNoteShareImage,
  ScreenEpisodeShareImage,
  ScreenPodcastDetail,
  ScreenShare,
  ScreenWeb,
} from './constant';

export enum ShareTargetEnum {
  Episode = 'episode',
  Podcast = 'podcast',
}

export interface ShareMessage {
  title: string;
  message: string;
  url: string;
}

export interface RouteParamsList {
  [ScreenShare]: {
    target: ShareTargetEnum;
    id: string;
    rssUrl: string;
    message: ShareMessage;
  };
  [ScreenEpisode]: {
    rssUrl: string;
    id: string;
  };
  [ScreenEpisodeNoteEditor]: {
    rssUrl: string;
    id: string;
  };
  [ScreenEpisodeNoteShareImage]: {
    rssUrl: string;
    id: string;
  };
  [ScreenPodcastDetail]: {
    url: string;
  };
  [ScreenEpisodeShareImage]: {
    rssUrl: string;
    id: string;
  };
  [ScreenWeb]: {
    uri: string;
  };
  [k: string]: any;
}

export type IPersistedPlaySetting = Pick<IPlaySetting, 'playRate'>;

export interface IPlaySetting {
  playRate: number;
  playCurrentOnly: boolean;
}

export interface ListResponse<T> {
  data: T[];
  limit: number;
  offset: number;
  total: number;
}

export interface IAuthInfo {
  userId: number;
  roles: string[];
}

export interface IUserDataListenInfo {
  position: number;
  episodeId: string;
  lastTouchTime: number;
}

export interface IUserData {
  userId: number;
  playlist: string[];
  listenInfo: Record<string, IUserDataListenInfo>;
  favorite: Record<
    string,
    {
      episodeId: string;
      favoriteTime: number;
    }
  >;
  subscribe: Record<
    string,
    {
      podcastId: string;
      subscribeTime: number;
    }
  >;
}

export enum PlaybackState {
  Connecting = 'connecting',
  Loading = 'loading',
  Buffering = 'buffering',
  Playing = 'playing',
  Ready = 'ready',
  Paused = 'paused',
  Idle = 'idle',
  Stopped = 'stopped',
}
