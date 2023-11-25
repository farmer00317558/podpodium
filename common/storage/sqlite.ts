import { IStorage } from '@podpodium/common/lib/user-data-manager/types';
import SQLite, { Location, SQLiteDatabase, Transaction } from 'react-native-sqlite-storage';

export const keyValueTableInitSql = `
  CREATE TABLE IF NOT EXISTS data(
    data_key   VARCHAR(2048) PRIMARY KEY NOT NULL,
    data_value TEXT NOT NULL DEFAULT ''
  );
`;

export const notesTableInitSql = `
  CREATE TABLE IF NOT EXISTS notes(
    episodeId VARCHAR(1024) NOT NULL DEFAULT '',
    episodeUrl VARCHAR(1024) NOT NULL DEFAULT '',
    episodeTitle VARCHAR(1024) NOT NULL DEFAULT '',
    rss VARCHAR(1024) NOT NULL DEFAULT '',
    content TEXT NOT NULL DEFAULT '',
    updateAt INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (episodeUrl, episodeTitle, rss)
  );
`;

SQLite.enablePromise(true);

export class SQLiteStorage implements IStorage {
  initialized = false;
  keys: Record<string, string> = {};
  private db: Promise<SQLiteDatabase>;

  constructor(name: string, initSql: string[], location: Location = 'default') {
    const init = async () => {
      const db = await SQLite.openDatabase({ name, location });
      for (const sql of initSql) {
        await db.executeSql(sql);
      }
      return db;
    };
    this.db = init();
  }

  async exec(sql: string, params?: any[]) {
    // const start = Date.now();
    const ret = await this.db.then((db) => db.executeSql(sql, params));
    // console.info(
    //   `exec sql: ${sql}`,
    //   // `params: ${params ? `[${params.slice(0, 1)},...]` : []}`,
    //   `length: ${ret[0].rows.length}`,
    //   `time: ${Date.now() - start}`,
    // );
    return ret;
  }

  async transaction(scope: (tx: Transaction) => void) {
    return this.db.then((db) => db.transaction(scope));
  }

  async getAllKeys(random?: number): Promise<string[]> {
    const [result] = await this.exec(
      `select data_key from data ${(random ?? 0) > 0 ? `order by RANDOM() limit ${random}` : ''}`,
    );
    return result.rows.raw().map((i) => i.data_key);
  }

  async setItem(key: string, value: string) {
    const [result] = await this.exec('insert or replace into data(data_key, data_value) values(?, ?)', [
      key,
      value,
    ]);
    return result.rows.length > 0;
  }

  async getItem(key: string) {
    const [result] = await this.exec('select * from data where data_key=?', [key]);

    if (result.rows.length > 0) {
      const ret = result.rows.item(0).data_value;
      return ret;
    }
    return '';
  }

  async removeItem(key: string) {
    const [result] = await this.exec('delete from data where data_key=?', [key]);
    return result.rowsAffected > 0;
  }

  async multiGetItem(keys: string[]): Promise<[string, string][]> {
    const [result] = await this.exec(
      `select data_key, data_value from data where data_key in (${keys.map((i) => `'${i}'`).join(',')})`,
    );
    return result.rows.raw().map((i) => [i.data_key, i.data_value]);
  }

  async multiRemoveItem(keys: string[]) {
    return this.exec(`delete from data where data_key in (${keys.map((i) => `'${i}'`).join(',')})`);
  }

  async multiGet<T>(keys: string[]): Promise<[string, T][]> {
    const ret: [string, T][] = [];
    const value = await this.multiGetItem(keys);
    value.forEach(([k, v]) => {
      if (!v) {
        return;
      }
      try {
        // const start = Date.now();
        const data = JSON.parse(v);
        ret.push([k, data]);
        // console.debug('json parse file content time:', Date.now() - start);
      } catch (e) {
        console.error(e);
      }
    });
    return ret;
  }

  async multiRemove(keys: string[]): Promise<boolean> {
    await this.multiRemoveItem(keys);
    return true;
  }

  async clear(): Promise<boolean> {
    await this.exec('delete from data');
    return true;
  }

  async removeObject(key: string): Promise<boolean> {
    await this.removeItem(key);
    return true;
  }

  async setString(key: string, value: string): Promise<boolean> {
    try {
      await this.setItem(key, value);
      return true;
    } catch (e) {
      console.error('set string err:', e, 'key:', key);
      return false;
    }
  }

  async getString(key: string): Promise<string> {
    try {
      const r = await this.getItem(key);
      return r || '';
    } catch (e) {
      console.error('get string err:', e);
      return '';
    }
  }

  async setObject<T>(key: string, value: T): Promise<boolean> {
    return this.setString(key, JSON.stringify(value));
  }

  async getObject<T>(key: string): Promise<T | null> {
    try {
      const r = await this.getItem(key);
      if (r) {
        return JSON.parse(r);
      } else {
        return null;
      }
    } catch (e) {
      console.error('get object err:', e);
      return null;
    }
  }
}
