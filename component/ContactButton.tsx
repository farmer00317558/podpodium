import React from 'react';
import { Linking, Pressable, StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { useTheme } from '../common/theme';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  feedbackLink: {
    fontSize: 16,
  },
});

interface IProps {
  style?: StyleProp<TextStyle>;
  fontSize?: number;
}

export default function ContactButton(props: IProps) {
  const { style, fontSize } = props;
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Pressable
      onPress={() => {
        Linking.openURL('https://twitter.com/Farmer00317558');
      }}
    >
      <Text style={[styles.feedbackLink, style, { fontSize, color: theme.Primary }]}>
        {t('contactBtnText')}
      </Text>
    </Pressable>
  );
}
