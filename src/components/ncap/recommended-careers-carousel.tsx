import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { RecommendedCareer } from '@/data/recommended-careers';
import { useTheme } from '@/hooks/use-theme';
import { CareerService } from '@/services/career-service';

import { CareerCard } from './career-card';

export function RecommendedCareersCarousel() {
  const theme = useTheme();
  const [careers, setCareers] = useState<RecommendedCareer[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    CareerService.getRecommendedCareers().then((result) => {
      if (!cancelled) setCareers(result);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={styles.headerColumn}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Recommended For You
          </ThemedText>
          <ThemedText type="small" themeColor="outline">
            Tailored to your Math &amp; Science profile
          </ThemedText>
        </View>
        <Pressable>
          <ThemedText type="smallBold" themeColor="primary">
            View all
          </ThemedText>
        </Pressable>
      </View>

      {careers === null ? (
        <ActivityIndicator color={theme.primary} style={styles.loading} />
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContent}>
          {careers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.one,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  headerColumn: {
    flexShrink: 1,
    gap: 2,
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 24,
  },
  carouselContent: {
    gap: Spacing.two,
    paddingVertical: Spacing.half,
  },
  loading: {
    paddingVertical: Spacing.five,
  },
});
