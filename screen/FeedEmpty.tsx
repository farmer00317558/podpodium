import React from 'react';
import { StyleSheet, View } from 'react-native';
import NewUserReco from './NewUserReco';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

interface IProps {
  hasSubscribe: boolean;
}

function FeedEmpty(props: IProps) {
  const { hasSubscribe } = props;
  return <View style={styles.content}>{!hasSubscribe && <NewUserReco />}</View>;
}

export default React.memo(FeedEmpty);
