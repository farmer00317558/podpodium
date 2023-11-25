import React from 'react';
import StateButton from './StateButton';
import { fmtDuration } from '../common/util';
import { useEpisodePlayState, useRootState } from '../common/hook';
import TrackPlayer from 'react-native-track-player';
import { observer } from 'mobx-react-lite';
import { TouchableOpacityProps } from 'react-native';
import { EpisodeData } from '@podpodium/common/lib/user-data-manager/v2';
import { useTranslation } from 'react-i18next';

interface IProps extends TouchableOpacityProps {
  // Track 队列中的某个单集
  episodeId?: string;

  // Track 队列中没有的话会将其添加到队列中
  episode?: EpisodeData;
  iconOnly?: boolean;
  iconSize?: number;
  color?: string;
  duration?: number;
}

function PlayButton(props: IProps) {
  const { episode, episodeId, duration, iconOnly, iconSize, color, ...otherProps } = props;
  const id = episodeId || episode?.id;
  const rootState = useRootState();
  const state = useEpisodePlayState(id);
  const { t } = useTranslation();

  const handlePress = async () => {
    if (state.active) {
      await TrackPlayer.pause();
      return;
    }
    if (episodeId) {
      console.info('play button by id:', episodeId);
      await rootState.player.playById(episodeId);
    } else if (episode) {
      console.info('play button by episode:', episode.title);
      await rootState.player.play(episode);
    }
  };

  return (
    <StateButton
      loading={state.loading}
      iconOnly={iconOnly}
      iconSize={iconSize}
      active={state.active}
      color={color}
      onPress={handlePress}
      icon="play-circle-outline"
      activeIcon="pause-circle-outline"
      activeText={t('player.playingBtnText')}
      text={duration === undefined ? t('player.playBtnText') : fmtDuration(duration)}
      {...otherProps}
    />
  );
}

export default observer(PlayButton);
