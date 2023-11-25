import { useCallback, useRef } from 'react';

export default function useDebounceFn<T extends (...args: any[]) => void>(
  this: any,
  fn: T,
  delay: number = 500,
) {
  let timer = useRef<any>(null);

  return useCallback(
    (...args: any[]) => {
      clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    },
    [delay, fn],
  );
}
