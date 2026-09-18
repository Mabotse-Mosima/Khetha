import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type SubjectCardProps = {
  title: string;
  subtitle: string;
  levelLabel: string;
  levelTone?: 'primary' | 'neutral';
  apsLabel?: string;
  footnote?: string;
  footnotePosition?: 'row' | 'stacked';
};

export function SubjectCard({
  title,
  subtitle,
  levelLabel,
  levelTone = 'primary',
  apsLabel,
  footnote,
  footnotePosition = 'row',
}: SubjectCardProps) {
  const theme = useTheme();
  const stacked = footnotePosition === 'stacked';

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.headerRow}>
        <View style={styles.textColumn}>
          <View style={styles.titleRow}>
            <ThemedText type="smallBold" style={styles.title}>
              {title}
            </ThemedText>
            <MaterialIcons name="check-circle" size={18} color={theme.primary} />
          </View>
          <ThemedText type="small" themeColor="onSurfaceVariant">
            {subtitle}
          </ThemedText>
        </View>
        <View style={stacked ? styles.badgeColumn : undefined}>
          <View
            style={[
              styles.levelBadge,
              { backgroundColor: levelTone === 'primary' ? theme.primaryContainer : theme.surfaceContainerHigh },
            ]}>
            <ThemedText
              type="smallBold"
              style={{ color: levelTone === 'primary' ? theme.onPrimary : theme.onSurface }}>
              {levelLabel}
            </ThemedText>
          </View>
          {stacked && footnote && (
            <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.stackedFootnote}>
              {footnote}
            </ThemedText>
          )}
        </View>
      </View>

      {!stacked && (apsLabel || footnote) && (
        <View style={styles.footerRow}>
          {apsLabel && (
            <ThemedText type="smallBold" themeColor="secondary">
              {apsLabel}
            </ThemedText>
          )}
          {apsLabel && footnote && <ThemedText themeColor="outlineVariant">•</ThemedText>}
          {footnote && (
            <ThemedText type="small" themeColor="onSurfaceVariant">
              {footnote}
            </ThemedText>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  textColumn: {
    flexShrink: 1,
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 14,
  },
  levelBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  badgeColumn: {
    alignItems: 'flex-end',
  },
  stackedFootnote: {
    marginTop: 4,
    textAlign: 'right',
  },
});
