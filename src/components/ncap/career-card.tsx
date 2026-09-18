import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { RecommendedCareer } from '@/data/recommended-careers';
import { useTheme } from '@/hooks/use-theme';

import { Badge } from './badge';

export function CareerCard({ career }: { career: RecommendedCareer }) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: career.imageUrl }} style={styles.image} contentFit="cover" />
        <Badge
          label={`${career.matchPercent}% Match`}
          backgroundColor={theme.primary}
          textColor={theme.onPrimary}
          icon={<MaterialIcons name="verified" size={13} color={theme.onPrimary} />}
          style={styles.matchBadge}
        />
      </View>

      <View style={styles.tagRow}>
        {career.tags.map((tag) => (
          <Badge
            key={tag.label}
            label={tag.label}
            backgroundColor={tag.tone === 'tertiary' ? theme.tertiaryContainer : theme.secondaryContainer}
            textColor={tag.tone === 'tertiary' ? theme.onTertiaryContainer : theme.onSecondaryContainer}
          />
        ))}
        <View style={[styles.qualificationPill, { backgroundColor: theme.surfaceContainerLow }]}>
          <ThemedText type="smallBold" themeColor="secondary" style={styles.qualificationLabel}>
            {career.qualification}
          </ThemedText>
        </View>
      </View>

      <View style={styles.details}>
        <ThemedText type="smallBold" style={styles.title}>
          {career.title}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary" numberOfLines={2}>
          {career.description}
        </ThemedText>
      </View>

      <View style={styles.footer}>
        <View>
          <ThemedText type="small" themeColor="outline">
            Starting Range
          </ThemedText>
          <ThemedText type="smallBold">{career.salaryRange}</ThemedText>
        </View>
        <Pressable
          onPress={() => router.push({ pathname: '/career-detail', params: { id: career.id } })}
          style={({ pressed }) => [
            styles.exploreButton,
            { backgroundColor: theme.surfaceContainerHigh },
            pressed && styles.pressed,
          ]}>
          <ThemedText type="smallBold" themeColor="primary">
            Explore
          </ThemedText>
          <MaterialIcons name="chevron-right" size={16} color={theme.primary} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  imageWrapper: {
    width: '100%',
    height: 128,
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  matchBadge: {
    position: 'absolute',
    top: Spacing.one,
    left: Spacing.one,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.one,
  },
  qualificationPill: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.full,
  },
  qualificationLabel: {
    fontSize: 11,
    lineHeight: 14,
  },
  details: {
    gap: 2,
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exploreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: Spacing.two,
    borderRadius: Radius.md,
    gap: 2,
  },
  pressed: {
    opacity: 0.85,
  },
});
