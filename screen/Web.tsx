import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';
import { ScreenWeb } from '../common/constant';
import { RouteParamsList } from '../common/type';

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default function Web() {
  const nav = useNavigation();
  const { params } = useRoute<RouteProp<RouteParamsList, typeof ScreenWeb>>();
  const handleLoad = (e: WebViewNavigationEvent) => {
    const options: NativeStackNavigationOptions = { title: e.nativeEvent.title };
    nav.setOptions(options);
  };
  return (
    <WebView
      onLoad={handleLoad}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      containerStyle={styles.container}
      style={styles.view}
      source={{ uri: params.uri }}
    />
  );
}
