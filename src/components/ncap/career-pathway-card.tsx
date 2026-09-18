import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { CareerPathway } from '@/data/career-details';
import { useTheme } from '@/hooks/use-theme';

export function CareerPathwayCard({ badgeLabel, tone, noteLabel, title, description, steps, tags }: CareerPathway) {
  const theme = useTheme();
  const badgeBackground = tone === 'primary' ? theme.primary : theme.secondary;
  const badgeText = tone === 'primary' ? theme.onPrimary : theme.onSecondary;

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.headerRow}>
        <View style={[styles.badge, { backgroundColor: badgeBackground }]}>
          <ThemedText type="smallBold" style={[styles.badgeLabel, { color: badgeText }]}>
            {badgeLabel.toUpperCase()}
          </ThemedText>
        </View>
        <ThemedText type="smallBold" themeColor={tone === 'primary' ? 'secondary' : 'tertiaryContainer'}>
          {noteLabel}
        </ThemedText>
      </View>

      <ThemedText type="subtitle" style={styles.title}>
        {title}
      </ThemedText>
      <ThemedText type="small" themeColor="onSurfaceVariant">
        {description}
      </ThemedText>

      {steps && (
        <View style={styles.timeline}>
          {steps.map((step, index) => (
            <View key={step.number} style={styles.timelineStep}>
              {index > 0 && (
                <View
                  style={[
                    styles.timelineConnector,
                    { backgroundColor: step.tone === 'primary' ? theme.primary : theme.secondary },
                  ]}
                />
              )}
              <View style={styles.timelineStepBody}>
                <View
                  style={[
                    styles.stepCircle,
                    { backgroundColor: step.tone === 'primary' ? theme.primary : theme.secondary },
                  ]}>
                  <ThemedText
                    type="smallBold"
                    themeColor={step.tone === 'primary' ? 'onPrimary' : 'onSecondary'}>
                    {step.number}
                  </ThemedText>
                </View>
                <ThemedText type="small" style={styles.stepLabel} numberOfLines={1}>
                  {step.label}
                </ThemedText>
                <ThemedText type="small" themeColor="outline" style={styles.stepSublabel} numberOfLines={1}>
                  {step.sublabel}
                </ThemedText>
              </View>
            </View>
          ))}
        </View>
      )}

      {tags && (
        <View style={styles.tagRow}>
          {tags.map((tag) => (
            <View key={tag.label} style={[styles.tagPill, { backgroundColor: theme.surfaceContainer }]}>
              <MaterialIcons name={tag.icon} size={14} color={theme.primary} />
              <ThemedText type="small" style={styles.tagLabel}>
                {tag.label}
              </ThemedText>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
    gap: Spacing.one,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
    marginBottom: 2,
  },
  badge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  badgeLabel: {
    fontSize: 10,
    lineHeight: 13,
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
  },
  timeline: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Spacing.two,
  },
  timelineStep: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timelineConnector: {
    flex: 1,
    height: 2,
    marginHorizontal: 2,
  },
  timelineStepBody: {
    alignItems: 'center',
    gap: 2,
  },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepLabel: {
    fontSize: 11,
    lineHeight: 14,
  },
  stepSublabel: {
    fontSize: 9,
    lineHeight: 12,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.one,
    paddingTop: Spacing.one,
  },
  tagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.sm,
  },
  tagLabel: {
    fontSize: 12,
    lineHeight: 16,
  },
});
