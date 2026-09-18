import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type AssessmentQuestionCardProps = {
  categoryEyebrow: string;
  questionText: string;
};

export function AssessmentQuestionCard({ categoryEyebrow, questionText }: AssessmentQuestionCardProps) {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.content}>
        <View style={[styles.iconCircle, { backgroundColor: theme.primaryContainer }]}>
          <MaterialIcons name="contact-support" size={22} color={theme.onPrimaryContainer} />
        </View>
        <View style={styles.textColumn}>
          <ThemedText type="smallBold" themeColor="secondary" style={styles.eyebrow}>
            {categoryEyebrow}
          </ThemedText>
          <ThemedText type="subtitle" style={styles.question}>
            {questionText}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flexShrink: 1,
    gap: 2,
  },
  eyebrow: {
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  question: {
    fontSize: 20,
    lineHeight: 27,
  },
});
