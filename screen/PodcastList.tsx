import React from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import api, { useApiResource } from '../common/api';
import { podcastItemToPodcastData } from '../common/util';
import PodcastGallery from '../component/PodcastGallery';
import ScreenWrapper from '../component/ScreenWrapper';
import SectionTitle from '../component/SectionTitle';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default function PodcastList() {
  const [hotPodcastState, reloadHotPodcasts] = useApiResource(api.podcast.getHotPodcasts, 30);
  const { t } = useTranslation();
  const hotPodcasts = (hotPodcastState.data || []).map((i) => podcastItemToPodcastData(i));
  const handleRefresh = () => {
    reloadHotPodcasts(30);
  };
  return (
    <ScreenWrapper>
      <ScrollView
        refreshControl={<RefreshControl refreshing={hotPodcastState.loading} onRefresh={handleRefresh} />}
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <SectionTitle>{t('podcastList.title')}</SectionTitle>
        <PodcastGallery podcasts={hotPodcasts} />
      </ScrollView>
    </ScreenWrapper>
  );
}
