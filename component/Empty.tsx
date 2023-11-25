import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../common/theme';

interface IProps {
  text: string;
  emoji?: string;
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    paddingTop: '40%',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 30,
  },
});
export default function Empty(props: IProps) {
  const { text, emoji } = props;
  const theme = useTheme();
  return (
    <View style={styles.wrapper}>
      {emoji && <Text style={styles.emoji}>{emoji}</Text>}
      <Text style={[styles.text, { color: theme.SecondaryText }]}>{text}</Text>
    </View>
  );
}
