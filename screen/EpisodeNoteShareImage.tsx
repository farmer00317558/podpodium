import { ScreenEpisodeNoteShareImage } from '../common/constant';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Toast from 'react-native-simple-toast';
import ViewShot from 'react-native-view-shot';
import { SvgXml } from 'react-native-svg';
import QrCode from 'qrcode';
import ScreenWrapper from '../component/ScreenWrapper';
import { RouteParamsList } from '../common/type';
import logo from '../assets/img/icon.png';
import { formatDateTime, savePicture } from '../common/util';
import { usePromiseResult } from '../common/hook';
import { dataManager } from '../common/user-data';
import { RouteProp, useRoute } from '@react-navigation/native';
import { light, useTheme } from '../common/theme';
import { getEpisodeNotes } from '../common/editor';
import RichEditor from '../component/RichEditor';
import Avatar from '../component/Avatar';
import { EpisodeData } from '@podpodium/common/user-data-manager/v2';
import { useTranslation } from 'react-i18next';

const backgroundColor = '#feefc0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollInner: {
    flex: 1,
    padding: 24,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  footer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    display: 'flex',
  },
  brand: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  shareImageWrapper: {
    backgroundColor,
    padding: 24,
    width: 10000,
    maxWidth: '100%',
    // borderRadius: 8,
  },
  podcast: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  podcastAvatar: {
    marginRight: 10,
    width: 40,
    height: 40,
  },
  podcastTitle: {},
  download: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 0,
  },
  downloadIcon: {
    marginRight: 8,
  },
});

const itemStyles = StyleSheet.create({
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 5,
  },
  time: {
    marginBottom: 4,
    fontSize: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  headerRight: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default function EpisodeNoteShareImage() {
  const route = useRoute<RouteProp<RouteParamsList, typeof ScreenEpisodeNoteShareImage>>();
  const theme = useTheme();
  const { t } = useTranslation();
  const { rssUrl, id } = route.params;
  const shotRef = useRef<ViewShot | null>(null);
  const [qrcode, setQrCode] = useState('');
  const [episodeData, setEpisodeData] = useState<EpisodeData | null>(null);

  const { data: note } = usePromiseResult(
    useCallback(async () => {
      const episode = await dataManager.getEpisodeData(rssUrl, id);
      if (!episode) {
        return null;
      }
      setEpisodeData(episode);
      return getEpisodeNotes(episode);
    }, [id, rssUrl]),
  );

  const handleSaveImage = async () => {
    if (!shotRef.current) {
      return;
    }
    const uri = await shotRef.current.capture?.();
    if (uri) {
      await savePicture(uri, 'photo');
      Toast.showWithGravity(t('saveSuccess'), Toast.SHORT, Toast.TOP);
    }
  };

  useEffect(() => {
    // const webUrl = episodeLink(episode);
    const webUrl = 'https://www.lingjiangtai.com/app';
    QrCode.toString(webUrl, { type: 'svg', color: { light: backgroundColor } }).then((i) => {
      setQrCode(i);
    });
  }, []);

  if (!note) {
    return null;
  }

  return (
    <ScreenWrapper noPlayer>
      <ScrollView
        style={{ backgroundColor: theme.MaskBackground }}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={styles.scrollInner}>
          <ViewShot ref={shotRef}>
            <View style={styles.shareImageWrapper}>
              <View style={itemStyles.header}>
                <Avatar uri={[episodeData?.podcast.image]} style={itemStyles.avatar} />
                <View style={itemStyles.headerRight}>
                  <View>
                    <Text style={[itemStyles.time, { color: light.SecondaryText }]}>
                      {formatDateTime(note.updateAt * 1000)}
                    </Text>
                    <Text style={[itemStyles.title, { color: light.SecondaryText }]}>
                      {note.episodeTitle.trim()}
                    </Text>
                  </View>
                </View>
              </View>
              <RichEditor
                padding={0}
                color={light.PrimaryText}
                backgroundColor="#feefc0"
                readOnly
                textContent={note.parsedContent}
              />
              <View style={styles.footer}>
                <View style={styles.footerLeft}>
                  <View style={styles.brand}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={{ color: light.PrimaryText }}>{t('appName')}</Text>
                  </View>
                  <Text style={{ color: light.SecondaryText }}>{t('downloadByQrCode')}</Text>
                </View>
                {!!qrcode && <SvgXml xml={qrcode} width={80} height={80} />}
              </View>
            </View>
          </ViewShot>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={handleSaveImage}
        style={[styles.download, { backgroundColor: theme.ModalBackground }]}
      >
        <Icon style={[styles.downloadIcon, { color: theme.PrimaryText }]} name="arrow-collapse-down" />
        <Text style={{ color: theme.PrimaryText }}>{t('saveImage')}</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
