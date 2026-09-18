import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function AssessmentFooterNote() {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={[styles.iconCircle, { backgroundColor: theme.secondaryContainer }]}>
        <MaterialIcons name="info-outline" size={16} color={theme.onSecondaryContainer} />
      </View>
      <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.note}>
        Based on the{' '}
        <ThemedText type="smallBold" themeColor="onSurface">
          DHET NCAP Career Framework
        </ThemedText>
        . No wrong answers! Your answers help uncover occupations aligned with your natural strengths.
      </ThemedText>
      <View style={styles.footRow}>
        <View style={[styles.dot, { backgroundColor: theme.secondary }]} />
        <ThemedText type="small" themeColor="outline">
          NSFAS qualification pathways mapped in real-time
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    gap: Spacing.one,
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  note: {
    textAlign: 'center',
    lineHeight: 18,
    maxWidth: 340,
  },
  footRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: Radius.full,
  },
});
