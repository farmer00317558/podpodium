import React from 'react';
import _ from 'lodash';
import { Pressable, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RouteParamsList } from '../common/type';
import { ScreenPodcastDetail } from '../common/constant';
import Avatar from './Avatar';

interface PodcastGalleryItem {
  url: string;
  image: string;
}

interface IProps {
  column?: number;
  podcasts: PodcastGalleryItem[];
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 6,
  },
  row: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  imageWrapper: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 'auto',
    height: 'auto',
    borderRadius: 10,
    aspectRatio: 1,
  },
  lastImage: {
    marginRight: 0,
  },
});

function PodcastGallery(props: IProps) {
  const { podcasts, column = 3 } = props;
  const chunks: (PodcastGalleryItem | null)[][] = _.chunk(podcasts, column);
  const nav = useNavigation<NavigationProp<RouteParamsList>>();
  const handlePress = (podcast: PodcastGalleryItem) => {
    nav.navigate(ScreenPodcastDetail, { url: podcast.url });
  };

  chunks.forEach((c) => {
    const a = column - c.length;
    if (a !== 0) {
      for (let i = 0; i < a; i++) {
        c.push(null);
      }
    }
  });
  return (
    <View renderToHardwareTextureAndroid style={styles.wrapper}>
      {chunks.map((c, rowIdx) => (
        <View key={rowIdx} style={styles.row}>
          {c.map((i, idx) => {
            const style =
              idx === c.length - 1 ? [styles.imageWrapper, styles.lastImage] : [styles.imageWrapper];
            return i ? (
              <Pressable style={style} key={i.url} onPress={() => handlePress(i)}>
                <Avatar style={styles.image} uri={i.image} />
              </Pressable>
            ) : (
              <View key={idx} style={style} />
            );
          })}
        </View>
      ))}
    </View>
  );
}

export default PodcastGallery;
