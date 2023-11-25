import { runTaskInPool } from '@podpodium/common';
import { PodcastData } from '@podpodium/common/user-data-manager/v2';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
  GestureResponderEvent,
  GestureResponderHandlers,
  PanResponder,
  useWindowDimensions,
} from 'react-native';
import TrackPlayer, { Event, State, useTrackPlayerEvents } from 'react-native-track-player';
import { AppContext } from './context';
import { RootState } from './state';
import { dataManager } from './user-data';
import { getCurrentTrack, isLoading, isPlaying } from './util';

export function useRootState(): RootState {
  return useContext(AppContext);
}

export interface IEpisodePlayState {
  active: boolean;
  loading: boolean;
  playing: boolean;
}

const defaultState: IEpisodePlayState = { loading: false, playing: false, active: false };
export function useEpisodePlayState(episodeId?: string): IEpisodePlayState {
  const [state, setState] = useState<State | null>(null);
  const [ret, setRet] = useState(defaultState);

  useTrackPlayerEvents([Event.PlaybackState], ({ state: trackState }) => {
    setState(trackState);
  });

  useEffect(() => {
    TrackPlayer.getState().then((s: State) => {
      setState(s);
    });
  }, []);

  useEffect(() => {
    if (!state) {
      return;
    }

    let canceled = false;

    const cancel = () => {
      canceled = true;
    };

    const getState = async () => {
      if (!episodeId) {
        return;
      }
      const track = await getCurrentTrack();
      if (!track) {
        return;
      }
      const isCurrent = track.id === episodeId;

      if (isCurrent) {
        console.info(track.title, 'state:', State[state as any]);
      }

      const loading = isLoading(state) && isCurrent;
      const playing = isPlaying(state) && isCurrent;
      if (loading || playing) {
        console.info(track.title, 'state:', State[state as any], 'canceled:', canceled);
      }
      if (!canceled) {
        setRet({ loading, playing, active: loading || playing });
      }
    };

    getState();

    return cancel;
  }, [episodeId, state]);

  return ret;
}

interface ISwipHandlers {
  [key: string]: (event: GestureResponderEvent) => void;
}

export function useSwipHandlers2(
  onSwip: (e: { x: number; y: number }) => void,
  onSwipEnd: (e: { px: number; py: number; w: number; h: number }) => void,
): ISwipHandlers {
  const { width, height } = useWindowDimensions();
  const start = useRef({ x: 0, y: 0 });
  const onTouchStart = (e: GestureResponderEvent) => {
    e.stopPropagation();
    const { pageX, pageY } = e.nativeEvent;
    start.current.x = pageX;
    start.current.y = pageY;
  };
  const onTouchMove = (e: GestureResponderEvent) => {
    e.stopPropagation();
    const { pageX, pageY } = e.nativeEvent;
    const { x, y } = start.current;
    onSwip({
      x: pageX - x,
      y: pageY - y,
    });
  };
  const onTouchEnd = (e: GestureResponderEvent) => {
    e.stopPropagation();
    const { pageX, pageY } = e.nativeEvent;
    const { x, y } = start.current;
    if (Math.abs(pageX - x) < 1 && Math.abs(pageY - y) < 1) {
      // is touch
      return;
    }
    const px = (pageX - x) / width;
    const py = (pageY - y) / height;
    onSwipEnd({ px, py, w: width, h: height });
  };
  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}

export function useSwipHandlers(
  onSwip: (e: { x: number; y: number }) => void,
  onSwipEnd: (e: { px: number; py: number; w: number; h: number }) => void,
): GestureResponderHandlers {
  const { width, height } = useWindowDimensions();
  // const start = useRef({ x: 0, y: 0 });
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // swiping.current = true;
      },
      onPanResponderMove: (e, s) => {
        onSwip({ x: s.dx, y: s.dy });
      },
      onPanResponderTerminate: (e, s) => {
        const px = s.dx / width;
        const py = s.dy / height;
        onSwipEnd({ px, py, w: width, h: height });
      },
      onPanResponderRelease: (e, s) => {
        const px = s.dx / width;
        const py = s.dy / height;
        onSwipEnd({ px, py, w: width, h: height });
      },
    }),
  ).current;
  return panResponder.panHandlers;
}

export function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false);
  const get = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return get;
}

interface UserPromiseResultReturn<T> {
  data: T | null;
  loading: boolean;
  err: string;
  reload: () => void;
}

export function usePromiseResult<T>(task: () => Promise<T>): UserPromiseResultReturn<T> {
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);

  const reload = useCallback(() => {
    setLoading(true);
    setErr('');
    task()
      .then((ret) => {
        setData(ret);
      })
      .catch((e) => {
        console.error(e);
        let msg: string = 'err';
        if (typeof e === 'string') {
          msg = e;
        }
        if (e instanceof Error) {
          msg = e.message;
        }
        setErr(msg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [task]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { err, loading, data, reload };
}

export function useSubscribeByRss() {
  const rootState = useRootState();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState([0, 0]);
  const [logs, setLogs] = useState<[string, boolean][]>([]);
  const aborted = useRef(false);

  useEffect(() => {
    aborted.current = false;
    return () => {
      aborted.current = true;
    };
  }, []);

  const handleSubscribe = useCallback(
    async (urls: string[]) => {
      if (urls.length === 0) {
        return;
      }
      setLogs([]);
      setLoading(true);
      setProgress([0, urls.length]);
      const list: PodcastData[] = [];
      await runTaskInPool(urls, async (url: string) => {
        if (aborted.current) {
          return null;
        }
        const podcast = await new Promise<PodcastData | undefined>((resolve) => {
          let failed = false;
          let timer = 0;
          const fail = () => {
            if (failed) {
              return;
            }
            clearTimeout(timer);
            failed = true;
            setProgress((p) => [p[0] + 1, p[1]]);
            setLogs((l) => {
              const log: [string, boolean] = [`失败：${url}`, false];
              return [log].concat(l);
            });
            resolve(undefined);
          };

          timer = setTimeout(() => {
            fail();
          }, 10000) as unknown as number;

          dataManager
            .getPodcastData(url)
            .then((ret) => {
              setProgress((p) => [p[0] + 1, p[1]]);
              if (failed) {
                return;
              }
              clearTimeout(timer);
              if (ret) {
                setLogs((l) => {
                  const log: [string, boolean] = [`成功：「${ret.title}」`, true];
                  return [log].concat(l);
                });
              } else {
                fail();
              }
              resolve(ret);
            })
            .catch(() => {
              fail();
            });
        });
        if (podcast) {
          list.push(podcast);
        }
      });
      await dataManager.subscribe(list);
      setLoading(false);
      setTimeout(() => {
        rootState.loadSubscribedPodcast();
        rootState.refreshFeeds({ cacheOnly: true });
      }, 500);
    },
    [rootState],
  );

  return [loading, logs, progress, handleSubscribe] as const;
}
