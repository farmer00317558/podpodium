import Toast from 'react-native-simple-toast';
import { XMLParser } from 'fast-xml-parser';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import fs from 'react-native-fs';
import { ScreenWeb } from '../common/constant';
import ScreenWrapper from '../component/ScreenWrapper';
import Button from '../component/Button';
import { useSubscribeByRss } from '../common/hook';
import { Log } from '../component/Log';
import { fileUri } from '../common/util';
import { Help } from '../component/Help';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  main: {
    display: 'flex',
    width: '100%',
  },
  btn: {
    marginBottom: 16,
  },
  link: {
    marginBottom: 32,
  },
});

export default function SubscribeFromOpml() {
  const [started, setStarted] = useState(false);
  const { t } = useTranslation();
  const [loading, logs, progress, handleSubscribe] = useSubscribeByRss();

  const handleSelectOpml = async () => {
    if (loading) {
      return;
    }
    const d = await DocumentPicker.pickSingle({});
    if (!d) {
      return;
    }

    let fileContent = '';
    try {
      fileContent = await fs.readFile(fileUri(d.uri));
    } catch (e) {
      console.error(e);
      Toast.showWithGravity(t('subscribe.readFileFailed'), Toast.SHORT, Toast.TOP);
      return;
    }

    let urls: string[] = [];
    try {
      const options = {
        ignoreAttributes: false,
      };
      const parser = new XMLParser(options);
      const opml = parser.parse(fileContent);

      // xyz
      let outlines = opml.opml?.body?.outline;
      console.info(opml.opml?.body?.outline?.outline);
      if (!Array.isArray(outlines)) {
        // Pocket Casts Feeds
        outlines = opml.opml?.body?.outline?.outline;
      }
      if (!Array.isArray(outlines)) {
        outlines = [];
      }
      urls = outlines.map((i: any) => i['@_xmlUrl']);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.stack);
      } else {
        console.error(e);
      }
      Toast.showWithGravity(t('subscribe.parseFileFailed'), Toast.SHORT, Toast.TOP);
      return;
    }

    if (urls.length === 0) {
      Toast.showWithGravity(t('subscribe.noPodcastInFile'), Toast.SHORT, Toast.TOP);
      return;
    }

    setStarted(true);
    await handleSubscribe(urls);
    Toast.showWithGravity(t('subscribe.importComplete'), Toast.SHORT, Toast.TOP);
  };

  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <Button
          style={styles.btn}
          position="center"
          type="primary"
          disabled={loading}
          onPress={handleSelectOpml}
        >
          {loading
            ? t('subscribe.importing', { progress: `${progress[0]}/${progress[1]}` })
            : t('subscribe.selectOpmlFileBtnText')}
        </Button>
        {started && logs.length > 0 && <Log logs={logs} />}
        <Help>{t('subscribe.importTip')}</Help>
      </View>
      <Button
        type="link"
        style={styles.link}
        to={{ screen: ScreenWeb, params: { uri: 'https://www.lingjiangtai.com/help/get-opml' } }}
      >
        {t('subscribe.howToGetOpml')}
      </Button>
    </ScreenWrapper>
  );
}
