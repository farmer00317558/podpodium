// main.test
/* eslint-env jest */

import { readFileSync } from 'fs';

import nock from 'nock';

import { hasProperty, isArray } from 'bellajs';

import { read, getPureUrl } from './main.js';

const feedAttrs = 'title link description generator language published entries'.split(' ');
const entryAttrs = 'title link description published'.split(' ');

const parseUrl = (url) => {
  const re = new URL(url);
  return {
    baseUrl: `${re.protocol}//${re.host}`,
    path: re.pathname,
  };
};

describe('test read() function with common issues', () => {
  test('read feed from a non-string link', () => {
    expect(read([])).rejects.toThrow(new Error('Input param must be a valid URL'));
  });

  test('read feed from a 404 link', () => {
    const url = 'https://somewhere.xyz/alpha/beta';
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(404);
    expect(read(url)).rejects.toThrow(new Error('Request failed with status code 404'));
  });

  test('read feed from empty xml', () => {
    const url = 'https://empty-source.elsewhere/rss';
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, '', {
      'Content-Type': 'application/xml',
    });
    expect(read(url)).rejects.toThrow(new Error(`Failed to load content from "${url}"`));
  });

  test('read feed from invalid xml', async () => {
    const url = 'https://averybad-source.elsewhere/rss';
    const xml = '<?xml version="1.0" encoding="UTF-8><noop><oops></ooops>';
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    expect(read(url)).rejects.toThrow(new Error('The XML document is not well-formed'));
  });

  test('read feed from invalid json', async () => {
    const url = 'https://averybad-source.elsewhere/jsonfeed';
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, 'this is not json string', {
      'Content-Type': 'application/json',
    });
    expect(read(url)).rejects.toThrow(new Error('Failed to convert data to JSON object'));
  });
});

