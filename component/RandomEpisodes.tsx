import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../common/theme';
import EpisodeList from './EpisodeList';
import EpisodeListPlaceholder from './EpisodeListPlaceholder';
import { useTranslation } from 'react-i18next';
import { usePromiseResult } from '../common/hook';
import { dataManager } from '../common/user-data';
import { PodcastData } from '@podpodium/common/lib/user-data-manager/v2';
import { randomElements } from '../common/util';

interface IProps {
  count?: number;
  podcasts: PodcastData[];
}

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
  },
});

export default function RandomEpisodes(props: IProps) {
  const { count = 3, podcasts } = props;
  const theme = useTheme();
  const { t } = useTranslation();
  const [initialDataLoading, setInitialDataLoading] = useState(false);
  const {
    data: randomEpisodes,
    loading,
    reload,
  } = usePromiseResult(useCallback(() => dataManager.getRandomEpisodes(count), [count]));

  useEffect(() => {
    if (loading || (randomEpisodes?.length ?? 0) > 0 || podcasts.length === 0) {
      return;
    }
    const randomPodcasts = randomElements(podcasts, 3);
    setInitialDataLoading(true);
    Promise.all(randomPodcasts.map((i) => dataManager.getPodcastData(i.url, true, 30000))).finally(() => {
      reload();
      setInitialDataLoading(false);
    });
  }, [loading, podcasts, randomEpisodes?.length, reload]);

  return (
    <View>
      {(loading || initialDataLoading) && randomEpisodes?.length === 0 ? (
        <EpisodeListPlaceholder />
      ) : (
        <EpisodeList episodes={randomEpisodes ?? []} />
      )}
      <TouchableOpacity
        onPress={() => {
          reload();
        }}
      >
        <Text style={[styles.btn, { color: theme.Primary }]}>
          <Icon name="reload" color={theme.Primary} /> {t('randomBtnText')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
