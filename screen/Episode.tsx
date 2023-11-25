import { NavigationProp, RouteProp, StackActions, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScreenEpisode, ScreenPodcastDetail } from '../common/constant';
import { RouteParamsList, ShareTargetEnum } from '../common/type';
import { relative } from '../common/util';
import PlayButton from '../component/PlayButton';
import HTMLContent from '../component/HTMLContent';
import Avatar from '../component/Avatar';
import ScreenWrapper from '../component/ScreenWrapper';
import AddToPlaylistButton from '../component/AddToPlaylistButton';
import { dataManager } from '../common/user-data';
import { usePromiseResult } from '../common/hook';
import PodcastLoading from '../component/PodcastLoading';
import ShareButton from '../component/ShareButton';
import { episodeLink } from '@podpodium/common';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingTop: 0,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  from: {
    fontSize: 14,
    marginBottom: 10,
    flexDirection: 'row',
  },
  pubDate: {
    marginBottom: 10,
  },
  podcast: {},
  headerContent: { flex: 1, marginLeft: 10 },
  btns: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  btnGap: {
    marginRight: 5,
  },
});

export default function Episode() {
  const route = useRoute<RouteProp<RouteParamsList, typeof ScreenEpisode>>();
  const { id, rssUrl } = route.params;
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const ret = usePromiseResult(
    useCallback(async () => await dataManager.getEpisodeData(rssUrl, id), [rssUrl, id]),
  );
  const { data: episode, loading, err, reload } = ret;
  const podcast = episode?.podcast;

  const handleEnterPodcast = () => {
    if (podcast) {
      nav.dispatch(StackActions.push(ScreenPodcastDetail, { url: podcast.url }));
    }
  };

  const avatarList = useMemo(() => [episode?.artwork || podcast?.image], [episode?.artwork, podcast?.image]);
  const theme = useTheme();

  useLayoutEffect(() => {
    if (!episode) {
      return;
    }
    const title = episode.title;
    const webUrl = episodeLink(episode);
    const message = episode.title;
    nav.setOptions({
      headerRight: ({ tintColor }: any) => {
        return (
          <ShareButton
            id={episode.id}
            rssUrl={episode.podcast.url}
            color={tintColor}
            target={ShareTargetEnum.Episode}
            message={{ title, url: webUrl, message }}
          />
        );
      },
    });
  }, [episode, nav]);

  if (!episode) {
    return <PodcastLoading err={err} loading={loading} onRetry={() => reload()} rss={rssUrl} />;
  }

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Avatar uri={avatarList} thumbnailSourceUri={episode.artwork} />
        <View style={styles.headerContent}>
          <Text style={[styles.title, { color: theme.PrimaryText }]}>{episode?.title}</Text>
          <View style={styles.from}>
            <TouchableOpacity onPress={handleEnterPodcast}>
              <Text style={[styles.podcast, { color: theme.Primary }]}>{podcast?.title}</Text>
            </TouchableOpacity>
          </View>
          {episode && (
            <Text style={[styles.pubDate, { color: theme.SecondaryText }]}>{relative(episode.pubTime)}</Text>
          )}
          {episode && (
            <View style={styles.btns}>
              <AddToPlaylistButton episode={episode} />
              <Text style={styles.btnGap} />
              <PlayButton episode={episode} duration={episode.duration} />
            </View>
          )}
        </View>
      </View>
      <HTMLContent html={episode?.description || ''} />
    </ScreenWrapper>
  );
}
