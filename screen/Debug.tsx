import React from 'react';
import Toast from 'react-native-simple-toast';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import SecureStore from 'react-native-encrypted-storage';
import ScreenWrapper from '../component/ScreenWrapper';
import { dataManager } from '../common/user-data';
import TrackPlayer from 'react-native-track-player';
import FastImage from 'react-native-fast-image';
import fs from 'react-native-fs';
import { useRootState } from '../common/hook';
import { cacheDataStorage, userDataStorage } from '../common/util';
import { v2 } from '@podpodium/common';
import { TextInput } from 'react-native-gesture-handler';
import MenuItem from '../component/MenuItem';
import { ScreenDebugEditor } from '../common/constant';

const track1 = {
  album: '',
  artist: '卖鱼桥分桥',
  artwork: 'https://image.xyzcdn.net/Fk1EwmQHsWQ_wsIwYvm0Bp8B4AYE.png',
  contentType: 'audio/mp4',
  duration: 3155,
  contentLength: 3155,
  id: '4216o5',
  podcastId: 'KJzdzK',
  podcastImageHref: 'https://image.xyzcdn.net/FrDhSsYWWweWRrPIBxxxkggVrOTW.png',
  podcastTitle: '卖鱼桥分桥',
  position: 0,
  title: '68.去贵州团建是什么体验？',
  url: 'https://dts-api.xiaoyuzhoufm.com/track/607e818b3bfd9e4d8913a87b/631416004337559012241104/media.xyzcdn.net/loWWQtqPBUEww-INT0p-BbatKn7Y.m4a?from=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/94.0.4606.81%20Safari/537.36',
};

const track2 = {
  album: '',
  artist: '路人抓马',
  artwork: 'https://fdfs.xmcdn.com/storages/bff3-audiofreehighqps/AD/D6/GKwRIUEG7NcOAAGzjAGdOEVe.jpeg',
  contentType: 'audio/x-m4a',
  duration: 3398,
  id: 'P4J3Ga',
  podcastId: 'gK82Yb',
  podcastImageHref: 'https://cdn.wavpub.com/images/podcast-logo/dramaboy-n.jpeg',
  podcastTitle: '路人抓马',
  position: 447.943,
  title: '099 中秋去哪儿？等通知',
  url: 'https://dl.wavpub.com/item/159_31580326_7683.m4a',
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
  },
  button: {
    marginBottom: 8,
  },
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontWeight: '700',
  },
});

