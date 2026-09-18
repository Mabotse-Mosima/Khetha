import { ChatMessage, suggestedPrompts, SuggestedPrompt } from '@/data/ask-khetha';

import { apiClient } from './api-client';

export type ChatReply = Pick<ChatMessage, 'text' | 'pathways' | 'followUp'>;

export const ChatService = {
  // No backend history endpoint yet — conversations start fresh each session.
  getConversationHistory(): Promise<ChatMessage[]> {
    return Promise.resolve([]);
  },

  // No backend endpoint yet — served from static client-side data.
  getSuggestedPrompts(): Promise<SuggestedPrompt[]> {
    return Promise.resolve(suggestedPrompts);
  },

  // POST /api/ask
  sendMessage(text: string): Promise<ChatReply> {
    return apiClient.post<ChatReply>('/ask', { message: text });
  },
};
