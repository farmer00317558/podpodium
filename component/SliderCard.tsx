import { Slider } from '@miblanchard/react-native-slider';
import { SliderProps } from '@miblanchard/react-native-slider/lib/types';
import _ from 'lodash';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  sliderTitle: {
    marginBottom: 16,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    fontWeight: '700',
  },
  sliderWrapper: {
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    backgroundColor: '#17223b',
  },
  sliderContainer: {},
  track: {
    height: 50,
    backgroundColor: 'transparent',
  },
  markWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    marginLeft: -13,
  },
  markText: {
    fontWeight: '700',
  },
  mark: {
    width: 3,
    height: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  above: {
    backgroundColor: 'red',
    height: 10,
    width: 60,
  },
});

export interface Mark {
  value: number;
  text?: string;
}

interface IProps
  extends Omit<SliderProps, 'animationType' | 'trackMarks' | 'maximumValue' | 'minimumValue' | 'step'> {
  wrapperStyle?: ViewStyle;
  title: string;
  trackMarks: Mark[];
  renderMarkText?: (mark: Mark, isActive: boolean) => ReactNode;
}
export default function SliderCard(props: IProps) {
  const {
    value,
    title,
    wrapperStyle,
    trackMarks,
    renderMarkText = (i) => i.text,
    onValueChange,
    ...otherProps
  } = props;
  const theme = useTheme();
  const renderThumb = () => {
    // return <View style={styles.above} />;
    return null;
  };

  const renderTrackMarkComponent = (index: number) => {
    const { value: markValue } = trackMarks[index];
    const isActive = value === markValue;
    const fontWeight = isActive ? '800' : '500';
    return (
      <View style={styles.markWrapper}>
        <View style={[styles.mark, { backgroundColor: isActive ? theme.Primary : theme.SecondaryText }]} />
        <Text
          style={[
            styles.markText,
            {
              color: isActive ? theme.Primary : theme.SecondaryText,
              fontWeight,
            },
          ]}
        >
          {renderMarkText(trackMarks[index], isActive)}
        </Text>
      </View>
    );
  };

  const handleValueChange = (index: number | number[]) => {
    if (Array.isArray(index)) {
      onValueChange?.(index.map((i) => trackMarks[i].value));
      return;
    }
    onValueChange?.(trackMarks[index].value as number);
  };
  return (
    <View style={[styles.sliderWrapper, { backgroundColor: theme.CardBackground }, wrapperStyle]}>
      <Text style={[styles.sliderTitle, { color: theme.SecondaryText }]}>{title}</Text>
      <Slider
        {...otherProps}
        onValueChange={handleValueChange}
        renderThumbComponent={renderThumb}
        renderTrackMarkComponent={renderTrackMarkComponent}
        containerStyle={styles.sliderContainer}
        trackStyle={styles.track}
        trackMarks={_.range(0, trackMarks.length)}
        maximumValue={trackMarks.length - 1}
        minimumValue={0}
        step={1}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
        value={value}
        animationType="spring"
      />
    </View>
  );
}
