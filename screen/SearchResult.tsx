import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api, { useApi } from '../common/api';
import { PodcastItem } from '@podpodium/common';
import { ScreenPodcastDetail, ScreenSubscribeFromOpml, ScreenSubscribeFromRss } from '../common/constant';
import { RouteParamsList } from '../common/type';
import { podcastItemToPodcastData, userDataStorage } from '../common/util';
import Avatar from '../component/Avatar';
import EpisodeList from '../component/EpisodeList';
import SearchHeader from '../component/SearchHeader';
import {} from 'react-native-safe-area-context';
import { EpisodeData, PodcastData } from '@podpodium/common/lib/user-data-manager/v2';
import Button from '../component/Button';
import { useTheme } from '../common/theme';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },

  results: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  resultTitle: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  remoteItem: {},
  remoteItemTitle: {
    lineHeight: 14 * 2,
    textDecorationStyle: 'dashed',
    textDecorationLine: 'underline',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  itemContent: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    marginBottom: 6,
  },
  summary: {
    fontSize: 12,
    lineHeight: 12 * 1.5,
    marginBottom: 8,
    textAlign: 'justify',
  },
  historyPanel: {
    paddingTop: 16,
  },
  historyPanelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  historyPanelHeaderText: {},
  history: {
    paddingTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  historyItem: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 5,
  },
  loading: {
    marginTop: 30,
  },
  feedback: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
  },
  btn: {
    marginBottom: 20,
    width: 260,
  },
});

function LocalPodcastItem(item: PodcastData) {
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const theme = useTheme();
  const handlePress = () => {
    nav.navigate(ScreenPodcastDetail, { url: item.url });
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <Avatar height={64} width={64} uri={[item.image]} />
      <View style={styles.itemContent}>
        <Text style={[styles.title, { color: theme.PrimaryText }]}>{item.title}</Text>
        <Text style={[styles.summary, { color: theme.SecondaryText }]} numberOfLines={2}>
          {item.summary}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const historyKey = 'podium-search-history';

export default function SearchResult() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [podcastSearchState, requestSearch] = useApi(api.podcast.listPodcasts);
  // const [episodeSearchState, requestSearchEpisodes] = useApi(api.episode.listEpisodes);
  const [podcasts, setPodcasts] = useState<PodcastItem[]>([]);
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    userDataStorage.getObject<string[]>(historyKey).then((i) => {
      setHistory(i || []);
    });
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setPodcasts([]);
      setEpisodes([]);
    }
  }, [searchValue]);

  const handleClear = () => {
    setHistory([]);
    userDataStorage.setObject(historyKey, []);
  };

  // const handleSearchEpisodes = async (search: string) => {
  //   const res = await requestSearchEpisodes({ search, limit: 10 });
  //   setEpisodes((res.data.data || []).map((i) => episodeItemToEpisodeData(i)));
  // };

  const handleSearch = async (search: string) => {
    if (!search) {
      return;
    }
    setSearchValue(search);
    setHistory((i) => {
      const next = [search].concat(i.filter((h) => h !== search)).slice(0, 20);
      userDataStorage.setObject(historyKey, next);
      return next;
    });

    // handleSearchEpisodes(search);
    const localRes = await requestSearch({ search, limit: 100 });
    setPodcasts(localRes.data.data || []);
  };

  const loading = podcastSearchState.loading;
  const isEmpty = podcasts.length === 0 && episodes.length === 0;
  const resultTitleStyle = [styles.resultTitle, { color: theme.SecondaryText }];

  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: theme.Background }]}>
      <SearchHeader search={searchValue} onChange={setSearchValue} onSearch={handleSearch} />
      <ScrollView style={styles.results}>
        {loading && isEmpty && (
          <ActivityIndicator style={styles.loading} color={theme.Primary} size="large" />
        )}
        {isEmpty && !loading && history.length > 0 && (
          <View style={styles.historyPanel}>
            <View style={styles.historyPanelHeader}>
              <Text style={[styles.historyPanelHeaderText, { color: theme.PrimaryText }]}>搜索历史</Text>
              <TouchableOpacity>
                <Text
                  style={[styles.historyPanelHeaderText, { color: theme.PrimaryText }]}
                  onPress={handleClear}
                >
                  <Icon name="delete-outline" size={18} />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.history}>
              {history.map((i) => (
                <TouchableOpacity
                  onPress={() => handleSearch(i)}
                  key={i}
                  style={[styles.historyItem, { backgroundColor: theme.LightCardBackground }]}
                >
                  <Text style={{ color: theme.SecondaryText }}>{i}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {isEmpty && (
          <View style={styles.feedback}>
            <View style={styles.btn}>
              <Button icon="rss" to={{ screen: ScreenSubscribeFromRss }}>
                {t('search.rssImportBtnText')}
              </Button>
            </View>
            <View style={styles.btn}>
              <Button icon="bank-transfer-in" to={{ screen: ScreenSubscribeFromOpml }}>
                {t('search.opmlImportBtnText')}
              </Button>
            </View>
          </View>
        )}
        {podcasts.length > 0 && (
          <View>
            <Text style={resultTitleStyle}>
              {t('search.relatedPodcast')}（{podcasts.length}）
            </Text>
            {podcasts
              .map((i) => podcastItemToPodcastData(i))
              .map((i) => {
                return <LocalPodcastItem key={i.id} {...i} />;
              })}
          </View>
        )}
        {episodes.length > 0 && (
          <View>
            <Text style={resultTitleStyle}>
              {t('search.relatedEpisode')}（{episodes.length}）
            </Text>
            <EpisodeList episodes={episodes} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
