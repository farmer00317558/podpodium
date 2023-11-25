import nock from 'nock';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { IStorage } from '../types';
import {
  cacheDataKey,
  EpisodeData,
  episodeDataKey,
  episodeId,
  PodcastData,
  podcastDataKey,
  podcastId,
  userDataKey,
  UserDataKeyEnum,
  UserDataManager,
} from '.';

function wait(time: number) {
  return new Promise((res) => {
    setTimeout(() => {
      res('');
    }, time);
  });
}

const parseUrl = (url: string) => {
  const re = new URL(url);
  return {
    baseUrl: `${re.protocol}//${re.host}`,
    path: re.pathname,
  };
};

const fixture = (fileName: string) => {
  return readFileSync(resolve(__dirname, `fixture/${fileName}`), 'utf8').toString();
};

class MockStorage implements IStorage {
  store: any = {};
  async multiRemove(keys: string[]): Promise<boolean> {
    keys.forEach((k) => {
      delete this.store[k];
    });
    return true;
  }

  async clear(): Promise<boolean> {
    this.store = {};
    return true;
  }

  async removeObject(key: string): Promise<boolean> {
    delete this.store[key];
    return true;
  }

  async setObject<T>(key: string, value: T): Promise<boolean> {
    this.store[key] = value;
    return true;
  }

  async getObject<T>(key: string): Promise<T | null> {
    return this.store[key] || null;
  }

  async getAllKeys(): Promise<string[]> {
    return Object.keys(this.store);
  }

  async multiGet<T>(keys: string[]): Promise<[string, T][]> {
    return Object.entries<T>(this.store).filter(([k]) => keys.includes(k));
  }
}

const userStorage = new MockStorage();
const cacheStorage = new MockStorage();
const userDataManager = new UserDataManager(userStorage, cacheStorage);

function genMockEpisodeData(prefix: string, count: number) {
  const ret: EpisodeData[] = [];
  for (let i = 0; i < count; i++) {
    ret.push({
      url: `id-${prefix}-${i}`,
      id: `id-${prefix}-${i}`,
      type: '',
      length: 0,
      title: '',
      artwork: '',
      description: '',
      duration: 0,
      pubTime: count - i,
      podcast: {
        id: '',
        url: '',
        title: '',
        image: '',
        author: '',
      },
    });
  }
  return ret;
}

function genMockPodcastData(count: number, episodeCount: number = 3) {
  const ret: PodcastData[] = [];
  for (let i = 0; i < count; i++) {
    const url = `https://some.com/id-${i}`;
    ret.push({
      url,
      id: podcastId({ url }),
      image: `image-${i}`,
      title: `title-${i}`,
      description: `desc-${i}`,
      summary: `summary-${i}`,
      lastSyncTime: 0,
      author: '',
      episodes: genMockEpisodeData(String(i), episodeCount),
    });
  }
  return ret;
}

beforeEach(() => {
  userStorage.clear();
  cacheStorage.clear();
});

test('subscribe', async () => {
  const [p1, p2] = genMockPodcastData(3);
  const [a] = await userDataManager.toggleSubscribe(p1);
  const data = await userDataManager.getSubscribeData();
  expect(a).toBe(true);
  expect(data[p1.id].url).toBe(p1.url);

  const [b] = await userDataManager.toggleSubscribe(p2);
  expect(b).toBe(true);

  let podcasts = await userDataManager.subscribedPodcasts();
  expect(podcasts.length).toBe(2);
  await expect(userDataManager.isSubscribed(p1.id)).resolves.toBe(true);
  await expect(userDataManager.isSubscribed(p2.id)).resolves.toBe(true);

  const [c] = await userDataManager.toggleSubscribe(p1);
  expect(c).toBe(false);
  podcasts = await userDataManager.subscribedPodcasts();
  expect(podcasts.length).toBe(1);
  await expect(userDataManager.isSubscribed(p1.id)).resolves.toBe(false);
  await expect(userDataManager.isSubscribed(p2.id)).resolves.toBe(true);

  const [d] = await userDataManager.toggleSubscribe(p2);
  expect(d).toBe(false);
  podcasts = await userDataManager.subscribedPodcasts();
  expect(podcasts.length).toBe(0);
  await expect(userDataManager.isSubscribed(p2.id)).resolves.toBe(false);
});

