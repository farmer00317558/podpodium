import React from 'react';
import Toast from 'react-native-simple-toast';
import StateButton from './StateButton';
import { useRootState } from '../common/hook';
import { EpisodeData } from '@podpodium/common/lib/user-data-manager/v2';
import { useTranslation } from 'react-i18next';

interface IProps {
  episode: EpisodeData;
}

export default function AddToPlaylistButton(props: IProps) {
  const { episode } = props;
  const rootState = useRootState();
  const { t } = useTranslation();
  const handlePress = async () => {
    rootState.player.addNextToPlay(episode);
    Toast.showWithGravity(t('playlist.addSuccess'), Toast.SHORT, Toast.TOP);
  };
  return <StateButton icon="playlist-plus" text={t('playlist.addBtnText')} onPress={handlePress} />;
}
