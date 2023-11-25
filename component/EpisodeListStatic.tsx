import React, { ReactElement, useCallback, useRef } from 'react';
import { EpisodeData } from '@podpodium/common/lib/user-data-manager/v2';
import { EpisodeListItem, EpisodeListItemSwipeableInstance } from './EpisodeList';
import DynamicList, { DynamicListProps } from './DynamicList';

interface EpisodeFlatListProps<T = EpisodeData>
  extends Omit<DynamicListProps<T>, 'renderItem' | 'keyExtractor' | 'data'> {
  showPodcastAvatar?: boolean;
  episodes?: T[];
  paddingTop?: number;
  empty?: ReactElement | string;
  loading?: boolean;
  onDeleteItem?: (episode: EpisodeData) => void;
  onLoadMore?: () => Promise<boolean>;
}

export default function EpisodeFlatListStatic<T extends EpisodeData>(props: EpisodeFlatListProps<T>) {
  const {
    showPodcastAvatar = true,
    loading,
    onDeleteItem,
    onLoadMore,
    paddingTop = 0,
    episodes,
    ...flatListProps
  } = props;

  const currentRightActionOpen = useRef<{ id: string; instance: EpisodeListItemSwipeableInstance | null }>({
    id: '',
    instance: null,
  });

  const handleRightOpen = (episode: EpisodeData, ins: EpisodeListItemSwipeableInstance) => {
    const { id, instance } = currentRightActionOpen.current;
    if (id !== episode.id && instance) {
      instance.close();
    }
    currentRightActionOpen.current = { id: episode.id, instance: ins };
  };

  const renderItem = useCallback(
    ({ item: i }: any) => {
      return (
        <EpisodeListItem
          onDelete={onDeleteItem}
          episode={i}
          onRightOpen={handleRightOpen}
          showPodcastAvatar={showPodcastAvatar}
        />
      );
    },
    [onDeleteItem, showPodcastAvatar],
  );

  return (
    <DynamicList
      {...flatListProps}
      loading={loading}
      onLoadMore={onLoadMore}
      paddingTop={paddingTop}
      data={episodes}
      keyExtractor={(i) => i.id}
      renderItem={renderItem}
    />
  );
}
