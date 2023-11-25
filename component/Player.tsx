import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useProgress } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import IonIcon from 'react-native-vector-icons/Ionicons';
import { fmtDuration } from '../common/util';
import { EpisodeItem } from '@podpodium/common';
import { Shadow } from 'react-native-shadow-2';
import { ScreenPlayer, ScreenPlaylist, ScreenPodcastDetail } from '../common/constant';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RouteParamsList } from '../common/type';
import Avatar from './Avatar';
import { useRootState } from '../common/hook';
import { observer } from 'mobx-react-lite';
import { GestureEvent, PanGestureHandler, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';
import PlayButton from './PlayButton';
import { useTheme } from '../common/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

interface IProps {
  episode?: EpisodeItem;
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  main: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatar: {
    width: 48,
    height: 48,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  control: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    marginTop: 8,
    fontSize: 12,
  },
  playListIcon: {
    marginLeft: 2,
    marginTop: 3,
  },
  playListIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 18,
    height: 36,
    width: 36,
  },
});

const Player = observer((props: { exactAtBottom?: boolean }) => {
  const { exactAtBottom = true } = props;
  // const { duration } = useProgress();
  const { bottom } = useSafeAreaInsets();
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const rootState = useRootState();
  const episode = rootState.player.currentEpisode;

  const handleOpenPlaylist = async () => {
    nav.navigate(ScreenPlaylist);
  };

  const handlePressAvatar = () => {
    nav.navigate(ScreenPodcastDetail, { url: episode!.podcast.url });
  };

  const handlePressContent = () => {
    nav.navigate(ScreenPlayer);
  };

  const handleGestureEvent = (e: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { translationY, velocityY } = e.nativeEvent;
    if (translationY < -90 && velocityY < -1500) {
      nav.navigate(ScreenPlayer);
    }
  };

  const avatarList = useMemo(() => [episode?.podcast.image], [episode?.podcast.image]);
  const theme = useTheme();
  const { t } = useTranslation();

  if (!episode) {
    return null;
  }

  const positionInStore = episode.listenInfo?.position || 0;
  const paddingBottom = exactAtBottom ? bottom : 0;

  return (
    <Shadow
      viewStyle={[styles.wrapper, { backgroundColor: theme.ModalBackground, paddingBottom }]}
      startColor={theme.Shadow}
      sides={['top']}
    >
      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <View style={styles.main}>
          <TouchableOpacity style={styles.avatar} onPress={handlePressAvatar}>
            <Avatar uri={avatarList as string[]} style={styles.avatar} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={handlePressContent}>
            <View>
              <Text style={{ color: theme.PrimaryText }} numberOfLines={1}>
                {episode.title.trim()}
              </Text>
              <Text style={[styles.time, { color: theme.SecondaryText }]}>
                {t('player.remainTime')} {fmtDuration((episode.duration || 0) - positionInStore)}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.control}>
            <PlayButton episodeId={episode.id} iconOnly iconSize={40} />
            <TouchableOpacity
              style={[
                styles.playListIconWrapper,
                {
                  backgroundColor: theme.CardBackground,
                },
              ]}
              onPress={handleOpenPlaylist}
            >
              <Icon size={20} name="playlist-play" color={theme.PrimaryText} style={styles.playListIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </PanGestureHandler>
    </Shadow>
  );
});

export default Player;
