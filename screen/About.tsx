import { Link } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TextStyle, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import logo from '../assets/img/icon.png';
import { ScreenDebug, ScreenWeb } from '../common/constant';
import { useTheme } from '../common/theme';
import MenuItem from '../component/MenuItem';
import ScreenWrapper from '../component/ScreenWrapper';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    lineHeight: 2 * 16,
    marginBottom: 20,
    textAlign: 'center',
    // padding: 16,
  },
  menu: {},
  logo: {
    width: 64,
    height: 64,
    marginTop: 40,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 8,
  },
  version: {
    textAlign: 'center',
    marginBottom: 40,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  div: {
    marginLeft: 8,
    marginRight: 8,
  },
});

export default function About() {
  const theme = useTheme();
  const version = DeviceInfo.getVersion();
  const bundleId = DeviceInfo.getBuildNumber();

  const textStyle: TextStyle = { color: theme.PrimaryText };
  const { t } = useTranslation();

  return (
    <ScreenWrapper noPlayer>
      <View style={styles.content}>
        <View>
          <Image style={styles.logo} source={logo} />
          <Text style={[styles.version, { color: theme.PrimaryText }]}>
            {version} - {bundleId}
          </Text>
          <View style={styles.menu}>
            <MenuItem
              text={t('about.contact')}
              icon="comment-question-outline"
              externalUrl="https://www.lingjiangtai.com/contact"
            />
            <MenuItem text="Twitter" icon="twitter" externalUrl="https://twitter.com/FarmerSun2023" />
            {process.env.NODE_ENV === 'development' && (
              <MenuItem icon="bug-outline" screen={ScreenDebug} text="DEBUG" />
            )}
          </View>
        </View>
        <View style={styles.footer}>
          <Link
            to={{ screen: ScreenWeb, params: { uri: 'https://www.lingjiangtai.com/disclaimer' } }}
            style={textStyle}
          >
            {t('about.disclaimer')}
          </Link>
          <Text style={[styles.div, textStyle]}>|</Text>
          <Link
            style={textStyle}
            to={{ screen: ScreenWeb, params: { uri: 'https://www.lingjiangtai.com/privacy' } }}
          >
            {t('about.privacy')}
          </Link>
        </View>
      </View>
    </ScreenWrapper>
  );
}
