export type SeedPathway = {
  title: string;
  description: string;
};

export type ChatMessage = {
  id: string;
  sender: 'user' | 'ai';
  time: string;
  text: string;
  pathways?: SeedPathway[];
  followUp?: string;
};

export const seedUserName = 'Thabo';

export type SuggestedPrompt = {
  id: string;
  emoji: string;
  label: string;
};
