import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AssessmentFooterNote } from '@/components/ncap/assessment-footer-note';
import { AssessmentNavControls } from '@/components/ncap/assessment-nav-controls';
import { AssessmentOptionCard } from '@/components/ncap/assessment-option-card';
import { AssessmentProgress } from '@/components/ncap/assessment-progress';
import { AssessmentQuestionCard } from '@/components/ncap/assessment-question-card';
import { AssessmentSectionBar } from '@/components/ncap/assessment-section-bar';
import { ScarceSkillTeaser } from '@/components/ncap/scarce-skill-teaser';
import { ScreenHeader } from '@/components/ncap/screen-header';
import { ScreenLoading } from '@/components/ncap/screen-loading';
import { TopNavBar } from '@/components/ncap/top-nav-bar';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { AssessmentQuestion } from '@/data/assessment-questions';
import { AssessmentService } from '@/services/assessment-service';

export default function CareerJobFitScreen() {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>('A');
  const [question, setQuestion] = useState<AssessmentQuestion | null>(null);

  useEffect(() => {
    let cancelled = false;
    AssessmentService.getCurrentQuestion().then((result) => {
      if (!cancelled) setQuestion(result);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!question) {
    return (
      <ThemedView style={styles.root}>
        <SafeAreaView style={styles.centeredColumn} edges={['top']}>
          <TopNavBar />
          <ScreenLoading label="Loading your assessment..." />
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
          <ScreenHeader title="Career Job Fit" subtitle="Discover careers that match your strengths" />

          <AssessmentProgress
            questionNumber={question.questionNumber}
            totalQuestions={question.totalQuestions}
            minutesRemaining={4}
          />

          <AssessmentSectionBar sectionLabel={question.sectionLabel} />

          <AssessmentQuestionCard
            categoryEyebrow={question.categoryEyebrow}
            questionText={question.questionText}
          />

          <View style={styles.optionsGroup}>
            {question.options.map((option) => (
              <AssessmentOptionCard
                key={option.id}
                option={option}
                selected={selectedOptionId === option.id}
                onSelect={() => setSelectedOptionId(option.id)}
              />
            ))}
          </View>

          <ScarceSkillTeaser note={question.scarceSkillNote} />

          <AssessmentNavControls canGoPrevious={false} onPrevious={() => {}} onNext={() => {}} />

          <AssessmentFooterNote />
        </ScrollView>
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
    paddingBottom: BottomTabInset + Spacing.four,
  },
  optionsGroup: {
    gap: Spacing.two,
  },
});
