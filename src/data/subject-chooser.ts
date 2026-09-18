import type { MaterialIcons } from '@expo/vector-icons';

export type ElectiveOption = {
  id: string;
  label: string;
};

export const availableElectiveOptions: ElectiveOption[] = [
  { id: 'life-sciences', label: 'Life Sciences' },
  { id: 'accounting', label: 'Accounting' },
  { id: 'agricultural-sciences', label: 'Agricultural Sciences' },
  { id: 'economics', label: 'Economics' },
  { id: 'egd', label: 'Engineering Graphics & Design (EGD)' },
];

export type ActiveElective = {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle: string;
  levelLabel: string;
};

export const initialActiveElectives: ActiveElective[] = [
  {
    id: 'physical-sciences',
    icon: 'science',
    title: 'Physical Sciences',
    subtitle: 'Chemistry & Physics Core',
    levelLabel: 'Level 4 (50-59%)',
  },
  {
    id: 'information-technology',
    icon: 'terminal',
    title: 'Information Technology (IT)',
    subtitle: 'High National Demand',
    levelLabel: 'Level 5 (60-69%)',
  },
];

export type UnlockedCareer = {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  tagLabel: string;
  tagTone: 'tertiary' | 'tertiaryDim' | 'secondary';
  subtitle: string;
  requirements: { icon: keyof typeof MaterialIcons.glyphMap; label: string; emphasis?: boolean }[];
};

export const unlockedCareers: UnlockedCareer[] = [
  {
    id: 'mechatronics-technician',
    icon: 'precision-manufacturing',
    title: 'Mechatronics Technician',
    tagLabel: 'Top Match',
    tagTone: 'tertiary',
    subtitle: 'Robotics & Advanced Manufacturing',
    requirements: [
      { icon: 'check-circle', label: 'Pure Maths Lvl 4+' },
      { icon: 'check-circle', label: 'Phys Science Lvl 4+' },
      { icon: 'check-circle', label: 'NSFAS Funded', emphasis: true },
    ],
  },
  {
    id: 'renewable-energy-specialist',
    icon: 'solar-power',
    title: 'Renewable Energy Specialist',
    tagLabel: 'Scarce Skill',
    tagTone: 'tertiaryDim',
    subtitle: 'TVET National Diploma or BEng Pathway',
    requirements: [
      { icon: 'check-circle', label: 'Min 28 APS' },
      { icon: 'electric-bolt', label: 'High Demand 2025/2026' },
    ],
  },
  {
    id: 'software-systems-engineer',
    icon: 'developer-mode',
    title: 'Software Systems Engineer',
    tagLabel: 'BSc / BEng',
    tagTone: 'secondary',
    subtitle: 'Enterprise Systems & Cloud Infrastructure',
    requirements: [
      { icon: 'check-circle', label: 'Pure Maths Lvl 5+ Met' },
      { icon: 'check-circle', label: 'IT Lvl 5+ Met' },
    ],
  },
];
