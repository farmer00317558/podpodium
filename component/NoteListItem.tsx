import React, { useCallback } from 'react';
import { useNavigation, NavigationProp, StackActions } from '@react-navigation/native';
import { View, Text, TouchableNativeFeedback, StyleSheet, Pressable } from 'react-native';
import { ScreenEpisode, ScreenEpisodeNoteEditor, ScreenPodcastDetail } from '../common/constant';
import { RouteParamsList } from '../common/type';
import { relative } from '../common/util';
import Avatar from './Avatar';
import { useTheme } from '../common/theme';
import { EpisodeNote } from '../common/editor';
import { dataManager } from '../common/user-data';
import { usePromiseResult } from '../common/hook';
import MultiPressable from './MultiTapOverlay';
import rootState from '../common/state';
import TrackPlayer from 'react-native-track-player';
import RichText from './RichText';

const itemStyles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  inner: {
    borderRadius: 4,
    overflow: 'hidden',
    padding: 16,
    paddingBottom: 0,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 5,
  },
  time: {
    marginBottom: 4,
    fontSize: 10,
  },
  header: {
    marginBottom: 16,
    flexDirection: 'row',
  },
  headerRight: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    marginBottom: 3,
  },
  summary: {
    fontSize: 14,
    lineHeight: 14 * 1.5,
    marginBottom: 3,
    textAlign: 'justify',
  },
  btns: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  btnGap: {
    marginRight: 5,
  },
  deleteAction: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
});

export interface NoteListItemSwipeableInstance {
  close: () => void;
}

interface NoteListItemProps {
  note: EpisodeNote;
  onDelete?: (note: EpisodeNote) => void;
}

export const NoteListItem = (props: NoteListItemProps) => {
  const { note } = props;
  const theme = useTheme();
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const { data: podcast } = usePromiseResult(
    useCallback(() => dataManager.getPodcastData(note.rss), [note.rss]),
  );

  const handleEdit = () => {
    nav.navigate(ScreenEpisodeNoteEditor, { rssUrl: note.rss, id: note.episodeId });
  };

  const handleShowEpisodeDetail = () => {
    nav.navigate(ScreenEpisode, { rssUrl: note.rss, id: note.episodeId });
  };

  const handleAvatarPress = () => {
    nav.dispatch(StackActions.push(ScreenPodcastDetail, { url: note.rss }));
  };

  const handleSeek = async (position: number) => {
    await rootState.player.playById(note.episodeId);
    TrackPlayer.seekTo(position);
  };

  const imageHref = podcast?.image;

  if (!note) {
    return null;
  }

  const content = (
    <MultiPressable onMultiPress={handleEdit}>
      <View style={[itemStyles.inner, { backgroundColor: theme.CardBackground }]}>
        <View style={itemStyles.header}>
          <TouchableNativeFeedback onPress={handleAvatarPress}>
            <Avatar uri={[imageHref]} style={itemStyles.avatar} />
          </TouchableNativeFeedback>
          <View style={itemStyles.headerRight}>
            <Pressable onPress={handleShowEpisodeDetail}>
              <View>
                <Text style={[itemStyles.time, { color: theme.SecondaryText }]}>
                  {relative(note.updateAt * 1000)}
                </Text>
                <Text style={[itemStyles.title, { color: theme.SecondaryText }]}>
                  {note.episodeTitle.trim()}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/* <Text>{JSON.stringify(JSON.parse(note.content), null, 2)}</Text> */}
        <RichText maxHeight={150} content={JSON.parse(note.content)} onSeek={handleSeek} />
      </View>
    </MultiPressable>
  );

  return <View style={itemStyles.wrapper}>{content}</View>;
};
