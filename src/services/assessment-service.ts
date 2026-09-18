import { AssessmentAnswer, AssessmentResult, HollandCodeQuestion } from '@/data/assessment-questions';

import { apiClient } from './api-client';

export const AssessmentService = {
  // GET /api/Assessment/questions
  getQuestions(): Promise<HollandCodeQuestion[]> {
    return apiClient.get<HollandCodeQuestion[]>('/Assessment/questions');
  },

  // POST /api/Assessment/submit
  submitAnswers(answers: AssessmentAnswer[]): Promise<AssessmentResult> {
    return apiClient.post<AssessmentResult>('/Assessment/submit', { answers });
  },
};
