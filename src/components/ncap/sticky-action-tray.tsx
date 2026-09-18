import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type StickyActionTrayProps = {
  primaryLabel: string;
  secondaryLabel: string;
};

export function StickyActionTray({ primaryLabel, secondaryLabel }: StickyActionTrayProps) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background, borderTopColor: theme.cardBorder }]}>
      <Pressable
        style={({ pressed }) => [styles.primaryButton, { backgroundColor: theme.primary }, pressed && styles.pressed]}>
        <ThemedText type="smallBold" style={{ color: theme.onPrimary }}>
          {primaryLabel}
        </ThemedText>
        <MaterialIcons name="arrow-forward" size={18} color={theme.onPrimary} />
      </Pressable>
      <Pressable style={styles.secondaryLink}>
        <MaterialIcons name="school" size={14} color={theme.secondary} />
        <ThemedText type="smallBold" themeColor="secondary">
          {secondaryLabel}
        </ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 2,
    borderTopWidth: 1,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.one,
  },
  primaryButton: {
    width: '100%',
    height: 48,
    borderRadius: Radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
  },
  pressed: {
    opacity: 0.85,
  },
  secondaryLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: Spacing.one,
  },
});
