import { NavigationProp, useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/native';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, View } from 'react-native';
import { ScreenSubscribedPodcastList } from '../common/constant';
import { useRootState } from '../common/hook';
import { useTheme } from '../common/theme';
import { RouteParamsList } from '../common/type';
import EpisodeFlatListStatic from '../component/EpisodeListStatic';
import { Help } from '../component/Help';
import LinkButton from '../component/LinkButton';
import ScreenWrapper from '../component/ScreenWrapper';
import SectionTitle from '../component/SectionTitle';
import FeedEmpty from './FeedEmpty';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  reco: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },
  recoItem: {
    marginBottom: 16,
    marginTop: 16,
    flexDirection: 'row',
  },
  itemContent: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    marginBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextWrapper: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    flex: 1,
    fontSize: 14,
    lineHeight: 14 * 1.5,
    marginBottom: 8,
  },
  subButton: {
    alignItems: 'flex-end',
  },
  avatar: {
    height: 98,
    width: 98,
  },
  loadingTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginRight: 5,
  },
});

function Feed() {
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const rootState = useRootState();
  const [hasSubscribe, setHasSubscribe] = useState(false);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  const handleShowSubscribed = () => {
    nav.navigate(ScreenSubscribedPodcastList);
  };

  const handleRefresh = useCallback(async () => {
    setLoading(true);
    const subscribeData = await rootState.loadSubscribedPodcast();
    const has = !_.isEmpty(subscribeData);
    console.info('refresh feeds, has subscribed podcast:', has);
    await rootState.refreshFeeds({ refreshAll: true });
    setHasSubscribe(has);
    setLoading(false);
  }, [rootState]);

  useFocusEffect(
    useCallback(() => {
      console.info('## feeds focused');
      const run = async () => {
        const subscribed = await rootState.loadSubscribedPodcast();
        setHasSubscribe(!_.isEmpty(subscribed));

        await rootState.loadFeeds();
        const shouldRefreshAll = await rootState.shouldRefreshAll();
        if (shouldRefreshAll) {
          await rootState.refreshFeeds({ refreshAll: shouldRefreshAll }, true);
        }
      };
      run();
    }, [rootState]),
  );

  return (
    <ScreenWrapper isPlayExactAtBottom={false}>
      <View style={styles.content}>
        <SectionTitle
          small
          lrGap
          right={() => (
            <LinkButton text={t('feed.subscribedPodcast')} icon="podcast" onPress={handleShowSubscribed} />
          )}
        >
          {loading || rootState.feedsLoading
            ? (style: TextStyle) => (
                <View style={styles.loadingTitle}>
                  <ActivityIndicator animating style={styles.loader} color={theme.Primary} />
                  <Text style={style}>{t('feed.loading')}</Text>
                </View>
              )
            : t('feed.title')}
        </SectionTitle>
        <EpisodeFlatListStatic
          ListFooterComponent={
            rootState.feeds.length >= 100 ? <Help>- {t('feed.bottomTip')} -</Help> : undefined
          }
          ListEmptyComponent={<FeedEmpty hasSubscribe={hasSubscribe} />}
          episodes={rootState.feeds}
          refreshing={false}
          onRefresh={handleRefresh}
        />
      </View>
    </ScreenWrapper>
  );
}
export default observer(Feed);
