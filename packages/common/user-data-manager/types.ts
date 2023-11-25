export interface IStorage {
  setObject<T>(key: string, value: T): Promise<boolean>;
  getObject<T>(key: string): Promise<T | null>;
  getAllKeys(random?: number): Promise<string[]>;
  multiGet<T>(keys: string[]): Promise<[string, T][]>;
  multiRemove(keys: string[]): Promise<boolean>;
  clear(): Promise<boolean>;
  removeObject(key: string): Promise<boolean>;
}
