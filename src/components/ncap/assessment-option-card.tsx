import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { AssessmentOption } from '@/data/assessment-questions';
import { useTheme } from '@/hooks/use-theme';

type AssessmentOptionCardProps = {
  option: AssessmentOption;
  selected: boolean;
  onSelect: () => void;
};

export function AssessmentOptionCard({ option, selected, onSelect }: AssessmentOptionCardProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onSelect}
      style={[
        styles.card,
        { backgroundColor: theme.surfaceContainerLowest, borderColor: selected ? theme.primary : theme.cardBorder },
      ]}>
      <View
        style={[
          styles.iconBox,
          { backgroundColor: selected ? theme.primary : theme.surfaceContainer },
        ]}>
        <MaterialIcons
          name={option.icon}
          size={20}
          color={selected ? theme.onPrimary : theme.onSurfaceVariant}
        />
      </View>
      <View style={styles.textColumn}>
        <View style={styles.headerRow}>
          <ThemedText
            type="smallBold"
            themeColor={selected ? 'primary' : 'onSurfaceVariant'}>
            Option {option.id}
          </ThemedText>
          {selected && (
            <View style={[styles.selectedBadge, { backgroundColor: theme.primary }]}>
              <MaterialIcons name="check" size={12} color={theme.onPrimary} />
              <ThemedText type="smallBold" style={{ color: theme.onPrimary, fontSize: 10 }}>
                Selected
              </ThemedText>
            </View>
          )}
        </View>
        <ThemedText style={styles.description}>{option.description}</ThemedText>
        <View style={styles.hintRow}>
          <MaterialIcons name={option.hintIcon} size={13} color={theme.secondary} />
          <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.hint}>
            {option.hint}
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flex: 1,
    gap: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Spacing.one,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  description: {
    lineHeight: 22,
  },
  hintRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  hint: {
    flexShrink: 1,
  },
});
