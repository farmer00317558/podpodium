import { EpisodeData } from '@podpodium/common/lib/user-data-manager/v2';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRootState } from '../common/hook';
import { useTheme } from '../common/theme';

interface IProps {
  episode: EpisodeData;
}

function FavoriteButton(props: IProps) {
  const { episode } = props;
  const rootState = useRootState();
  const [isLiked, setIsLiked] = useState(false);
  const theme = useTheme();

  const handlePress = async () => {
    const liked = await rootState.toggleLike(episode);
    setIsLiked(liked);
  };

  const color = isLiked ? 'red' : theme.PrimaryText;

  useEffect(() => {
    rootState.isLiked(episode.id).then(setIsLiked);
  }, [episode, rootState]);

  return (
    <Pressable onPress={handlePress}>
      <Icon name={!isLiked ? 'heart-outline' : 'heart'} size={26} color={color} />
    </Pressable>
  );
}
export default observer(FavoriteButton);
