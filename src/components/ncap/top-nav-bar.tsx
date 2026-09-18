import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function TopNavBar() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.surfaceContainerLowest, borderBottomColor: theme.cardBorder }]}>
      <Image
        source={require('@/assets/images/dhet-logo.jpg')}
        style={styles.dhetLogo}
        contentFit="contain"
      />
      <Image
        source={require('@/assets/images/khetha-logo.png')}
        style={styles.khethaLogo}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    marginBottom: Spacing.two,
    borderBottomWidth: 1,
  },
  dhetLogo: {
    height: 48,
    width: 128,
  },
  khethaLogo: {
    height: 34,
    width: 78,
  },
});
