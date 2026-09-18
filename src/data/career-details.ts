import { MaterialIcons } from '@expo/vector-icons';

export type CareerQuickStat = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  value: string;
  sublabel: string;
  valueColor: 'primary' | 'secondary' | 'tertiaryContainer';
};

export type CareerResponsibility = {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  description: string;
};

export type CareerSubject = {
  icon: keyof typeof MaterialIcons.glyphMap;
  name: string;
  description: string;
  levelLabel: string;
  tone: 'required' | 'bonus';
};

export type CareerPathwayStep = {
  number: number;
  label: string;
  sublabel: string;
  tone: 'primary' | 'secondary';
};

export type CareerPathway = {
  badgeLabel: string;
  tone: 'primary' | 'secondary';
  noteLabel: string;
  title: string;
  description: string;
  steps?: CareerPathwayStep[];
  tags?: { icon: keyof typeof MaterialIcons.glyphMap; label: string }[];
};

export type CareerInstitution = {
  badgeLabel: string;
  tone: 'tvet' | 'university';
  name: string;
  location: string;
  footnote: string;
  ctaLabel: string;
};

export type CareerDetail = {
  ofoCode: string;
  breadcrumb: string[];
  priorityBadge: string;
  matchNote: string;
  quickStats: CareerQuickStat[];
  whatTheyDo: string;
  responsibilities: CareerResponsibility[];
  secondaryPhoto: { imageUrl: string; caption: string };
  subjectsIntro: string;
  subjects: CareerSubject[];
  pathways: CareerPathway[];
  institutions: CareerInstitution[];
  mapImageUrl: string;
  mapCaption: string;
  aiPromptQuestion: string;
  aiResponse: string;
};

