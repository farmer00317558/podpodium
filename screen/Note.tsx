import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import { EpisodeNote, getAllNotes, getNoteCount } from '../common/editor';
import ScreenWrapper from '../component/ScreenWrapper';
import { NoteList } from '../component/NoteList';
import SectionTitle from '../component/SectionTitle';
import Empty from '../component/Empty';
import { useFocusEffect } from '@react-navigation/native';
import { NoteButton } from '../component/NoteButton';
import { useTranslation } from 'react-i18next';

const PageSize = 20;

export default function Note() {
  const currentLimitRef = useRef(PageSize);
  const [data, setData] = useState<EpisodeNote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleLoadNodes = useCallback(async (limit: number) => {
    setLoading(true);
    try {
      currentLimitRef.current = limit;
      const res = await getAllNotes(limit);
      const total = await getNoteCount();
      setData(res);
      console.info(total, limit);
      return limit >= total;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleLoadNodes(50);
  }, [handleLoadNodes]);

  useFocusEffect(
    useCallback(() => {
      handleLoadNodes(currentLimitRef.current);
    }, [handleLoadNodes]),
  );

  return (
    <ScreenWrapper isPlayExactAtBottom={false}>
      <SectionTitle lrGap right={NoteButton}>
        {t('note.title')}
      </SectionTitle>
      <NoteList
        notes={data || []}
        loading={loading}
        onRefresh={() => {
          handleLoadNodes(PageSize);
        }}
        onLoadMore={() => {
          return handleLoadNodes(currentLimitRef.current + PageSize);
        }}
        ListEmptyComponent={<Empty emoji="📒" text={t('note.emptyText')} />}
      />
    </ScreenWrapper>
  );
}
