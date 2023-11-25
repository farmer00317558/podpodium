import { PodcastData } from '@podpodium/common/lib/user-data-manager/v2';
import React, { useCallback, useEffect, useState } from 'react';
import { useRootState } from '../common/hook';
import StateButton from './StateButton';
import { useTranslation } from 'react-i18next';

interface IProps {
  podcast?: PodcastData | null;
  iconOnly?: boolean;
  iconSize?: number;
  reloadFeedsWhenSub?: boolean;
}

export default function SubButton(props: IProps) {
  const { podcast, iconOnly = false, iconSize = 16, reloadFeedsWhenSub = true } = props;
  const rootState = useRootState();
  const { t } = useTranslation();
  const [subed, setSubed] = useState(false);

  const handlePress = useCallback(async () => {
    if (!podcast) {
      return;
    }
    if (subed) {
      await rootState.unsubscribe(podcast);
    } else {
      await rootState.subscribe([podcast], reloadFeedsWhenSub);
    }
    setSubed(!subed);
  }, [podcast, reloadFeedsWhenSub, rootState, subed]);

  useEffect(() => {
    if (!podcast) {
      return;
    }
    rootState.isSubscribed(podcast.id).then(setSubed);
  }, [podcast, rootState]);

  return (
    <StateButton
      text={t('subBtnText')}
      activeText={t('subedBtnText')}
      iconOnly={iconOnly}
      iconSize={iconSize}
      active={subed}
      icon="bell-outline"
      activeIcon="bell-check-outline"
      onPress={handlePress}
    />
  );
}
