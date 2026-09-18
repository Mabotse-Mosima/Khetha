import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type AskKhethaCardProps = {
  promptQuestion: string;
  response: string;
};

export function AskKhethaCard({ promptQuestion, response }: AskKhethaCardProps) {
  const theme = useTheme();
  const [status, setStatus] = useState<'idle' | 'loading' | 'answered'>('idle');

  function askQuestion() {
    setStatus('loading');
    setTimeout(() => setStatus('answered'), 600);
  }

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerHigh }]}>
      <View style={styles.headerRow}>
        <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
          <MaterialIcons name="smart-toy" size={20} color={theme.onPrimary} />
        </View>
        <View style={styles.headerTextColumn}>
          <View style={styles.titleRow}>
            <ThemedText type="smallBold" style={styles.title}>
              Ask Khetha AI
            </ThemedText>
            <View style={[styles.advisorPill, { backgroundColor: theme.primary }]}>
              <ThemedText type="smallBold" style={[styles.advisorLabel, { color: theme.onPrimary }]}>
                24/7 ADVISOR
              </ThemedText>
            </View>
          </View>
          <ThemedText type="small" themeColor="onSurfaceVariant">
            Instant answers regarding trade requirements, physical stamina, and career transitions.
          </ThemedText>
        </View>
      </View>

      <Pressable
        onPress={askQuestion}
        style={({ pressed }) => [
          styles.promptButton,
          { backgroundColor: theme.surfaceContainerLowest },
          pressed && styles.pressed,
        ]}>
        <View style={styles.promptTextRow}>
          <MaterialIcons name="help" size={18} color={theme.tertiaryContainer} />
          <ThemedText type="smallBold" style={styles.promptText} numberOfLines={2}>
            &ldquo;{promptQuestion}&rdquo;
          </ThemedText>
        </View>
        <MaterialIcons name="arrow-forward" size={18} color={theme.primary} />
      </Pressable>

      {status !== 'idle' && (
        <View style={[styles.responseBox, { backgroundColor: theme.surfaceContainerLowest }]}>
          <View style={styles.responseHeader}>
            <MaterialIcons name="psychology" size={16} color={theme.primary} />
            <ThemedText type="smallBold" themeColor="primary">
              Khetha Advisor Insight
            </ThemedText>
          </View>
          <ThemedText type="small">
            {status === 'loading' ? 'Analyzing requirement guidelines...' : response}
          </ThemedText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Radius.lg,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextColumn: {
    flex: 1,
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  title: {
    fontSize: 16,
  },
  advisorPill: {
    paddingHorizontal: Spacing.one,
    paddingVertical: 1,
    borderRadius: Radius.sm,
  },
  advisorLabel: {
    fontSize: 9,
    lineHeight: 12,
    letterSpacing: 0.3,
  },
  promptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
    padding: Spacing.two,
    borderRadius: Radius.md,
  },
  pressed: {
    opacity: 0.85,
  },
  promptTextRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  promptText: {
    flex: 1,
  },
  responseBox: {
    padding: Spacing.three,
    borderRadius: Radius.md,
    gap: 4,
  },
  responseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
