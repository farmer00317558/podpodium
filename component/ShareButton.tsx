import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ScreenShare } from '../common/constant';
import { ShareMessage, ShareTargetEnum } from '../common/type';

interface IProps {
  target: ShareTargetEnum;
  id: string;
  rssUrl: string;
  message: ShareMessage;
  color?: string;
}

export default function ShareButton(props: IProps) {
  const { message, color, id, rssUrl, target } = props;
  const navigation = useNavigation();

  const handleShare = () => {
    navigation.dispatch(StackActions.push(ScreenShare, { message, id, rssUrl, target }));
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Icon name="share-social-outline" size={24} color={color} />
    </TouchableOpacity>
  );
}
