import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginLeft: 5,
  },
});

interface IProps {
  icon?: string;
  text: string;
  style?: ViewStyle;
  onPress: (e: GestureResponderEvent) => void;
}

export default function LinkButton(props: IProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity style={[styles.wrapper, props.style]} onPress={props.onPress}>
      {props.icon && <Icon name={props.icon} size={16} color={theme.Primary} />}
      <Text style={[styles.btn, { color: theme.Primary }]}>{props.text}</Text>
    </TouchableOpacity>
  );
}
