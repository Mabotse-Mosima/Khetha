import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const RATINGS = [1, 2, 3, 4, 5];

type AssessmentRatingScaleProps = {
  value: number | null;
  onChange: (rating: number) => void;
};

export function AssessmentRatingScale({ value, onChange }: AssessmentRatingScaleProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {RATINGS.map((rating) => {
          const selected = value === rating;
          return (
            <Pressable
              key={rating}
              accessibilityLabel={`Rate ${rating} out of 5`}
              onPress={() => onChange(rating)}
              style={({ pressed }) => [
                styles.circle,
                {
                  backgroundColor: selected ? theme.primary : theme.surfaceContainer,
                  borderColor: selected ? theme.primary : theme.cardBorder,
                },
                pressed && styles.pressed,
              ]}>
              <ThemedText type="smallBold" style={{ color: selected ? theme.onPrimary : theme.onSurfaceVariant }}>
                {rating}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.labelsRow}>
        <ThemedText type="small" themeColor="onSurfaceVariant">
          Strongly Disagree
        </ThemedText>
        <ThemedText type="small" themeColor="onSurfaceVariant">
          Strongly Agree
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.one,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 52,
    height: 52,
    borderRadius: Radius.full,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
