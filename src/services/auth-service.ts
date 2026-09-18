import { AuthResponse, LearnerProfile, LoginRequest, RegisterRequest } from '@/data/auth';

import { apiClient } from './api-client';

export const AuthService = {
  // POST /api/Auth/register
  register(payload: RegisterRequest): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/Auth/register', payload);
  },

  // POST /api/Auth/login
  login(payload: LoginRequest): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/Auth/login', payload);
  },

  // GET /api/Learners/me
  getProfile(): Promise<LearnerProfile> {
    return apiClient.get<LearnerProfile>('/Learners/me');
  },
};
