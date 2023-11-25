import React from 'react';
import fs from 'react-native-fs';
import Toast from 'react-native-simple-toast';
import DocumentPicker from 'react-native-document-picker';
import { PermissionsAndroid, ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../component/ScreenWrapper';
import SectionTitle from '../component/SectionTitle';
import {
  IsAndroid,
  IsIOS,
  ScreenAbout,
  ScreenFavorite,
  ScreenHistory,
  ScreenSubscribeFromOpml,
  ScreenSubscribeFromRss,
} from '../common/constant';
import MenuItem from '../component/MenuItem';
import { dataManager } from '../common/user-data';
import { useRootState } from '../common/hook';
import { fileUri } from '../common/util';
import { useTheme } from '../common/theme';
import { getAllNotes, importAllNotes } from '../common/editor';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'column',
  },
  image: {
    width: 48,
    height: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
  },
  slogan: {},
  menu: {
    marginTop: 16,
  },
  devBtns: {
    padding: 16,
  },
});

const showImportExport = true;

export default function Profile() {
  const rootState = useRootState();
  const theme = useTheme();
  const { t } = useTranslation();
  const handleExport = async () => {
    let granted = false;
    let filePath = '';
    let targetDisplay = '';
    const ts = format(new Date(), 'yyMMddHHmmss');
    const fileName = `${t('profile.exportFileNamePrefix')}-${ts}.json`;

    if (IsAndroid) {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: t('profile.storagePermissionTitle'),
          message: t('profile.storagePermissionDesc'),
          buttonNeutral: '',
          buttonNegative: t('cancelBtnText'),
          buttonPositive: t('okBtnText'),
        },
      );

      if (permission === 'denied') {
        Toast.showWithGravity(t('profile.exportFailed'), Toast.SHORT, Toast.TOP);
        return;
      }

      granted = permission === 'granted';
      filePath = `${fs.DownloadDirectoryPath}/${fileName}`;
      targetDisplay = `Download/${fileName}`;
    }

    if (IsIOS) {
      granted = true;
      filePath = `${fs.DocumentDirectoryPath}/${fileName}`;
      targetDisplay = `Documents/${fileName}`;
    }

    if (granted) {
      const useData = await dataManager.dumpUserData();
      const notes = await getAllNotes(10000);
      await fs.writeFile(
        filePath,
        JSON.stringify({
          useData,
          notes,
        }),
      );
      Toast.showWithGravity(`${t('profile.exportSuccess')}，${targetDisplay}`, Toast.SHORT, Toast.TOP);
      console.info('exported to:', filePath);
    }
  };
  const handleImport = async () => {
    const d = await DocumentPicker.pickSingle({ mode: 'import' });
    if (!d) {
      return;
    }
    const fileContent = await fs.readFile(fileUri(d.uri));
    try {
      const data = JSON.parse(fileContent);
      if (data.subscribe) {
        console.info('import old data');
        Toast.showWithGravity(t('profile.invalidDataFormat'), Toast.SHORT, Toast.TOP);
      } else {
        await dataManager.loadUserData(JSON.stringify(data.useData));
        await rootState.player.loadPlaylist();
        await rootState.refreshFeeds();
        await importAllNotes(data.notes);
        Toast.showWithGravity(t('profile.importSuccess'), Toast.SHORT, Toast.TOP);
      }
    } catch {
      Toast.showWithGravity(t('profile.importFailed'), Toast.SHORT, Toast.TOP);
    }
  };
  return (
    <ScreenWrapper isPlayExactAtBottom={false}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <SectionTitle>{t('profile.title')}</SectionTitle>
          <Text style={[styles.slogan, { color: theme.SecondaryText }]}>{t('profile.slogan')}</Text>
        </View>
        <View style={styles.menu}>
          <MenuItem icon="history" screen={ScreenHistory} text={t('profile.historyMenu')} />
          <MenuItem icon="heart" screen={ScreenFavorite} text={t('profile.favoriteMenu')} />
          <MenuItem icon="rss" screen={ScreenSubscribeFromRss} text={t('profile.rssSubscribeMenu')} />
          <MenuItem
            icon="bank-transfer-in"
            screen={ScreenSubscribeFromOpml}
            text={t('profile.subscribeFromOpml')}
          />
          {showImportExport && (
            <>
              <MenuItem icon="export" onPress={handleExport} text={t('profile.exportMenu')} />
              <MenuItem icon="import" onPress={handleImport} text={t('profile.importMenu')} />
            </>
          )}
          <MenuItem icon="information-outline" screen={ScreenAbout} text={t('profile.aboutMenu')} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
