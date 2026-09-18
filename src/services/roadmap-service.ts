import { roadmapProgressLabel, roadmapProgressPercent, RoadmapStep, roadmapSteps } from '@/data/career-roadmap';

import { simulateNetwork } from './network';

export type Roadmap = {
  steps: RoadmapStep[];
  progressPercent: number;
  progressLabel: string;
};

export const RoadmapService = {
  // GET /journey/roadmap
  getRoadmap(): Promise<Roadmap> {
    return simulateNetwork({
      steps: roadmapSteps,
      progressPercent: roadmapProgressPercent,
      progressLabel: roadmapProgressLabel,
    });
  },
};
