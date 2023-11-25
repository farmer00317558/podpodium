import { useCallback, useEffect, useState } from 'react';
import SecureStore from 'react-native-encrypted-storage';
import { Api } from '@podpodium/common';
import { AxiosResponse } from 'axios';

interface IUseApiReturn<T> {
  data: T | null;
  loading: boolean;
}

// type RequestFunction<A, T> = (...args: A) => IUseApiReturn<T>;
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
type FirstArgumentType<F extends Function> = F extends (args: infer A) => any ? A : never;
type SecondArgumentType<F extends Function> = F extends (_: any, args: infer A) => any ? A : never;
type PromiseType<T extends Promise<AxiosResponse<any>>> = T extends Promise<AxiosResponse<infer R>>
  ? R
  : never;

export function useApi<F extends (...args: any) => any>(
  apiFunction: F,
): [IUseApiReturn<PromiseType<ReturnType<F>>>, F] {
  const [ret, setRet] = useState<IUseApiReturn<PromiseType<ReturnType<F>>>>({
    data: null,
    loading: false,
  });

  const request = useCallback(
    (...args: ArgumentTypes<F>) => {
      setRet((o) => {
        return {
          ...o,
          loading: true,
        };
      });
      return apiFunction
        .call(api, ...(args as any))
        .then((res: AxiosResponse<ReturnType<F>>) => {
          setRet((o) => {
            return {
              ...o,
              data: res.data,
              loading: false,
            };
          });
          return res;
        })
        .catch(() => {
          setRet(() => {
            return {
              data: null,
              loading: false,
            };
          });
        });
    },
    [apiFunction],
  );

  return [ret, request as F];
}

export function useApiResource<F extends (...args: any[]) => any>(
  api: F,
  params?: FirstArgumentType<F>,
  params2?: SecondArgumentType<F>,
): [IUseApiReturn<PromiseType<ReturnType<F>>>, F] {
  const [ret, request] = useApi(api);

  useEffect(() => {
    request(params, params2);
  }, [params, params2, request]);

  return [ret, request];
}

const api = new Api({
  baseURL: 'https://www.lingjiangtai.com/api/v1',
  secure: true,
  withCredentials: true,
  headers: {},
  securityWorker: async () => {
    const cookie = await SecureStore.getItem('Cookie');
    if (!cookie) {
      return {};
    }
    return {
      headers: {
        Cookie: cookie,
      },
    };
  },
});
export default api;
