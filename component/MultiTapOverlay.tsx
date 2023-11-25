import React, { useRef } from 'react';
import { Pressable } from 'react-native';

interface MultiTapOverlayProps {
  onLongPress?: () => void;
  onMultiPress?: () => void;
  multiTapCount?: number;
  multiTapDelay?: number;
}

export default function MultiPressable(props: React.PropsWithChildren<MultiTapOverlayProps>) {
  const { onLongPress, onMultiPress, multiTapCount = 2, multiTapDelay = 200, children } = props;
  const lastPress = useRef(Date.now());
  const tapCount = useRef(0);

  const handlePress = () => {
    const now = Date.now();
    if (now - lastPress.current <= multiTapDelay) {
      if (tapCount.current < multiTapCount - 1) {
        tapCount.current += 1;
      } else {
        tapCount.current = 0;
        onMultiPress?.();
      }
    } else {
      lastPress.current = now;
      tapCount.current = 1;
    }
  };
  const handleLongPress = () => onLongPress && onLongPress();

  return (
    <Pressable delayLongPress={1000} onLongPress={handleLongPress} onPress={handlePress}>
      {children}
    </Pressable>
  );
}
