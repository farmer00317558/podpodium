import { v2 } from '@podpodium/common';
import { cacheDataStorage, userDataStorage } from './util';

export const dataManager = new v2.UserDataManager(userDataStorage, cacheDataStorage);
