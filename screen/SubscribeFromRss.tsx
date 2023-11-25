import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SimpleToast from 'react-native-simple-toast';
import { ScreenWeb } from '../common/constant';
import { useSubscribeByRss } from '../common/hook';
import { useTheme } from '../common/theme';
import Button from '../component/Button';
import { Help } from '../component/Help';
import { Log } from '../component/Log';
import ScreenWrapper from '../component/ScreenWrapper';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  inputWrapper: {},
  input: {
    minHeight: 100,
    maxHeight: 200,
    // borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    marginBottom: 16,
  },
  btn: {
    marginBottom: 16,
  },
  link: {
    marginBottom: 32,
  },
});

export default function SubscribeFromRss() {
  const [value, setValue] = useState('');
  const theme = useTheme();
  const { t } = useTranslation();
  const [loading, logs, progress, handleSubscribe] = useSubscribeByRss();

  const handleSubscribeRss = async () => {
    if (!value || loading) {
      return;
    }
    const urls = value.split('\n').filter((i) => !!i);
    if (urls.length === 0) {
      return;
    }
    await handleSubscribe(urls);
    SimpleToast.showWithGravity(t('subscribe.importComplete'), SimpleToast.SHORT, SimpleToast.TOP);
  };

  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            multiline
            value={value}
            style={[
              styles.input,
              { color: theme.PrimaryText, backgroundColor: theme.CardBackground, borderColor: theme.Border },
            ]}
            onChangeText={setValue}
            textAlignVertical="top"
            placeholderTextColor={theme.PrimaryText}
            placeholder={t('subscribe.rssUrlPlaceholder')}
          />
        </View>
        <Button
          style={styles.btn}
          type="primary"
          position="right"
          icon="rss"
          disabled={loading}
          onPress={handleSubscribeRss}
        >
          {loading
            ? t('subscribe.loading', { progress: `${progress[0]}/${progress[1]}` })
            : t('subscribe.subscribeByRssBtnText')}
        </Button>
        {logs.length > 0 && <Log logs={logs} />}
        <Help>{t('subscribe.importTip')}</Help>
      </View>

      <Button
        type="link"
        style={styles.link}
        to={{ screen: ScreenWeb, params: { uri: 'https://www.lingjiangtai.com/help/get-rss' } }}
      >
        {t('subscribe.howToGetRss')}
      </Button>
    </ScreenWrapper>
  );
}
