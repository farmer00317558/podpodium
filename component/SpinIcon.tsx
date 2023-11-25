import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, Image } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps extends IconProps {
  enable?: boolean;
}

export default function SpinIcon(props: IProps) {
  const spinValue = useRef(new Animated.Value(0));
  const { size, name, color, enable = true } = props;

  useEffect(() => {
    if (!enable) {
      return;
    }
    const a = Animated.loop(
      Animated.timing(spinValue.current, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    a.start();
    return () => a.stop();
  }, [enable]);

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const source = useMemo(() => Icon.getImageSourceSync(name, size, color), [color, name, size]);

  return enable ? (
    <Animated.Image source={source} style={{ transform: [{ rotate: spin }], width: size, height: size }} />
  ) : (
    <Image source={source} style={{ width: size, height: size }} />
  );
}