test('playlist', async () => {
  const a = await userDataManager.getPlaylist();
  expect(a.length).toBe(0);

  const b = genMockEpisodeData('hello', 3);
  await expect(userDataManager.setPlaylist(b)).resolves.toBeUndefined();
  const c = await userDataManager.getPlaylist();
  expect(c.length).toBe(3);
  expect(c.map((i) => i.url)).toStrictEqual(['id-hello-0', 'id-hello-1', 'id-hello-2']);

  const d = genMockEpisodeData('hello-2', 5);
  await expect(userDataManager.setPlaylist(d)).resolves.toBeUndefined();
  expect(d.length).toBe(5);
  expect(d.map((i) => i.url)).toContain('id-hello-2-0');
});

test('favorite', async () => {
  const [a, b] = genMockEpisodeData('', 2);
  let isFav = await userDataManager.toggleFavorite(a);
  expect(isFav).toBe(true);

  isFav = await userDataManager.toggleFavorite(b);
  expect(isFav).toBe(true);

  let episodes = await userDataManager.favoriteEpisodes();
  expect(episodes.length).toBe(2);
  await expect(userDataManager.isFavorite('id--0')).resolves.toBe(true);
  await expect(userDataManager.isFavorite('id--1')).resolves.toBe(true);
  await expect(userDataManager.isFavorite('id--2')).resolves.toBe(false);

  isFav = await userDataManager.toggleFavorite(a);
  expect(isFav).toBe(false);
  episodes = await userDataManager.favoriteEpisodes();
  expect(episodes.length).toBe(1);
  await expect(userDataManager.isFavorite('id--0')).resolves.toBe(false);
  await expect(userDataManager.isFavorite('id--1')).resolves.toBe(true);

  isFav = await userDataManager.toggleFavorite(b);
  expect(isFav).toBe(false);
  episodes = await userDataManager.favoriteEpisodes();
  expect(episodes.length).toBe(0);
  await expect(userDataManager.isFavorite('id--1')).resolves.toBe(false);
});

test('feeds', async () => {
  const podcasts = genMockPodcastData(3, 3);
  const [p0, p1, p2] = podcasts;
  await Promise.allSettled(podcasts.map((i) => userDataManager.setPodcastCacheData(i)));

  await userDataManager.toggleSubscribe(p0);
  const feeds = await userDataManager.feeds(10);
  expect(feeds.length).toBe(3);

  await userDataManager.toggleSubscribe(p1);
  await userDataManager.toggleSubscribe(p2);
  const b = await userDataManager.feeds(10);
  expect(b.length).toBe(9);

  for (let i = 1; i < b.length; i++) {
    expect(b[i].pubTime).toBeLessThanOrEqual(b[i - 1].pubTime);
  }

  await userDataManager.toggleSubscribe(p1);
  const c = await userDataManager.feeds(10);
  expect(c.length).toBe(6);

  const d = await userDataManager.feeds(3);
  expect(d.length).toBe(3);
});

test('feeds no cache', async () => {
  const podcasts = genMockPodcastData(3, 3);
  const [p0, p1, p2] = podcasts;

  const xml = fixture('podcast.rss');
  const { baseUrl, path } = parseUrl(p0.url);
  nock(baseUrl).get(path).reply(200, xml, {
    'Content-Type': 'application/xml',
  });

  const { baseUrl: baseUrl2, path: path2 } = parseUrl(p1.url);
  nock(baseUrl2).get(path2).reply(200, xml, {
    'Content-Type': 'application/xml',
  });

  const { baseUrl: baseUrl3, path: path3 } = parseUrl(p2.url);
  nock(baseUrl3).get(path3).delay(5000).reply(200, xml, {
    'Content-Type': 'application/xml',
  });

  await userDataManager.toggleSubscribe(p0);
  const f1 = await userDataManager.feeds(10, {});
  expect(f1.length).toBe(2);

  await userDataManager.toggleSubscribe(p1);
  const f2 = await userDataManager.feeds(10);
  expect(f2.length).toBe(4);

  await userDataManager.toggleSubscribe(p2);
  const f3 = await userDataManager.feeds(10);
  expect(f3.length).toBe(4);

  nock(baseUrl3).get(path3).delay(5000).reply(200, xml, {
    'Content-Type': 'application/xml',
  });

  const f4 = await userDataManager.feeds(10, { fetchRssTimeout: 6000 });
  expect(f4.length).toBe(6);

  // refresh all
  nock(baseUrl).get(path).reply(200, xml, {
    'Content-Type': 'application/xml',
  });

  nock(baseUrl2).get(path2).reply(200, xml, {
    'Content-Type': 'application/xml',
  });

  nock(baseUrl3).get(path3).reply(200, xml, {
    'Content-Type': 'application/xml',
  });

  const f5 = await userDataManager.feeds(10, { refreshAll: true });
  expect(f5.length).toBe(6);
});

