import { format, formatRelative } from 'date-fns';
import { stripHtml } from 'string-strip-html';
import TrackPlayer, { State, Track } from 'react-native-track-player';
import { PermissionsAndroid, Platform } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { v2 } from '@podpodium/common';
import { EpisodeItem, PodcastItem } from '@podpodium/common';
import { keyValueTableInitSql, notesTableInitSql, SQLiteStorage } from './storage/sqlite';
import { EpisodeData, PodcastData } from '@podpodium/common/lib/user-data-manager/v2';
import i18n, { getLanguage } from '../i18n';
import { zhCN, enUS } from 'date-fns/locale';

export enum TimeRelativeType {
  Default = 'Default',
  ExactDateTime = 'ExactDateTime',
  TimesAgo = 'TimesAgo',
}

// const formatRelativeLocale = {
//   yesterday: "'昨天' HH:mm",
//   today: "'今天' HH:mm",
//   tomorrow: "'明天' HH:mm",
//   lastWeek: 'PP HH:mm',
//   nextWeek: 'PP HH:mm',
//   other: 'PP HH:mm',
// };

export function relative(timestamp: Date | number): string {
  const lang = getLanguage();
  return formatRelative(timestamp, new Date(), {
    locale: {
      ...(lang === 'zh' ? zhCN : enUS),
      // formatRelative(token: keyof typeof formatRelativeLocale, _date, _baseDate, _options) {
      //   const format = formatRelativeLocale[token];
      //   return format;
      // },
    },
  });
}

export function formatDateTime(timestamp: Date | number): string {
  return format(timestamp, 'yyyy-MM-dd HH:mm:ss');
}

export function fmtDuration(seconds: number, allField: boolean = false, useColon: boolean = false): string {
  // const seconds = Math.round(mileSeconds / 1000);
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  const par: string[] = [];
  if (min > 0 || allField) {
    const paddedMinPart = String(min < 10 ? `0${min}` : min);
    const minPart = useColon ? paddedMinPart : i18n.t('minutes', { value: paddedMinPart });
    par.push(minPart);
  }
  if (sec > 0 || min === 0 || allField) {
    const paddedSecPart = String(sec < 10 ? `0${sec}` : sec);
    const secPart = useColon ? paddedSecPart : i18n.t('seconds', { value: paddedSecPart });
    par.push(secPart);
  }
  const ret = par.join(useColon ? ':' : ' ').trim();
  if (!ret) {
    return useColon ? '00:00' : i18n.t('seconds', { value: '00' });
  }
  return ret;
}

export function descriptionToSummary(desc: string) {
  return stripHtml(desc).result;
}

export function podcastItemToPodcastData(podcast: PodcastItem): PodcastData {
  return {
    id: v2.podcastId({ url: podcast.url }),
    url: podcast.url,
    author: podcast.owner,
    image: podcast.imageHref,
    title: podcast.title,
    description: podcast.summary || '',
    summary: podcast.summary || '',
    lastSyncTime: 0,
    episodes: [],
  };
}

export function episodeItemToEpisodeData(episode: EpisodeItem): EpisodeData {
  const pid = v2.podcastId({ url: episode.podcast.url });
  const eid = v2.episodeIdFromPodcastId(episode.title, pid);
  return {
    id: eid,
    url: episode.enclosureURL,
    type: episode.enclosureType,
    length: episode.enclosureLength,
    title: episode.title,
    artwork: episode.imageHref,
    description: episode.summary,
    pubTime: episode.pubDateTimestamp * 1000,
    duration: episode.duration,
    podcast: {
      id: pid,
      url: episode.podcast.url,
      title: episode.podcast.title,
      image: episode.podcast.imageHref,
      author: episode.podcast.owner,
    },
  };
}

export async function getCurrentTrack(): Promise<Track | null> {
  const idx = await TrackPlayer.getCurrentTrack();
  if (idx === undefined || idx === null) {
    return null;
  }
  return TrackPlayer.getTrack(idx);
}

export function isPlaying(state: State) {
  return [State.Playing].includes(state);
}

export function isIdle(state: State) {
  const states = [State.Stopped, State.Ready, State.None, State.Paused];
  return states.includes(state);
}

export function isLoading(state: State) {
  return !isIdle(state) && !isPlaying(state);
}

export const cacheDataStorage = new SQLiteStorage('user-data.db', [keyValueTableInitSql], 'Library');
export const userDataStorage = new SQLiteStorage('cache-data.db', [keyValueTableInitSql, notesTableInitSql]);

async function hasAndroidPermission(perm: string) {
  const permission = PermissionsAndroid.PERMISSIONS[perm];

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

export async function hasAndroidWriteStoragePermission() {
  return hasAndroidPermission('WRITE_EXTERNAL_STORAGE');
}

export async function savePicture(tag: string, type?: 'photo' | 'video' | 'auto', album?: string) {
  if (Platform.OS === 'android' && !(await hasAndroidWriteStoragePermission())) {
    return;
  }
  return CameraRoll.save(tag, { type, album });
}

export function fileUri(uri: string): string {
  return Platform.OS === 'ios' ? decodeURIComponent(uri) : uri;
}
