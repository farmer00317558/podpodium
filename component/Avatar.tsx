import React, { useMemo } from 'react';
import { Image, ImageStyle, Platform, StyleSheet } from 'react-native';
import ProgressiveFastImage, {
  IProgressiveFastImageProps,
} from '@freakycoder/react-native-progressive-fast-image';
import { useTheme } from '../common/theme';

const styles = StyleSheet.create({
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  loadingImage: {
    opacity: 1,
  },
});

interface IProps extends Omit<IProgressiveFastImageProps, 'source'> {
  uri: (string | undefined)[] | string;
  height?: number;
  width?: number;
  thumbnailSourceUri?: string;
}

export default function Avatar(props: IProps) {
  const { uri, thumbnailSourceUri, style, ...imageProps } = props;
  const source = useMemo(() => {
    if (Array.isArray(uri)) {
      return {
        uri: uri[0],
      };
    }
    return {
      uri,
    };
  }, [uri]);

  const tSource = useMemo(
    () => (thumbnailSourceUri ? { uri: thumbnailSourceUri } : undefined),
    [thumbnailSourceUri],
  );

  const theme = useTheme();

  if (Platform.OS === 'ios') {
    return (
      <Image
        style={[
          styles.avatar,
          style as ImageStyle,
          { backgroundColor: theme.CardBackground, opacity: theme.ImageOpacity },
        ]}
        {...imageProps}
        source={source}
      />
    );
  }

  return (
    <ProgressiveFastImage
      style={[styles.avatar, style, { backgroundColor: theme.CardBackground, opacity: theme.ImageOpacity }]}
      {...imageProps}
      source={source}
      thumbnailSource={tSource}
    />
  );
}
