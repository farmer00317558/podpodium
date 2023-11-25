import { useCallback, useRef } from 'react';

export default function useThrottleFn<T extends (...args: any[]) => void>(
  this: any,
  fn: T,
  delay: number = 500,
) {
  let timer = useRef<any>(null);

  return useCallback(
    (...args: any[]) => {
      if (timer.current === null) {
        fn.apply(this, args);
        timer.current = setTimeout(() => {
          timer.current = null;
        }, delay);
      }
    },
    [delay, fn],
  );
}
