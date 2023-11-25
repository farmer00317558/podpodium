import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 4,
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%',
  },
  log: {
    padding: 8,
  },
});

interface IProps {
  logs: [string, boolean][];
}

export function Log(props: IProps) {
  const theme = useTheme();
  const { logs } = props;
  return (
    <View style={[styles.wrapper, { backgroundColor: theme.CardBackground }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.log}>
          {logs.map(([log, success]) => (
            <Text
              selectable
              key={log}
              style={[{ color: theme.SecondaryText }, !success && { color: theme.DangerText }]}
            >
              {log}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