test('history', async () => {
  const podcasts = genMockPodcastData(3, 3);
  await Promise.allSettled(podcasts.map((i) => userDataManager.setPodcastCacheData(i)));
  await userDataManager.listen(podcasts[2].episodes[2], 10);
  await wait(1000);
  await userDataManager.listen(podcasts[0].episodes[0], 10);
  await wait(1000);
  await userDataManager.listen(podcasts[1].episodes[1], 10);

  const a = await userDataManager.loadHistory();
  expect(a.length).toBe(3);
  expect(a.map((i) => i.url)).toStrictEqual(['id-1-1', 'id-0-0', 'id-2-2']);

  const c = await userDataManager.loadHistory(0, 2);
  expect(c.length).toBe(2);
  expect(c.map((i) => i.url)).toStrictEqual(['id-1-1', 'id-0-0']);

  await userDataManager.removeListen('id-1-1');
  const d = await userDataManager.loadHistory(0, 2);
  expect(d.length).toBe(2);
  expect(d.map((i) => i.url)).toStrictEqual(['id-0-0', 'id-2-2']);

  await userDataManager.clearUserDataByKey(UserDataKeyEnum.Listen);
  const e = await userDataManager.loadHistory(0, 2);
  expect(e.length).toBe(0);
});

test('load and dump', async () => {
  const podcasts = genMockPodcastData(3, 3);
  const [p1, p2, p3] = podcasts;
  await Promise.allSettled(podcasts.map((i) => userDataManager.setPodcastCacheData(i)));

  // listen
  await userDataManager.listen(podcasts[2].episodes[2], 10);

  // subscribe
  await userDataManager.toggleSubscribe(p1);

  // favorite
  await userDataManager.toggleFavorite(podcasts[0].episodes[2]);

  // playlist
  await userDataManager.setPlaylist(podcasts[1].episodes);

  const dumpData = await userDataManager.dumpUserData();
  const keys = Object.keys(dumpData);
  expect(keys).toContain(userDataKey(UserDataKeyEnum.Listen));
  expect(keys).toContain(userDataKey(UserDataKeyEnum.Favorite));
  expect(keys).toContain(userDataKey(UserDataKeyEnum.Subscribe));
  expect(keys).toContain(userDataKey(UserDataKeyEnum.Playlist));
  expect(keys).toContain(userDataKey(episodeDataKey('id-0-2')));
  expect(keys).toContain(userDataKey(episodeDataKey('id-2-2')));
  expect(keys).toContain(userDataKey(episodeDataKey('id-1-0')));
  expect(keys).toContain(userDataKey(episodeDataKey('id-1-1')));
  expect(keys).toContain(userDataKey(episodeDataKey('id-1-2')));

  // remove history
  await userDataManager.removeListen('id-2-2');
  await userDataManager.autoClearUserData();
  const d2 = await userDataManager.dumpUserData();
  const k1 = Object.keys(d2);
  expect(k1).toContain(userDataKey(UserDataKeyEnum.Listen));
  expect(k1).toContain(userDataKey(UserDataKeyEnum.Favorite));
  expect(k1).toContain(userDataKey(UserDataKeyEnum.Subscribe));
  expect(k1).toContain(userDataKey(UserDataKeyEnum.Playlist));
  expect(k1).toContain(userDataKey(episodeDataKey('id-1-0')));
  expect(k1).toContain(userDataKey(episodeDataKey('id-1-1')));
  expect(k1).toContain(userDataKey(episodeDataKey('id-1-2')));
  expect(k1).toContain(userDataKey(episodeDataKey('id-0-2')));

  // remove favorite
  await userDataManager.toggleFavorite(podcasts[0].episodes[2]);
  await userDataManager.autoClearUserData();
  const d3 = await userDataManager.dumpUserData();
  const k2 = Object.keys(d3);
  expect(k2).toContain(userDataKey(UserDataKeyEnum.Listen));
  expect(k2).toContain(userDataKey(UserDataKeyEnum.Favorite));
  expect(k2).toContain(userDataKey(UserDataKeyEnum.Subscribe));
  expect(k2).toContain(userDataKey(UserDataKeyEnum.Playlist));
  expect(k2).toContain(userDataKey(episodeDataKey('id-1-0')));
  expect(k2).toContain(userDataKey(episodeDataKey('id-1-1')));
  expect(k2).toContain(userDataKey(episodeDataKey('id-1-2')));

  // clear playlist
  await userDataManager.clearUserDataByKey(UserDataKeyEnum.Playlist);
  await userDataManager.autoClearUserData();
  const d4 = await userDataManager.dumpUserData();
  const k3 = Object.keys(d4);
  expect(k3).toContain(userDataKey(UserDataKeyEnum.Listen));
  expect(k3).toContain(userDataKey(UserDataKeyEnum.Favorite));
  expect(k3).toContain(userDataKey(UserDataKeyEnum.Subscribe));

  // clear cache data
  const allKeys = await cacheStorage.getAllKeys();
  expect(allKeys).toEqual(
    expect.arrayContaining([
      cacheDataKey(podcastDataKey(p1.id)),
      cacheDataKey(podcastDataKey(p2.id)),
      cacheDataKey(podcastDataKey(p3.id)),
    ]),
  );
  await userDataManager.clearCacheData();
  const allKeys2 = await cacheStorage.getAllKeys();
  expect(allKeys2).toEqual(
    expect.not.arrayContaining([
      cacheDataKey(podcastDataKey(p1.id)),
      cacheDataKey(podcastDataKey(p2.id)),
      cacheDataKey(podcastDataKey(p3.id)),
    ]),
  );

  // clear
  await userStorage.clear();
  await expect(userDataManager.loadUserData(JSON.stringify(dumpData))).resolves.toBeUndefined();
  expect(Object.keys(dumpData)).toContain(userDataKey(UserDataKeyEnum.Listen));

  await userStorage.clear();
  await expect(userDataManager.loadUserData('{')).rejects.toBe('invalid content');
});

