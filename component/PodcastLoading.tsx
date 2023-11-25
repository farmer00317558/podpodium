import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../common/theme';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import LinkButton from './LinkButton';
import SimpleToast from 'react-native-simple-toast';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  loadingWrapper: {
    paddingTop: 60,
    marginBottom: 60,
    flex: 1,
  },
  loadingTipTitle: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 36,
  },
  loadingTip: {
    justifyContent: 'center',
    lineHeight: 24,
    fontSize: 12,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
  },
  empty: {
    flex: 1,
    padding: 40,
  },
  error: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshIcon: {
    fontSize: 180,
  },
  copy: {
    marginTop: 20,
    padding: 10,
  },
});

interface IProps {
  rss: string;
  loading: boolean;
  err: string;
  onRetry: () => void;
}

export default function PodcastLoading(props: IProps) {
  const { rss, loading, err, onRetry } = props;
  const [isLoadingTipShow, setIsLoadingTipShow] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();
  let timer = useRef(0);

  const handleRetry = () => {
    if (!err) {
      return;
    }
    onRetry();
  };

  useEffect(() => {
    if (!loading) {
      clearTimeout(timer.current);
      return;
    }
    timer.current = setTimeout(() => {
      setIsLoadingTipShow(true);
    }, 2000) as any;
  }, [loading]);

  const loadingTipStyle = [styles.loadingTip, { color: theme.SecondaryText }];

  return (
    <Pressable onPress={() => handleRetry()} style={styles.empty}>
      <View style={styles.loadingWrapper}>
        {loading && <ActivityIndicator size={40} color={theme.SecondaryText} />}
        {err && (
          <View style={styles.error}>
            <Icon name="refresh-outline" style={styles.refreshIcon} color={theme.DisableText} />
            <Text style={{ color: theme.DisableText }}>{t('podcastLoading.errorText')}</Text>
            <LinkButton
              style={styles.copy}
              text={t('podcastLoading.copyRssAddrBtnText')}
              onPress={(e) => {
                e.stopPropagation();
                Clipboard.setString(rss);
                SimpleToast.showWithGravity(t('copySuccess'), SimpleToast.SHORT, SimpleToast.TOP);
              }}
            />
          </View>
        )}
      </View>
      {isLoadingTipShow && (
        <FadeIn>
          <Text style={[styles.loadingTipTitle, { color: theme.SecondaryText }]}>
            {t('podcastLoading.longTimeTipTitle')}
          </Text>
          <Text style={loadingTipStyle}>1. {t('podcastLoading.tip1')}</Text>
          <Text style={loadingTipStyle}>2. {t('podcastLoading.tip2')}</Text>
          <Text style={loadingTipStyle}>3. {t('podcastLoading.tip3')}</Text>
          <Text style={loadingTipStyle}>
            {t('podcastLoading.contactPrefix')} <ContactButton fontSize={13} />
          </Text>
        </FadeIn>
      )}
    </Pressable>
  );
}
