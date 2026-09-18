import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { AssessmentResult } from '@/data/assessment-questions';
import { useTheme } from '@/hooks/use-theme';

const MAX_SCORE_PER_TYPE = 30; // 6 questions per type, rated 1-5

const ROWS: { key: keyof AssessmentResult; label: string }[] = [
  { key: 'realisticScore', label: 'Realistic' },
  { key: 'investigativeScore', label: 'Investigative' },
  { key: 'artisticScore', label: 'Artistic' },
  { key: 'socialScore', label: 'Social' },
  { key: 'enterprisingScore', label: 'Enterprising' },
  { key: 'conventionalScore', label: 'Conventional' },
];

export function AssessmentResultCard({ result }: { result: AssessmentResult }) {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.header}>
        <ThemedText type="subtitle">Your Holland Code</ThemedText>
        {result.resultCode && (
          <View style={[styles.codeBadge, { backgroundColor: theme.primaryContainer }]}>
            <ThemedText type="smallBold" themeColor="onPrimaryContainer">
              {result.resultCode}
            </ThemedText>
          </View>
        )}
      </View>

      <View style={styles.rows}>
        {ROWS.map(({ key, label }) => {
          const score = result[key] as number;
          const percent = Math.min(100, Math.round((score / MAX_SCORE_PER_TYPE) * 100));
          return (
            <View key={key} style={styles.row}>
              <View style={styles.rowLabelRow}>
                <ThemedText type="small">{label}</ThemedText>
                <ThemedText type="small" themeColor="onSurfaceVariant">
                  {score}
                </ThemedText>
              </View>
              <View style={[styles.track, { backgroundColor: theme.surfaceContainerHigh }]}>
                <View style={[styles.fill, { width: `${percent}%`, backgroundColor: theme.primary }]} />
              </View>
            </View>
          );
        })}
      </View>

      <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.note}>
        {result.persisted
          ? 'This result has been saved to your profile.'
          : "You're not signed in, so this result wasn't saved."}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.three,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.full,
  },
  rows: {
    gap: Spacing.two,
  },
  row: {
    gap: 4,
  },
  rowLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  track: {
    height: 8,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.full,
  },
  note: {
    lineHeight: 18,
  },
});
