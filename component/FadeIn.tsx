import React, { useState, useEffect, PropsWithChildren } from 'react';
import { Animated } from 'react-native';

export default function FadeIn(props: PropsWithChildren<any>) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
