import { MaterialIcons } from '@expo/vector-icons';
import { Linking, Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const HELPLINE_NUMBER = '0800872222';
const HELPLINE_DISPLAY = '0800 87 22 22';
const WHATSAPP_URL = 'https://wa.me/27722045056';
const WHATSAPP_DISPLAY = '072 204 5056';

export function DhetGuidanceCard() {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.headerRow}>
        <View style={[styles.iconWrapper, { backgroundColor: theme.surfaceContainer }]}>
          <MaterialIcons name="support-agent" size={26} color={theme.primary} />
        </View>
        <View style={styles.headerTextColumn}>
          <View style={styles.titleRow}>
            <ThemedText type="subtitle" style={styles.title}>
              Need human guidance?
            </ThemedText>
            <View style={[styles.officialBadge, { backgroundColor: theme.tertiaryContainer }]}>
              <ThemedText type="small" themeColor="onTertiary" style={styles.officialLabel}>
                OFFICIAL
              </ThemedText>
            </View>
          </View>
          <ThemedText type="small" themeColor="onSurfaceVariant">
            Speak directly to a certified DHET Career Development Practitioner for personalized academic
            advisement.
          </ThemedText>
        </View>
      </View>

      <View style={styles.actionsGrid}>
        <Pressable
          onPress={() => Linking.openURL(`tel:${HELPLINE_NUMBER}`)}
          style={({ pressed }) => [
            styles.actionButton,
            { backgroundColor: theme.primary },
            pressed && styles.pressed,
          ]}>
          <MaterialIcons name="call" size={20} color={theme.onPrimary} />
          <ThemedText type="smallBold" style={{ color: theme.onPrimary }}>
            Toll-Free ({HELPLINE_DISPLAY})
          </ThemedText>
        </Pressable>

        <Pressable
          onPress={() => Linking.openURL(WHATSAPP_URL)}
          style={({ pressed }) => [
            styles.actionButton,
            { backgroundColor: theme.surfaceContainer },
            pressed && styles.pressed,
          ]}>
          <MaterialIcons name="chat" size={20} color={theme.secondary} />
          <ThemedText type="smallBold" themeColor="secondary">
            WhatsApp ({WHATSAPP_DISPLAY})
          </ThemedText>
        </Pressable>
      </View>

      <View style={styles.footerRow}>
        <MaterialIcons name="schedule" size={14} color={theme.onSurfaceVariant} />
        <ThemedText type="small" themeColor="onSurfaceVariant">
          Available Mon - Fri: 08:00 to 16:30 • Zero-Rated Calls
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextColumn: {
    flex: 1,
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
  },
  officialBadge: {
    paddingHorizontal: Spacing.one,
    paddingVertical: 1,
    borderRadius: Radius.sm,
  },
  officialLabel: {
    fontSize: 9,
    lineHeight: 12,
    letterSpacing: 0.3,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  actionButton: {
    flex: 1,
    height: 48,
    borderRadius: Radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
    paddingHorizontal: Spacing.one,
  },
  pressed: {
    opacity: 0.85,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});
