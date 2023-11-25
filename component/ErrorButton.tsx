import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    marginTop: '30%',
    fontSize: 24,
  },
  slogan: {
    marginTop: 24,
  },
  btn: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    lineHeight: 60,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IProps extends TouchableOpacityProps {}

export default function ErrorButton(props: PropsWithChildren<IProps>) {
  const { children, ...otherProps } = props;
  const theme = useTheme();
  return (
    <View style={styles.content}>
      <TouchableOpacity {...otherProps} style={[styles.btn, { backgroundColor: theme.CardBackground }]}>
        <Text style={[styles.btnText, { color: theme.DisableText }]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
