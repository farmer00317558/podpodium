import React, { ReactElement, useCallback, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, FlatListProps, StyleSheet, View } from 'react-native';
import { useTheme } from '../common/theme';
import { Help } from './Help';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  content: {
    paddingBottom: 16,
    paddingTop: 0,
  },
  bottomLoading: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export interface DynamicListProps<T> extends FlatListProps<T> {
  paddingTop?: number;
  empty?: ReactElement | string;
  loading?: boolean;
  onLoadMore?: () => Promise<boolean>;
}

export default function DynamicList<T>(props: DynamicListProps<T>) {
  const { loading, onLoadMore, renderItem, paddingTop = 0, data, ...flatListProps } = props;

  const canLoad = useRef(true);
  const [hasNoMore, setHasNoMore] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  const handleEndReached = useCallback(async () => {
    if (canLoad.current && onLoadMore) {
      canLoad.current = false;
      const noMore = await onLoadMore();
      setHasNoMore(noMore);
    }
  }, [onLoadMore]);

  return (
    <FlatList
      ListFooterComponent={() => {
        if (onLoadMore) {
          const ret = (
            <View style={styles.bottomLoading}>
              {loading ? (
                <ActivityIndicator color={theme.SecondaryText} />
              ) : (
                hasNoMore &&
                data &&
                data?.length > 0 && <Help paddingTopBottom={0}>- {t('noMoreTip')} -</Help>
              )}
            </View>
          );
          return ret;
        }
        return null;
      }}
      onEndReached={(info) => {
        if (loading) {
          return;
        }
        if (info.distanceFromEnd < 0) {
          return;
        }
        handleEndReached();
      }}
      onMomentumScrollBegin={() => (canLoad.current = true)}
      refreshing={loading && !onLoadMore}
      {...flatListProps}
      data={data}
      contentContainerStyle={[styles.content, { paddingTop }]}
      renderItem={renderItem}
      maxToRenderPerBatch={20}
      initialNumToRender={10}
      windowSize={20}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}
