import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

type GreetingSectionProps = {
  name: string;
  grade: string;
  track: string;
};

export function GreetingSection({ name, grade, track }: GreetingSectionProps) {
  return (
    <View style={styles.container}>
      <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.eyebrow}>
        {grade} • {track}
      </ThemedText>
      <ThemedText type="title" style={styles.headline}>
        Dumela, {name}
      </ThemedText>
      <ThemedText themeColor="textSecondary">Here&apos;s where you left off in your career journey.</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    fontWeight: '700',
  },
  headline: {
    fontSize: 24,
    lineHeight: 30,
  },
});
