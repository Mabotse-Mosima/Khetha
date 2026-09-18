import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { ActiveElective } from '@/data/subject-chooser';
import { useTheme } from '@/hooks/use-theme';

type ElectiveSubjectCardProps = {
  elective: ActiveElective;
  onRemove: () => void;
};

export function ElectiveSubjectCard({ elective, onRemove }: ElectiveSubjectCardProps) {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.info}>
        <View style={[styles.iconBox, { backgroundColor: theme.surfaceContainerHigh }]}>
          <MaterialIcons name={elective.icon} size={20} color={theme.primary} />
        </View>
        <View style={styles.textColumn}>
          <View style={styles.titleRow}>
            <ThemedText type="smallBold" numberOfLines={1} style={styles.title}>
              {elective.title}
            </ThemedText>
            <MaterialIcons name="verified" size={16} color={theme.primary} />
          </View>
          <ThemedText type="small" themeColor="onSurfaceVariant">
            {elective.subtitle}
          </ThemedText>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={[styles.levelBadge, { backgroundColor: theme.primaryContainer }]}>
          <ThemedText type="smallBold" style={{ color: theme.onPrimary }}>
            {elective.levelLabel}
          </ThemedText>
        </View>
        <Pressable
          onPress={onRemove}
          hitSlop={8}
          style={({ pressed }) => [
            styles.removeButton,
            pressed && { backgroundColor: theme.surfaceContainerHigh },
          ]}>
          <MaterialIcons name="close" size={18} color={theme.onSurfaceVariant} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    flexShrink: 1,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flexShrink: 1,
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    flexShrink: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  levelBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
