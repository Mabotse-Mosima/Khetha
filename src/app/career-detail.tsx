import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AskKhethaCard } from '@/components/ncap/ask-khetha-card';
import { CareerHeroCard } from '@/components/ncap/career-hero-card';
import { CareerInstitutionCard } from '@/components/ncap/career-institution-card';
import { CareerPathwayCard } from '@/components/ncap/career-pathway-card';
import { CareerResponsibilityRow } from '@/components/ncap/career-responsibility-row';
import { CareerSubjectRow } from '@/components/ncap/career-subject-row';
import { DetailHeader } from '@/components/ncap/detail-header';
import { ScreenLoading } from '@/components/ncap/screen-loading';
import { SegmentedTabs } from '@/components/ncap/segmented-tabs';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, CardShadow, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { CareerDetail } from '@/data/career-details';
import { RecommendedCareer } from '@/data/recommended-careers';
import { useTheme } from '@/hooks/use-theme';
import { CareerService } from '@/services/career-service';

const HELPLINE_NUMBER = '0800872222';
const HELPLINE_DISPLAY = '0800 87 2222';

type DetailTab = 'overview' | 'study' | 'campus';

const TAB_OPTIONS: { key: DetailTab; label: string }[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'study', label: 'Pathways & Study' },
  { key: 'campus', label: 'Institutions' },
];

