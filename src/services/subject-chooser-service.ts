import {
  ActiveElective,
  availableElectiveOptions,
  ElectiveOption,
  initialActiveElectives,
  UnlockedCareer,
  unlockedCareers,
} from '@/data/subject-chooser';

import { simulateNetwork } from './network';

export type SubjectChooserData = {
  electiveOptions: ElectiveOption[];
  initialActiveElectives: ActiveElective[];
  unlockedCareers: UnlockedCareer[];
};

export const SubjectChooserService = {
  // GET /subject-chooser — a single bootstrap payload for the whole screen.
  getSubjectChooserData(): Promise<SubjectChooserData> {
    return simulateNetwork({
      electiveOptions: availableElectiveOptions,
      initialActiveElectives,
      unlockedCareers,
    });
  },
};
