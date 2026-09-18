import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { CareerInstitution } from '@/data/career-details';
import { useTheme } from '@/hooks/use-theme';

export function CareerInstitutionCard({ badgeLabel, tone, name, location, footnote, ctaLabel }: CareerInstitution) {
  const theme = useTheme();
  const badgeBackground = tone === 'tvet' ? theme.primaryContainer : theme.secondaryContainer;
  const badgeText = tone === 'tvet' ? theme.onPrimaryContainer : theme.onSecondaryContainer;

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={[styles.badge, { backgroundColor: badgeBackground }]}>
        <ThemedText type="smallBold" style={[styles.badgeLabel, { color: badgeText }]}>
          {badgeLabel}
        </ThemedText>
      </View>

      <ThemedText type="smallBold" style={styles.name}>
        {name}
      </ThemedText>
      <View style={styles.locationRow}>
        <MaterialIcons name="near-me" size={16} color={theme.primary} />
        <ThemedText type="small" themeColor="onSurfaceVariant">
          {location}
        </ThemedText>
      </View>

      <View style={styles.footerRow}>
        <ThemedText type="small" themeColor="outline">
          {footnote}
        </ThemedText>
        <Pressable
          style={({ pressed }) => [
            styles.ctaButton,
            { backgroundColor: theme.surfaceContainer },
            pressed && styles.pressed,
          ]}>
          <ThemedText type="smallBold" themeColor="primary">
            {ctaLabel}
          </ThemedText>
        </Pressable>
      </View>
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
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Radius.sm,
    marginBottom: 2,
  },
  badgeLabel: {
    fontSize: 11,
    lineHeight: 14,
  },
  name: {
    fontSize: 16,
    lineHeight: 22,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Spacing.one,
  },
  ctaButton: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.md,
  },
  pressed: {
    opacity: 0.85,
  },
});
