import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScreenEpisodeNoteEditor } from '../common/constant';
import { useRootState } from '../common/hook';
import { RouteParamsList } from '../common/type';
import LinkButton from './LinkButton';
import { useTranslation } from 'react-i18next';

export function NoteButton() {
  const rootState = useRootState();
  const currentEpisode = rootState.player.currentEpisode;
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const { t } = useTranslation();
  const handlePress = () => {
    if (!currentEpisode) {
      return;
    }
    nav.navigate(ScreenEpisodeNoteEditor, { rssUrl: currentEpisode.podcast.url, id: currentEpisode.id });
  };

  if (!currentEpisode) {
    return null;
  }

  return <LinkButton text={t('note.noteBtnText')} icon="file-document-edit-outline" onPress={handlePress} />;
}
