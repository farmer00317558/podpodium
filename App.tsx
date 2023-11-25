import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import {
  ScreenAbout,
  ScreenDebug,
  ScreenDebugEditor,
  ScreenEpisode,
  ScreenEpisodeNoteEditor,
  ScreenEpisodeNoteShareImage,
  ScreenEpisodeShareImage,
  ScreenFavorite,
  ScreenHistory,
  ScreenHome,
  ScreenPlayer,
  ScreenPlaylist,
  ScreenPlaySetting,
  ScreenPodcastDetail,
  ScreenPodcastList,
  ScreenPodcastRank,
  ScreenSearch,
  ScreenShare,
  ScreenSubscribedPodcastList,
  ScreenSubscribeFromOpml,
  ScreenSubscribeFromRss,
  ScreenWeb,
} from './common/constant';
import Home from './screen/Home';
import Episode from './screen/Episode';
import EpisodeNoteEditor from './screen/EpisodeNoteEditor';
import Podcast from './screen/Podcast';
import { AppContext } from './common/context';
import Welcome from './component/Welcome';
import Playlist from './screen/Playlist';
import state from './common/state';
import History from './screen/History';
import Favorite from './screen/Favorite';
import SearchResult from './screen/SearchResult';
import PodcastList from './screen/PodcastList';
import SubscribedPodcasts from './screen/SubscribedPodcasts';
import Player from './screen/Player';
import About from './screen/About';
import PodcastRank from './screen/PodcastRank';
import Share from './screen/Share';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './component/Header';
import Web from './screen/Web';
import PlaySetting from './screen/PlaySetting';
import EpisodeShareImage from './screen/EpisodeShareImage';
import Debug from './screen/Debug';
import SplashScreen from 'react-native-splash-screen';
import SubscribeFromRss from './screen/SubscribeFromRss';
import SubscribeFromOpml from './screen/SubscribeFromOpml';
import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { useTheme } from './common/theme';
import { DebugEditor } from './screen/DebugEditor';
import EpisodeNoteShareImage from './screen/EpisodeNoteShareImage';

import './i18n';
import { useTranslation } from 'react-i18next';

const testStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 25,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export function TestApp() {
  StatusBar.setHidden(true);
  SplashScreen.hide();

  return (
    <View style={styles.app}>
      <TestKeyboardAvoid />
    </View>
  );
}

export function TestKeyboardAvoid() {
  return (
    <KeyboardAvoidingView
      style={[testStyles.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={50}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={testStyles.inner}>
          <Text style={testStyles.header}>Header</Text>
          <TextInput placeholder="Username" style={testStyles.textInput} />
          <View style={testStyles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const RootStack = createStackNavigator();

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  header: {},
});

const Main = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const colorSchema = useColorScheme();
  const [error, setError] = useState(false);
  const isDark = colorSchema === 'dark';

  const handleInit = useCallback(() => {
    setError(false);
    state.initBackgroundFetch();
    state
      .init()
      .catch((e) => {
        console.error(e);
        setError(true);
      })
      .finally(() => {
        console.info('hide splash screen');
        SplashScreen.hide();
      });
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content', true);
      StatusBar.setBackgroundColor(theme.ContentBackground);
      // 会设置 FLAG_LAYOUT_NO_LIMITS 导致 KeyboardAvoidingView 不能正常工作
      SystemNavigationBar.setNavigationColor('#00000000');
    }
  }, [isDark, theme.ContentBackground, theme.ModalBackground]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  const navTheme: Theme = {
    dark: isDark,
    colors: {
      text: theme.PrimaryText,
      border: theme.Border,
      primary: theme.Primary,
      notification: theme.PrimaryText,
      card: theme.ModalBackground,
      background: theme.ContentBackground,
    },
  };

  if (error) {
    return <Welcome error={error} onReload={handleInit} />;
  }

  // return <TestApp />;
  return (
    <GestureHandlerRootView style={styles.app}>
      <AppContext.Provider value={state}>
        <NavigationContainer theme={navTheme}>
          <StatusBar animated translucent />
          <RootStack.Navigator
            screenOptions={{
              headerShown: true,
              title: '',
              headerBackTitleVisible: false,
              animation: 'fade',
              headerTransparent: true,
              headerStyle: styles.header,
              header: (props: NativeStackHeaderProps) => <Header {...props} />,
            }}
          >
            <RootStack.Group>
              <RootStack.Screen name={ScreenHome} component={Home} options={{ headerShown: false }} />
              <RootStack.Screen name={ScreenEpisode} component={Episode} />
              <RootStack.Screen
                name={ScreenEpisodeNoteEditor}
                component={EpisodeNoteEditor}
                options={{
                  title: t('note.title'),
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name={ScreenEpisodeNoteShareImage}
                component={EpisodeNoteShareImage}
                options={{
                  title: t('share.shareNoteTitle'),
                }}
              />
              <RootStack.Screen
                name={ScreenEpisodeShareImage}
                component={EpisodeShareImage}
                options={{ title: t('share.imageGenTitle') }}
              />
              <RootStack.Screen name={ScreenPodcastDetail} component={Podcast} />
              <RootStack.Screen
                name={ScreenHistory}
                component={History}
                options={{ title: t('history.title') }}
              />
              <RootStack.Screen
                name={ScreenFavorite}
                component={Favorite}
                options={{ title: t('favorite.title') }}
              />
              <RootStack.Screen
                name={ScreenSearch}
                component={SearchResult}
                options={{ headerShadowVisible: false, title: t('search.title') }}
              />
              <RootStack.Screen
                name={ScreenSubscribeFromOpml}
                component={SubscribeFromOpml}
                options={{ title: t('subscribe.subFromOpmlTitle') }}
              />
              <RootStack.Screen
                name={ScreenSubscribeFromRss}
                component={SubscribeFromRss}
                options={{ title: t('subscribe.subFromRssTitle') }}
              />
              <RootStack.Screen
                name={ScreenPlaylist}
                component={Playlist}
                options={{ title: t('playlist.title') }}
              />
              <RootStack.Screen name={ScreenPodcastList} component={PodcastList} />
              <RootStack.Screen
                name={ScreenPodcastRank}
                component={PodcastRank}
                options={{ title: t('podcastRank.title') }}
              />
              <RootStack.Screen
                name={ScreenSubscribedPodcastList}
                component={SubscribedPodcasts}
                options={{ title: t('subscribed.title') }}
              />
              <RootStack.Screen
                name={ScreenAbout}
                component={About}
                options={{ title: t('about.title', { appName: t('appName') }) }}
              />
              <RootStack.Screen name={ScreenWeb} component={Web} />
            </RootStack.Group>

            {process.env.NODE_ENV === 'development' && (
              <RootStack.Group>
                <RootStack.Screen name={ScreenDebug} component={Debug} options={{ title: 'DEBUG' }} />
                <RootStack.Screen
                  name={ScreenDebugEditor}
                  component={DebugEditor}
                  options={{ title: 'Editor' }}
                />
              </RootStack.Group>
            )}

            <RootStack.Group
              screenOptions={{
                presentation: 'card',
                animation: 'slide_from_bottom',
              }}
            >
              <RootStack.Screen name={ScreenPlayer} component={Player} />
            </RootStack.Group>
            <RootStack.Group
              screenOptions={{
                presentation: 'containedTransparentModal',
                animation: 'fade',
                headerShown: false,
              }}
            >
              <RootStack.Screen name={ScreenPlaySetting} component={PlaySetting} />
              <RootStack.Screen name={ScreenShare} component={Share} />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </GestureHandlerRootView>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}
