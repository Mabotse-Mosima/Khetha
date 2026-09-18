import { MaterialIcons } from '@expo/vector-icons';

export type RoadmapStatus = 'done' | 'active' | 'upcoming';

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

// The 5 fixed steps of the backend's JourneyStep enum (0-4), in order.
export const JOURNEY_STEP_META: { icon: keyof typeof MaterialIcons.glyphMap; title: string; description: string }[] = [
  {
    icon: 'explore',
    title: '1. Explore Careers',
    description: 'Browse subjects, careers and qualifications in high demand.',
  },
  {
    icon: 'psychology-alt',
    title: '2. Job-Fit Assessment',
    description: 'Complete the RIASEC assessment to find careers that match your strengths.',
  },
  {
    icon: 'bookmark',
    title: '3. Shortlist Careers',
    description: 'Save the career and qualification options you want to pursue.',
  },
  {
    icon: 'school',
    title: '4. Apply to Institutions',
    description: 'Apply to TVET colleges or universities for your shortlisted qualifications.',
  },
  {
    icon: 'payments',
    title: '5. Enroll & Get Funded',
    description: 'Confirm your place and apply for NSFAS or other funding.',
  },
];
