import { MaterialIcons } from '@expo/vector-icons';

export type RoadmapStatus = 'done' | 'active' | 'inProgress' | 'upcoming';

export type RoadmapHighlightChip = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
};

export type RoadmapStep = {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  status: RoadmapStatus;
  badgeLabel: string;
  description: string;
  highlightChips?: RoadmapHighlightChip[];
};

export const roadmapProgressPercent = 60;
export const roadmapProgressLabel = '60% Complete';

export const roadmapSteps: RoadmapStep[] = [
  {
    id: 'subjects',
    icon: 'check',
    title: '1. Subjects Selected',
    status: 'done',
    badgeLabel: '✓ Done',
    description: '6 subjects recorded (English FAL 65%, Maths Lit 68%, Life Sci 62%)',
  },
  {
    id: 'assessment',
    icon: 'check',
    title: '2. Fit Assessment Completed',
    status: 'done',
    badgeLabel: '✓ Done',
    description: 'Dominant Holland Profile: Technical & Realistic',
  },
  {
    id: 'careers',
    icon: 'bookmark',
    title: '3. Saved Careers',
    status: 'active',
    badgeLabel: 'Active Focus',
    description: '3 curated careers in high demand:',
    highlightChips: [
      { icon: 'wb-sunny', label: 'Solar Technician' },
      { icon: 'terminal', label: 'Software Developer' },
      { icon: 'eco', label: 'Agri Specialist' },
    ],
  },
  {
    id: 'qualifications',
    icon: 'school',
    title: '4. Qualifications & Colleges',
    status: 'inProgress',
    badgeLabel: 'In Progress',
    description: '2 TVET colleges shortlisted (Ekurhuleni West & Sedibeng TVET)',
  },
  {
    id: 'bursaries',
    icon: 'payments',
    title: '5. Bursaries & Funding',
    status: 'upcoming',
    badgeLabel: 'Upcoming',
    description: 'NSFAS 2025/2026 checklist ready for submission',
  },
];