export default function CareerDetailScreen() {
  const theme = useTheme();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const [isSaved, setIsSaved] = useState(false);
  const [career, setCareer] = useState<RecommendedCareer | null>(null);
  const [detail, setDetail] = useState<CareerDetail | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    CareerService.getCareerById(id).then((resolvedCareer) => {
      if (cancelled || !resolvedCareer) return;
      setCareer(resolvedCareer);
      CareerService.getCareerDetail(resolvedCareer.id).then((resolvedDetail) => {
        if (!cancelled) setDetail(resolvedDetail);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!career) {
    return (
      <ThemedView style={styles.root}>
        <View style={styles.centeredColumn}>
          <SafeAreaView edges={['top']}>
            <DetailHeader title="Occupation Detail" subtitle="Khetha NCAP • DHET" />
          </SafeAreaView>
          <ScreenLoading label="Loading occupation detail..." />
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.root}>
      <View style={styles.centeredColumn}>
        <SafeAreaView edges={['top']}>
          <DetailHeader title="Occupation Detail" subtitle="Khetha NCAP • DHET" />
        </SafeAreaView>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {detail && (
            <View style={styles.breadcrumbRow}>
              {[...detail.breadcrumb, career.title].map((crumb, index, arr) => (
                <View key={crumb} style={styles.breadcrumbItem}>
                  <ThemedText
                    type="smallBold"
                    themeColor={index === arr.length - 1 ? 'primary' : 'onSurfaceVariant'}
                    numberOfLines={1}>
                    {crumb}
                  </ThemedText>
                  {index < arr.length - 1 && (
                    <MaterialIcons name="chevron-right" size={16} color={theme.outline} />
                  )}
                </View>
              ))}
            </View>
          )}

          {detail ? (
            <>
              <CareerHeroCard
                imageUrl={career.imageUrl}
                ofoCode={detail.ofoCode}
                priorityBadge={detail.priorityBadge}
                title={career.title}
                matchPercent={career.matchPercent}
                matchNote={detail.matchNote}
                quickStats={detail.quickStats}
              />

              <SegmentedTabs options={TAB_OPTIONS} value={activeTab} onChange={setActiveTab} />

              {activeTab === 'overview' && (
                <View style={styles.tabContent}>
                  <View style={[styles.sectionCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
                    <View style={styles.sectionHeader}>
                      <View style={[styles.sectionIcon, { backgroundColor: theme.secondaryContainer }]}>
                        <MaterialIcons name="solar-power" size={20} color={theme.onSecondaryContainer} />
                      </View>
                      <ThemedText type="subtitle" style={styles.sectionTitle}>
                        What do they do?
                      </ThemedText>
                    </View>
                    <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.paragraph}>
                      {detail.whatTheyDo}
                    </ThemedText>
                    <View style={styles.responsibilitiesGroup}>
                      {detail.responsibilities.map((item) => (
                        <CareerResponsibilityRow key={item.title} {...item} />
                      ))}
                    </View>
                  </View>

                  <View style={[styles.photoCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
                    <Image
                      source={{ uri: detail.secondaryPhoto.imageUrl }}
                      style={styles.photoImage}
                      contentFit="cover"
                    />
                    <View style={styles.photoCaptionWrapper}>
                      <View style={styles.photoCaption}>
                        <ThemedText type="small" style={styles.photoCaptionText}>
                          {detail.secondaryPhoto.caption}
                        </ThemedText>
                      </View>
                    </View>
                  </View>

                  <View style={[styles.sectionCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
                    <View style={styles.sectionHeader}>
                      <View style={[styles.sectionIcon, { backgroundColor: theme.primaryContainer }]}>
                        <MaterialIcons name="menu-book" size={20} color={theme.onPrimaryContainer} />
                      </View>
                      <ThemedText type="subtitle" style={styles.sectionTitle}>
                        Matric Subjects to Consider
                      </ThemedText>
                    </View>
                    <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.paragraph}>
                      {detail.subjectsIntro}
                    </ThemedText>
                    <View style={styles.subjectsGroup}>
                      {detail.subjects.map((subject) => (
                        <CareerSubjectRow key={subject.name} {...subject} />
                      ))}
                    </View>
                  </View>
                </View>
              )}

              {activeTab === 'study' && (
                <View style={styles.tabContent}>
                  <View style={[styles.sectionCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
                    <ThemedText type="subtitle" style={styles.sectionTitle}>
                      Study Pathways
                    </ThemedText>
                    <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.paragraph}>
                      Select the route matching your current qualifications and learning preference. Both
                      lead to recognized certification.
                    </ThemedText>
                    <View style={styles.pathwaysGroup}>
                      {detail.pathways.map((pathway) => (
                        <CareerPathwayCard key={pathway.title} {...pathway} />
                      ))}
                    </View>
                  </View>
                </View>
              )}

              {activeTab === 'campus' && (
                <View style={styles.tabContent}>
                  <View style={[styles.sectionCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
                    <View style={styles.sectionHeaderSpread}>
                      <View>
                        <ThemedText type="subtitle" style={styles.sectionTitle}>
                          Nearby Campuses
                        </ThemedText>
                        <ThemedText type="small" themeColor="onSurfaceVariant">
                          Verified institutions offering clean energy courses
                        </ThemedText>
                      </View>
                      <MaterialIcons name="location-on" size={24} color={theme.secondary} />
                    </View>

                    <View style={styles.institutionsGroup}>
                      {detail.institutions.map((institution) => (
                        <CareerInstitutionCard key={institution.name} {...institution} />
                      ))}
                    </View>

                    <View style={styles.mapWrapper}>
                      <Image source={{ uri: detail.mapImageUrl }} style={styles.mapImage} contentFit="cover" />
                      <View style={styles.mapCaptionWrapper}>
                        <View
                          style={[
                            styles.mapCaptionPill,
                            CardShadow,
                            { backgroundColor: theme.surfaceContainerLowest },
                          ]}>
                          <MaterialIcons name="explore" size={18} color={theme.secondary} />
                          <ThemedText type="small">{detail.mapCaption}</ThemedText>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              <AskKhethaCard promptQuestion={detail.aiPromptQuestion} response={detail.aiResponse} />
            </>
          ) : (
            <View style={[styles.sectionCard, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
              <ThemedText type="subtitle" style={styles.sectionTitle}>
                {career.title}
              </ThemedText>
              <ThemedText type="small" themeColor="onSurfaceVariant" style={styles.paragraph}>
                {career.description}
              </ThemedText>
              <ThemedText type="small" themeColor="outline">
                Full occupation detail for this career is coming soon.
              </ThemedText>
            </View>
          )}
        </ScrollView>

        <View style={[styles.actionTray, { backgroundColor: theme.surfaceContainerLowest, borderTopColor: theme.cardBorder }]}>
          <View style={styles.actionRow}>
            <Pressable
              onPress={() => setIsSaved((current) => !current)}
              style={({ pressed }) => [
                styles.saveButton,
                { backgroundColor: isSaved ? theme.errorContainer : theme.surfaceContainer },
                pressed && styles.pressed,
              ]}>
              <MaterialIcons
                name={isSaved ? 'favorite' : 'favorite-border'}
                size={20}
                color={isSaved ? theme.error : theme.primary}
              />
              <ThemedText type="smallBold" themeColor={isSaved ? 'onErrorContainer' : 'primary'}>
                {isSaved ? 'Saved to Journey!' : 'Save Career'}
              </ThemedText>
            </Pressable>

            <Pressable
              onPress={() => Linking.openURL(`tel:${HELPLINE_NUMBER}`)}
              style={({ pressed }) => [
                styles.callButton,
                { backgroundColor: theme.primary },
                pressed && styles.pressed,
              ]}>
              <MaterialIcons name="support-agent" size={20} color={theme.onPrimary} />
              <ThemedText type="smallBold" style={{ color: theme.onPrimary }}>
                DHET Toll-Free
              </ThemedText>
            </Pressable>
          </View>
          <ThemedText type="small" themeColor="outline" style={styles.trayFootnote}>
            DHET Career Advice Toll-Free Helpline: {HELPLINE_DISPLAY} (Mon-Fri 08:00 - 16:30)
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  centeredColumn: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    gap: Spacing.four,
    paddingHorizontal: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
  },
  breadcrumbRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 2,
  },
  breadcrumbItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  tabContent: {
    gap: Spacing.four,
  },
  sectionCard: {
    padding: Spacing.three,
    borderRadius: Radius.lg,
    borderWidth: 1,
    gap: Spacing.two,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  sectionHeaderSpread: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  sectionIcon: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 24,
  },
  paragraph: {
    lineHeight: 20,
  },
  responsibilitiesGroup: {
    gap: Spacing.one,
  },
  subjectsGroup: {
    gap: Spacing.one,
  },
  pathwaysGroup: {
    gap: Spacing.two,
  },
  institutionsGroup: {
    gap: Spacing.two,
  },
  photoCard: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },
  photoImage: {
    width: '100%',
    height: 144,
  },
  photoCaptionWrapper: {
    position: 'absolute',
    bottom: Spacing.one,
    left: Spacing.two,
  },
  photoCaption: {
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.sm,
  },
  photoCaptionText: {
    fontSize: 11,
    lineHeight: 14,
    color: '#ffffff',
  },
  mapWrapper: {
    width: '100%',
    height: 144,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    marginTop: Spacing.one,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapCaptionWrapper: {
    position: 'absolute',
    bottom: Spacing.two,
    left: Spacing.two,
    right: Spacing.two,
  },
  mapCaptionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: Spacing.one,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.md,
  },
  actionTray: {
    padding: Spacing.three,
    paddingBottom: BottomTabInset > 0 ? Spacing.two : Spacing.three,
    gap: Spacing.one,
  },
  actionRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  saveButton: {
    flex: 1,
    height: 48,
    borderRadius: Radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
  },
  callButton: {
    flex: 1,
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
  trayFootnote: {
    textAlign: 'center',
    fontSize: 11,
  },
});
