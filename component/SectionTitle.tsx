import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { useTheme } from '../common/theme';

interface IProps {
  small?: boolean;
  right?: React.ComponentType;
  lrGap?: boolean;
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default function SectionTitle(props: PropsWithChildren<IProps>) {
  const theme = useTheme();
  const { children, right: Right, lrGap = false, small = false } = props;
  const lrGapValue = lrGap ? 16 : 0;
  const textStyle = StyleSheet.flatten([
    small ? styles.titleSmall : styles.title,
    {
      color: theme.PrimaryText,
    },
  ]);
  return (
    <View style={[styles.wrapper, { paddingLeft: lrGapValue, paddingRight: lrGapValue }]}>
      {typeof children === 'function' ? children(textStyle) : <Text style={textStyle}>{children}</Text>}
      {Right && <Right />}
    </View>
  );
}
