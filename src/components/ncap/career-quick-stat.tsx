import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { CareerQuickStat as CareerQuickStatData } from '@/data/career-details';
import { useTheme } from '@/hooks/use-theme';

export function CareerQuickStat({ icon, label, value, sublabel, valueColor }: CareerQuickStatData) {
  const theme = useTheme();

  return (
    <View style={[styles.tile, { backgroundColor: theme.surfaceContainerLow }]}>
      <MaterialIcons name={icon} size={22} color={theme.secondary} style={styles.icon} />
      <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.label} numberOfLines={1}>
        {label}
      </ThemedText>
      <ThemedText type="smallBold" themeColor={valueColor} style={styles.value} numberOfLines={1}>
        {value}
      </ThemedText>
      <ThemedText type="small" themeColor="outline" style={styles.sublabel} numberOfLines={1}>
        {sublabel}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.one,
    borderRadius: Radius.md,
  },
  icon: {
    marginBottom: 2,
  },
  label: {
    fontSize: 10,
    lineHeight: 13,
    textAlign: 'center',
  },
  value: {
    fontSize: 16,
    lineHeight: 20,
  },
  sublabel: {
    fontSize: 10,
    lineHeight: 13,
  },
});
