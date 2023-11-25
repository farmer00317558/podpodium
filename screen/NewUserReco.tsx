import { useNavigation, NavigationProp } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { ScreenPodcastDetail } from '../common/constant';
import { useRootState } from '../common/hook';
import { useTheme } from '../common/theme';
import { RouteParamsList } from '../common/type';
import Avatar from '../component/Avatar';
import { Help } from '../component/Help';
import SubButton from '../component/SubButton';
import { useTranslation } from 'react-i18next';
import { descriptionToSummary } from '../common/util';

const styles = StyleSheet.create({
  reco: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'column',
  },
  message: {
    flex: 1,
    marginBottom: 16,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 28,
  },
  recoItem: {
    marginBottom: 16,
    marginTop: 16,
    flexDirection: 'row',
    display: 'flex',
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
    height: 78,
    width: 78,
  },
  loading: {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default observer(() => {
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const theme = useTheme();
  const { t } = useTranslation();
  const rootState = useRootState();
  const loading = rootState.newUserRecPodcastsLoading && rootState.newUserRecPodcasts.length === 0;

  const handlePress = (url: string) => {
    console.info('open podcast from recommend list:', url);
    nav.navigate(ScreenPodcastDetail, { url });
  };

  useEffect(() => {
    rootState.loadNewUserRecPodcast();
  }, [rootState]);

  return (
    <View style={styles.reco}>
      <Help emoji="🚀">{t('feed.recoText')}</Help>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      )}
      {rootState.newUserRecPodcasts.map((i) => (
        <View style={styles.recoItem} key={i.url}>
          <TouchableOpacity onPress={() => handlePress(i.url)}>
            <Avatar style={styles.avatar} uri={[i.image]} />
          </TouchableOpacity>
          <View style={styles.itemContent}>
            <View style={styles.title}>
              <View style={styles.titleTextWrapper}>
                <TouchableOpacity onPress={() => handlePress(i.url)}>
                  <Text numberOfLines={1} style={[styles.titleText, { color: theme.PrimaryText }]}>
                    {i.title}
                  </Text>
                </TouchableOpacity>
              </View>
              <SubButton podcast={i} reloadFeedsWhenSub={false} />
            </View>
            <TouchableOpacity onPress={() => handlePress(i.url)}>
              <Text numberOfLines={2} style={[styles.summary, { color: theme.SecondaryText }]}>
                {descriptionToSummary(i.description)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
});
