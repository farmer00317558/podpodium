import { IStorage } from '@podpodium/common/lib/user-data-manager/types';
import fs from 'react-native-fs';

const dataDir = `${fs.DocumentDirectoryPath}/data`;
const keysFile = `${dataDir}/keys`;

export default class FileStorage implements IStorage {
  initialized = false;
  keys: Record<string, string> = {};
  constructor() {
    this.init();
  }

  dataFile(name: string) {
    return `${dataDir}/${name}`;
  }

  async genDataFileName(extra: string = ''): Promise<string> {
    const dataName = Math.random().toString(36).substring(2);
    const dataFile = `${dataDir}/${extra}${dataName}`;
    if (await fs.exists(dataFile)) {
      return this.genDataFileName(dataName);
    }
    await fs.writeFile(dataFile, '');
    return dataName;
  }

  async init() {
    if (!(await fs.exists(dataDir))) {
      await fs.mkdir(dataDir);
      console.info('made data dir');
    }
    if (!(await fs.exists(keysFile))) {
      fs.writeFile(keysFile, '');
      console.info('made keys file');
    }
    await this.loadAllKeys();
    console.info('file storage initialized');
    this.initialized = true;
  }

  async loadAllKeys() {
    const content = await fs.readFile(keysFile);
    if (!content) {
      return;
    }
    this.keys = JSON.parse(content);
  }

  async dumpAllKeys() {
    await fs.writeFile(keysFile, JSON.stringify(this.keys));
  }

  async getAllKeys(): Promise<string[]> {
    return Object.keys(this.keys);
  }

  async setItem(key: string, value: string, dumpAllKeys = true) {
    let dataFileName = '';
    if (this.keys[key]) {
      dataFileName = this.keys[key];
    } else {
      dataFileName = await this.genDataFileName();
      this.keys[key] = dataFileName;
    }
    const dataFile = this.dataFile(dataFileName);
    await fs.writeFile(dataFile, value);
    if (dumpAllKeys) {
      await this.dumpAllKeys();
    }
    console.info('setItem:', key, dataFileName);
  }

  async getItem(key: string) {
    let dataFileName = '';
    if (this.keys[key]) {
      dataFileName = this.keys[key];
    } else {
      return '';
    }
    const dataFile = this.dataFile(dataFileName);
    const start = Date.now();
    const ret = await fs.readFile(dataFile);
    console.info('get item value from file:', dataFile, 'time:', Date.now() - start);
    return ret;
  }

  async removeItem(key: string, dumpAllKeys = true) {
    let dataFileName = '';
    if (this.keys[key]) {
      dataFileName = this.keys[key];
    } else {
      return '';
    }
    const dataFile = this.dataFile(dataFileName);
    await fs.unlink(dataFile);
    delete this.keys[key];
    if (dumpAllKeys) {
      await this.dumpAllKeys();
    }
  }

  async multiGetItem(keys: string[]) {
    const ret: [string, string][] = [];
    const tasks = keys.map(async (i) => {
      const v = await this.getItem(i);
      ret.push([i, v]);
    });
    await Promise.all(tasks);
    return ret;
  }

  async multiRemoveItem(keys: string[]) {
    const tasks = keys.map(async (i) => {
      await this.removeItem(i, false);
    });
    await Promise.all(tasks);
    await this.dumpAllKeys();
  }

  async multiGet<T>(keys: string[]): Promise<[string, T][]> {
    const value = await this.multiGetItem(keys);
    const ret: [string, T][] = [];
    value.forEach(([k, v]) => {
      if (!v) {
        return;
      }
      try {
        const start = Date.now();
        ret.push([k, JSON.parse(v)]);
        console.info('json parse file content time:', Date.now() - start);
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
    await fs.unlink(dataDir);
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
      console.error('set string err:', e);
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
