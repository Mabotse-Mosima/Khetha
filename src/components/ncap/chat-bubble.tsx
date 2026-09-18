import { MaterialIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ChatBubbleProps = {
  sender: 'user' | 'ai';
  name: string;
  time: string;
  children: ReactNode;
};

export function ChatBubble({ sender, name, time, children }: ChatBubbleProps) {
  const theme = useTheme();
  const isUser = sender === 'user';

  return (
    <View style={[styles.wrapper, isUser ? styles.userAlign : styles.aiAlign]}>
      <View style={styles.nameRow}>
        <ThemedText
          type="small"
          themeColor={isUser ? 'onSurfaceVariant' : 'primary'}
          style={isUser ? undefined : styles.aiName}>
          {name}
        </ThemedText>
        <MaterialIcons
          name={isUser ? 'person' : 'verified-user'}
          size={12}
          color={isUser ? theme.onSurfaceVariant : theme.secondary}
        />
      </View>

      <View
        style={[
          styles.bubble,
          isUser
            ? [styles.userBubble, { backgroundColor: theme.primary }]
            : [styles.aiBubble, { backgroundColor: theme.surfaceContainerLow }],
        ]}>
        {typeof children === 'string' ? (
          <ThemedText
            type="default"
            style={styles.text}
            themeColor={isUser ? 'onPrimary' : 'onSurface'}>
            {children}
          </ThemedText>
        ) : (
          children
        )}
      </View>

      <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.time}>
        {time}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: 2,
  },
  userAlign: {
    alignItems: 'flex-end',
    paddingLeft: Spacing.five,
  },
  aiAlign: {
    alignItems: 'flex-start',
    paddingRight: Spacing.four,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  aiName: {
    fontWeight: '700',
  },
  bubble: {
    padding: Spacing.three,
    maxWidth: '100%',
  },
  userBubble: {
    borderTopLeftRadius: Radius.lg,
    borderTopRightRadius: Radius.lg,
    borderBottomLeftRadius: Radius.lg,
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    borderTopLeftRadius: Radius.lg,
    borderTopRightRadius: Radius.lg,
    borderBottomRightRadius: Radius.lg,
    borderBottomLeftRadius: 4,
    gap: Spacing.two,
  },
  text: {
    lineHeight: 22,
  },
  time: {
    fontSize: 10,
    lineHeight: 13,
  },
});
