import { EpisodeData, PodcastData } from '@podpodium/common/user-data-manager/v2';
import { useEffect, useState } from 'react';
import { userDataStorage } from './util';

export interface EpisodeNote {
  episodeTitle: string;
  episodeUrl: string;
  episodeId: string;
  content: string;
  rss: string;
  updateAt: number;
}

export interface ParsedEpisodeNote extends EpisodeNote {
  parsedContent: any;
}

export async function saveEpisodeNotes(episode: EpisodeData, content: string) {
  if (content === '{"ops":[{"insert":"\\n"}]}') {
    await userDataStorage.exec('delete from notes where episodeTitle=? and episodeUrl=? and rss=?', [
      episode.title,
      episode.url,
      episode.podcast.url,
    ]);
    return true;
  }
  const [result] = await userDataStorage.exec(
    'insert or replace into notes(episodeId, episodeTitle, episodeUrl, rss, content, updateAt) values(?, ?, ?, ?, ?, ?)',
    [episode.id, episode.title, episode.url, episode.podcast.url, content, Math.round(Date.now() / 1000)],
  );
  return result.rows.length > 0;
}

export async function getNoteCount(): Promise<number> {
  const [result] = await userDataStorage.exec('select count(*) as count from notes');
  return result.rows.item(0).count;
}

export async function importAllNotes(notes: EpisodeNote[]): Promise<void> {
  for (const note of notes) {
    await userDataStorage.exec(
      'insert or replace into notes(episodeId, episodeTitle, episodeUrl, rss, content, updateAt) values(?, ?, ?, ?, ?, ?)',
      [note.episodeId, note.episodeTitle, note.episodeUrl, note.rss, note.content, note.updateAt],
    );
  }
}

export async function getAllNotes(limit: number): Promise<EpisodeNote[]> {
  const [result] = await userDataStorage.exec('select * from notes order by updateAt desc limit ? offset 0', [
    limit,
  ]);
  if (result.rows.length === 0) {
    return [];
  }
  return result.rows.raw();
}

export async function getPodcastNotes(podcast: PodcastData): Promise<EpisodeNote[]> {
  const [result] = await userDataStorage.exec('select * from notes where rss=?', [podcast.url]);
  if (result.rows.length === 0) {
    return [];
  }
  return result.rows.raw();
}

export async function getEpisodeNotes(episode: EpisodeData): Promise<ParsedEpisodeNote | null> {
  const [result] = await userDataStorage.exec(
    'select * from notes where episodeTitle=? and episodeUrl=? and rss=?',
    [episode.title, episode.url, episode.podcast.url],
  );
  if (result.rows.length === 0) {
    return null;
  }
  const note = result.rows.item(0) as ParsedEpisodeNote;
  const contentJson = note.content;
  let parsedContent: any | null = null;
  try {
    parsedContent = JSON.parse(contentJson);
  } catch (e) {
    console.error('invalid content:', contentJson);
    parsedContent = null;
  }
  note.parsedContent = parsedContent;
  return note;
}

export function useEpisodeNotes(episode?: EpisodeData | null) {
  const [notes, setNotes] = useState<ParsedEpisodeNote | null>(null);
  useEffect(() => {
    if (!episode || notes) {
      return;
    }
    getEpisodeNotes(episode).then((n) => setNotes(n));
  }, [episode, notes]);
  return notes;
}
