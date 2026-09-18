import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { CareerResponsibility } from '@/data/career-details';
import { useTheme } from '@/hooks/use-theme';

export function CareerResponsibilityRow({ icon, title, description }: CareerResponsibility) {
  const theme = useTheme();

  return (
    <View style={[styles.row, { backgroundColor: theme.surfaceContainerLow }]}>
      <MaterialIcons name={icon} size={20} color={theme.secondary} style={styles.icon} />
      <View style={styles.textColumn}>
        <ThemedText type="smallBold">{title}</ThemedText>
        <ThemedText type="small" themeColor="onSurfaceVariant">
          {description}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
    padding: Spacing.two,
    borderRadius: Radius.md,
  },
  icon: {
    marginTop: 2,
  },
  textColumn: {
    flex: 1,
    gap: 2,
  },
});
