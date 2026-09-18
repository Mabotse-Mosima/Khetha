import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type DeadlineBannerProps = {
  eyebrow: string;
  daysLeftLabel: string;
  title: string;
  description: string;
};

export function DeadlineBanner({ eyebrow, daysLeftLabel, title, description }: DeadlineBannerProps) {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={[styles.iconCircle, { backgroundColor: theme.tertiaryContainer }]}>
        <MaterialIcons name="event" size={20} color={theme.onTertiaryContainer} />
      </View>
      <View style={styles.content}>
        <View style={styles.topRow}>
          <ThemedText type="smallBold" themeColor="tertiary" style={styles.eyebrow}>
            {eyebrow}
          </ThemedText>
          <View style={[styles.daysPill, { backgroundColor: theme.tertiaryContainer }]}>
            <ThemedText type="smallBold" themeColor="onTertiaryContainer">
              {daysLeftLabel}
            </ThemedText>
          </View>
        </View>
        <ThemedText type="smallBold" style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {description}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexShrink: 1,
    gap: 2,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.one,
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 0.6,
  },
  daysPill: {
    paddingHorizontal: Spacing.one,
    paddingVertical: 2,
    borderRadius: Radius.sm,
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
  },
});
