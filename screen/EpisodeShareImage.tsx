import { ScreenEpisodeShareImage } from '../common/constant';
import { Image, LayoutChangeEvent, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Toast from 'react-native-simple-toast';
import ViewShot from 'react-native-view-shot';
import { SvgXml } from 'react-native-svg';
import QrCode from 'qrcode';
import ScreenWrapper from '../component/ScreenWrapper';
import { RouteParamsList } from '../common/type';
import Avatar from '../component/Avatar';
import logo from '../assets/img/icon.png';
import { descriptionToSummary, savePicture } from '../common/util';
import { usePromiseResult } from '../common/hook';
import { dataManager } from '../common/user-data';
import { RouteProp, useRoute } from '@react-navigation/native';
import { light, useTheme } from '../common/theme';
import { episodeLink } from '@podpodium/common';
import { useTranslation } from 'react-i18next';

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
  cover: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  coverImg: {
    // width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    lineHeight: 18 * 1.8,
    fontWeight: '500',
    marginBottom: 16,
  },
  footer: {
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
  summary: {
    marginBottom: 16,
  },
  shareImageWrapper: {
    backgroundColor: 'white',
    padding: 24,
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

export default function EpisodeShareImage() {
  const route = useRoute<RouteProp<RouteParamsList, typeof ScreenEpisodeShareImage>>();
  const theme = useTheme();
  const { t } = useTranslation();
  const { rssUrl, id } = route.params;
  const shotRef = useRef<ViewShot | null>(null);
  const episodeState = usePromiseResult(
    useCallback(() => dataManager.getEpisodeData(rssUrl, id), [rssUrl, id]),
  );
  const episode = episodeState.data;
  const [avatarWidth, setAvatarWidth] = useState(0);
  const [qrcode, setQrCode] = useState('');

  const handleViewResize = (e: LayoutChangeEvent) => {
    const { layout } = e.nativeEvent;
    setAvatarWidth(layout.width);
  };

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
    if (!episode) {
      return;
    }
    const webUrl = episodeLink(episode);
    QrCode.toString(webUrl, { type: 'svg' }).then((i) => {
      setQrCode(i);
    });
  }, [episode]);

  if (!episode) {
    return null;
  }

  //TODO: get summary from desc
  const summary = episode.description.trim();

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
              <View style={styles.cover} onLayout={handleViewResize}>
                <Avatar
                  thumbnailSourceUri={episode.podcast?.image}
                  uri={[episode.artwork || episode.podcast?.image]}
                  style={[{ width: avatarWidth, height: avatarWidth }]}
                />
              </View>
              <View style={styles.podcast}>
                <Avatar style={styles.podcastAvatar} uri={[episode.podcast.image]} />
                <View>
                  <Text style={[styles.podcastTitle, { color: light.PrimaryText }]}>
                    {episode.podcast?.title}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={[styles.title, { color: light.PrimaryText }]}>{episode.title}</Text>
                {summary && (
                  <Text style={[styles.summary, { color: light.PrimaryText }]} numberOfLines={2}>
                    {descriptionToSummary(summary)}
                  </Text>
                )}
              </View>
              <View style={styles.footer}>
                <View style={styles.footerLeft}>
                  <View style={styles.brand}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={{ color: light.PrimaryText }}>{t('appName')}</Text>
                  </View>
                  <Text style={{ color: light.SecondaryText }}>{t('openByQrCode')}</Text>
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
