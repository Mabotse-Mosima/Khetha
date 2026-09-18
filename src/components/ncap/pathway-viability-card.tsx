import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { StatTile } from './stat-tile';

type PathwayViabilityCardProps = {
  subjectsPickedLabel: string;
  apsScore: number;
  careersUnlocked: number;
  apsGaugePercent: number;
  apsQualified: boolean;
};

export function PathwayViabilityCard({
  subjectsPickedLabel,
  apsScore,
  careersUnlocked,
  apsGaugePercent,
  apsQualified,
}: PathwayViabilityCardProps) {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <MaterialIcons name="insights" size={20} color={theme.primary} />
          <ThemedText type="smallBold" themeColor="primary" style={styles.headerLabel}>
            Pathway Viability
          </ThemedText>
        </View>
        <View style={[styles.demandBadge, { backgroundColor: theme.secondaryContainer }]}>
          <ThemedText type="smallBold" themeColor="onSecondaryContainer">
            High Demand Active
          </ThemedText>
        </View>
      </View>

      <View style={styles.statsGrid}>
        <StatTile value={subjectsPickedLabel} label="Subjects Picked" valueColor="primary" />
        <StatTile value={String(apsScore)} unit="APS" label="Estimated Score" valueColor="tertiary" />
        <StatTile value={String(careersUnlocked)} label="Careers Open" valueColor="secondary" />
      </View>

      <View style={styles.gaugeSection}>
        <View style={styles.gaugeLabelRow}>
          <ThemedText type="small" themeColor="onSurfaceVariant">
            Bachelor Degree Entry (Min 30 APS)
          </ThemedText>
          <ThemedText type="smallBold" themeColor="primary">
            {apsQualified ? 'Qualified ✓' : 'Not Yet Qualified'}
          </ThemedText>
        </View>
        <View style={[styles.gaugeTrack, { backgroundColor: theme.surfaceContainerHigh }]}>
          <View style={[styles.gaugeFill, { width: `${apsGaugePercent}%`, backgroundColor: theme.primary }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  headerLabel: {
    fontSize: 14,
  },
  demandBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  gaugeSection: {
    gap: 4,
  },
  gaugeLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gaugeTrack: {
    height: 10,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  gaugeFill: {
    height: '100%',
    borderRadius: Radius.full,
  },
});
