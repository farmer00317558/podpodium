import React, { useEffect } from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { useHeaderHeight } from '@react-navigation/elements';
import WebView from 'react-native-webview';
import ScreenWrapper from '../component/ScreenWrapper';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const createHTML = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.snow.css" />
    <script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
    <style>
      html, body { height: 100%; padding: 0; margin: 0; }
      .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .editor-wrapper {
        flex: 1;
        overflow: hidden;
      }
    </style>
    <title>PodPodiumApp</title>
  </head>
  <body>
    <div class="wrapper">
      <div class="editor-wrapper">
        <div id="editor">
          <p>
            A robot who has developed sentience, and is the only robot of his kind shown to be still functioning
            on Earth.
          </p>
        </div>
      </div>
      <!-- Create toolbar container -->
      <div id="toolbar">
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
      </div>
    </div>

    <!-- Initialize Quill editor -->
    <script>
      const quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
          toolbar: "#toolbar"
        }
      });
      quill.on('text-change', function(delta, oldDelta, source) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ delta, source }));
        if (source == 'api') {
          console.log("An API call triggered this change.");
        } else if (source == 'user') {
          console.log("A user action triggered this change.");
        }
});
    </script>
  </body>
</html>
`;

const testStyles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
  },
  inner: {
    padding: 24,
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
  SplashScreen.hide();
  return (
    <View
      style={[testStyles.container]}
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // keyboardVerticalOffset={height}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={testStyles.inner}>
          <Text style={testStyles.header}>Header</Text>
          <TextInput
            placeholder="Username"
            style={testStyles.textInput}
            onFocus={() => {
              SystemNavigationBar.setNavigationColor('#00000000');
            }}
            onBlur={() => {
              // SystemNavigationBar.setNavigationColor('#00000001');
              SystemNavigationBar.setNavigationColor('transparent');
            }}
          />
          <View style={testStyles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export function DebugEditor() {
  const height = useHeaderHeight();
  // const inset = useSafeAreaInsets();
  // console.info(inset, height);
  // SystemNavigationBar.setNavigationColor('rgba(0, 0, 0, 0.01)');
  // SystemNavigationBar.setNavigationColor('transparent');
  // return <TestApp />;
  useEffect(() => {
    SystemNavigationBar.setNavigationColor('rgba(0, 0, 0, 0.01)');
    return () => {
      SystemNavigationBar.setNavigationColor('transparent');
    };
  }, []);
  return (
    // <KeyboardAvoidingView enabled behavior="height" style={{ flex: 1 }} keyboardVerticalOffset={height + 20}>
    <WebView
      contentInsetAdjustmentBehavior="automatic"
      // containerStyle={{ height: 200 }}
      // style={{ height: 200 }}
      keyboardDisplayRequiresUserAction
      onMessage={(e) => {
        console.info(e.nativeEvent.data);
      }}
      originWhitelist={[]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      source={{ html: createHTML() }}
    />
    // </KeyboardAvoidingView>
  );
  // return <TestApp />;
}
