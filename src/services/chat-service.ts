import { ChatMessage, SuggestedPrompt } from '@/data/ask-khetha';

import { apiClient } from './api-client';

export type ChatReply = Pick<ChatMessage, 'text' | 'pathways' | 'followUp'>;

export const ChatService = {
  // GET /advisor/conversation
  getConversationHistory(): Promise<ChatMessage[]> {
    return apiClient.get<ChatMessage[]>('/advisor/conversation');
  },

  // GET /advisor/suggested-prompts
  getSuggestedPrompts(): Promise<SuggestedPrompt[]> {
    return apiClient.get<SuggestedPrompt[]>('/advisor/suggested-prompts');
  },

  // POST /advisor/messages — pass promptId when the learner tapped a suggested
  // prompt chip, otherwise this is a freeform question.
  sendMessage(text: string, promptId?: string): Promise<ChatReply> {
    return apiClient.post<ChatReply>('/advisor/messages', { text, promptId });
  },
};
