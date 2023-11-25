export interface AddDailyRecommendReq {
    comment?: string;
    date?: string;
    episodeId: string;
}
export interface AdminAuditPodcastReq {
    auditStatus: string;
}
export interface Category {
    id: string;
    name: string;
    podcastCount: number;
    podcasts: PodcastItem[];
}
export type EmptyRes = object;
export interface EpisodeDetail {
    description: string;
    duration: number;
    enclosureLength: number;
    enclosureType: string;
    enclosureURL: string;
    id: string;
    imageHref: string;
    podcast: PodcastItem;
    pubDateTimestamp: number;
    summary: string;
    title: string;
}
export interface EpisodeItem {
    duration: number;
    enclosureLength: number;
    enclosureType: string;
    enclosureURL: string;
    id: string;
    imageHref: string;
    podcast: PodcastItem;
    pubDateTimestamp: number;
    summary: string;
    title: string;
}
export interface FavoriteEpisodeItem {
    duration: number;
    enclosureLength: number;
    enclosureType: string;
    enclosureURL: string;
    favoriteTime: number;
    id: string;
    imageHref: string;
    podcast: PodcastItem;
    pubDateTimestamp: number;
    summary: string;
    title: string;
}
export interface IDOnlyRes {
    id: string;
}
export interface IsMyFavoriteRes {
    yes: boolean;
}
export interface ListRes {
    data: any;
    limit: number;
    offset: number;
    total: number;
}
export interface ListenHistoryItem {
    duration: number;
    enclosureLength: number;
    enclosureType: string;
    enclosureURL: string;
    id: string;
    imageHref: string;
    listenInfo: ListenInfo;
    podcast: PodcastItem;
    pubDateTimestamp: number;
    summary: string;
    title: string;
}
export interface ListenInfo {
    /** 收听时长，重复听会大于单集时长 */
    duration: number;
    episodeId: string;
    /** 最近收听时间 */
    lastTouchTime: number;
    /** 收听位置 */
    position: number;
}
export interface ListenInfoPatchReq {
    duration?: number;
    position?: number;
}
export interface LoginReq {
    phone: string;
    verifyCode: string;
}
export interface LoginRes {
    userId: number;
}
export interface Me {
    id: number;
    nickname: string;
    roles: string[];
}
export interface PlaylistItem {
    duration: number;
    enclosureLength: number;
    enclosureType: string;
    enclosureURL: string;
    id: string;
    imageHref: string;
    listenInfo?: ListenInfo;
    podcast: PodcastItem;
    pubDateTimestamp: number;
    summary: string;
    title: string;
}
export interface PodcastDetail {
    auditStatus: string;
    description: string;
    id: string;
    imageHref: string;
    owner: string;
    title: string;
}
export interface PodcastItem {
    auditStatus: string;
    id: string;
    imageHref: string;
    owner: string;
    summary?: string;
    title: string;
    url: string;
}
export interface SendVerifyCodeReq {
    phone: string;
}
export interface SubInfo {
    subscribeTime: number;
    subscribed: boolean;
}
export interface SyncPlaylistReq {
    playlist?: string[];
}
export interface ToggleFavoriteRes {
    toggle: boolean;
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title Podium API
 * @version 1.0
 * @baseUrl /api/v1
 * @contact
 *
 * All apis of Podium
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    admin: {
        /**
         * No description
         *
         * @tags Admin
         * @name ListEpisodes
         * @summary Get episodes
         * @request GET:/admin/episode
         */
        listEpisodes: (query?: {
            search?: string;
            limit?: number;
            offset?: number;
            ids?: string[];
            podcastIds?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListRes & {
            data?: EpisodeItem[] | undefined;
        }>>;
        /**
         * No description
         *
         * @tags Admin
         * @name ListPodcasts
         * @summary List All Podcasts
         * @request GET:/admin/podcast
         */
        listPodcasts: (query?: {
            auditStatus?: string;
            status?: string;
            search?: string;
            limit?: number;
            offset?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ListRes & {
            data?: PodcastItem[] | undefined;
        }>>;
        /**
         * No description
         *
         * @tags Admin
         * @name GetPodcastDetail
         * @summary Get podcast detail by podcastId
         * @request GET:/admin/podcast/{id}
         */
        getPodcastDetail: (id: string, params?: RequestParams) => Promise<AxiosResponse<PodcastDetail>>;
        /**
         * No description
         *
         * @tags Admin
         * @name AuditPodcast
         * @summary audit podcast
         * @request POST:/admin/podcast/{id}/audit
         */
        auditPodcast: (id: string, data: AdminAuditPodcastReq, params?: RequestParams) => Promise<AxiosResponse<IDOnlyRes>>;
    };
    category: {
        /**
         * No description
         *
         * @name GetCategories
         * @summary Get Categories
         * @request GET:/category
         */
        getCategories: (query?: {
            min?: number;
            search?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Category[]>>;
    };
    daily: {
        /**
         * No description
         *
         * @name AddDailyRecommend
         * @summary Add a recommend for some date
         * @request POST:/daily
         */
        addDailyRecommend: (data: AddDailyRecommendReq, params?: RequestParams) => Promise<AxiosResponse<EpisodeDetail>>;
        /**
         * No description
         *
         * @name GetDailyRecommend
         * @summary get recommend for some date
         * @request GET:/daily/{date}
         */
        getDailyRecommend: (date: string, params?: RequestParams) => Promise<AxiosResponse<EpisodeItem[]>>;
    };
    episode: {
        /**
         * No description
         *
         * @name ListEpisodes
         * @summary Get episodes
         * @request GET:/episode
         */
        listEpisodes: (query?: {
            search?: string;
            limit?: number;
            offset?: number;
            ids?: string[];
            podcastIds?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListRes & {
            data?: EpisodeItem[] | undefined;
        }>>;
        /**
         * No description
         *
         * @name GetRandomEpisodes
         * @summary Get n random episodes
         * @request GET:/episode/random/{count}
         */
        getRandomEpisodes: (count: number, query?: {
            region?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<EpisodeItem[]>>;
        /**
         * No description
         *
         * @name GetEpisodeDetail
         * @summary Get episode detail by id
         * @request GET:/episode/{id}
         */
        getEpisodeDetail: (id: string, params?: RequestParams) => Promise<AxiosResponse<EpisodeDetail>>;
        /**
         * No description
         *
         * @name IsMyFavorite
         * @summary check one episode is my favorite or not
         * @request GET:/episode/{id}/favorite
         */
        isMyFavorite: (id: string, params?: RequestParams) => Promise<AxiosResponse<IsMyFavoriteRes>>;
        /**
         * No description
         *
         * @name Listen
         * @summary submit listen info of episode
         * @request POST:/episode/{id}/listen
         */
        listen: (id: string, data: ListenInfoPatchReq, params?: RequestParams) => Promise<AxiosResponse<ListenInfo>>;
        /**
         * No description
         *
         * @name ToggleFavorite
         * @summary toggle favorite a episode
         * @request POST:/episode/{id}/toggle
         */
        toggleFavorite: (id: string, params?: RequestParams) => Promise<AxiosResponse<ToggleFavoriteRes>>;
    };
    favorite: {
        /**
         * No description
         *
         * @name GetFavorites
         * @summary favorite episodes
         * @request GET:/favorite
         */
        getFavorites: (query?: {
            limit?: number;
            offset?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ListRes & {
            data?: FavoriteEpisodeItem[] | undefined;
        }>>;
    };
    feeds: {
        /**
         * No description
         *
         * @name Feeds
         * @summary Get Feeds
         * @request GET:/feeds
         */
        feeds: (query?: {
            limit?: number;
            offset?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ListRes & {
            data?: EpisodeItem[] | undefined;
        }>>;
    };
    history: {
        /**
         * No description
         *
         * @name History
         * @summary listen history
         * @request GET:/history
         */
        history: (query?: {
            limit?: number;
            offset?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ListRes & {
            data?: ListenHistoryItem[] | undefined;
        }>>;
    };
    playlist: {
        /**
         * No description
         *
         * @name Playlist
         * @summary Get Playlist of current user
         * @request GET:/playlist
         */
        playlist: (params?: RequestParams) => Promise<AxiosResponse<ListRes & {
            data?: PlaylistItem[] | undefined;
        }>>;
        /**
         * No description
         *
         * @name SyncPlaylist
         * @summary Sync Playlist of current user
         * @request POST:/playlist
         */
        syncPlaylist: (data: SyncPlaylistReq, params?: RequestParams) => Promise<AxiosResponse<void>>;
    };
    podcast: {
        /**
         * No description
         *
         * @name ListPodcasts
         * @summary List Podcasts
         * @request GET:/podcast
         */
        listPodcasts: (query?: {
            search?: string;
            limit?: number;
            offset?: number;
            ids?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ListRes & {
            data?: PodcastItem[] | undefined;
        }>>;
        /**
         * No description
         *
         * @name GetHotPodcasts
         * @summary hot podcast
         * @request GET:/podcast/hot/{count}
         */
        getHotPodcasts: (count: number, query?: {
            region?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<PodcastItem[]>>;
        /**
         * No description
         *
         * @name SubscribedPodcasts
         * @summary subscribed podcast
         * @request GET:/podcast/subscribed
         */
        subscribedPodcasts: (params?: RequestParams) => Promise<AxiosResponse<PodcastItem[]>>;
        /**
         * No description
         *
         * @name GetPodcastDetail
         * @summary Get podcast detail by podcastId or podnewDetailUrl
         * @request GET:/podcast/{id}
         */
        getPodcastDetail: (id: string, params?: RequestParams) => Promise<AxiosResponse<PodcastDetail>>;
        /**
         * No description
         *
         * @name SubInfo
         * @summary Sub info of current user
         * @request GET:/podcast/{id}/sub-info
         */
        subInfo: (id: string, params?: RequestParams) => Promise<AxiosResponse<SubInfo>>;
        /**
         * No description
         *
         * @name Subscribe
         * @summary Subscribe a podcast
         * @request POST:/podcast/{id}/subscribe
         */
        subscribe: (id: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
        /**
         * No description
         *
         * @name Unsubscribe
         * @summary UnSubscribe a podcast
         * @request DELETE:/podcast/{id}/subscribe
         */
        unsubscribe: (id: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
        /**
         * No description
         *
         * @name Toggle
         * @summary Toggle subscribe a podcast
         * @request POST:/podcast/{id}/toggle
         */
        toggle: (id: string, params?: RequestParams) => Promise<AxiosResponse<SubInfo>>;
    };
    rec: {
        /**
         * No description
         *
         * @name GetNewUserRecommend
         * @summary get recommend for new user
         * @request GET:/rec/new-user-rec
         */
        getNewUserRecommend: (params?: RequestParams) => Promise<AxiosResponse<PodcastItem[]>>;
    };
    users: {
        /**
         * No description
         *
         * @name Login
         * @summary Login
         * @request POST:/users/login
         */
        login: (data: LoginReq, params?: RequestParams) => Promise<AxiosResponse<LoginRes>>;
        /**
         * No description
         *
         * @name Logout
         * @summary Logout current user
         * @request GET:/users/logout
         */
        logout: (params?: RequestParams) => Promise<AxiosResponse<object>>;
        /**
         * No description
         *
         * @name Me
         * @summary Current user
         * @request GET:/users/me
         */
        me: (params?: RequestParams) => Promise<AxiosResponse<Me>>;
        /**
         * No description
         *
         * @name SendVerifyCode
         * @summary Send Verify Code
         * @request POST:/users/verify-code
         */
        sendVerifyCode: (data: SendVerifyCodeReq, params?: RequestParams) => Promise<AxiosResponse<LoginRes>>;
    };
}
