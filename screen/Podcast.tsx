import { PodcastData } from '@podpodium/common/lib/user-data-manager/v2';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useRef, useState } from 'react';
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScreenPodcastDetail } from '../common/constant';
import { usePromiseResult } from '../common/hook';
import rootState from '../common/state';
import { useTheme } from '../common/theme';
import { RouteParamsList } from '../common/type';
import { dataManager } from '../common/user-data';
import Avatar from '../component/Avatar';
import EpisodeFlatListStatic from '../component/EpisodeListStatic';
import PodcastLoading from '../component/PodcastLoading';
import ScreenWrapper from '../component/ScreenWrapper';
import SubButton from '../component/SubButton';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  owner: {
    fontSize: 14,
    marginBottom: 10,
  },
  subButton: {
    alignItems: 'flex-start',
  },
  headerContent: { flex: 1 },
  showNotes: {
    fontSize: 16,
    lineHeight: 16 * 2,
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleAvatar: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginRight: 10,
  },
  titleText: {
    flex: 1,
  },
});

function Podcast() {
  const navigation = useNavigation<NavigationProp<RouteParamsList, typeof ScreenPodcastDetail>>();
  const route = useRoute<RouteProp<RouteParamsList, typeof ScreenPodcastDetail>>();
  const { url } = route.params;
  const [latestPodcast, setLatestPodcast] = useState<PodcastData | undefined>();
  const podcastDetailState = usePromiseResult(
    useCallback(() => dataManager.getPodcastData(url, false, rootState.fetchRssTimeout), [url]),
  );
  const { data, err, loading, reload } = podcastDetailState || {};
  const podcast = latestPodcast || data;
  const podcastImageHref = podcast?.image || '';
  const headerHeightRef = useRef(0);
  const [refreshing, setRefreshing] = useState(false);
  const theme = useTheme();

  const handleRefresh = async () => {
    if (!url) {
      return;
    }
    setRefreshing(true);
    const refreshedData = await rootState.refreshPodcast(url);
    setLatestPodcast(refreshedData);
    setRefreshing(false);
  };

  const subButton = useCallback(
    (iconOnly: boolean = false, iconSize: number = 16) => (
      <SubButton podcast={podcast} iconOnly={iconOnly} iconSize={iconSize} />
    ),
    [podcast],
  );

  const handleHeaderLayout = (e: LayoutChangeEvent) => {
    headerHeightRef.current = e.nativeEvent.layout.height;
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y;
    if (offset < headerHeightRef.current) {
      const options: NativeStackNavigationOptions = { headerTitle: '', headerRight: () => null };
      navigation.setOptions(options);
      return;
    }
    const options: NativeStackNavigationOptions = {
      headerTitle: () => (
        <View style={styles.titleWrapper}>
          <Avatar style={styles.titleAvatar} uri={[podcastImageHref]} />
          <Text
            lineBreakMode="middle"
            numberOfLines={2}
            style={[styles.titleText, { color: theme.PrimaryText }]}
          >
            {podcast?.title}
          </Text>
        </View>
      ),
      headerRight: () => subButton(true, 24),
    };
    navigation.setOptions(options);
  };

  if (!podcast) {
    return <PodcastLoading rss={url} err={err} loading={loading} onRetry={() => reload()} />;
  }

  const header = (
    <View style={styles.header} onLayout={handleHeaderLayout}>
      <Avatar style={styles.avatar} uri={[podcastImageHref]} />
      <View style={styles.headerContent}>
        <Text style={[styles.title, { color: theme.PrimaryText }]}>{podcast?.title.trim()}</Text>
        <Text style={[styles.owner, { color: theme.SecondaryText }]}>{podcast?.author}</Text>
        <View style={styles.subButton}>{subButton()}</View>
      </View>
    </View>
  );

  return (
    <ScreenWrapper>
      <EpisodeFlatListStatic
        ListHeaderComponent={header}
        showPodcastAvatar={false}
        episodes={podcast?.episodes}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onScroll={handleScroll}
      />
    </ScreenWrapper>
  );
}

export default observer(Podcast);
