import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 12 * 2,
    paddingLeft: 48,
    paddingRight: 48,
  },
  emoji: {
    fontSize: 28,
  },
});

export function Help(props: PropsWithChildren<{ paddingTopBottom?: number; emoji?: string }>) {
  const theme = useTheme();
  const { paddingTopBottom = 16, emoji } = props;
  return (
    <>
      {emoji && <Text style={styles.emoji}>{emoji}</Text>}
      <Text
        style={[
          styles.text,
          { color: theme.SecondaryText, paddingTop: paddingTopBottom, paddingBottom: paddingTopBottom },
        ]}
      >
        {props.children}
      </Text>
    </>
  );
}
