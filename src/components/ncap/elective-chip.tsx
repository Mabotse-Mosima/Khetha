import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ElectiveChipProps = {
  label: string;
  selected: boolean;
  onToggle: () => void;
};

export function ElectiveChip({ label, selected, onToggle }: ElectiveChipProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onToggle}
      style={[
        styles.chip,
        { backgroundColor: selected ? theme.primary : theme.surfaceContainerLowest },
      ]}>
      <MaterialIcons
        name={selected ? 'check' : 'add-circle'}
        size={16}
        color={selected ? theme.onPrimary : theme.secondary}
      />
      <ThemedText type="smallBold" style={{ color: selected ? theme.onPrimary : theme.onSurface }}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
    borderRadius: Radius.md,
  },
});
