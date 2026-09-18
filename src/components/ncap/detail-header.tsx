import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type DetailHeaderProps = {
  title: string;
  subtitle: string;
};

export function DetailHeader({ title, subtitle }: DetailHeaderProps) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.back()}
        hitSlop={8}
        style={({ pressed }) => [
          styles.backButton,
          { backgroundColor: theme.surfaceContainerHigh },
          pressed && styles.pressed,
        ]}>
        <MaterialIcons name="arrow-back" size={22} color={theme.onSurface} />
      </Pressable>

      <View style={styles.titleColumn}>
        <ThemedText type="smallBold" style={styles.title} numberOfLines={1}>
          {title}
        </ThemedText>
        <ThemedText type="small" themeColor="outline" style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
  titleColumn: {
    flex: 1,
    gap: 1,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 10,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});