export const careerDetails: Record<string, CareerDetail> = {
  'solar-pv-technician': {
    ofoCode: '313101',
    breadcrumb: ['Careers Directory', 'Engineering & Energy'],
    priorityBadge: 'National Scarce Skill • DHET High Demand',
    matchNote: 'Aligned with Pure Maths & Physical Sciences score',
    quickStats: [
      {
        icon: 'payments',
        label: 'Est. Starting',
        value: 'R18k-28k',
        sublabel: 'per month',
        valueColor: 'primary',
      },
      {
        icon: 'trending-up',
        label: 'Job Growth',
        value: '+24%',
        sublabel: 'Extremely High',
        valueColor: 'secondary',
      },
      {
        icon: 'grade',
        label: 'Min APS',
        value: '24 - 30',
        sublabel: 'TVET / Tech Univ',
        valueColor: 'tertiaryContainer',
      },
    ],
    whatTheyDo:
      "Solar Photovoltaic (PV) Technicians are on the frontlines of South Africa's energy transition. They design, assemble, wire, and maintain rooftop systems, commercial micro-grids, and utility-scale solar farms from the Karoo to Gauteng.",
    responsibilities: [
      {
        icon: 'check-circle',
        title: 'Installation & Inverter Setup',
        description: 'Mounting racking systems, DC/AC wiring, connecting hybrid battery backup units.',
      },
      {
        icon: 'bolt',
        title: 'Grid Compliance & Safety',
        description: 'Testing loads and ensuring installations comply with SANS 10142 electrical wiring standards.',
      },
      {
        icon: 'query-stats',
        title: 'Diagnostic Health Checks',
        description: 'Using thermal cameras and multimeters to diagnose shading drop-offs and panel degradation.',
      },
    ],
    secondaryPhoto: {
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVpM6w9YqT310ZWh53tq-du8sOWfLqHWlaICC-9hq5HoLNml2D3qzFmGIW8h41k93AwOHtPQefPvCbTnXY5McpIxsRY1TfLv6T1nx_byW_pvuebTcZGbf-bg84hfe9Sy3yBxPqXP2yLxUxZQn0XZM1get59d0xEHv77K_LSdY6zIyeKZDPUyr6kwKehTAmqgs-xJORdDVThWL9rI8xbKZQRq-4m_qNENRQRJXOvmX22Pq3SW_MZGa',
      caption: 'Hands-on technical training at public TVETs',
    },
    subjectsIntro:
      'Target Level 4 (50%+) or higher in these key gateway subjects for National Certificate Vocational (NCV) or University access:',
    subjects: [
      {
        icon: 'calculate',
        name: 'Mathematics or Tech Maths',
        description: 'Calculations, load ratings & impedance',
        levelLabel: 'L4 (50%+)',
        tone: 'required',
      },
      {
        icon: 'science',
        name: 'Physical Science or Tech Science',
        description: "Ohm's law, magnetism & electrodynamics",
        levelLabel: 'L4 (50%+)',
        tone: 'required',
      },
      {
        icon: 'tune',
        name: 'Electrical Technology (Optional)',
        description: 'Gives high advantage during TVET placement',
        levelLabel: 'Bonus',
        tone: 'bonus',
      },
    ],
    pathways: [
      {
        badgeLabel: 'Route A • Practical TVET Route',
        tone: 'primary',
        noteLabel: 'NSFAS Funded',
        title: 'NATED N4-N6: Electrical Engineering (Heavy Current)',
        description:
          'Offered at public TVET Colleges. Leads to 18-24 months of supervised practical workshop experience, qualifying you for the Red Seal Trade Test (Electrician / PV Installer).',
        steps: [
          { number: 1, label: 'N4-N6 Theory', sublabel: '18 Months', tone: 'primary' },
          { number: 2, label: 'Apprenticeship', sublabel: 'Practical Logbook', tone: 'primary' },
          { number: 3, label: 'Trade Test', sublabel: 'Red Seal Artisan', tone: 'secondary' },
        ],
      },
      {
        badgeLabel: 'Route B • University of Technology',
        tone: 'secondary',
        noteLabel: 'APS 28 - 32',
        title: 'Diploma in Electrical & Renewable Energy Engineering',
        description:
          'A 3-year higher education program blending microgrid simulation, PLC automation, and utility distribution design. Suitable for supervisory and solar project management roles.',
        tags: [
          { icon: 'schedule', label: '3 Years Full-Time' },
          { icon: 'engineering', label: 'ECSA Candidate Technologist' },
        ],
      },
    ],
    institutions: [
      {
        badgeLabel: 'Public TVET • NSFAS Available',
        tone: 'tvet',
        name: 'Ekurhuleni East TVET College',
        location: 'Springs Campus (12 km away)',
        footnote: 'Application Intake: July & Jan',
        ctaLabel: 'View Prospectus',
      },
      {
        badgeLabel: 'University of Technology',
        tone: 'university',
        name: 'Tshwane University of Technology',
        location: 'Pretoria Main Campus (48 km away)',
        footnote: 'APS Minimum: 28',
        ctaLabel: 'Check APS Match',
      },
    ],
    mapImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARSkyMscainXjhl4A1bM04XDPNzPoEcycfFwOgYaZQ1cSCKyGgqYOX0dtIcHKi3Kbzrbwkg08UGqudcf4zPGl9pjqmhvBdomXqlEbG802lLL7UhBsjaIvI3SAiZL3d6IYUcLEV968o9OrsgQNPQ3Va1gj0QcQmIjHAvaHT1sCfZe4xcP5k5PkviklPS8tJOoFsudOueDgH-dPF__0b_u8eXvm7cdTl4m3OmxYxcjFigN8JqivfM56b',
    mapCaption: 'Displaying 4 certified training centers near you',
    aiPromptQuestion: 'Is this career suitable for someone who dislikes heights?',
    aiResponse:
      'Rooftop installations do require working at heights with harness certification. However, many technicians specialize purely in ground-mount commercial solar farms, inverter cabinet assembly, battery management system programming, or maintenance audits where high-elevation work is minimal!',
  },
};
