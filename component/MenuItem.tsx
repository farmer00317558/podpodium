import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../common/theme';
import { RouteParamsList } from '../common/type';

const iconMap = {
  MaterialCommunityIcons,
  IonIcons,
};

interface IProps {
  lib?: keyof typeof iconMap;
  text: string;
  icon?: string;
  screen?: string;
  externalUrl?: string;
  params?: any;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 10,
  },
  inner: {
    height: 48,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    paddingLeft: 8,
  },
  text: {
    marginLeft: 5,
  },
});

export default function MenuItem(props: IProps) {
  const { lib = 'MaterialCommunityIcons', text, icon, screen, externalUrl, params, onPress } = props;
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const theme = useTheme();
  const Icon = iconMap[lib];

  const handlePress = () => {
    if (externalUrl) {
      Linking.openURL(externalUrl);
      return;
    }
    if (screen) {
      nav.navigate(screen, params);
      return;
    }
    onPress?.();
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[
          styles.inner,
          {
            backgroundColor: theme.CardBackground,
          },
        ]}
        onPress={handlePress}
      >
        {!!icon && (
          <Text>
            <Icon color={theme.PrimaryText} name={icon} size={24} />
          </Text>
        )}
        <Text style={[styles.text, { color: theme.PrimaryText }]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
