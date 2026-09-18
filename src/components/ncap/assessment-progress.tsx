import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type AssessmentProgressProps = {
  questionNumber: number;
  totalQuestions: number;
  minutesRemaining: number;
};

export function AssessmentProgress({
  questionNumber,
  totalQuestions,
  minutesRemaining,
}: AssessmentProgressProps) {
  const theme = useTheme();
  const [saved, setSaved] = useState(false);
  const percent = Math.round((questionNumber / totalQuestions) * 100);

  function handleSavePress() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.questionLabel}>
          <View style={[styles.numberBadge, { backgroundColor: theme.primaryContainer }]}>
            <ThemedText type="smallBold" themeColor="onPrimaryContainer" style={styles.numberBadgeLabel}>
              {questionNumber}
            </ThemedText>
          </View>
          <ThemedText type="smallBold">
            Question {questionNumber} of {totalQuestions}
          </ThemedText>
        </View>

        <Pressable
          onPress={handleSavePress}
          style={({ pressed }) => [
            styles.saveButton,
            { backgroundColor: theme.surfaceContainer },
            pressed && styles.pressed,
          ]}>
          <MaterialIcons
            name={saved ? 'check-circle' : 'cloud-download'}
            size={16}
            color={theme.secondary}
          />
          <ThemedText type="smallBold" themeColor={saved ? 'primary' : 'secondary'}>
            {saved ? 'Saved to Phone' : 'Save & Continue Offline'}
          </ThemedText>
        </Pressable>
      </View>

      <View style={[styles.track, { backgroundColor: theme.surfaceContainerHigh }]}>
        <View style={[styles.fill, { width: `${percent}%`, backgroundColor: theme.primary }]} />
      </View>

      <View style={styles.metaRow}>
        <ThemedText type="small" themeColor="onSurfaceVariant">
          {percent}% Completed
        </ThemedText>
        <ThemedText type="smallBold" themeColor="secondary">
          ~{minutesRemaining} mins remaining
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  questionLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  numberBadge: {
    width: 24,
    height: 24,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberBadgeLabel: {
    fontSize: 11,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.full,
  },
  pressed: {
    opacity: 0.85,
  },
  track: {
    height: 10,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.full,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
