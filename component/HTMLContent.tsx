import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import WebView, { WebViewProps } from 'react-native-webview';
import { PodiumTheme, useTheme } from '../common/theme';

interface IProps extends WebViewProps {
  html?: string;
}

const wrap = (html: string, theme: PodiumTheme) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style type="text/css">
      * {
        color: ${theme.PrimaryText} !important;
      }
      br { display: none; }
      p { margin-bottom: 8px; }
      body {
        line-height: 1.8;
        padding: 0;
        padding-top: 16px;
        margin: 0;
        text-align: justify;
        background-color: transparent;
        word-break: break-all;
        font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
      }
      img {
        max-width: 100%;
      }
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>
`;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'transparent',
  },
  view: {
    backgroundColor: 'transparent',
  },
});

export default function HTMLContent(props: Omit<IProps, 'source'>) {
  const { html, ...wvProps } = props;
  const ref = useRef<WebView>(null);

  const theme = useTheme();
  useEffect(() => {}, []);

  if (!html) {
    return null;
  }

  return (
    <WebView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      containerStyle={styles.container}
      style={[styles.view]}
      ref={ref}
      source={{ html: wrap(html, theme) }}
      originWhitelist={['*']}
      {...wvProps}
    />
  );
}
