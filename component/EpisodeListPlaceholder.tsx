import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Progressive, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 10,
    marginRight: 10,
  },
  item: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 28,
  },
});

interface IProps {
  length?: number;
}

export default function EpisodeListPlaceholder(props: IProps) {
  const { length = 3 } = props;
  const theme = useTheme();
  const lineStyle = { backgroundColor: theme.CardBackground };
  const items = [];
  for (let i = 0; i < length; i++) {
    items.push(
      <View key={i} style={styles.item}>
        <Placeholder
          Animation={(fadeProps) => <Progressive {...fadeProps} color={theme.LightCardBackground} />}
        >
          <PlaceholderLine style={lineStyle} width={40} />
          <Placeholder Left={() => <PlaceholderMedia style={[styles.avatar, lineStyle]} />}>
            <PlaceholderLine style={lineStyle} width={80} />
            <PlaceholderLine style={lineStyle} />
            <PlaceholderLine style={lineStyle} />
            <PlaceholderLine style={lineStyle} width={50} />
          </Placeholder>
        </Placeholder>
      </View>,
    );
  }
  return <>{items}</>;
}
