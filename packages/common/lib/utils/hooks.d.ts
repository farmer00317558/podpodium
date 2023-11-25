export interface UserPromiseResultReturn<T> {
    data: T | null;
    loading: boolean;
    err: string;
    reload: () => void;
}
export declare function usePromiseResult<T>(task: () => Promise<T>): UserPromiseResultReturn<T>;
