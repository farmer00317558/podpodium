import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Platform } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import WebView from 'react-native-webview';
import { WebViewMessageEvent } from 'react-native-webview/lib/WebViewTypes';
import i18n from '../../i18n';
import { useTheme } from '../../common/theme';

const createHTML = (
  theme: ReturnType<typeof useTheme>,
  readOnly = false,
  backgroundColor: string = '',
  color: string = '',
  padding?: number,
) => {
  const quillJsPath = 'quill.min.js';
  const quillCssPath = 'quill.snow.css';
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <link rel="stylesheet" href="${quillCssPath}" />
    <script src="${quillJsPath}"></script>
    <style>
      @font-face {
        font-family: LXGW;
        src: url('${isAndroid ? 'fonts/' : ''}LXGWWenKaiLite-Regular.ttf') format('truetype');
      }
      html,
      body {
        user-select: none;
        overflow: hidden;
        ${readOnly ? '' : 'height: 100vh;'}
        font-size: 14px;
        padding: 0;
        margin: 0;
        background-color: ${backgroundColor || theme.CardBackground};
        font-family: LXGW,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
      }
      .ql-container {
        font-size: 14px;
      }
      .ql-container.ql-snow {
        border: 0;
        color: ${color || theme.PrimaryText};
      }
      .ql-snow .ql-stroke {
        stroke: ${theme.PrimaryText};
      }
      .ql-snow .ql-fill {
        fill: ${theme.PrimaryText};
      }
      .ql-snow.ql-toolbar button.ql-active .ql-stroke {
        stroke: ${theme.Secondary};
      }
      .ql-snow.ql-toolbar button.ql-active .ql-fill {
        fill: ${theme.Secondary};
      }
      .ql-editor {
        line-height: 1.6;
        font-family: LXGW;
        ${padding !== undefined ? `padding: ${padding}px` : ''}
      }
      .ql-editor.ql-blank::before {
        color: ${theme.SecondaryText};
        opacity: 0.6;
      }
      .ql-editor ol, .ql-editor ul {
        padding-left: 0;
      }
      .ql-editor li:not(.ql-direction-rtl)::before {
        text-align: center;
      }
      .wrapper {
        ${readOnly ? '' : 'height: 100vh;'}
        display: flex;
        flex-direction: column;
      }
      .editor-wrapper {
        flex: 1;
        overflow: hidden;
        background-color: ${backgroundColor || (readOnly ? theme.CardBackground : theme.Background)};
      }
      .footer {
        display: flex;
        border-top: 1px solid ${theme.CardBackground};
        justify-content: space-between;
        flex-direction: row;
        background-color: ${theme.ContentBackground};
      }
      #toolbar {
        border: 0;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      #episode-toolbar {
        padding-right: 10px;
        display: flex;
        align-items: center;
      }
      #episode-toolbar button {
        margin-left: 8px;
        height: 28px;
        line-height: 28px;
        font-size: 12px;
        border-radius: 14px;
        padding: 0 14px;
      }
      .ql-time {
        background: transparent;
        color: ${theme.PrimaryText};
        border: 1px solid #ddd;
      }
      .ql-done {
        background: ${theme.Primary};
        color: white; 
        border: 0;
      }
      .play-time-anchor {
        font-weight: 700;
        text-decoration: none !important;
        font-family: monospace;
      }
      
    </style>
    <title>PodPodiumApp</title>
  </head>
  <body>
    <div class="wrapper">
    <div class="editor-wrapper">
      <div id="editor"></div>
    </div>
      ${
        readOnly
          ? ''
          : `<div class="footer">
              <div id="toolbar">
                <button class="ql-bold"></button>
                <button class="ql-list" value="ordered"></button>
                <button class="ql-list" value="bullet"></button>
              </div>
              <div id="episode-toolbar">
                <button class="ql-time">${i18n.t('richText.insertTimeBtnText')}</button>
                <!-- <button class="ql-done">完成</button> -->
                </div>
              </div>
            </div>`
      }

    <!-- Initialize Quill editor -->
    <script>
      console.info = (a) => {
        window.ReactNativeWebView.postMessage(JSON.stringify({
          type: "log",
          data: a,
        }));
      }

      window.currentTimeData = { text: '00:00', value: 0 };
      window.contents = {};
      
      Quill.register('modules/episodeToolbar', function (editor, options) {
        const container = document.querySelector('#episode-toolbar');
        container.addEventListener('click', (e) => {
          const action = e.target.getAttribute('class');

          if (action === 'ql-time') {
            const selection = editor.getSelection(true);

            let cursorIndex = selection.index;
            editor.insertEmbed(cursorIndex, 'playTimeAnchor', currentTimeData, 'user');
            editor.setSelection((cursorIndex += 1), 0, 'user');

            editor.insertText(cursorIndex, ' ', 'user');
            editor.setSelection((cursorIndex += 1), 0, 'user');
          }
        });
      });

      const Inline = Quill.import('blots/embed');

      class playTimeAnchor extends Inline {
        static className = 'play-time-anchor';
        static blotName = 'playTimeAnchor';
        static tagName = 'a';
        static create(data) {
          const value = data.value || 0;
          const text = data.text || '00:00';
          const node = super.create();
          node.setAttribute('href', '#');
          node.setAttribute('data-position', value);
          node.setAttribute('data-text', text);
          node.textContent = text;
          node.addEventListener('click', (e) => {
            e.preventDefault();
            const messageData = {
              type: 'seek',
              data: { position: value },
            };
            if (window.ReactNativeWebView) {
              window.ReactNativeWebView.postMessage(JSON.stringify(messageData));
            }
          });
          return node;
        }
        static value(node) {
          return {
            value: Number(node.getAttribute('data-position')),
            text: node.getAttribute('data-text')
          };
        }
      }
      Quill.register(playTimeAnchor);

      const quill = new Quill('#editor', {
        readOnly: ${readOnly},
        placeholder: '${i18n.t('richText.editorPlaceholder')}',
        theme: 'snow',
        formats: ['bold', 'italic', 'list', 'playTimeAnchor'],
        modules: ${readOnly} ? { toolbar: false, episodeToolbar: false } : {
          toolbar: {
            container: '#toolbar',
          },
          episodeToolbar: true,
        },
      });

      quill.on('text-change', function (delta, oldDelta, source) {
        if (window.ReactNativeWebView && source === 'user') {
          const content = quill.getContents();
          const messageData = {
            type: 'textChange',
            data: {
              content,
            }
          };
          window.ReactNativeWebView.postMessage(JSON.stringify(messageData));
        }
      });

      const handleNativeMessage = (e) => {
        console.info("message from native: "+ e.data)

        const messageData = JSON.parse(e.data);
        if (messageData.type === 'currentTime') {
          window.currentTimeData = messageData.data;
        }
        if (messageData.type === 'setContent') {
          window.contents = messageData.data;
          quill.setContents(messageData.data, 'api');
            const data = {
              type: 'resize',
              data: {
                height: document.querySelector('#editor')?.getBoundingClientRect().height
              }
            };
            window.ReactNativeWebView.postMessage(JSON.stringify(data));
        }
      };
      document.addEventListener("message", handleNativeMessage);
      window.ReactNativeWebView.postMessage(JSON.stringify({type: 'ready' }));
    </script>
  </body>
