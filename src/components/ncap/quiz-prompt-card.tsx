import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function QuizPromptCard() {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.info}>
        <View style={[styles.iconCircle, { backgroundColor: theme.secondaryContainer }]}>
          <MaterialIcons name="explore" size={20} color={theme.onSecondaryContainer} />
        </View>
        <View style={styles.textColumn}>
          <ThemedText type="smallBold" numberOfLines={1}>
            Not sure which career fits you?
          </ThemedText>
          <ThemedText type="small" themeColor="onSurfaceVariant" numberOfLines={1}>
            Take our 3-minute career quiz
          </ThemedText>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.cta,
          { backgroundColor: theme.surfaceContainer },
          pressed && styles.pressed,
        ]}>
        <ThemedText type="smallBold" themeColor="primary">
          Start quiz
        </ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    flexShrink: 1,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flexShrink: 1,
    gap: 1,
  },
  cta: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Radius.md,
  },
  pressed: {
    opacity: 0.85,
  },
});
