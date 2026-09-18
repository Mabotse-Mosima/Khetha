import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type StatTileProps = {
  value: string;
  label: string;
  valueColor?: ThemeColor;
  unit?: string;
};

export function StatTile({ value, label, valueColor = 'primary', unit }: StatTileProps) {
  const theme = useTheme();

  return (
    <View style={[styles.tile, { backgroundColor: theme.surfaceContainerLow }]}>
      <View style={styles.valueRow}>
        <ThemedText type="subtitle" style={styles.value} themeColor={valueColor}>
          {value}
        </ThemedText>
        {unit && (
          <ThemedText type="smallBold" themeColor={valueColor}>
            {unit}
          </ThemedText>
        )}
      </View>
      <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.label}>
        {label}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.one,
    borderRadius: Radius.md,
    gap: 2,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
  },
  value: {
    fontSize: 20,
    lineHeight: 26,
  },
  label: {
    textAlign: 'center',
  },
});