describe('test read() standard feed', (done) => {
  test('read rss feed from Google', async () => {
    const url = 'https://some-news-page.tld/rss';
    const xml = readFileSync('test-data/rss-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url);
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    entryAttrs.forEach((k) => {
      expect(hasProperty(result.entries[0], k)).toBe(true);
    });
  });

  test('read atom feed from Google', async () => {
    const url = 'https://some-news-page.tld/atom';
    const xml = readFileSync('test-data/atom-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url);
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    entryAttrs.forEach((k) => {
      expect(hasProperty(result.entries[0], k)).toBe(true);
    });
  });

  test('read atom feed from Google with extraFields', async () => {
    const url = 'https://some-news-page.tld/atom';
    const xml = readFileSync('test-data/atom-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      extraFeedFields: (data) => {
        return {
          author: data.author,
        };
      },
      extraEntryFields: (data) => {
        return {
          id: data.id,
        };
      },
    });
    expect(hasProperty(result, 'author')).toBe(true);
    expect(hasProperty(result.entries[0], 'id')).toBe(true);
  });

  test('read atom feed which contains multi links', async () => {
    const url = 'https://some-news-page.tld/atom/multilinks';
    const xml = readFileSync('test-data/atom-multilinks.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url);
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    entryAttrs.forEach((k) => {
      expect(hasProperty(result.entries[0], k)).toBe(true);
    });
  });

  test('read json feed from Micro.blog', async () => {
    const url = 'https://some-news-page.tld/json';
    const json = readFileSync('test-data/json-feed-standard-realworld.json', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, json, {
      'Content-Type': 'text/json',
    });
    const result = await read(url);
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    entryAttrs.forEach((k) => {
      expect(hasProperty(result.entries[0], k)).toBe(true);
    });
  });

  test('read json feed from Micro.blog with extra fields', async () => {
    const url = 'https://some-news-page.tld/json';
    const json = readFileSync('test-data/json-feed-standard-realworld.json', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, json, {
      'Content-Type': 'text/json',
    });
    const result = await read(url, {
      extraFeedFields: (data) => {
        return {
          icon: data.icon,
        };
      },
      extraEntryFields: (data) => {
        return {
          id: data.id,
        };
      },
    });
    expect(hasProperty(result, 'icon')).toBe(true);
    expect(hasProperty(result.entries[0], 'id')).toBe(true);
  });

  test('read rss podcast feed with enclosure tag', async () => {
    const url = 'https://some-podcast-page.tld/podcast/rss';
    const xml = readFileSync('test-data/podcast.rss', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      includeOptionalElements: true,
    });
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    entryAttrs.forEach((k) => {
      expect(hasProperty(result.entries[0], k)).toBe(true);
      expect(hasProperty(result.entries[0], 'enclosure')).toBe(true);
      const enclosure = result.entries[0].enclosure;
      expect(hasProperty(enclosure, 'url')).toBe(true);
      expect(hasProperty(enclosure, 'type')).toBe(true);
      expect(hasProperty(enclosure, 'length')).toBe(true);
    });
    console.info(result.entries);
  });

  test('read rss standard feed with optional elements', async () => {
    const url = 'https://some-optional-element.tld/rss';
    const xml = readFileSync('test-data/rss-feed-standard.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      includeOptionalElements: true,
    });
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    const entry = result.entries[0];
    entryAttrs.forEach((k) => {
      expect(hasProperty(entry, k)).toBe(true);
      expect(hasProperty(entry, 'author')).toBe(true);
      expect(hasProperty(entry, 'comments')).toBe(true);
      expect(hasProperty(entry, 'source')).toBe(true);
      expect(hasProperty(entry, 'category')).toBe(true);
    });
    const source = entry.source;
    expect(hasProperty(source, 'text')).toBe(true);
    expect(hasProperty(source, 'url')).toBe(true);
    const category = entry.category;
    expect(isArray(category)).toBe(true);
  });

  test('read rss podcast feed with extra fields', async () => {
    const url = 'https://some-podcast-page.tld/podcast/rss';
    const xml = readFileSync('test-data/podcast.rss', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      extraFeedFields: (data) => {
        return {
          author: data.author,
          image: getPureUrl(data.image),
        };
      },
      extraEntryFields: (data) => {
        return {
          duration: data.duration,
        };
      },
      xmlParserOptions: {
        removeNSPrefix: true,
      },
    });
    expect(result.author).toBe('Dafna');
    expect(result.image).toBe('https://www.example.com/podcasts/dafnas-zebras/img/dafna-zebra-pod-logo.jpg');
    expect(result.entries[0].duration).toBe('30:00');
  });
});

describe('test read() standard feed full content', () => {
  const newEntryAttrs = [...entryAttrs, 'content'];

  test('read rss feed from Google', async () => {
    const url = 'https://some-news-page.tld/rss';
    const xml = readFileSync('test-data/rss-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      includeEntryContent: true,
    });
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    newEntryAttrs.forEach((k) => {
      expect(hasProperty(result.entries[0], k)).toBe(true);
    });
  });

  test('read atom feed from Google', async () => {
    const url = 'https://some-news-page.tld/atom';
    const xml = readFileSync('test-data/atom-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      includeEntryContent: true,
    });
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    newEntryAttrs.forEach((k) => {
      expect(hasProperty(result.entries[0], k)).toBe(true);
    });
  });

  test('read json feed from Micro.blog', async () => {
    const url = 'https://some-news-page.tld/json';
    const json = readFileSync('test-data/json-feed-standard-realworld.json', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, json, {
      'Content-Type': 'application/json',
    });
    const result = await read(url, {
      includeEntryContent: true,
    });
    feedAttrs.forEach((k) => {
      expect(hasProperty(result, k)).toBe(true);
    });
    newEntryAttrs.forEach((k) => {
      expect(hasProperty(result.entries[0], k)).toBe(true);
    });
  });
});

