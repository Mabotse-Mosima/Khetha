import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { UnlockedCareer } from '@/data/subject-chooser';
import { useTheme } from '@/hooks/use-theme';

export function UnlockedCareerCard({ career }: { career: UnlockedCareer }) {
  const theme = useTheme();
  const tagColors =
    career.tagTone === 'tertiary' || career.tagTone === 'tertiaryDim'
      ? { background: theme.tertiaryContainer, text: theme.onTertiaryContainer }
      : { background: theme.secondaryContainer, text: theme.onSecondaryContainer };

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.headerRow}>
        <View style={styles.textColumn}>
          <View style={styles.titleRow}>
            <ThemedText type="smallBold" style={styles.title} numberOfLines={1}>
              {career.title}
            </ThemedText>
            <View style={[styles.tag, { backgroundColor: tagColors.background }]}>
              <ThemedText type="smallBold" style={{ color: tagColors.text, fontSize: 10 }}>
                {career.tagLabel}
              </ThemedText>
            </View>
          </View>
          <ThemedText type="small" themeColor="secondary" style={styles.subtitle}>
            {career.subtitle}
          </ThemedText>
        </View>
        <View style={[styles.iconBox, { backgroundColor: theme.surfaceContainerHigh }]}>
          <MaterialIcons name={career.icon} size={24} color={theme.primary} />
        </View>
      </View>

      <View style={styles.requirementsRow}>
        {career.requirements.map((requirement) => (
          <View
            key={requirement.label}
            style={[styles.requirementPill, { backgroundColor: theme.surfaceContainerHigh }]}>
            <MaterialIcons name={requirement.icon} size={14} color={theme.primary} />
            <ThemedText
              type="small"
              themeColor={requirement.emphasis ? 'secondary' : 'onSurfaceVariant'}
              style={requirement.emphasis ? styles.emphasisLabel : undefined}>
              {requirement.label}
            </ThemedText>
          </View>
        ))}
      </View>
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
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    flexShrink: 1,
  },
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  subtitle: {
    fontWeight: '600',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  requirementsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.one,
    paddingTop: 2,
  },
  requirementPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Spacing.one,
    paddingVertical: 2,
    borderRadius: Radius.sm,
  },
  emphasisLabel: {
    fontWeight: '700',
  },
});
