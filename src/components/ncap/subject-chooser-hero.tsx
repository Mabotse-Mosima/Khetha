import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function SubjectChooserHero() {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.content}>
        <View style={styles.badgeRow}>
          <View style={[styles.pill, { backgroundColor: theme.primaryContainer }]}>
            <ThemedText type="smallBold" themeColor="onPrimaryContainer" style={{ letterSpacing: 0.3 }}>
              NSC &amp; NCV
            </ThemedText>
          </View>
          <View style={styles.gradeRow}>
            <MaterialIcons name="school" size={14} color={theme.onSurfaceVariant} />
            <ThemedText type="small" themeColor="onSurfaceVariant">
              Grade 10–12
            </ThemedText>
          </View>
        </View>
        <ThemedText type="title" style={styles.title}>
          Subject Chooser
        </ThemedText>
        <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.description}>
          Select your Grade 10–12 NSC or NCV subjects to unlock matching career paths, calculate
          real-time APS, and discover university or TVET college opportunities.
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
  },
  content: {
    gap: Spacing.one,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  pill: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  gradeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
  },
  description: {
    maxWidth: 320,
    lineHeight: 18,
  },
});
