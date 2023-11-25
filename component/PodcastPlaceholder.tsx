import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Placeholder, PlaceholderLine, PlaceholderMedia, Progressive } from 'rn-placeholder';
import { useTheme } from '../common/theme';
import EpisodeListPlaceholder from './EpisodeListPlaceholder';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 10,
    marginRight: 10,
  },
  header: {
    marginBottom: 24,
  },
});

export default function PodcastPlaceholder() {
  const theme = useTheme();
  const lineStyle = { backgroundColor: theme.CardBackground };
  return (
    <View style={[styles.wrapper]}>
      <Placeholder
        style={styles.header}
        Animation={(fadeProps) => <Progressive {...fadeProps} color={theme.LightCardBackground} />}
      >
        <Placeholder Left={() => <PlaceholderMedia style={[styles.avatar, lineStyle]} />}>
          <PlaceholderLine style={lineStyle} width={80} height={25} />
          <PlaceholderLine style={lineStyle} width={40} />
          <PlaceholderLine style={lineStyle} width={60} />
        </Placeholder>
      </Placeholder>
      <EpisodeListPlaceholder length={2} />
    </View>
  );
}