describe('test read() with `useISODateFormat` option', () => {
  test('set `useISODateFormat` to false', async () => {
    const url = 'https://realworld-standard-feed.tld/rss';
    const xml = readFileSync('test-data/rss-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      useISODateFormat: false,
    });
    expect(result.published).toEqual('Thu, 28 Jul 2022 03:39:57 GMT');
    expect(result.entries[0].published).toEqual('Thu, 28 Jul 2022 02:43:00 GMT');
  });

  test('set `useISODateFormat` to true', async () => {
    const url = 'https://realworld-standard-feed.tld/rss';
    const xml = readFileSync('test-data/rss-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      useISODateFormat: true,
    });
    expect(result.published).toEqual('2022-07-28T03:39:57.000Z');
    expect(result.entries[0].published).toEqual('2022-07-28T02:43:00.000Z');
  });
});

describe('test read() without normalization', () => {
  test('read rss feed from Google', async () => {
    const url = 'https://some-news-page.tld/rss';
    const xml = readFileSync('test-data/rss-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      normalization: false,
    });
    expect(hasProperty(result, 'webMaster')).toBe(true);
    expect(hasProperty(result, 'item')).toBe(true);
    expect(hasProperty(result.item[0], 'source')).toBe(true);
  });
  test('read rss feed from standard example', async () => {
    const url = 'https://some-news-page.tld/rss';
    const xml = readFileSync('test-data/rss-feed-standard.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      normalization: false,
    });
    expect(hasProperty(result, 'copyright')).toBe(true);
    expect(hasProperty(result, 'item')).toBe(true);
    expect(hasProperty(result.item, 'guid')).toBe(true);
  });

  test('read atom feed from Google', async () => {
    const url = 'https://some-news-page.tld/atom';
    const xml = readFileSync('test-data/atom-feed-standard-realworld.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      normalization: false,
    });
    expect(hasProperty(result, 'id')).toBe(true);
    expect(hasProperty(result, 'rights')).toBe(true);
    expect(hasProperty(result, 'entry')).toBe(true);
    expect(hasProperty(result.entry[0], 'updated')).toBe(true);
  });

  test('read atom feed from standard example', async () => {
    const url = 'https://some-news-page.tld/atom';
    const xml = readFileSync('test-data/atom-feed-standard.xml', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      normalization: false,
    });
    expect(hasProperty(result, 'id')).toBe(true);
    expect(hasProperty(result, 'entry')).toBe(true);
    expect(hasProperty(result.entry, 'published')).toBe(true);
    expect(hasProperty(result.entry, 'updated')).toBe(true);
    expect(hasProperty(result.entry, 'summary')).toBe(true);
    expect(hasProperty(result.entry, 'content')).toBe(true);
  });

  test('read json feed from Micro.blog', async () => {
    const url = 'https://some-news-page.tld/json';
    const json = readFileSync('test-data/json-feed-standard-realworld.json', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, json, {
      'Content-Type': 'application/json',
    });
    const result = await read(url, {
      normalization: false,
    });
    expect(hasProperty(result, 'icon')).toBe(true);
    expect(hasProperty(result, 'favicon')).toBe(true);
    expect(hasProperty(result, 'items')).toBe(true);
    expect(hasProperty(result.items[0], 'tags')).toBe(true);
    expect(hasProperty(result.items[0], 'date_published')).toBe(true);
  });

  test('read rss podcast feed with enclosure tag', async () => {
    const url = 'https://some-podcast-page.tld/podcast/rss';
    const xml = readFileSync('test-data/podcast.rss', 'utf8');
    const { baseUrl, path } = parseUrl(url);
    nock(baseUrl).get(path).reply(200, xml, {
      'Content-Type': 'application/xml',
    });
    const result = await read(url, {
      normalization: false,
    });
    expect(hasProperty(result, 'itunes:owner')).toBe(true);
    expect(hasProperty(result.item[0], 'itunes:duration')).toBe(true);
  });
});
