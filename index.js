/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';

// https://github.com/software-mansion/react-native-gesture-handler/issues/320#issuecomment-443815828
import 'react-native-gesture-handler';

console.info('isHermes:', !!global.HermesInternal);
console.info('env:', process.env.NODE_ENV);

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => require('./service/TrackPlayerService'));
