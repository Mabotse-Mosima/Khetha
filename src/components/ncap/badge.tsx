import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';

type BadgeProps = {
  label: string;
  backgroundColor: string;
  textColor: string;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Badge({ label, backgroundColor, textColor, icon, style }: BadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor }, style]}>
      {icon}
      <ThemedText type="smallBold" style={[styles.label, { color: textColor }]}>
        {label}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.full,
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
  },
});
