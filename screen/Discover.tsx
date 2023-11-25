import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import api, { useApiResource } from '../common/api';
import { ScreenDiscover, ScreenPodcastRank, ScreenSearch, ScreenSubscribeFromRss } from '../common/constant';
import { useTheme } from '../common/theme';
import { RouteParamsList } from '../common/type';
import { podcastItemToPodcastData } from '../common/util';
import LinkButton from '../component/LinkButton';
import PodcastGallery from '../component/PodcastGallery';
import RandomEpisodes from '../component/RandomEpisodes';
import ScreenWrapper from '../component/ScreenWrapper';
import SectionTitle from '../component/SectionTitle';
import { useTranslation } from 'react-i18next';
import { getRegion } from '../i18n';

const styles = StyleSheet.create({
  headerWrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBtn: {
    marginRight: 20,
  },
});

const hotPodcastCount = 24;

export default function Discover(props: BottomTabScreenProps<RouteParamsList, typeof ScreenDiscover>) {
  const { navigation: nav } = props;
  const theme = useTheme();
  const opacityRef = useRef(0);
  const region = getRegion();
  const query = useMemo(() => ({ region }), [region]);
  const [hotPodcastState, reloadHotPodcasts] = useApiResource(
    api.podcast.getHotPodcasts,
    hotPodcastCount,
    query,
  );
  const hotPodcasts = (hotPodcastState.data || []).map((i) => podcastItemToPodcastData(i));
  const { t } = useTranslation();

  const right = useMemo(
    () => (
      <View style={styles.headerRight}>
        <LinkButton
          text={t('searchBtnText')}
          icon="layers-search-outline"
          onPress={() => nav.navigate(ScreenSearch)}
          style={styles.searchBtn}
        />
        <LinkButton
          icon="link-plus"
          text={t('rssSubscribe')}
          onPress={() => nav.navigate(ScreenSubscribeFromRss)}
        />
      </View>
    ),
    [nav, t],
  );

  const handleRefresh = () => {
    reloadHotPodcasts(hotPodcastCount, query);
  };

  const handleShowPodcastRank = () => {
    nav.navigate(ScreenPodcastRank);
  };

  const handleRenderHeader = useCallback(() => {
    return (
      <View
        style={[
          styles.headerWrapper,
          { opacity: opacityRef.current, backgroundColor: theme.ContentBackground },
        ]}
      >
        <Text style={[styles.headerTitle, { color: theme.PrimaryText }]}>{t('discover.title')}</Text>
        <View>{right}</View>
      </View>
    );
  }, [right, t, theme.ContentBackground, theme.PrimaryText]);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y;
    opacityRef.current = offset / 100;
    nav.setOptions({
      headerShown: true,
      headerStyle: {
        opacity: opacityRef.current,
      },
      header: () => handleRenderHeader(),
    });
  };

  useEffect(() => {
    nav.setOptions({
      header: () => handleRenderHeader(),
    });
  }, [handleRenderHeader, nav, theme]);

  return (
    <ScreenWrapper isPlayExactAtBottom={false}>
      <ScrollView
        scrollEventThrottle={100}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        onScroll={handleScroll}
        refreshControl={<RefreshControl refreshing={hotPodcastState.loading} onRefresh={handleRefresh} />}
      >
        <SectionTitle lrGap right={() => right}>
          {t('discover.random')}
        </SectionTitle>
        <RandomEpisodes podcasts={hotPodcasts} />
        <SectionTitle
          lrGap
          right={() => <LinkButton onPress={handleShowPodcastRank} text={t('discover.morePodcast')} />}
        >
          {t('discover.hot')}
        </SectionTitle>
        <PodcastGallery podcasts={hotPodcasts} />
      </ScrollView>
    </ScreenWrapper>
  );
}
