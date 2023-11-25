import { Alert } from 'react-native';
import TrackPlayer, { Event, State } from 'react-native-track-player';
import rootState from '../common/state';
import { isNumber } from 'lodash';

let wasPausedByDuck = false;

console.info('player service loaded');
module.exports = async () => {
  TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, async () => {
    rootState.player.reportCurrentTrackListenInfo();
  });

  TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (e) => {
    console.info('Event.PlaybackTrackChanged:', e.track, e.nextTrack);
    if (!isNumber(e.track) || !isNumber(e.nextTrack)) {
      return;
    }
    const prevTrack = await TrackPlayer.getTrack(e.track);
    const nextTrack = await TrackPlayer.getTrack(e.nextTrack);
    if (prevTrack && nextTrack) {
      rootState.player.trackChanged(prevTrack.id, nextTrack.id);
    }
  });

  TrackPlayer.addEventListener(Event.RemoteJumpBackward, async ({ interval }) => {
    console.info('Event.JumpBackword:', interval);
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position - interval);
  });

  TrackPlayer.addEventListener(Event.RemoteJumpForward, async ({ interval }) => {
    console.info('Event.JumpForward', interval);
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + interval);
  });

  TrackPlayer.addEventListener(Event.RemoteSeek, async ({ position }) => {
    console.info('Event.RemoteSeek');
    await TrackPlayer.seekTo(position);
  });

  TrackPlayer.addEventListener(Event.RemotePlay, async () => {
    console.info('Event.RemotePlay');
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, async () => {
    console.info('Event.RemotePause');
    await TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    console.info('Event.RemoteStop');
  });

  TrackPlayer.addEventListener(Event.RemoteDuck, async (e) => {
    console.info('Event.RemoteDuck', e, wasPausedByDuck);
    if (e.paused) {
      if ((await TrackPlayer.getState()) === State.Playing) {
        wasPausedByDuck = true;
        TrackPlayer.pause();
      }
    } else if (wasPausedByDuck) {
      wasPausedByDuck = false;
      TrackPlayer.play();
    }
  });

  TrackPlayer.addEventListener(Event.PlaybackError, async (e) => {
    Alert.alert('Event.PlaybackErr', JSON.stringify(e));
  });

  console.info('player service func run');
};
