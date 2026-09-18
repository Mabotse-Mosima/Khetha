import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type AssessmentNavControlsProps = {
  canGoPrevious: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export function AssessmentNavControls({ canGoPrevious, onPrevious, onNext }: AssessmentNavControlsProps) {
  const theme = useTheme();

  return (
    <View style={styles.row}>
      <Pressable
        onPress={onPrevious}
        disabled={!canGoPrevious}
        style={({ pressed }) => [
          styles.previousButton,
          { backgroundColor: theme.surfaceContainer, opacity: canGoPrevious ? 1 : 0.5 },
          pressed && canGoPrevious && styles.pressed,
        ]}>
        <MaterialIcons name="arrow-back" size={18} color={theme.onSurface} />
        <ThemedText type="smallBold">Previous</ThemedText>
      </Pressable>

      <Pressable
        onPress={onNext}
        style={({ pressed }) => [
          styles.nextButton,
          { backgroundColor: theme.primary },
          pressed && styles.pressed,
        ]}>
        <ThemedText type="smallBold" style={{ color: theme.onPrimary }}>
          Next Question
        </ThemedText>
        <MaterialIcons name="arrow-forward" size={18} color={theme.onPrimary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  previousButton: {
    flex: 1,
    height: 48,
    borderRadius: Radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  nextButton: {
    flex: 2,
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
});
