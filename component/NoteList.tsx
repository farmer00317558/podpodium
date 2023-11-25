import React, { ReactElement } from 'react';
import { EpisodeNote } from '../common/editor';
import DynamicList, { DynamicListProps } from './DynamicList';
import { NoteListItem } from './NoteListItem';

interface NoteListProps<T = EpisodeNote>
  extends Omit<DynamicListProps<T>, 'renderItem' | 'keyExtractor' | 'data'> {
  onLoadMore?: () => Promise<boolean>;
  paddingTop?: number;
  notes: EpisodeNote[];
  empty?: ReactElement | string;
  loading?: boolean;
}

export function NoteList(props: NoteListProps) {
  const { onLoadMore, loading, notes, ...otherProps } = props;

  const renderItem = (note: EpisodeNote) => {
    return <NoteListItem note={note} />;
  };
  return (
    <>
      <DynamicList<EpisodeNote>
        loading={loading}
        onLoadMore={onLoadMore}
        data={notes}
        renderItem={(i) => renderItem(i.item)}
        {...otherProps}
      />
    </>
  );
}
