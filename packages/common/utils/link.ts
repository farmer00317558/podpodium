import { EpisodeData } from '../user-data-manager/v2';

export function episodeLink(episode: EpisodeData) {
  return `https://www.lingjiangtai.com/episode?rss=${encodeURIComponent(episode.podcast.url)}&id=${
    episode.id
  }&src=app-share`;
}
