import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import Player from './Player';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
});

interface IProps extends SafeAreaViewProps {
  noPlayer?: boolean;
  isPlayExactAtBottom?: boolean;
}

export default function ScreenWrapper(props: PropsWithChildren<IProps>) {
  const { children, noPlayer = false, isPlayExactAtBottom, ...otherProps } = props;
  return (
    <SafeAreaView edges={['right', 'left']} style={styles.container} {...otherProps}>
      <View style={styles.content}>{children}</View>
      {!noPlayer && <Player exactAtBottom={isPlayExactAtBottom} />}
    </SafeAreaView>
  );
}
