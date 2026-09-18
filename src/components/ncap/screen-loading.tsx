import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function ScreenLoading({ label }: { label: string }) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.primary} />
      <ThemedText type="small" themeColor="onSurfaceVariant">
        {label}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    paddingVertical: Spacing.six,
  },
});
