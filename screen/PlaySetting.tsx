import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Switch from '../component/Switch';
import { ScreenPlaySetting } from '../common/constant';
import { useRootState } from '../common/hook';
import { RouteParamsList } from '../common/type';
import PanelScreen from '../component/PanelScreen';
import SliderCard, { Mark } from '../component/SliderCard';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  sliderCard: {
    marginBottom: 16,
  },
});

const rateMarks: Mark[] = [
  { value: 0.5, text: '0.5' },
  { value: 0.8 },
  { value: 1, text: '1' },
  { value: 1.1 },
  { value: 1.2 },
  { value: 1.3 },
  { value: 1.5 },
  { value: 1.7 },
  { value: 2, text: '2' },
  { value: 3, text: '3' },
];

const timeoutMarks: Mark[] = [];
for (let i = 5; i <= 60; i += 5) {
  timeoutMarks.push({ value: i });
}

const PlaySetting = observer((props: NativeStackScreenProps<RouteParamsList, typeof ScreenPlaySetting>) => {
  const { navigation } = props;
  const rootState = useRootState();
  const { t } = useTranslation();
  const { playRate, playCurrentOnly } = rootState.player.playSetting;

  const handleRateChange = (value: number | number[]) => {
    console.info(value);
    let rate = 1;
    if (Array.isArray(value)) {
      if (value.length > 0) {
        rate = value[0];
      }
    } else {
      rate = value;
    }
    if (playRate === rate) {
      return;
    }
    // Vibration.vibrate(1);

    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    };

    ReactNativeHapticFeedback.trigger(Platform.OS === 'android' ? 'impactLight' : 'impactHeavy', options);
    rootState.player.updatePlaySetting({
      playRate: rate,
    });
  };

  return (
    <PanelScreen
      title={t('player.playSetting')}
      onClose={() => {
        navigation.goBack();
      }}
    >
      {false && (
        <SliderCard
          wrapperStyle={styles.sliderCard}
          title={t('player.stopOnTime')}
          trackMarks={timeoutMarks}
        />
      )}
      <SliderCard
        title={t('player.playSpeed')}
        value={playRate}
        renderMarkText={(mark, isActive) => {
          if (mark.text) {
            return mark.text;
          }
          if (isActive) {
            return mark.value;
          }
        }}
        onValueChange={handleRateChange}
        trackMarks={rateMarks}
        wrapperStyle={styles.sliderCard}
      />
      <Switch
        value={playCurrentOnly}
        onValueChange={(checked: boolean) => {
          rootState.player.updatePlaySetting({ playCurrentOnly: checked });
        }}
      >
        {t('player.stopWhenPlayEnd')}
      </Switch>
    </PanelScreen>
  );
});

export default PlaySetting;
