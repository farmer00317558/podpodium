import { episodeLink } from '@podpodium/common';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useLayoutEffect } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ScreenEpisode,
  ScreenEpisodeNoteEditor,
  ScreenPlayer,
  ScreenPlaySetting,
  ScreenPodcastDetail,
} from '../common/constant';
import { useRootState } from '../common/hook';
import { useTheme } from '../common/theme';
import { RouteParamsList, ShareTargetEnum } from '../common/type';
import { relative } from '../common/util';
import Avatar from '../component/Avatar';
import FavoriteButton from '../component/FavoriteButton';
import PlayButton from '../component/PlayButton';
import ProgressBar from '../component/ProgressBar';
import ShareButton from '../component/ShareButton';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cover: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImg: {
    width: 230,
    height: 230,
  },
  title: {
    width: 300,
    fontSize: 18,
    lineHeight: 18 * 1.8,
    textAlign: 'center',
  },
  btns: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    justifyContent: 'space-around',
  },
  pubDate: {
    textAlign: 'center',
    marginBottom: 5,
  },
  playBtn: {},
  progress: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 26,
    paddingRight: 26,
  },
  podcast: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  podcastAvatar: {
    marginRight: 10,
    width: 40,
    height: 40,
  },
  podcastTitleWrapper: {
    maxWidth: 240,
  },
  podcastTitle: {},
  podcastFromTxt: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const Player = observer(() => {
  const nav = useNavigation<NavigationProp<RouteParamsList, typeof ScreenPlayer>>();
  const rootState = useRootState();
  const theme = useTheme();
  const { t } = useTranslation();
  const episode = rootState.player.currentEpisode;

  useEffect(() => {
    if (!episode) {
      nav.goBack();
    }
  }, [nav, episode]);

  useLayoutEffect(() => {
    if (!episode) {
      return;
    }
    const shareMessage = {
      url: episodeLink(episode),
      title: episode.title || '',
      message: episode.title || '',
    };
    const options: NativeStackNavigationOptions = {
      headerRight: ({ tintColor }) => {
        return (
          <ShareButton
            id={episode.id}
            rssUrl={episode.podcast.url}
            color={tintColor}
            message={shareMessage}
            target={ShareTargetEnum.Episode}
          />
        );
      },
    };
    nav.setOptions(options);
  }, [nav, episode]);

  if (!episode) {
    return null;
  }

  const handleShowPlaySetting = () => {
    nav.navigate(ScreenPlaySetting);
  };

  const handleShowPodcast = () => {
    nav.navigate(ScreenPodcastDetail, { url: episode.podcast.url });
  };

  const handleShowEpisode = () => {
    nav.navigate(ScreenEpisode, { id: episode.id, rssUrl: episode.podcast.url });
  };

  const handleShowNoteEditor = () => {
    nav.navigate(ScreenEpisodeNoteEditor, { id: episode.id, rssUrl: episode.podcast.url });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cover}>
        <Avatar uri={[(episode.artwork as string) || episode.podcast.image]} style={styles.coverImg} />
      </View>
      <Pressable onPress={handleShowEpisode}>
        <View>
          <Text style={[styles.pubDate, { color: theme.SecondaryText }]}>{relative(episode.pubTime)}</Text>
          <Text style={[styles.title, { color: theme.PrimaryText }]} numberOfLines={2}>
            {episode.title}
          </Text>
        </View>
      </Pressable>
      <View>
        <Pressable onPress={handleShowPodcast} style={styles.podcast}>
          <Avatar style={styles.podcastAvatar} uri={[episode.podcast.image]} />
          <View style={styles.podcastTitleWrapper}>
            <Text style={[styles.podcastFromTxt, { color: theme.SecondaryText }]}>
              {t('player.episodeFrom')}
            </Text>
            <Text style={[styles.podcastTitle, { color: theme.Primary }]} numberOfLines={1}>
              {episode.podcast.title}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.progress}>
        <ProgressBar />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={handleShowEpisode}>
          <Icon color={theme.PrimaryText} name="information-outline" size={26} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowPlaySetting}>
          <Icon color={theme.PrimaryText} name="headphones-settings" size={26} />
        </TouchableOpacity>
        <View style={styles.playBtn}>
          <PlayButton iconOnly iconSize={60} episodeId={episode.id} />
        </View>
        <FavoriteButton episode={episode} />
        <TouchableOpacity onPress={handleShowNoteEditor}>
          <Icon color={theme.PrimaryText} name="file-document-edit-outline" size={26} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

export default Player;
