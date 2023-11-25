export interface IApplePodcastSearchResult {}

export async function searchPodcastFromITunes(term: string, limit: number = 1) {
  try {
    const base = 'https://itunes.apple.com/search';
    const res = await fetch(`${base}?term=${term}&limit=${limit}&entity=podcast&media=podcast`);
    const json = await res.json();
    return json.results;
  } catch {
    return [];
  }
}
