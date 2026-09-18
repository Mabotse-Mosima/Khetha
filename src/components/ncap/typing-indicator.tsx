import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Radius } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { ChatBubble } from './chat-bubble';

const EASE_IN_OUT = Easing.bezier(0.77, 0, 0.175, 1);
const DOT_DELAYS = [0, 120, 240];

function Dot({ delay, color }: { delay: number; color: string }) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.set(
      withDelay(
        delay,
        withRepeat(
          withSequence(
            withTiming(1, { duration: 350, easing: EASE_IN_OUT }),
            withTiming(0, { duration: 350, easing: EASE_IN_OUT }),
          ),
          -1,
          false,
        ),
      ),
    );
  }, [delay, progress]);

  const style = useAnimatedStyle(() => ({
    opacity: 0.3 + progress.get() * 0.7,
    transform: [{ translateY: -4 * progress.get() }],
  }));

  return <Animated.View style={[styles.dot, { backgroundColor: color }, style]} />;
}

export function TypingIndicator() {
  const theme = useTheme();

  return (
    <ChatBubble sender="ai" name="Khetha AI is typing" time="">
      <View style={styles.row}>
        {DOT_DELAYS.map((delay) => (
          <Dot key={delay} delay={delay} color={theme.onSurfaceVariant} />
        ))}
      </View>
    </ChatBubble>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 2,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: Radius.full,
  },
});
