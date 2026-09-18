export type JourneyProgressResponse = {
  exploreCompletedAtUtc: string | null;
  assessCompletedAtUtc: string | null;
  shortlistCompletedAtUtc: string | null;
  applyCompletedAtUtc: string | null;
  enrollCompletedAtUtc: string | null;
  currentStep: number;
};

export const JOURNEY_STEP = {
  explore: 0,
  assess: 1,
  shortlist: 2,
  apply: 3,
  enroll: 4,
} as const;
