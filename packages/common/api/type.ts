/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
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

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '/api/v1' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      requestParams.headers.common = { Accept: '*/*' };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Podium API
 * @version 1.0
 * @baseUrl /api/v1
 * @contact
 *
 * All apis of Podium
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * No description
     *
     * @tags Admin
     * @name ListEpisodes
     * @summary Get episodes
     * @request GET:/admin/episode
     */
    listEpisodes: (
      query?: { search?: string; limit?: number; offset?: number; ids?: string[]; podcastIds?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<ListRes & { data?: EpisodeItem[] }, any>({
        path: `/admin/episode`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name ListPodcasts
     * @summary List All Podcasts
     * @request GET:/admin/podcast
     */
    listPodcasts: (
      query?: { auditStatus?: string; status?: string; search?: string; limit?: number; offset?: number },
      params: RequestParams = {},
    ) =>
      this.request<ListRes & { data?: PodcastItem[] }, any>({
        path: `/admin/podcast`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name GetPodcastDetail
     * @summary Get podcast detail by podcastId
     * @request GET:/admin/podcast/{id}
     */
    getPodcastDetail: (id: string, params: RequestParams = {}) =>
      this.request<PodcastDetail, any>({
        path: `/admin/podcast/${id}`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AuditPodcast
     * @summary audit podcast
     * @request POST:/admin/podcast/{id}/audit
     */
    auditPodcast: (id: string, data: AdminAuditPodcastReq, params: RequestParams = {}) =>
      this.request<IDOnlyRes, any>({
        path: `/admin/podcast/${id}/audit`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  category = {
    /**
     * No description
     *
     * @name GetCategories
     * @summary Get Categories
     * @request GET:/category
     */
    getCategories: (query?: { min?: number; search?: string }, params: RequestParams = {}) =>
      this.request<Category[], any>({
        path: `/category`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  daily = {
    /**
     * No description
     *
     * @name AddDailyRecommend
     * @summary Add a recommend for some date
     * @request POST:/daily
     */
    addDailyRecommend: (data: AddDailyRecommendReq, params: RequestParams = {}) =>
      this.request<EpisodeDetail, any>({
        path: `/daily`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetDailyRecommend
     * @summary get recommend for some date
     * @request GET:/daily/{date}
     */
    getDailyRecommend: (date: string, params: RequestParams = {}) =>
      this.request<EpisodeItem[], any>({
        path: `/daily/${date}`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  episode = {
    /**
     * No description
     *
     * @name ListEpisodes
     * @summary Get episodes
     * @request GET:/episode
     */
    listEpisodes: (
      query?: { search?: string; limit?: number; offset?: number; ids?: string[]; podcastIds?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<ListRes & { data?: EpisodeItem[] }, any>({
        path: `/episode`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetRandomEpisodes
     * @summary Get n random episodes
     * @request GET:/episode/random/{count}
     */
    getRandomEpisodes: (count: number, query?: { region?: string }, params: RequestParams = {}) =>
      this.request<EpisodeItem[], any>({
        path: `/episode/random/${count}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetEpisodeDetail
     * @summary Get episode detail by id
     * @request GET:/episode/{id}
     */
    getEpisodeDetail: (id: string, params: RequestParams = {}) =>
      this.request<EpisodeDetail, any>({
        path: `/episode/${id}`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name IsMyFavorite
     * @summary check one episode is my favorite or not
     * @request GET:/episode/{id}/favorite
     */
    isMyFavorite: (id: string, params: RequestParams = {}) =>
      this.request<IsMyFavoriteRes, any>({
        path: `/episode/${id}/favorite`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name Listen
     * @summary submit listen info of episode
     * @request POST:/episode/{id}/listen
     */
    listen: (id: string, data: ListenInfoPatchReq, params: RequestParams = {}) =>
      this.request<ListenInfo, any>({
        path: `/episode/${id}/listen`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name ToggleFavorite
     * @summary toggle favorite a episode
     * @request POST:/episode/{id}/toggle
     */
    toggleFavorite: (id: string, params: RequestParams = {}) =>
      this.request<ToggleFavoriteRes, any>({
        path: `/episode/${id}/toggle`,
        method: 'POST',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  favorite = {
    /**
     * No description
     *
     * @name GetFavorites
     * @summary favorite episodes
     * @request GET:/favorite
     */
    getFavorites: (query?: { limit?: number; offset?: number }, params: RequestParams = {}) =>
      this.request<ListRes & { data?: FavoriteEpisodeItem[] }, any>({
        path: `/favorite`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  feeds = {
    /**
     * No description
     *
     * @name Feeds
     * @summary Get Feeds
     * @request GET:/feeds
     */
    feeds: (query?: { limit?: number; offset?: number }, params: RequestParams = {}) =>
      this.request<ListRes & { data?: EpisodeItem[] }, any>({
        path: `/feeds`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  history = {
    /**
     * No description
     *
     * @name History
     * @summary listen history
     * @request GET:/history
     */
    history: (query?: { limit?: number; offset?: number }, params: RequestParams = {}) =>
      this.request<ListRes & { data?: ListenHistoryItem[] }, any>({
        path: `/history`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  playlist = {
    /**
     * No description
     *
     * @name Playlist
     * @summary Get Playlist of current user
     * @request GET:/playlist
     */
    playlist: (params: RequestParams = {}) =>
      this.request<ListRes & { data?: PlaylistItem[] }, any>({
        path: `/playlist`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name SyncPlaylist
     * @summary Sync Playlist of current user
     * @request POST:/playlist
     */
    syncPlaylist: (data: SyncPlaylistReq, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/playlist`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  podcast = {
    /**
     * No description
     *
     * @name ListPodcasts
     * @summary List Podcasts
     * @request GET:/podcast
     */
    listPodcasts: (
      query?: { search?: string; limit?: number; offset?: number; ids?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<ListRes & { data?: PodcastItem[] }, any>({
        path: `/podcast`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetHotPodcasts
     * @summary hot podcast
     * @request GET:/podcast/hot/{count}
     */
    getHotPodcasts: (count: number, query?: { region?: string }, params: RequestParams = {}) =>
      this.request<PodcastItem[], any>({
        path: `/podcast/hot/${count}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscribedPodcasts
     * @summary subscribed podcast
     * @request GET:/podcast/subscribed
     */
    subscribedPodcasts: (params: RequestParams = {}) =>
      this.request<PodcastItem[], any>({
        path: `/podcast/subscribed`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name GetPodcastDetail
     * @summary Get podcast detail by podcastId or podnewDetailUrl
     * @request GET:/podcast/{id}
     */
    getPodcastDetail: (id: string, params: RequestParams = {}) =>
      this.request<PodcastDetail, any>({
        path: `/podcast/${id}`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name SubInfo
     * @summary Sub info of current user
     * @request GET:/podcast/{id}/sub-info
     */
    subInfo: (id: string, params: RequestParams = {}) =>
      this.request<SubInfo, any>({
        path: `/podcast/${id}/sub-info`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name Subscribe
     * @summary Subscribe a podcast
     * @request POST:/podcast/{id}/subscribe
     */
    subscribe: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/podcast/${id}/subscribe`,
        method: 'POST',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name Unsubscribe
     * @summary UnSubscribe a podcast
     * @request DELETE:/podcast/{id}/subscribe
     */
    unsubscribe: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/podcast/${id}/subscribe`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name Toggle
     * @summary Toggle subscribe a podcast
     * @request POST:/podcast/{id}/toggle
     */
    toggle: (id: string, params: RequestParams = {}) =>
      this.request<SubInfo, any>({
        path: `/podcast/${id}/toggle`,
        method: 'POST',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  rec = {
    /**
     * No description
     *
     * @name GetNewUserRecommend
     * @summary get recommend for new user
     * @request GET:/rec/new-user-rec
     */
    getNewUserRecommend: (params: RequestParams = {}) =>
      this.request<PodcastItem[], any>({
        path: `/rec/new-user-rec`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @name Login
     * @summary Login
     * @request POST:/users/login
     */
    login: (data: LoginReq, params: RequestParams = {}) =>
      this.request<LoginRes, any>({
        path: `/users/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name Logout
     * @summary Logout current user
     * @request GET:/users/logout
     */
    logout: (params: RequestParams = {}) =>
      this.request<EmptyRes, any>({
        path: `/users/logout`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name Me
     * @summary Current user
     * @request GET:/users/me
     */
    me: (params: RequestParams = {}) =>
      this.request<Me, any>({
        path: `/users/me`,
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name SendVerifyCode
     * @summary Send Verify Code
     * @request POST:/users/verify-code
     */
    sendVerifyCode: (data: SendVerifyCodeReq, params: RequestParams = {}) =>
      this.request<LoginRes, any>({
        path: `/users/verify-code`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
