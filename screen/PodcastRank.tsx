import { useNavigation, NavigationProp } from '@react-navigation/core';
import React, { useMemo } from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import api, { useApiResource } from '../common/api';
import { PodcastItem } from '@podpodium/common';
import { ScreenPodcastDetail } from '../common/constant';
import { RouteParamsList } from '../common/type';
import Avatar from '../component/Avatar';
import ScreenWrapper from '../component/ScreenWrapper';
import { Help } from '../component/Help';
import { useTranslation } from 'react-i18next';
import { getRegion } from '../i18n';

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    margin: 5,
  },
  image: {
    aspectRatio: 1,
    width: 'auto',
    height: 'auto',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
});

const pageSize = 200;

export default function PodcastRank() {
  const region = getRegion();
  const query = useMemo(() => ({ region }), [region]);
  const [hotPodcastState, reloadHotPodcasts] = useApiResource(api.podcast.getHotPodcasts, pageSize, query);
  const hotPodcasts = hotPodcastState.data || [];
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const { t } = useTranslation();

  const handleShowPodcast = (podcast: PodcastItem) => {
    nav.navigate(ScreenPodcastDetail, { url: podcast.url });
  };

  const handleRefresh = () => {
    reloadHotPodcasts(pageSize, query);
  };

  const handleLoadMore = () => {
    reloadHotPodcasts(hotPodcasts.length + pageSize, query);
  };

  return (
    <ScreenWrapper style={styles.wrapper}>
      <FlatList
        style={styles.list}
        numColumns={4}
        data={hotPodcasts}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        columnWrapperStyle={styles.row}
        ListFooterComponent={<Help>{t('podcastRank.dataSourceTip')}</Help>}
        renderItem={(i: ListRenderItemInfo<PodcastItem>) => (
          <View style={styles.item} key={i.item.id}>
            <TouchableOpacity onPress={() => handleShowPodcast(i.item)}>
              <Avatar style={styles.image} uri={i.item.imageHref} />
            </TouchableOpacity>
          </View>
        )}
      />
    </ScreenWrapper>
  );
}
