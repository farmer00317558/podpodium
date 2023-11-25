import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Shadow } from 'react-native-shadow-2';
import { useTheme } from '../common/theme';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  inputWrapper: {
    padding: 0,
    height: 36,
    lineHeight: 36,
    paddingLeft: 10,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    lineHeight: 36,
  },
  input: {
    flex: 1,
    height: 36,
    padding: 0,
    paddingLeft: 8,
  },
  shadowView: {
    width: '100%',
  },
  icon: {},
});

interface IProps {
  search?: string;
  onPress?: () => void;
  onSearch?: (search: string) => void;
  onChange?: (value: string) => void;
}

export default function (props: IProps) {
  const { onPress, onSearch, onChange, search } = props;
  const theme = useTheme();
  const { t } = useTranslation();
  const enable = !onPress;
  const placeholder = t('search.searchPlaceholder');
  return (
    <Shadow viewStyle={styles.shadowView} startColor={theme.Shadow} sides={['bottom']}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.wrapper, { backgroundColor: theme.ContentBackground }]}>
          <View style={[styles.inputWrapper, { backgroundColor: theme.CardBackground }]}>
            <Icon name="layers-search-outline" size={18} color={theme.SecondaryText} style={styles.icon} />
            {!enable ? (
              <Text style={[styles.input, styles.textInput]}>{placeholder}</Text>
            ) : (
              <TextInput
                autoFocus
                value={search}
                style={[styles.input, { color: theme.PrimaryText }]}
                returnKeyType="search"
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={theme.SecondaryText}
                onEndEditing={(e) => onSearch?.(e.nativeEvent.text)}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Shadow>
  );
}
