import { EpisodeData } from '@podpodium/common/user-data-manager/v2';
import { useNavigation, NavigationProp, useFocusEffect } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useLayoutEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRootState } from '../common/hook';
import { useTheme } from '../common/theme';
import { RouteParamsList } from '../common/type';
import Empty from '../component/Empty';
import EpisodeFlatListStatic from '../component/EpisodeListStatic';
import ScreenWrapper from '../component/ScreenWrapper';
import { useTranslation } from 'react-i18next';

function Favorite() {
  const rootState = useRootState();
  const theme = useTheme();
  const { t } = useTranslation();
  const nav = useNavigation<NavigationProp<RouteParamsList>>();

  const handleLoad = useCallback(() => {
    return rootState.loadFavorite(rootState.favoriteEpisodes.length + 100);
  }, [rootState]);

  const handleDelete = (episode: EpisodeData) => {
    rootState.toggleLike(episode);
  };

  useFocusEffect(
    useCallback(() => {
      if (rootState.favoriteEpisodes.length === 0) {
        rootState.loadFavorite(100);
      }
    }, [rootState]),
  );

  useLayoutEffect(() => {
    nav.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(t('confirmTitle'), t('favorite.clearConfirm'), [
                {
                  text: t('cancelBtnText'),
                },
                {
                  text: t('okBtnText'),
                  onPress: () => rootState.clearFavorite(),
                },
              ]);
            }}
          >
            <Icon name="trash-outline" size={20} color={theme.SecondaryText} />
          </TouchableOpacity>
        );
      },
    });
  }, [nav, rootState, t, theme.SecondaryText]);

  return (
    <ScreenWrapper>
      <EpisodeFlatListStatic
        ListEmptyComponent={<Empty emoji="🎉" text={t('favorite.emptyText')} />}
        loading={rootState.favoriteEpisodesLoading}
        episodes={rootState.favoriteEpisodes}
        onRefresh={() => rootState.loadFavorite(100)}
        onLoadMore={handleLoad}
        onDeleteItem={handleDelete}
      />
    </ScreenWrapper>
  );
}

export default observer(Favorite);
