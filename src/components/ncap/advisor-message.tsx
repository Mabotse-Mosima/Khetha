import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { ChatMessage, seedUserName } from '@/data/ask-khetha';
import { useTheme } from '@/hooks/use-theme';

import { ChatBubble } from './chat-bubble';

export function AdvisorMessage({ message }: { message: ChatMessage }) {
  const theme = useTheme();
  const isAi = message.sender === 'ai';
  const hasRichContent = Boolean(message.pathways || message.followUp);

  return (
    <View style={styles.wrapper}>
      <ChatBubble
        sender={message.sender}
        name={isAi ? 'Khetha Official Advice' : `${seedUserName} (Grade 12)`}
        time={message.time}>
        {hasRichContent ? (
          <View style={styles.richContent}>
            <ThemedText type="default" style={styles.text}>
              {message.text}
            </ThemedText>

            {message.pathways && (
              <View style={[styles.pathwaysBox, { backgroundColor: theme.surfaceContainer }]}>
                <View style={styles.pathwaysHeader}>
                  <MaterialIcons name="check-circle" size={16} color={theme.primary} />
                  <ThemedText type="smallBold" themeColor="primary">
                    Available Viable Pathways:
                  </ThemedText>
                </View>
                {message.pathways.map((pathway) => (
                  <View key={pathway.title} style={styles.pathwayItem}>
                    <ThemedText type="small" style={styles.bulletDot}>
                      {'•'}
                    </ThemedText>
                    <ThemedText type="small" style={styles.pathwayText}>
                      <ThemedText type="smallBold" themeColor="secondary">
                        {pathway.title}
                      </ThemedText>{' '}
                      {pathway.description}
                    </ThemedText>
                  </View>
                ))}
              </View>
            )}

            {message.followUp && (
              <ThemedText type="default" style={styles.text}>
                {message.followUp}
              </ThemedText>
            )}
          </View>
        ) : (
          message.text
        )}
      </ChatBubble>

      {isAi && (
        <View style={styles.feedbackRow}>
          <Pressable style={styles.feedbackButton}>
            <MaterialIcons name="thumb-up" size={12} color={theme.secondary} />
            <ThemedText type="small" themeColor="secondary">
              Helpful
            </ThemedText>
          </Pressable>
          <Pressable style={styles.feedbackButton}>
            <MaterialIcons name="bookmark-border" size={12} color={theme.onSurfaceVariant} />
            <ThemedText type="small" themeColor="onSurfaceVariant">
              Save advice
            </ThemedText>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: Spacing.one,
  },
  richContent: {
    gap: Spacing.two,
  },
  text: {
    lineHeight: 22,
  },
  pathwaysBox: {
    padding: Spacing.two,
    borderRadius: Radius.md,
    gap: Spacing.one,
  },
  pathwaysHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  pathwayItem: {
    flexDirection: 'row',
    gap: Spacing.one,
    paddingLeft: Spacing.one,
  },
  bulletDot: {
    lineHeight: 18,
  },
  pathwayText: {
    flex: 1,
    lineHeight: 18,
  },
  feedbackRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    paddingLeft: Spacing.one,
  },
  feedbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
