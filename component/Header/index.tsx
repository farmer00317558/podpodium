import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../../common/theme';

const styles = StyleSheet.create({
  wrapper: {},
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 56,
  },
  left: {
    width: 36,
  },
  title: {
    flex: 1,
    fontWeight: '800',
    fontSize: 16,
    textAlign: 'center',
  },
  right: {
    width: 36,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default function (props: NativeStackHeaderProps) {
  const { options, navigation } = props;
  const inset = useSafeAreaInsets();
  const theme = useTheme();
  let title: React.ReactNode = options.title;
  let isStringTitle = true;
  if (typeof options.headerTitle === 'string') {
    title = options.headerTitle;
  } else if (options.headerTitle) {
    title = options.headerTitle({ children: options.title || '', tintColor: '#333333' });
    isStringTitle = false;
  }
  const paddingTop = useMemo(() => Math.max(inset.top, 16), [inset.top]);
  return (
    <View style={[styles.wrapper, { backgroundColor: theme.ContentBackground, paddingTop }]}>
      <View style={styles.content}>
        <View style={styles.left}>
          <Icon name="arrow-left" color={theme.PrimaryText} size={26} onPress={() => navigation.goBack()} />
        </View>
        {isStringTitle ? <Text style={[styles.title, { color: theme.PrimaryText }]}>{title}</Text> : title}
        <View style={styles.right}>{options.headerRight?.({ tintColor: theme.PrimaryText })}</View>
      </View>
    </View>
  );
}
