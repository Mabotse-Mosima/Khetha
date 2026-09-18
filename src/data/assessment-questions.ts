import type { MaterialIcons } from '@expo/vector-icons';

export type AssessmentOption = {
  id: 'A' | 'B' | 'C' | 'D';
  icon: keyof typeof MaterialIcons.glyphMap;
  description: string;
  hintIcon: keyof typeof MaterialIcons.glyphMap;
  hint: string;
};

export type AssessmentQuestion = {
  questionNumber: number;
  totalQuestions: number;
  sectionLabel: string;
  categoryEyebrow: string;
  questionText: string;
  scarceSkillNote: string;
  options: AssessmentOption[];
};

export const currentAssessmentQuestion: AssessmentQuestion = {
  questionNumber: 6,
  totalQuestions: 18,
  sectionLabel: 'Section 2: Work Environment & Daily Preferences',
  categoryEyebrow: 'Community & Problem Solving',
  questionText:
    'When solving a difficult challenge in your community or school, which activity feels most natural and energising to you?',
  scarceSkillNote: 'Artisan & Renewable Energy occupations are currently in High National Demand in SA.',
  options: [
    {
      id: 'A',
      icon: 'handyman',
      description:
        'Working with tools, machinery, solar panels, or building physical solutions with my hands.',
      hintIcon: 'bolt',
      hint: 'Aligned with Technical, Artisan & Engineering pathways',
    },
    {
      id: 'B',
      icon: 'terminal',
      description: 'Analyzing numbers, finding patterns in data, or writing computer code to fix issues.',
      hintIcon: 'query-stats',
      hint: 'Aligned with STEM, Analytics & ICT fields',
    },
    {
      id: 'C',
      icon: 'diversity-3',
      description: 'Helping people directly, listening to their problems, counseling, or teaching.',
      hintIcon: 'health-and-safety',
      hint: 'Aligned with Social Work, Healthcare & Education',
    },
    {
      id: 'D',
      icon: 'palette',
      description: 'Designing visuals, sketching ideas, storytelling, or creative media production.',
      hintIcon: 'brush',
      hint: 'Aligned with Digital Media, Design & Creative Industries',
    },
  ],
};
