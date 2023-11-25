import React, { useEffect, useRef, useState } from 'react';
import { LayoutChangeEvent, Platform, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  State,
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { View } from 'react-native';
import TrackPlayer, { usePlaybackState, State as TrackState } from 'react-native-track-player';
import { fmtDuration } from '../common/util';
import { useRootState } from '../common/hook';
import Empty from './Empty';
import { observer } from 'mobx-react-lite';
import { useTheme, dark } from '../common/theme';
import { EpisodeData } from '@podpodium/common/lib/user-data-manager/v2';
import { dataManager } from '../common/user-data';

interface IProps {
  episodeId: string;
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
  },
  inner: {
    height: 40,
  },
  timeBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  timeAndroid: {
    fontFamily: 'monospace',
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
  },
  timeIOS: {
    fontFamily: 'Courier',
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
  },
});

interface ProgressBarProps {
  episode?: EpisodeData;
  forceLight?: boolean;
}

function ProgressBar(props: ProgressBarProps) {
  const { forceLight = false, episode } = props;
  const rootState = useRootState();
  const trackState = usePlaybackState();
  const currentTrack = rootState.player.currentEpisode;
  const [currentPosition, setCurrentPosition] = useState(currentTrack?.listenInfo?.position || 0);
  const duration = episode?.duration || currentTrack?.duration || 1;
  const barWidth = useRef<number>(1);
  const dragStartPosition = useRef<number>(0);
  const dragEndPosition = useRef<number>(0);
  const dragging = useRef(false);
  const draggingTimeoutId = useRef<NodeJS.Timeout>();
  const theme = useTheme();

  const isActive = !episode || episode.id === currentTrack?.id;

  useEffect(() => {
    if (dragging.current) {
      return;
    }
    if (episode && !isActive) {
      dataManager.getListenData().then((data) => {
        const listenInfo = data[episode.id];
        console.info(data);
        setCurrentPosition(listenInfo.position);
      });
      return;
    }
    const position = currentTrack?.listenInfo?.position || 0;
    console.info('current track position:', position);
    setCurrentPosition(position);
  }, [currentTrack?.listenInfo?.position, episode, isActive]);

  const handleGestureEvent = (e: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { translationX, state } = e.nativeEvent;
    if (state === State.ACTIVE && currentTrack) {
      const dp = dragStartPosition.current + (translationX / barWidth.current) * duration;
      const nextPosition = dp < 0 ? 0 : dp;
      dragEndPosition.current = nextPosition;
      setCurrentPosition(nextPosition);
    }
  };

  const handleGestureState = async (e: GestureEvent<PanGestureHandlerEventPayload>) => {
    const { state } = e.nativeEvent;

    if (!currentTrack) {
      return;
    }

    if (state === State.BEGAN) {
      dragging.current = true;
      dragStartPosition.current = currentPosition;
      if (draggingTimeoutId.current) {
        clearTimeout(draggingTimeoutId.current);
      }
    }

    if (state === State.END) {
      const nextPosition = dragEndPosition.current;
      if (trackState !== TrackState.Playing) {
        rootState.player.reportCurrentTrackListenInfo(nextPosition);
      }
      await TrackPlayer.seekTo(nextPosition);
      console.info('seek to:', nextPosition);

      draggingTimeoutId.current = setTimeout(() => {
        dragging.current = false;
      }, 1000);
    }
  };

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    barWidth.current = width || 1;
  };

  if (!currentTrack) {
    return (
      <View>
        <Empty text="没有可以展示的单集" />
      </View>
    );
  }

  const width = (currentPosition / duration) * 100;
  const timeStyle = Platform.OS === 'android' ? styles.timeAndroid : styles.timeIOS;
  return (
    <View>
      <View style={styles.timeBar}>
        <Text style={[timeStyle, { color: forceLight ? dark.PrimaryText : theme.PrimaryText }]}>
          {fmtDuration(currentPosition, duration > 60, true)}
        </Text>
        <Text style={[timeStyle, { color: forceLight ? dark.PrimaryText : theme.PrimaryText }]}>
          {fmtDuration(duration, true, true)}
        </Text>
      </View>
      <PanGestureHandler
        enabled={isActive}
        onHandlerStateChange={handleGestureState}
        onGestureEvent={handleGestureEvent}
      >
        <View
          style={[
            styles.wrapper,
            { backgroundColor: forceLight ? dark.MaskBackground : theme.LightCardBackground },
          ]}
          onLayout={handleLayout}
        >
          <LinearGradient
            colors={['#C2FFD8', '#465EFB']}
            locations={[0.1, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.inner, { width: `${width}%` }]}
          />
        </View>
      </PanGestureHandler>
    </View>
  );
}

export default observer(ProgressBar);
