import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { EpisodeData } from '@podpodium/common/lib/user-data-manager/v2';
import { ScreenEpisode, ScreenPodcastDetail } from '../common/constant';
import { descriptionToSummary, relative } from '../common/util';
import PlayButton from './PlayButton';
import AddToPlaylistButton from './AddToPlaylistButton';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RouteParamsList } from '../common/type';
import Avatar from './Avatar';
import { observer } from 'mobx-react-lite';
import { useTheme } from '../common/theme';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

const itemStyles = StyleSheet.create({
  wrapper: {
    marginBottom: 28,
  },
  inner: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  time: {
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
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

export interface EpisodeListItemSwipeableInstance {
  close: () => void;
}

interface EpisodeListItemProps {
  showPodcastAvatar?: boolean;
  episode: EpisodeData;
  onDelete?: (episode: EpisodeData) => void;
  onRightOpen?: (episode: EpisodeData, instance: EpisodeListItemSwipeableInstance) => void;
}

export const EpisodeListItem = observer((props: EpisodeListItemProps) => {
  const { episode, showPodcastAvatar, onDelete, onRightOpen } = props;
  const swipeableRef = useRef(null);
  const theme = useTheme();
  const summary = descriptionToSummary(episode.description);
  const nav = useNavigation<NavigationProp<RouteParamsList>>();

  const handleShowEpisodeDetail = () => {
    nav.dispatch(StackActions.push(ScreenEpisode, { id: episode.id, rssUrl: episode.podcast.url }));
  };

  const handleAvatarPress = () => {
    if (!showPodcastAvatar) {
      handleShowEpisodeDetail();
      return;
    }
    nav.dispatch(StackActions.push(ScreenPodcastDetail, { url: episode.podcast.url }));
  };

  const imageHref = showPodcastAvatar ? episode.podcast.image : episode.artwork || episode.podcast.image;
  const fallbackImageHref = episode.podcast.image;

  if (!episode.url) {
    return null;
  }

  const content = (
    <View style={itemStyles.inner}>
      <Text style={[itemStyles.time, { color: theme.SecondaryText }]}>{relative(episode.pubTime)}</Text>
      <View style={itemStyles.content}>
        <TouchableNativeFeedback onPress={handleAvatarPress}>
          <Avatar uri={[imageHref]} style={itemStyles.avatar} thumbnailSourceUri={fallbackImageHref} />
        </TouchableNativeFeedback>

        <View style={itemStyles.main}>
          <TouchableWithoutFeedback onPress={handleShowEpisodeDetail}>
            <View>
              <Text style={[itemStyles.title, { color: theme.PrimaryText }]}>{episode.title.trim()}</Text>
              {!!summary && (
                <Text style={[itemStyles.summary, { color: theme.SecondaryText }]} numberOfLines={2}>
                  {summary.replace(/\s+/g, ' ') || '--'}
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
          <View style={itemStyles.btns}>
            <AddToPlaylistButton episode={episode} />
            <Text style={itemStyles.btnGap} />
            <PlayButton episode={episode} duration={episode.duration} />
          </View>
        </View>
      </View>
    </View>
  );

  const enableSwipe = !!onDelete;

  return (
    <View style={itemStyles.wrapper}>
      {enableSwipe ? (
        <Swipeable
          useNativeAnimations
          ref={swipeableRef}
          rightThreshold={80}
          overshootRight={false}
          containerStyle={[{ backgroundColor: theme.CardBackground }]}
          childrenContainerStyle={{ backgroundColor: theme.ContentBackground }}
          onSwipeableWillOpen={(direction) => {
            if (direction === 'right' && swipeableRef.current && onRightOpen) {
              onRightOpen(episode, swipeableRef.current);
            }
          }}
          renderRightActions={(value) => {
            const scale = value.interpolate({
              inputRange: [0, 0.5, 1, 1],
              outputRange: [0, 0.5, 1, 1],
            });
            return (
              <RectButton onPress={() => onDelete?.(episode)}>
                <Animated.View style={[itemStyles.deleteAction, { transform: [{ scale }] }]}>
                  <Icon name="trash-outline" size={30} color={theme.DangerText} />
                </Animated.View>
              </RectButton>
            );
          }}
        >
          {content}
        </Swipeable>
      ) : (
        content
      )}
    </View>
  );
});

interface EpisodeListProps {
  showPodcastAvatar?: boolean;
  episodes: EpisodeData[];
}

export default function EpisodeList(props: EpisodeListProps) {
  const { episodes, showPodcastAvatar = true } = props;
  return (
    <View>
      {episodes.map((i) => (
        <EpisodeListItem key={i.id} episode={i} showPodcastAvatar={showPodcastAvatar} />
      ))}
    </View>
  );
}
