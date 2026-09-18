export type RecommendedCareer = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  matchPercent: number;
  tags: { label: string; tone: 'tertiary' | 'secondary' }[];
  qualification: string;
  salaryRange: string;
};

export const recommendedCareers: RecommendedCareer[] = [
  {
    id: 'solar-pv-technician',
    title: 'Solar PV Energy Technician',
    description:
      'Install, maintain and commission renewable micro-grids across municipal & industrial sectors.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDbLgha0muF91i3MZnyCIZoKk258IHXPclG5weAdczTGITkllHLDOzhwDYtgyVdwZYyInJ910q7ye4U6g6Je8XZ_YXOVbAR5sevZocUrXRQmYRm_xDz6Vh6te36l9Dl0GScuFc2NaRNB7H0qDb1HJ9HWQ0JUlM7CKl-4hQ7tVm15m9ghuAdRcaoMbSiZ1M0umXopWSSnk14qrYxuQX4qc8AzY8dC09Ys0DjwSVR842YEIyoUI36M_g',
    matchPercent: 94,
    tags: [{ label: 'High Demand', tone: 'tertiary' }],
    qualification: 'TVET / Diploma',
    salaryRange: 'R18k - R28k / mo',
  },
  {
    id: 'data-analyst-software-dev',
    title: 'Data Analyst / Software Dev',
    description:
      'Transform data patterns into financial & health services tools for emerging African platforms.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGs4sXGm27SZ8O9wiXPGdGutaKUhDIctqVLTmvV9n_jGBDYAyI0s3Zn0sNnU5YuW0EK3ByEGsAzatqgAnReu6xQngueZ7WnTWkU8zOeHo-aezVsT2L1EUqsK8UIZKS3ERNNG7OY-P3dmDA3dLryfQImQ0re7umuHaurK0nngQ0RxmmCGq5lbzYh4pfQg0-nmqE_baap05Llzi-Q2l9IBn2XUUiRuU6L-6F9GCQXQO0lueiJUAFr9Nz',
    matchPercent: 89,
    tags: [{ label: 'NSFAS Funded', tone: 'secondary' }],
    qualification: 'Degree / BEng',
    salaryRange: 'R25k - R40k / mo',
  },
];
