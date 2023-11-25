import { IStorage } from '../types';
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
export declare enum UserDataKeyEnum {
    Listen = "listen",
    Playlist = "playlist",
    Favorite = "favorite",
    Subscribe = "subscribe",
    CurrentEpisodeId = "currentEpisodeId"
}
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
export declare function userDataKey(key: UserDataKey): string;
export declare function cacheDataKey(key: string): string;
export declare function episodeDataKey(id: string): `episode/${string}`;
export declare function podcastDataKey(id: string): `podcast/${string}`;
export declare function podcastId(podcast: Pick<PodcastData, 'url'>): string;
export declare function episodeIdFromPodcastId(title: string, pid: string): string;
export declare function episodeId(episode: EpisodeData): string;
export declare class UserDataManager {
    private debug;
    private userStorage;
    private cacheStorage;
    constructor(storage: IStorage, cacheStorage: IStorage, debug?: boolean);
    private getData;
    private getMultiData;
    private getUserData;
    private getMultiUserData;
    private setUserData;
    private getCacheData;
    private setCacheData;
    setPodcastCacheData(podcast: PodcastData): Promise<boolean>;
    private getPodcastCacheData;
    private getEpisodeUserData;
    private setEpisodeUserData;
    loadUserData(content: string): Promise<void>;
    dumpUserData(): Promise<any>;
    setPlaylist(playlist: EpisodeData[]): Promise<void>;
    getPlaylist(): Promise<ListenedEpisodeItem[]>;
    getSubscribeData(): Promise<SubscribeData>;
    getFavoriteData(): Promise<FavoriteData>;
    getListenData(): Promise<ListenData>;
    feeds(count: number, options?: FeedOptions): Promise<EpisodeData[]>;
    isSubscribed(id: string): Promise<boolean>;
    subscribedPodcasts(): Promise<PodcastData[]>;
    subscribe(podcasts: PodcastData[]): Promise<void>;
    toggleSubscribe(podcast: PodcastData): Promise<[boolean, string]>;
    isFavorite(id: string): Promise<boolean>;
    favoriteEpisodes(offset?: number, limit?: number): Promise<FavoriteEpisodeItem[]>;
    toggleFavorite(episode: EpisodeData): Promise<boolean>;
    listen(episode: EpisodeData, position: number): Promise<ListenInfo>;
    removeListen(id: string): Promise<void>;
    loadHistory(offset?: number, limit?: number): Promise<ListenedEpisodeItem[]>;
    clearCacheData(): Promise<boolean>;
    clearUserData(): Promise<boolean>;
    clearUserDataByKey(key: UserDataKeyEnum): Promise<boolean>;
    autoClearUserData(): Promise<boolean>;
    fetchPodcastRSS(rssURL: string, waitCacheSave?: boolean, timeout?: number): Promise<PodcastData>;
    getPodcastData(rssUrl: string, waitSaveCache?: boolean, timeout?: number): Promise<PodcastData | undefined>;
    getEpisodeData(rssUrl: string, id: string): Promise<EpisodeData | undefined>;
    getRandomEpisodes(limit: number): Promise<EpisodeData[]>;
    setCurrentEpisode(episode: EpisodeData): Promise<boolean>;
    getCurrentEpisodeId(): Promise<string | null>;
}
