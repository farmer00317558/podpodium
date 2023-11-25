import { parseDuration, readRssURL } from './feed';

// test('real rss', async () => {
//   const feedData = await readRssURL('https://s1.proxy.wavpub.com/weknownothing.xml');
//   const { entries, ...data } = feedData;
//   expect(feedData.entries?.length).toBeGreaterThan(0);
// });

// test('real rss 2', async () => {
//   const feedData = await readRssURL('http://www.ximalaya.com/album/30516031.xml');
//   const { entries, ...data } = feedData;
//   expect(feedData.entries?.length).toBeGreaterThan(0);
//   console.info(feedData.entries[0].title);
// });

test('real rss 3', async () => {
  const feedData = await readRssURL('https://storyfm.cn/feed/episodes');
  const { entries } = feedData;
  expect(feedData.entries?.length).toBeGreaterThan(0);
  // console.info(feedData.entries?.[0].title);
  // console.info(feedData.entries?.[0]);
});

// test('real rss 4', async () => {
//   const feedData = await readRssURL('https://dailyeasyenglish.libsyn.com/rss');
//   const { entries, ...data } = feedData;
//   expect(feedData.entries?.length).toBeGreaterThan(0);
//   console.info(data);
// });

// test('real rss 5', async () => {
//   const feedData = await readRssURL('https://papi.qingting.fm/podcast/channels/10042');
//   const { entries, ...data } = feedData;
//   expect(feedData.entries?.length).toBeGreaterThan(0);
//   console.info(data);
// });

test('parse duration', () => {
  expect(parseDuration('10')).toBe(10);
  expect(parseDuration('10:00')).toBe(600);
  expect(parseDuration('1:10:00')).toBe(4200);
  expect(parseDuration('1.10.00')).toBe(4200);
  expect(parseDuration('1.A.00')).toBe(0);
  expect(parseDuration('1.A.00')).toBe(0);
});
