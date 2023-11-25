import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '../common/theme';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: '30%',
    fontSize: 24,
  },
  slogan: {
    marginTop: 24,
  },
  reload: {
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reloadIcon: {
    marginBottom: 20,
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IProps {
  error: boolean;
  onReload: () => void;
}

export default function Welcome(props: IProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const { error, onReload } = props;
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: theme.PrimaryText }]}>{t('appName')}</Text>
      {error && (
        <View style={styles.content}>
          <TouchableOpacity
            style={[styles.reload, { backgroundColor: theme.CardBackground }]}
            onPress={onReload}
          >
            <Text style={{ color: theme.PrimaryText }}>{t('networkErr')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
