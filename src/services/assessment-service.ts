import { AssessmentQuestion, currentAssessmentQuestion } from '@/data/assessment-questions';

import { simulateNetwork } from './network';

export const AssessmentService = {
  // GET /assessment/current-question — the in-progress session's next question.
  getCurrentQuestion(): Promise<AssessmentQuestion> {
    return simulateNetwork(currentAssessmentQuestion);
  },
};
