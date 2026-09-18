import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type MathsChoice = 'pure' | 'literacy';

type MathsStreamCardProps = {
  choice: MathsChoice;
  onChoiceChange: (choice: MathsChoice) => void;
};

export function MathsStreamCard({ choice, onChoiceChange }: MathsStreamCardProps) {
  const theme = useTheme();
  const isPure = choice === 'pure';

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.headerRow}>
        <View style={styles.textColumn}>
          <ThemedText type="smallBold" style={styles.title}>
            Mathematical Science Stream
          </ThemedText>
          <ThemedText type="small" themeColor="onSurfaceVariant">
            Select either Pure Mathematics or Maths Literacy
          </ThemedText>
        </View>
        <View style={[styles.crucialBadge, { backgroundColor: theme.tertiaryContainer }]}>
          <ThemedText type="smallBold" themeColor="onTertiaryContainer">
            Important
          </ThemedText>
        </View>
      </View>

      <View style={[styles.toggleTrack, { backgroundColor: theme.surfaceContainerHigh }]}>
        <Pressable
          onPress={() => onChoiceChange('pure')}
          style={[styles.toggleOption, isPure && { backgroundColor: theme.primary }]}>
          {isPure && <MaterialIcons name="check" size={16} color={theme.onPrimary} />}
          <ThemedText
            type="smallBold"
            style={{ color: isPure ? theme.onPrimary : theme.onSurfaceVariant }}>
            {isPure ? 'Pure Maths (Lvl 5)' : 'Pure Maths'}
          </ThemedText>
        </Pressable>
        <Pressable
          onPress={() => onChoiceChange('literacy')}
          style={[styles.toggleOption, !isPure && { backgroundColor: theme.tertiary }]}>
          {!isPure && <MaterialIcons name="check" size={16} color={theme.onTertiary} />}
          <ThemedText
            type="smallBold"
            style={{ color: !isPure ? theme.onTertiary : theme.onSurfaceVariant }}>
            {!isPure ? 'Maths Literacy (Lvl 6)' : 'Mathematical Literacy'}
          </ThemedText>
        </Pressable>
      </View>

      <View style={styles.footerRow}>
        <View style={styles.footerLeft}>
          <MaterialIcons name="lock-open" size={14} color={theme.primary} />
          <ThemedText type="smallBold" themeColor="primary">
            {isPure ? 'STEM & Health Sciences Open' : 'Technical & TVET Pathways Open'}
          </ThemedText>
        </View>
        <ThemedText type="smallBold">{isPure ? '5 APS Points' : '4 APS Points'}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  textColumn: {
    flexShrink: 1,
    gap: 2,
  },
  title: {
    fontSize: 14,
  },
  crucialBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  toggleTrack: {
    flexDirection: 'row',
    borderRadius: Radius.md,
    padding: 4,
    gap: 4,
  },
  toggleOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: Spacing.two,
    borderRadius: Radius.sm,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.one,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
