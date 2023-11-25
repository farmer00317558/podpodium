import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { useRootState } from '../common/hook';
import Empty from '../component/Empty';
import { Help } from '../component/Help';
import PodcastGallery from '../component/PodcastGallery';
import ScreenWrapper from '../component/ScreenWrapper';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  content: {
    paddingTop: 0,
  },
});

function SubscribedPodcasts() {
  const rootState = useRootState();
  const { t } = useTranslation();
  const isEmpty = _.isEmpty(rootState.subscribedPodcasts);
  const items = useMemo(() => Object.values(rootState.subscribedPodcasts), [rootState.subscribedPodcasts]);

  const handleRefresh = useCallback(() => {
    rootState.loadSubscribedPodcast();
  }, [rootState]);

  useEffect(() => {
    if (!isEmpty) {
      return;
    }
    handleRefresh();
  }, [handleRefresh, isEmpty]);

  return (
    <ScreenWrapper>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={rootState.subscribedPodcastsLoading} onRefresh={handleRefresh} />
        }
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        {isEmpty ? (
          <Empty emoji="🎙️" text={t('subscribed.emptyText')} />
        ) : (
          <>
            <PodcastGallery podcasts={items} />
            <Help>- {t('subscribed.subscribedCount', { count: items.length })} -</Help>
          </>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

export default observer(SubscribedPodcasts);
