import React, { useEffect, useMemo, useRef } from 'react';
import { EpisodeData } from '@podpodium/common/user-data-manager/v2';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { useCallback } from 'react';
import { ScreenEpisodeNoteEditor, ScreenEpisodeNoteShareImage } from '../common/constant';
import { usePromiseResult } from '../common/hook';
import { RouteParamsList } from '../common/type';
import { dataManager } from '../common/user-data';
import PodcastLoading from '../component/PodcastLoading';
import RichEditor from '../component/RichEditor';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import PlayButton from '../component/PlayButton';
import { useTheme } from '../common/theme';
import TrackPlayer, { Event } from 'react-native-track-player';
import WebView from 'react-native-webview';
import { fmtDuration } from '../common/util';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { saveEpisodeNotes, useEpisodeNotes } from '../common/editor';
import _ from 'lodash';

const isIos = Platform.OS === 'ios';

interface EpisodeNoteEditorProps {
  episode: EpisodeData;
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  top: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-between',
  },
  topEnd: {},
  title: {
    textAlign: 'center',
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 8,
  },
  avatar: {
    height: 36,
    width: 36,
  },
  player: {
    padding: 16,
  },
  playerButtons: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  playBtn: {
    paddingLeft: 40,
    paddingRight: 40,
  },
});

const handleSaveNote = _.debounce(async (episode: EpisodeData, content: string) => {
  await saveEpisodeNotes(episode, content);
  console.info('note saved');
}, 1000);

export default function EpisodeNoteEditor() {
  const route = useRoute<RouteProp<RouteParamsList, typeof ScreenEpisodeNoteEditor>>();
  const editorRef = useRef<WebView>(null);
  const navigation = useNavigation<NavigationProp<RouteParamsList>>();
  const inset = useSafeAreaInsets();
  const theme = useTheme();
  const { id, rssUrl } = route.params;
  const ret = usePromiseResult(
    useCallback(async () => await dataManager.getEpisodeData(rssUrl, id), [rssUrl, id]),
  );
  const { data: episode, loading, err, reload } = ret;
  const paddingTop = useMemo(() => Math.max(inset.top, 16), [inset.top]);

  const notes = useEpisodeNotes(episode);
  const colorSchema = useColorScheme();
  const isDark = colorSchema === 'dark';

  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('transparent');
    return () => {
      SystemNavigationBar.setNavigationColor('transparent');
      if (!isDark) {
        StatusBar.setBarStyle('dark-content');
      }
    };
  }, [isDark, theme.ContentBackground]);

  if (!episode) {
    return <PodcastLoading err={err} loading={loading} onRetry={() => reload()} rss={rssUrl} />;
  }

  const handleTextChange = (content: string) => {
    handleSaveNote(episode, content);
  };

  const handleSeek = async (position: number) => {
    TrackPlayer.seekTo(position);
  };

  const handleJump = async (interval: number) => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + interval);
  };

  const handleShare = () => {
    navigation.navigate(ScreenEpisodeNoteShareImage, { id, rssUrl });
  };

  TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, (e) => {
    const position = e.position;
    const data = {
      text: fmtDuration(position, true, true),
      value: position,
    };
    editorRef.current?.postMessage(
      JSON.stringify({
        type: 'currentTime',
        data,
      }),
    );
  });

  const content = (
    <>
      <View style={[{ paddingTop }, styles.header]}>
        <View style={styles.top}>
          <View style={styles.topEnd}>
            <Icon name="arrow-left" color={theme.PrimaryText} size={26} onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.player}>
            <View style={styles.playerButtons}>
              <TouchableOpacity onPress={() => handleJump(-10)}>
                <MIcon color={theme.PrimaryText} name="replay-10" size={26} />
              </TouchableOpacity>
              <View style={styles.playBtn}>
                <PlayButton color={theme.PrimaryText} iconOnly iconSize={26} episode={episode} />
              </View>
              <TouchableOpacity onPress={() => handleJump(30)}>
                <MIcon color={theme.PrimaryText} name="forward-30" size={26} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topEnd}>
            <TouchableOpacity onPress={() => handleShare()}>
              <IonIcon name="share-social-outline" size={24} color={theme.PrimaryText} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <RichEditor
        onSeek={handleSeek}
        ref={editorRef}
        onTextChange={handleTextChange}
        textContent={notes?.parsedContent}
      />
    </>
  );

  if (isIos) {
    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        {content}
      </KeyboardAvoidingView>
    );
  }

  return content;
}
