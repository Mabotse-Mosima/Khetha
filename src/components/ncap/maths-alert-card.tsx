import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { MathsChoice } from './maths-stream-card';

export function MathsAlertCard({ choice }: { choice: MathsChoice }) {
  const theme = useTheme();
  const isPure = choice === 'pure';

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: isPure ? theme.tertiaryContainer : theme.errorContainer },
      ]}>
      <View
        style={[
          styles.iconCircle,
          { backgroundColor: isPure ? theme.tertiary : theme.error },
        ]}>
        <MaterialIcons name="lightbulb" size={18} color={isPure ? theme.onTertiary : theme.onError} />
      </View>
      <View style={styles.textColumn}>
        <ThemedText type="smallBold" themeColor={isPure ? 'onTertiaryContainer' : 'onErrorContainer'}>
          Pure Maths vs Maths Literacy
        </ThemedText>
        <ThemedText
          type="small"
          style={styles.body}
          themeColor={isPure ? 'onTertiaryContainer' : 'onErrorContainer'}>
          {isPure ? (
            <>
              Taking <ThemedText type="smallBold" themeColor="onTertiaryContainer">Pure Mathematics</ThemedText>{' '}
              keeps Engineering, MBChB Medicine, and Computer Science degrees open across SA
              universities. Switching to Maths Lit redirects{' '}
              <ThemedText type="smallBold" themeColor="onTertiaryContainer">
                48 technical degree pathways
              </ThemedText>{' '}
              into National Accredited Technical Education Diploma (NATED) TVET routes.
            </>
          ) : (
            <>
              You&apos;ve selected <ThemedText type="smallBold" themeColor="onErrorContainer">Maths Literacy</ThemedText>.
              This closes direct entry to Engineering, MBChB Medicine, and Computer Science
              degrees. Consider a{' '}
              <ThemedText type="smallBold" themeColor="onErrorContainer">
                NATED TVET diploma route
              </ThemedText>{' '}
              if you want to work toward these fields later.
            </>
          )}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: Radius.lg,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  textColumn: {
    flexShrink: 1,
    gap: 4,
  },
  body: {
    lineHeight: 18,
  },
});
