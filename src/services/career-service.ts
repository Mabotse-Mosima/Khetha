import { CareerDetail, careerDetails } from '@/data/career-details';
import { RecommendedCareer, recommendedCareers } from '@/data/recommended-careers';

import { simulateNetwork } from './network';

export const CareerService = {
  // GET /careers
  getRecommendedCareers(): Promise<RecommendedCareer[]> {
    return simulateNetwork(recommendedCareers);
  },

  // GET /careers/{id} — falls back to the top recommendation when no id is given,
  // mirroring today's "open the first card if nothing is selected" behavior.
  getCareerById(id?: string): Promise<RecommendedCareer | undefined> {
    const career = recommendedCareers.find((entry) => entry.id === id) ?? recommendedCareers[0];
    return simulateNetwork(career);
  },

  // GET /careers/{id}/detail
  getCareerDetail(careerId: string): Promise<CareerDetail | undefined> {
    return simulateNetwork(careerDetails[careerId]);
  },
};
