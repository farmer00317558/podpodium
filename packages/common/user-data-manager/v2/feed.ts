import { read, FeedData, FeedEntry, getPureUrl, getText } from '@podpodium/feed-reader';

interface Entry extends FeedEntry {
  image?: string;
  encoded?: string;
  summary?: string;
  duration?: number;
}

interface Feed extends Omit<FeedData, 'entries'> {
  image?: string;
  author?: string;
  entries?: Entry[];
}

interface FeedConfig {
  url: (rawUrl: string) => string;
}

export const globalFeedConfig: FeedConfig = {
  url: (rawUrl: string) => rawUrl,
};

export function parseDuration(duration: string | number): number {
  if (typeof duration === 'number' && duration >= 60) {
    return duration;
  }
  duration = String(duration);
  let arr = duration.split(':');

  if (duration.indexOf('.') !== -1) {
    // 兼容一些不规范的 duration，如：24.35
    arr = duration.split('.');
  }

  let r = 0;
  const l = arr.length;
  if (l > 3) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const itemNum = Number(item);
    if (isNaN(itemNum)) {
      return 0;
    }

    r += itemNum * Math.pow(60, l - i - 1);
  }
  return r;
}

export function readRssURL(url: string) {
  const targetUrl = globalFeedConfig.url(url);
  return read<Feed>(targetUrl, {
    includeOptionalElements: true,
    xmlParserOptions: {
      removeNSPrefix: true,
    },
    extraFeedFields: (data: any) => {
      return {
        author: getText(data.author),
        image: getPureUrl(data.image),
      };
    },
    extraEntryFields: (data: any) => {
      return {
        image: getPureUrl(data.image),
        duration: parseDuration(data.duration),
        description: getText(data.description),
        encoded: getText(data.encoded),
        summary: getText(data.summary),
      };
    },
  });
}
