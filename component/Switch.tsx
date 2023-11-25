import React, { PropsWithChildren } from 'react';
import { View, Switch as RNSwitch, SwitchProps, Text, StyleSheet } from 'react-native';
import { useTheme } from '../common/theme';

interface IProps extends PropsWithChildren<SwitchProps> {}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default function Switch(props: IProps) {
  const { children, ...otherProps } = props;
  const theme = useTheme();
  return (
    <View style={styles.wrapper}>
      {typeof children === 'string' ? (
        <Text style={{ color: theme.PrimaryText }}>{children}</Text>
      ) : (
        { children }
      )}
      <RNSwitch {...otherProps} />
    </View>
  );
}
