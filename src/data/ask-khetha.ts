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

export const suggestedPrompts: SuggestedPrompt[] = [
  { id: 'bursaries', emoji: '✨', label: 'What bursaries fund TVET diplomas?' },
  { id: 'aps', emoji: '📊', label: 'How do I calculate my final APS?' },
  { id: 'upgrade', emoji: '🔄', label: 'Can I upgrade my Maths marks?' },
];
