import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { CareerQuickStat as CareerQuickStatData } from '@/data/career-details';
import { useTheme } from '@/hooks/use-theme';

import { CareerQuickStat } from './career-quick-stat';

type CareerHeroCardProps = {
  imageUrl: string;
  ofoCode: string;
  priorityBadge: string;
  title: string;
  matchPercent: number;
  matchNote: string;
  quickStats: CareerQuickStatData[];
};

export function CareerHeroCard({
  imageUrl,
  ofoCode,
  priorityBadge,
  title,
  matchPercent,
  matchNote,
  quickStats,
}: CareerHeroCardProps) {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.image} contentFit="cover" />
        <View style={styles.overlayRow}>
          <View style={[styles.pill, { backgroundColor: theme.surfaceContainerLowest }]}>
            <ThemedText type="smallBold" style={styles.pillLabel}>
              OFO {ofoCode}
            </ThemedText>
          </View>
          <View style={[styles.pill, { backgroundColor: theme.surfaceContainerLowest }]}>
            <MaterialIcons name="cloud-done" size={14} color={theme.secondary} />
            <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.pillLabel}>
              Data-Free View
            </ThemedText>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <View style={[styles.priorityBadge, { backgroundColor: theme.tertiaryContainer }]}>
          <MaterialIcons name="local-fire-department" size={14} color={theme.onTertiaryContainer} />
          <ThemedText type="smallBold" themeColor="onTertiaryContainer" style={styles.priorityLabel}>
            {priorityBadge.toUpperCase()}
          </ThemedText>
        </View>

        <ThemedText type="title" style={styles.title}>
          {title}
        </ThemedText>

        <View style={[styles.matchBanner, { backgroundColor: theme.primaryContainer }]}>
          <MaterialIcons name="verified" size={18} color={theme.onPrimary} />
          <View style={styles.matchTextColumn}>
            <ThemedText type="smallBold" style={[styles.matchTitle, { color: theme.onPrimary }]}>
              {matchPercent}% match with your profile
            </ThemedText>
            <ThemedText type="small" themeColor="onPrimaryContainer" numberOfLines={1}>
              {matchNote}
            </ThemedText>
          </View>
        </View>

        <View style={styles.statsRow}>
          {quickStats.map((stat) => (
            <CareerQuickStat key={stat.label} {...stat} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },
  imageWrapper: {
    width: '100%',
    height: 176,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlayRow: {
    position: 'absolute',
    top: Spacing.two,
    left: Spacing.two,
    right: Spacing.two,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.one,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.full,
  },
  pillLabel: {
    fontSize: 11,
    lineHeight: 14,
  },
  body: {
    padding: Spacing.three,
    gap: Spacing.two,
  },
  priorityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 4,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.full,
  },
  priorityLabel: {
    fontSize: 10,
    lineHeight: 13,
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
  },
  matchBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    padding: Spacing.two,
    borderRadius: Radius.lg,
  },
  matchTextColumn: {
    flex: 1,
    gap: 1,
  },
  matchTitle: {
    fontSize: 15,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
});
