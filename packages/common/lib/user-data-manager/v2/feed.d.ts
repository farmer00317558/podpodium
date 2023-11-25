import { FeedData, FeedEntry } from '@podpodium/feed-reader';
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
export declare const globalFeedConfig: FeedConfig;
export declare function parseDuration(duration: string | number): number;
export declare function readRssURL(url: string): Promise<Feed>;
export {};
