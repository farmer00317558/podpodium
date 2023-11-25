import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { FlatList, Swipeable } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';
import { ScreenEpisode, ScreenPodcastDetail } from '../common/constant';
import PlayButton from '../component/PlayButton';
import { fmtDuration } from '../common/util';
import Avatar from '../component/Avatar';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RouteParamsList } from '../common/type';
import { useRootState } from '../common/hook';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { EpisodeData, ListenedEpisodeItem } from '@podpodium/common/lib/user-data-manager/v2';
import Empty from '../component/Empty';
import { useTheme } from '../common/theme';
import { useTranslation } from 'react-i18next';
import TrackPlayer from 'react-native-track-player';
import { dataManager } from '../common/user-data';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 8,
    alignSelf: 'center',
  },
  duration: {
    fontSize: 12,
  },
  control: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  item: {
    marginBottom: 16,
  },
  itemInner: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    marginBottom: 3,
    lineHeight: 14 * 1.6,
    textAlign: 'justify',
  },
  itemActionLeft: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemActionRight: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemActionText: {
    fontSize: 14,
  },
});

interface IItemProps {
  enableSwipe: boolean;
  episode: ListenedEpisodeItem;
}

const Item = observer((props: IItemProps) => {
  const { episode, enableSwipe = true } = props;
  const swipRef = useRef<Swipeable>(null);
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const { width } = useWindowDimensions();
  const rootState = useRootState();
  const swiping = useRef(false);
  const translate = useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const { t } = useTranslation();

  const handleShowEpisode = (e: EpisodeData) => {
    if (swiping.current) {
      return;
    }
    nav.navigate(ScreenEpisode, { id: e.id, rssUrl: e.podcast.url });
  };

  const handleShowPodcast = (e: EpisodeData) => {
    if (swiping.current) {
      return;
    }
    nav.navigate(ScreenPodcastDetail, { url: e.podcast.url });
  };

  const renderLeft = () => {
    return (
      <View style={[styles.itemActionLeft, { backgroundColor: theme.CardBackground }]}>
        <MaterialCommunityIcon size={30} name="playlist-remove" />
      </View>
    );
  };
  const renderRight = () => {
    return (
      <View style={[styles.itemActionRight, { backgroundColor: theme.CardBackground }]}>
        <MaterialCommunityIcon size={30} name="transfer-up" />
      </View>
    );
  };

  const handleLeftOpen = () => {
    Animated.timing(translate, {
      toValue: width,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      rootState.player.removeFromPlaylist(episode.id);
    });
  };

  const handleRightOpen = async () => {
    await rootState.player.addNextToPlayById(episode.id);
    swipRef.current?.close();
  };

  return (
    <Animated.View style={[styles.item]}>
      <Swipeable
        ref={swipRef}
        enabled={enableSwipe}
        onSwipeableLeftWillOpen={handleLeftOpen}
        onSwipeableRightWillOpen={handleRightOpen}
        leftThreshold={width / 3}
        rightThreshold={width / 3}
        renderLeftActions={renderLeft}
        renderRightActions={renderRight}
      >
        <View style={[styles.itemInner, { backgroundColor: theme.ContentBackground }]}>
          <TouchableOpacity onPress={() => handleShowPodcast(episode)}>
            <Avatar uri={[episode.podcast.image]} />
          </TouchableOpacity>
          <View style={styles.itemContent}>
            <TouchableOpacity onPress={() => handleShowEpisode(episode)}>
              <Text numberOfLines={2} style={[styles.title, { color: theme.PrimaryText }]}>
                {episode.title}
              </Text>
              <Text numberOfLines={1} style={[styles.duration, { color: theme.SecondaryText }]}>
                {t('player.remainTime')}{' '}
                {episode.duration && fmtDuration(episode.duration - (episode.listenInfo?.position || 0))}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.control}>
            <PlayButton iconOnly episodeId={episode.id} />
          </View>
        </View>
      </Swipeable>
    </Animated.View>
  );
});

function Playlist() {
  const rootState = useRootState();
  const theme = useTheme();
  const { t } = useTranslation();
  const needUpdatePlaylistRef = useRef(false);
  const checkingRef = useRef(false);
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const playlist = rootState.player.playlist;
  const currentEpisode = rootState.player.currentEpisode;
  const [tracks, setTracks] = useState<ListenedEpisodeItem[]>([]);

  useEffect(() => {
    if (needUpdatePlaylistRef.current) {
      console.info('update playlist');
      rootState.player.updatePlaylist(tracks);
    }
  }, [rootState.player, tracks]);

  useEffect(() => {
    if (checkingRef.current) {
      return;
    }
    checkingRef.current = true;
    needUpdatePlaylistRef.current = false;
    TrackPlayer.getQueue()
      .then(async (queue) => {
        const nextTracks: ListenedEpisodeItem[] = [];
        for (let i = 0; i < queue.length; i++) {
          const item = queue[i];
          const expected = playlist.length > i && playlist[i];
          if (expected && expected.id === item.id) {
            nextTracks.push(expected);
            continue;
          }

          const itemInOtherPosition = playlist.find((i) => i.id === item.id);
          if (itemInOtherPosition) {
            needUpdatePlaylistRef.current = true;
            nextTracks.push(itemInOtherPosition);
            console.info('find track in playlist at different position');
            continue;
          }

          if (item.rssUrl) {
            const episode = await dataManager.getEpisodeData(item.rssUrl, item.id);
            console.warn('restore playlist item in track');
            if (episode) {
              nextTracks.push(episode);
            }
            continue;
          }
        }
        setTracks(nextTracks);
        needUpdatePlaylistRef.current =
          needUpdatePlaylistRef.current || nextTracks.length !== playlist.length;
        checkingRef.current = false;
      })
      .catch(() => {
        checkingRef.current = false;
      });
  }, [playlist]);

  useLayoutEffect(() => {
    nav.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(t('confirmTitle'), t('playlist.clearConfirm'), [
                {
                  text: t('cancelBtnText'),
                },
                {
                  text: t('okBtnText'),
                  onPress: async () => {
                    rootState.player.clearPlaylist();
                  },
                },
              ]);
            }}
          >
            <Icon name="trash-outline" size={20} color={theme.SecondaryText} />
          </TouchableOpacity>
        );
      },
    });
  }, [nav, rootState.player, t, theme.SecondaryText]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={tracks}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Empty text="空空如也" />}
        renderItem={(i) => (
          <Item enableSwipe={i.item.id !== currentEpisode?.id} key={i.index} episode={i.item} />
        )}
      />
    </SafeAreaView>
  );
}

export default observer(Playlist);
