import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function OfflineGuaranteeCard() {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <MaterialIcons name="wifi-protected-setup" size={24} color={theme.secondary} />
      <View style={styles.textColumn}>
        <ThemedText type="smallBold">Khetha Smart Guidance</ThemedText>
        <ThemedText type="small" themeColor="onSurfaceVariant">
          Subject requirements cached locally. Works zero-rated on participating SA mobile
          networks.
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  textColumn: {
    flexShrink: 1,
    gap: 2,
  },
});
