import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { CareerSubject } from '@/data/career-details';
import { useTheme } from '@/hooks/use-theme';

export function CareerSubjectRow({ icon, name, description, levelLabel, tone }: CareerSubject) {
  const theme = useTheme();
  const required = tone === 'required';

  return (
    <View
      style={[
        styles.row,
        { backgroundColor: required ? theme.surfaceContainer : theme.surfaceContainerLow },
      ]}>
      <View style={styles.leading}>
        <MaterialIcons name={icon} size={22} color={theme.primary} />
        <View style={styles.textColumn}>
          <ThemedText type="smallBold" style={styles.name}>
            {name}
          </ThemedText>
          <ThemedText type="small" themeColor="onSurfaceVariant">
            {description}
          </ThemedText>
        </View>
      </View>
      <View
        style={[
          styles.levelPill,
          { backgroundColor: required ? theme.primary : theme.secondaryContainer },
        ]}>
        <ThemedText
          type="smallBold"
          themeColor={required ? 'onPrimary' : 'onSecondaryContainer'}
          style={styles.levelLabel}>
          {levelLabel}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
    padding: Spacing.two,
    borderRadius: Radius.md,
  },
  leading: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  textColumn: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 14,
  },
  levelPill: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.sm,
  },
  levelLabel: {
    fontSize: 11,
    lineHeight: 14,
  },
});
