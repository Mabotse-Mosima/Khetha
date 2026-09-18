import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const NARRATION_LABELS = [
  'Playing Audio: English...',
  'Idlala ngesiZulu...',
  'E bapala ka Sesotho...',
];
const DEFAULT_LABEL = 'Listen in English / isiZulu / Sesotho';

export function AssessmentSectionBar({ sectionLabel }: { sectionLabel: string }) {
  const theme = useTheme();
  const [narrationIndex, setNarrationIndex] = useState<number | null>(null);

  function handlePress() {
    setNarrationIndex((current) => (current === null ? 0 : null));
  }

  const isPlaying = narrationIndex !== null;
  const label = isPlaying ? NARRATION_LABELS[narrationIndex % NARRATION_LABELS.length] : DEFAULT_LABEL;

  return (
    <View style={styles.row}>
      <View style={[styles.sectionPill, { backgroundColor: theme.surfaceContainerLow }]}>
        <MaterialIcons name="psychology-alt" size={14} color={theme.secondary} />
        <ThemedText type="smallBold" themeColor="secondary" numberOfLines={1}>
          {sectionLabel}
        </ThemedText>
      </View>

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.audioButton,
          { backgroundColor: isPlaying ? theme.tertiaryContainer : theme.surfaceContainer },
          pressed && styles.pressed,
        ]}>
        <MaterialIcons
          name="volume-up"
          size={16}
          color={isPlaying ? theme.onTertiaryContainer : theme.onSurfaceVariant}
        />
        <ThemedText
          type="smallBold"
          numberOfLines={1}
          themeColor={isPlaying ? 'onTertiaryContainer' : 'onSurfaceVariant'}>
          {label}
        </ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  sectionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.full,
    flexShrink: 1,
  },
  audioButton: {
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
});
