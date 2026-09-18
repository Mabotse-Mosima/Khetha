import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function ScarceSkillTeaser({ note }: { note: string }) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.surfaceContainerLow }]}>
      <View style={styles.info}>
        <MaterialIcons name="lightbulb" size={20} color={theme.primary} />
        <ThemedText type="small" style={styles.note} numberOfLines={2}>
          {note}
        </ThemedText>
      </View>
      <View style={[styles.badge, { backgroundColor: theme.tertiaryContainer }]}>
        <ThemedText type="smallBold" themeColor="onTertiaryContainer" style={styles.badgeLabel}>
          SCARCE SKILL
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
    padding: Spacing.two,
    borderRadius: Radius.lg,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    flexShrink: 1,
  },
  note: {
    flexShrink: 1,
  },
  badge: {
    paddingHorizontal: Spacing.one,
    paddingVertical: 2,
    borderRadius: Radius.sm,
  },
  badgeLabel: {
    fontSize: 10,
  },
});