test('get podcast detail', async () => {
  const url = 'https://some.com/rss';
  const xml = fixture('podcast.rss');
  const { baseUrl, path } = parseUrl(url);
  nock(baseUrl).get(path).reply(200, xml, {
    'Content-Type': 'application/xml',
  });
  const p1 = await userDataManager.getPodcastData(url);
  expect(p1?.url).toBe(url);
  expect(p1?.image).toBe('https://www.example.com/podcasts/dafnas-zebras/img/dafna-zebra-pod-logo.jpg');
  expect(p1?.title).toBe("Dafna's Zebra Podcast");
  expect(p1?.author).toBe('Dafna');
  expect(p1?.episodes[0].duration).toBe(1800);
  expect(p1?.episodes[0].title).toBe('Top 10 myths about caring for a zebra');
  expect(p1?.episodes[0].artwork).toBe(
    'https://fdfs.xmcdn.com/storages/1f66-audiofreehighqps/83/CA/CKwRIJEE_Lk8AAE2lQDcTWM0.jpeg',
  );
});

test('get episode detail', async () => {
  const url = 'https://some.com/rss';
  const xml = fixture('podcast.rss');
  const { baseUrl, path } = parseUrl(url);
  nock(baseUrl).get(path).reply(200, xml, {
    'Content-Type': 'application/xml',
  });
  const id = episodeId({
    title: 'Top 10 myths about caring for a zebra',
    podcast: {
      url,
    },
  } as any);
  const eUrl = 'https://www.example.com/podcasts/dafnas-zebras/audio/toptenmyths.mp3';
  const e = await userDataManager.getEpisodeData(url, id);
  expect(e).not.toBe(undefined);
  expect(e?.url).toBe(eUrl);

  if (!e) {
    return;
  }
  await userDataManager.toggleFavorite({ ...e, title: 'hello' });
  const e2 = await userDataManager.getEpisodeData(url, id);
  expect(e2?.title).toBe('hello');
});

test('real rss url', async () => {
  const url = 'https://s1.proxy.wavpub.com/weknownothing.xml';
  const podcast = await userDataManager.fetchPodcastRSS(url);
  expect(podcast.image).toBe('https://cdn.wavpub.com/images/podcast-logo/weknownothing.jpg');
  expect(podcast.title).toBe('文化有限');
  expect(podcast.episodes.length).toBeGreaterThan(1);
  expect(typeof podcast.episodes[0].artwork).toBe('string');
});
