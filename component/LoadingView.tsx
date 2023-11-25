import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../common/theme';
import SpinIcon from './SpinIcon';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IProps {
  height?: number;
  size?: number;
  color?: string;
}

export default function LoadingView(props: IProps) {
  const theme = useTheme();
  const { height, size = 30, color } = props;
  return (
    <View style={[styles.wrapper, { height }]}>
      <SpinIcon name="loading" size={size} enable color={theme.SecondaryText || color} />
    </View>
  );
}