</html>
`;
};

interface RichEditorInstance {
  postMessage: (content: string) => void;
}

interface RichEditorProps {
  onSeek?: (position: number) => void;
  onTextChange?: (content: string) => void;
  textContent: any;
  backgroundColor?: string;
  color?: string;
  padding?: number;
  readOnly?: boolean;
}

const isAndroid = Platform.OS === 'android';

function RichEditor(props: RichEditorProps, ref: React.Ref<RichEditorInstance>) {
  const { onSeek, onTextChange, backgroundColor, color, padding, textContent, readOnly = false } = props;
  const theme = useTheme();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const editorRef = useRef<WebView>(null);

  const handlePostMessage = useCallback((content: string) => {
    if (isAndroid) {
      editorRef.current?.postMessage(content);
    } else {
      const event = { data: content };
      editorRef.current?.injectJavaScript(`handleNativeMessage(${JSON.stringify(event)}); true`);
    }
  }, []);

  const handleSetContent = useCallback(() => {
    if (!textContent) {
      return;
    }
    handlePostMessage(
      JSON.stringify({
        type: 'setContent',
        data: textContent,
      }),
    );
  }, [handlePostMessage, textContent]);

  const handleMessage = (e: WebViewMessageEvent) => {
    try {
      const messageData = JSON.parse(e.nativeEvent.data);
      const { type, data } = messageData;
      if (type === 'log') {
        console.info('[LOG]', data);
      }
      if (type === 'seek') {
        onSeek?.(data.position);
      }
      if (type === 'textChange') {
        onTextChange?.(JSON.stringify(data.content));
      }
      if (type === 'resize') {
        if (readOnly) {
          setHeight(data.height);
        }
      }
      if (type === 'ready') {
        if (!readOnly) {
          SystemNavigationBar.setNavigationColor(theme.ContentBackground);
        }
        handleSetContent();
      }
    } catch (err) {
      console.error('err message:', e.nativeEvent.data);
      console.error(err);
    }
  };

  useEffect(() => {
    handleSetContent();
  }, [handleSetContent]);

  useImperativeHandle(
    ref,
    () => ({
      postMessage: handlePostMessage,
    }),
    [handlePostMessage],
  );

  return (
    <WebView
      overScrollMode="never"
      ref={editorRef}
      injectedJavaScriptBeforeContentLoaded={`
          window.onerror = function(message, sourcefile, lineno, colno, error) {
            alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
            return true;
          };
          void(0);
        `}
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: theme.Background, height: height ?? 300 }}
      keyboardDisplayRequiresUserAction
      onMessage={handleMessage}
      onLoadStart={(e) => {
        console.info(e);
      }}
      originWhitelist={['*']}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      source={{
        html: createHTML(theme, readOnly, backgroundColor, color, padding),
        baseUrl: isAndroid ? 'file:///android_asset/' : '',
      }}
    />
  );
}

export default React.forwardRef(RichEditor);
