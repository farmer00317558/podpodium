import React from 'react';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScreenEpisodeShareImage, ScreenShare } from '../common/constant';
import { RouteParamsList, ShareTargetEnum } from '../common/type';
import shareImg from '../assets/img/share-image.png';
import PanelScreen from '../component/PanelScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../common/theme';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  panel: {
    height: 230,
    backgroundColor: 'white',
  },
  content: {
    padding: 8,
  },
  title: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '500',
  },
  messageTitle: {
    marginTop: 8,
  },
  target: {
    display: 'flex',
    flexDirection: 'row',
  },
  targetItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 8,
  },
  img: {
    marginBottom: 4,
    width: 48,
    height: 48,
  },
  icon: {
    marginBottom: 4,
    width: 48,
    height: 48,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLabel: {
    fontSize: 12,
  },
});

export default function ShareEntry() {
  const { t } = useTranslation();
  const theme = useTheme();
  const route = useRoute<RouteProp<RouteParamsList, typeof ScreenShare>>();
  const navigation = useNavigation<NavigationProp<RouteParamsList, typeof ScreenShare>>();
  const { target, id, rssUrl, message } = route.params;

  const handleShareImage = () => {
    navigation.goBack();
    if (target === ShareTargetEnum.Episode) {
      navigation.navigate(ScreenEpisodeShareImage, { id, rssUrl });
    }
    if (target === ShareTargetEnum.Podcast) {
      // TODO
    }
  };

  const handleMore = () => {
    Share.open(message);
  };

  return (
    <PanelScreen minHeight="auto" title={t('share.title')} onClose={() => navigation.goBack()}>
      <View style={styles.target}>
        <TouchableOpacity style={styles.targetItem} onPress={handleShareImage}>
          <Image style={styles.img} source={shareImg} />
          <Text style={[styles.imgLabel, { color: theme.PrimaryText }]}>{t('share.image')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.targetItem} onPress={handleMore}>
          <View style={styles.icon}>
            <Icon size={32} name="dots-horizontal" color={theme.PrimaryText} />
          </View>
          <Text style={[styles.imgLabel, { color: theme.PrimaryText }]}>{t('share.more')}</Text>
        </TouchableOpacity>
      </View>
    </PanelScreen>
  );
}
