import React from 'react';
import { View } from 'react-native';

interface IProps {
  gap?: number;
}

const Separator = (props: IProps) => <View style={{ height: props.gap || 10 }} />;
export default Separator;