export default function Debug() {
  const rootState = useRootState();
  const handleStatStorage = async () => {
    const keys = await userDataStorage.getAllKeys();
    console.info('keys:', keys);
    for (const k of keys) {
      const data = await userDataStorage.getString(k);
      console.info(k, data.length);
    }
  };
  const handleClearSecure = async () => {
    await SecureStore.clear();
    Toast.showWithGravity('认证数据已清理', Toast.SHORT, Toast.TOP);
  };
  const handleClear = async () => {
    await userDataStorage.clear();
    await cacheDataStorage.clear();
    Toast.showWithGravity('数据已清理', Toast.SHORT, Toast.TOP);
  };
  const handleDump = async () => {
    const d = await dataManager.dumpUserData();
    console.info('user data:', JSON.stringify(d, null, 4));
  };
  return (
    <ScreenWrapper>
      <ScrollView style={styles.wrapper}>
        <MenuItem text={'Editor'} screen={ScreenDebugEditor} />
        <Text style={styles.title}>数据</Text>
        <View style={styles.button}>
          <Button title="存储信息" onPress={handleStatStorage} />
        </View>
        <View style={styles.button}>
          <Button title="清空认证信息" onPress={handleClearSecure} />
        </View>
        <View style={styles.button}>
          <Button title="清空本地数据" onPress={handleClear} />
        </View>
        <View style={styles.button}>
          <Button
            title="清空缓存数据"
            onPress={() => {
              cacheDataStorage.clear();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button title="DUMP" onPress={handleDump} />
        </View>
        <View style={styles.button}>
          <Button
            title="添加: 卖鱼桥"
            onPress={async () => {
              await TrackPlayer.add(track1);
              TrackPlayer.updateNowPlayingMetadata(track1);
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="添加: 路人抓马"
            onPress={() => {
              TrackPlayer.add(track2);
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Get Queue"
            onPress={() => {
              TrackPlayer.getQueue().then((q) => {
                const list = q.map((i) => ({
                  url: i.url,
                  title: i.title,
                  duration: i.duration,
                  artwork: i.artwork,
                }));
                console.info(JSON.stringify(list, null, 4));
              });
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Setup Player"
            onPress={() => {
              rootState.player.setupPlayer();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Reset Player"
            onPress={() => {
              TrackPlayer.reset();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="播放"
            onPress={() => {
              TrackPlayer.play();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="seek track1 to last 5s"
            onPress={async () => {
              const duration = await TrackPlayer.getDuration();
              TrackPlayer.seekTo(duration - 5);
            }}
          />
        </View>
        <Text style={styles.title}>文件</Text>
        <View>
          <Text>CacheDir: {fs.CachesDirectoryPath}</Text>
          <Text>DocumentDir: {fs.DocumentDirectoryPath}</Text>
          <Text>DownloadDir: {fs.DownloadDirectoryPath}</Text>
          <Text>TempDir: {fs.TemporaryDirectoryPath}</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="写缓存文件"
            onPress={async () => {
              const duration = await TrackPlayer.getDuration();
              TrackPlayer.seekTo(duration - 5);
            }}
          />
        </View>
        <Text style={styles.title}>SQLite</Text>
        <View style={styles.button}>
          <Button
            title="ALL Data"
            onPress={async () => {
              const [res] = await userDataStorage.exec('select * from data');
              res.rows.raw().forEach((i) => {
                console.info(i.data_key, (i.data_value as string).substring(0, 50));
              });
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="all user data keys"
            onPress={async () => {
              const [res] = await userDataStorage.exec('select data_key from data');
              res.rows.raw().forEach((i) => {
                console.info(i.data_key);
              });
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="all cache data keys"
            onPress={async () => {
              const [res] = await cacheDataStorage.exec('select data_key from data');
              res.rows.raw().forEach((i) => {
                console.info(i.data_key);
              });
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="feeds"
            onPress={async () => {
              const [res] = await dataManager.feeds(1);
              console.info('feeds:', JSON.stringify(res, null, 2));
            }}
          />
        </View>
        {Object.values(v2.UserDataKeyEnum).map((i) => {
          return (
            <View key={i} style={styles.button}>
              <Button
                title={`${i} data`}
                onPress={async () => {
                  const [res] = await userDataStorage.exec('select * from data where data_key=?', [
                    v2.userDataKey(i as any),
                  ]);
                  if (res.rows.length === 0) {
                    console.info('no data');
                    return;
                  }
                  console.info(`data of ${i}:`);
                  console.info(JSON.stringify(JSON.parse(res.rows.item(0).data_value), null, 2));
                }}
              />
            </View>
          );
        })}
        <Text style={styles.title}>Image</Text>
        <View style={styles.button}>
          <Button
            title="Clear image cache"
            onPress={async () => {
              FastImage.clearDiskCache();
              FastImage.clearDiskCache();
            }}
          />
        </View>
        <Text style={styles.title}>Network</Text>
        <View style={styles.button}>
          <Button
            title="Fetch"
            onPress={async () => {
              fetch('https://storyfm.cn/feed/episodes', {
                headers: {
                  accept:
                    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                  'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                  'cache-control': 'no-cache',
                  pragma: 'no-cache',
                  'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
                  'sec-ch-ua-mobile': '?0',
                  'sec-ch-ua-platform': '"macOS"',
                  'sec-fetch-dest': 'document',
                  'sec-fetch-mode': 'navigate',
                  'sec-fetch-site': 'none',
                  'sec-fetch-user': '?1',
                  'upgrade-insecure-requests': '1',
                },
                body: null,
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
              });
            }}
          />
        </View>

        <Text style={styles.title}>RSS</Text>
        <TextInput
          multiline
          value={[
            'http://www.ximalaya.com/album/50529590.xml',
            'http://www.ximalaya.com/album/33969444.xml',
            'http://www.ximalaya.com/album/39153770.xml',
            'https://feeds.captivate.fm/jingdizhiwa/',
            'http://www.ximalaya.com/album/42653202.xml',
            'http://www.ximalaya.com/album/36087401.xml',
            'http://www.ximalaya.com/album/26659536.xml',
            'http://rss.lizhi.fm/rss/1450653.xml',
            'http://www.ximalaya.com/album/57092869.xml',
            'http://www.ximalaya.com/album/45768498.xml',
            'http://www.ximalaya.com/album/46935346.xml',
            'http://rss.lizhi.fm/rss/163038937.xml',
            'http://www.ximalaya.com/album/45016286.xml',
            'http://www.ximalaya.com/album/24043533.xml',
            'http://www.ximalaya.com/album/46647463.xml',
            'http://rss.lizhi.fm/rss/10824256.xml',
            'http://www.ximalaya.com/album/42702984.xml',
            'http://www.ximalaya.com/album/44286743.xml',
          ].join('\n')}
          selectTextOnFocus
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
