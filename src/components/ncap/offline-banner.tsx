import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function OfflineBanner() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.surfaceContainerLow }]}>
      <View style={styles.info}>
        <View style={[styles.iconCircle, { backgroundColor: theme.secondaryContainer }]}>
          <MaterialIcons
            name="signal-cellular-connected-no-internet-4-bar"
            size={16}
            color={theme.onSecondaryContainer}
          />
        </View>
        <View style={styles.textColumn}>
          <ThemedText type="smallBold" themeColor="secondary">
            Data-Free Mode Active
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            14 saved careers &amp; tools offline ready
          </ThemedText>
        </View>
      </View>
      <View style={[styles.syncPill, { backgroundColor: theme.surfaceContainerHighest }]}>
        <ThemedText type="smallBold" themeColor="primary">
          Auto-syncs
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
    gap: Spacing.two,
    flexShrink: 1,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flexShrink: 1,
    gap: 2,
  },
  syncPill: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
});
