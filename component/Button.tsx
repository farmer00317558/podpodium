import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../common/theme';
import { RouteParamsList } from '../common/type';

interface IProps extends PressableProps {
  style?: ViewStyle;
  position?: 'left' | 'right' | 'center';
  type?: 'ghost' | 'primary' | 'link';
  icon?: string;
  to?: {
    screen: string;
    params?: any;
  };
}

const commonStyle: TextStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 42,
  borderWidth: 1,
  borderRadius: 48,
  paddingLeft: 24,
  paddingRight: 24,
  backgroundColor: 'white',
};

const styles = StyleSheet.create({
  primary: {
    borderWidth: 0,
  },
  ghost: {},
  link: {
    borderWidth: 0,
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  normal: {
    ...commonStyle,
  },
  pressed: {
    ...commonStyle,
    opacity: 0.5,
  },
  text: {
    fontSize: 12,
  },
  icon: {
    marginRight: 6,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default function Button(props: PropsWithChildren<IProps>) {
  const { position, style, type = 'ghost', icon, to, onPress, ...otherProps } = props;
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const theme = useTheme();
  const handlePress = (e: GestureResponderEvent) => {
    if (to) {
      nav.navigate(to.screen, to.params);
      return;
    }
    onPress?.(e);
  };

  const borderColors = {
    primary: 'transparent',
    ghost: theme.Primary,
    link: theme.Primary,
  };

  const textColors = {
    primary: 'white',
    ghost: theme.Primary,
    link: theme.Primary,
  };

  const backgroundColors = {
    primary: theme.Primary,
    ghost: 'transparent',
    link: 'transparent',
  };

  return (
    <View style={[position && styles[position], style]}>
      <Pressable
        {...otherProps}
        style={({ pressed }) => [
          pressed ? styles.pressed : styles.normal,
          type && styles[type],
          { backgroundColor: backgroundColors[type], borderColor: borderColors[type] },
          otherProps.disabled && styles.disabled,
        ]}
        onPress={handlePress}
      >
        {!!icon && (
          <Text style={[styles.text, { color: textColors[type] }, styles.icon]}>
            <Icon name={icon} size={16} />
          </Text>
        )}
        <Text style={[styles.text, { color: textColors[type] }]}>{props.children}</Text>
      </Pressable>
    </View>
  );
}
