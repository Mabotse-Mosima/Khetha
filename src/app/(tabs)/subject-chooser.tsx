import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ElectiveChip } from '@/components/ncap/elective-chip';
import { ElectiveSubjectCard } from '@/components/ncap/elective-subject-card';
import { MathsAlertCard } from '@/components/ncap/maths-alert-card';
import { MathsChoice, MathsStreamCard } from '@/components/ncap/maths-stream-card';
import { OfflineGuaranteeCard } from '@/components/ncap/offline-guarantee-card';
import { PathwayViabilityCard } from '@/components/ncap/pathway-viability-card';
import { ScreenLoading } from '@/components/ncap/screen-loading';
import { StickyActionTray } from '@/components/ncap/sticky-action-tray';
import { SubjectCard } from '@/components/ncap/subject-card';
import { SubjectChooserHero } from '@/components/ncap/subject-chooser-hero';
import { TopNavBar } from '@/components/ncap/top-nav-bar';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { UnlockedCareerCard } from '@/components/ncap/unlocked-career-card';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { ActiveElective, ElectiveOption, UnlockedCareer } from '@/data/subject-chooser';
import { useTheme } from '@/hooks/use-theme';
import { SubjectChooserService } from '@/services/subject-chooser-service';

const COMPULSORY_SUBJECT_COUNT = 3;

export default function SubjectChooserScreen() {
  const theme = useTheme();
  const [mathsChoice, setMathsChoice] = useState<MathsChoice>('pure');
  const [electiveOptions, setElectiveOptions] = useState<ElectiveOption[]>([]);
  const [activeElectives, setActiveElectives] = useState<ActiveElective[]>([]);
  const [unlockedCareers, setUnlockedCareers] = useState<UnlockedCareer[]>([]);
  const [selectedElectiveIds, setSelectedElectiveIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    SubjectChooserService.getSubjectChooserData().then((data) => {
      if (cancelled) return;
      setElectiveOptions(data.electiveOptions);
      setActiveElectives(data.initialActiveElectives);
      setUnlockedCareers(data.unlockedCareers);
      setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const apsScore = mathsChoice === 'pure' ? 34 : 35;
  const careersUnlocked = mathsChoice === 'pure' ? 142 : 94;
  const subjectsPicked = COMPULSORY_SUBJECT_COUNT + activeElectives.length + selectedElectiveIds.length;

  function toggleElectiveOption(id: string) {
    setSelectedElectiveIds((current) =>
      current.includes(id) ? current.filter((existing) => existing !== id) : [...current, id],
    );
  }

  function removeActiveElective(id: string) {
    setActiveElectives((current) => current.filter((elective) => elective.id !== id));
  }

  if (isLoading) {
    return (
      <ThemedView style={styles.root}>
        <SafeAreaView style={styles.centeredColumn} edges={['top']}>
          <TopNavBar />
          <ScreenLoading label="Loading subject chooser..." />
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.root}>
      <SafeAreaView style={styles.centeredColumn} edges={['top']}>
        <TopNavBar />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <SubjectChooserHero />

          <PathwayViabilityCard
            subjectsPickedLabel={`${subjectsPicked} / 7`}
            apsScore={apsScore}
            careersUnlocked={careersUnlocked}
            apsGaugePercent={82}
            apsQualified
          />

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <View style={[styles.dot, { backgroundColor: theme.primary }]} />
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                  Compulsory Core Subjects
                </ThemedText>
              </View>
              <ThemedText type="smallBold" themeColor="onSurfaceVariant">
                3 Required
              </ThemedText>
            </View>

            <SubjectCard
              title="English First Additional Language"
              subtitle="Language of Learning and Teaching (LOLT)"
              levelLabel="Level 5 (60-69%)"
              apsLabel="5 APS Points"
              footnote="Meets university LOLT criterion"
            />

            <MathsStreamCard choice={mathsChoice} onChoiceChange={setMathsChoice} />

            <SubjectCard
              title="Life Orientation (LO)"
              subtitle="Mandatory holistic life assessment"
              levelLabel="Level 6 (70-79%)"
              levelTone="neutral"
              footnote="Excluded in some univ APS"
              footnotePosition="stacked"
            />
          </View>

          <MathsAlertCard choice={mathsChoice} />

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <View style={[styles.dot, { backgroundColor: theme.secondary }]} />
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                  Elective Subjects
                </ThemedText>
              </View>
              <ThemedText type="smallBold" themeColor="onSurfaceVariant">
                {activeElectives.length} Selected (Min 3 recommended)
              </ThemedText>
            </View>

            <View style={styles.electiveCardsGroup}>
              {activeElectives.map((elective) => (
                <ElectiveSubjectCard
                  key={elective.id}
                  elective={elective}
                  onRemove={() => removeActiveElective(elective.id)}
                />
              ))}
            </View>

            <View style={styles.addElectivesGroup}>
              <ThemedText type="smallBold" themeColor="onSurfaceVariant" style={styles.addElectivesLabel}>
                Tap to Add Electives:
              </ThemedText>
              <View style={styles.chipRow}>
                {electiveOptions.map((option) => (
                  <ElectiveChip
                    key={option.id}
                    label={option.label}
                    selected={selectedElectiveIds.includes(option.id)}
                    onToggle={() => toggleElectiveOption(option.id)}
                  />
                ))}
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleRow}>
                <MaterialIcons name="workspace-premium" size={20} color={theme.primary} />
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                  Unlocked Careers Preview
                </ThemedText>
              </View>
              <View style={[styles.matchesBadge, { backgroundColor: theme.secondaryContainer }]}>
                <ThemedText type="smallBold" themeColor="onSecondaryContainer">
                  {careersUnlocked} Matches
                </ThemedText>
              </View>
            </View>

            {unlockedCareers.map((career) => (
              <UnlockedCareerCard key={career.id} career={career} />
            ))}
          </View>

          <OfflineGuaranteeCard />
        </ScrollView>

        <View style={[styles.trayWrapper, { bottom: BottomTabInset }]} pointerEvents="box-none">
          <StickyActionTray
            primaryLabel={`Explore ${careersUnlocked} Matched Careers`}
            secondaryLabel="Check TVET College NCV Entry Requirements"
          />
        </View>
      </SafeAreaView>
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
    paddingTop: Spacing.one,
    paddingBottom: BottomTabInset + Spacing.five * 3,
  },
  section: {
    gap: Spacing.two,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  electiveCardsGroup: {
    gap: Spacing.one,
  },
  addElectivesGroup: {
    gap: Spacing.two,
    paddingTop: Spacing.one,
  },
  addElectivesLabel: {
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  matchesBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    borderRadius: 999,
  },
  trayWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
