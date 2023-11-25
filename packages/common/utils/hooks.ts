import { useState, useCallback, useEffect } from 'react';

export interface UserPromiseResultReturn<T> {
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
