import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeader } from '@/components/ncap/screen-header';
import { ScreenLoading } from '@/components/ncap/screen-loading';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { LANGUAGE_OPTIONS, TRACK_OPTIONS } from '@/data/auth';
import { useAuth } from '@/contexts/auth-context';
import { useTheme } from '@/hooks/use-theme';
import { ApiError } from '@/services/api-client';

type Mode = 'login' | 'register';

export default function AccountScreen() {
  const theme = useTheme();
  const { learner, isLoading, login, register, logout } = useAuth();
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [language, setLanguage] = useState(LANGUAGE_OPTIONS[0]);
  const [track, setTrack] = useState(TRACK_OPTIONS[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit() {
    setError(null);

    if (mode === 'register') {
      const gradeNumber = Number(grade);
      if (!grade || gradeNumber < 8 || gradeNumber > 12) {
        setError('Please enter a grade between 8 and 12.');
        return;
      }
    }

    setIsSubmitting(true);

    const promise =
      mode === 'login'
        ? login({ email: email.trim(), password })
        : register({
            name: name.trim(),
            email: email.trim(),
            password,
            grade: Number(grade),
            language,
            track,
          });

    promise
      .then(() => router.back())
      .catch((err: unknown) => {
        setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
      })
      .finally(() => setIsSubmitting(false));
  }

  function handleLogout() {
    setIsSubmitting(true);
    logout().finally(() => setIsSubmitting(false));
  }

  if (isLoading) {
    return (
      <ThemedView style={styles.root}>
        <SafeAreaView style={styles.centeredColumn}>
          <ScreenLoading label="Loading your account..." />
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.root}>
      <SafeAreaView style={styles.centeredColumn}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.closeRow}>
            <Pressable
              accessibilityLabel="Close"
              onPress={() => router.back()}
              style={({ pressed }) => [styles.closeButton, { backgroundColor: theme.surfaceContainer }, pressed && styles.pressed]}>
              <MaterialIcons name="close" size={20} color={theme.onSurface} />
            </Pressable>
          </View>

          {learner ? (
            <>
              <ScreenHeader title="My Account" subtitle="Your Khetha profile" />

              <View style={[styles.card, { backgroundColor: theme.surfaceContainerLowest, borderColor: theme.cardBorder }]}>
                <View style={styles.profileRow}>
                  <ThemedText type="smallBold" themeColor="onSurfaceVariant">Name</ThemedText>
                  <ThemedText type="default">{learner.name}</ThemedText>
                </View>
                <View style={styles.profileRow}>
                  <ThemedText type="smallBold" themeColor="onSurfaceVariant">Email</ThemedText>
                  <ThemedText type="default">{learner.email}</ThemedText>
                </View>
                <View style={styles.profileRow}>
                  <ThemedText type="smallBold" themeColor="onSurfaceVariant">Grade</ThemedText>
                  <ThemedText type="default">{learner.grade || 'Not set'}</ThemedText>
                </View>
                <View style={styles.profileRow}>
                  <ThemedText type="smallBold" themeColor="onSurfaceVariant">Language</ThemedText>
                  <ThemedText type="default">{learner.language}</ThemedText>
                </View>
                <View style={styles.profileRow}>
                  <ThemedText type="smallBold" themeColor="onSurfaceVariant">Track</ThemedText>
                  <ThemedText type="default">{learner.track}</ThemedText>
                </View>
              </View>

              <Pressable
                onPress={handleLogout}
                disabled={isSubmitting}
                style={({ pressed }) => [
                  styles.submitButton,
                  { backgroundColor: theme.surfaceContainer, opacity: isSubmitting ? 0.6 : 1 },
                  pressed && styles.pressed,
                ]}>
                <ThemedText type="smallBold">{isSubmitting ? 'Logging out...' : 'Log Out'}</ThemedText>
              </Pressable>
            </>
          ) : (
            <>
              <ScreenHeader
                title={mode === 'login' ? 'Log In' : 'Create Account'}
                subtitle="Save your assessment results, roadmap and saved careers"
              />

              <View style={styles.modeSwitch}>
                <Pressable
                  onPress={() => setMode('login')}
                  style={[styles.modeTab, mode === 'login' && { backgroundColor: theme.primary }]}>
                  <ThemedText type="smallBold" style={{ color: mode === 'login' ? theme.onPrimary : theme.onSurface }}>
                    Log In
                  </ThemedText>
                </Pressable>
                <Pressable
                  onPress={() => setMode('register')}
                  style={[styles.modeTab, mode === 'register' && { backgroundColor: theme.primary }]}>
                  <ThemedText type="smallBold" style={{ color: mode === 'register' ? theme.onPrimary : theme.onSurface }}>
                    Register
                  </ThemedText>
                </Pressable>
              </View>

              <View style={styles.form}>
                {mode === 'register' && (
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Full name"
                    placeholderTextColor={theme.onSurfaceVariant}
                    style={[styles.input, { color: theme.onSurface, backgroundColor: theme.surfaceContainerLow }]}
                  />
                )}
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  placeholderTextColor={theme.onSurfaceVariant}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={[styles.input, { color: theme.onSurface, backgroundColor: theme.surfaceContainerLow }]}
                />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password (min 8 characters)"
                  placeholderTextColor={theme.onSurfaceVariant}
                  secureTextEntry
                  style={[styles.input, { color: theme.onSurface, backgroundColor: theme.surfaceContainerLow }]}
                />

                {mode === 'register' && (
                  <>
                    <TextInput
                      value={grade}
                      onChangeText={setGrade}
                      placeholder="Grade (8-12)"
                      placeholderTextColor={theme.onSurfaceVariant}
                      keyboardType="number-pad"
                      style={[styles.input, { color: theme.onSurface, backgroundColor: theme.surfaceContainerLow }]}
                    />

                    <ThemedText type="smallBold" themeColor="onSurfaceVariant">Language</ThemedText>
                    <View style={styles.chipRow}>
                      {LANGUAGE_OPTIONS.map((option) => (
                        <Pressable
                          key={option}
                          onPress={() => setLanguage(option)}
                          style={[
                            styles.chip,
                            { backgroundColor: language === option ? theme.primary : theme.surfaceContainer },
                          ]}>
                          <ThemedText type="small" style={{ color: language === option ? theme.onPrimary : theme.onSurface }}>
                            {option}
                          </ThemedText>
                        </Pressable>
                      ))}
                    </View>

                    <ThemedText type="smallBold" themeColor="onSurfaceVariant">Track</ThemedText>
                    <View style={styles.chipRow}>
                      {TRACK_OPTIONS.map((option) => (
                        <Pressable
                          key={option}
                          onPress={() => setTrack(option)}
                          style={[
                            styles.chip,
                            { backgroundColor: track === option ? theme.primary : theme.surfaceContainer },
                          ]}>
                          <ThemedText type="small" style={{ color: track === option ? theme.onPrimary : theme.onSurface }}>
                            {option}
                          </ThemedText>
                        </Pressable>
                      ))}
                    </View>
                  </>
                )}
              </View>

              {error && (
                <ThemedText type="small" themeColor="error" style={styles.error}>
                  {error}
                </ThemedText>
              )}

              <Pressable
                onPress={handleSubmit}
                disabled={isSubmitting}
                style={({ pressed }) => [
                  styles.submitButton,
                  { backgroundColor: theme.primary, opacity: isSubmitting ? 0.6 : 1 },
                  pressed && styles.pressed,
                ]}>
                <ThemedText type="smallBold" style={{ color: theme.onPrimary }}>
                  {isSubmitting ? 'Please wait...' : mode === 'login' ? 'Log In' : 'Create Account'}
                </ThemedText>
              </Pressable>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  centeredColumn: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  scrollContent: {
    gap: Spacing.three,
    padding: Spacing.three,
  },
  closeRow: {
    alignItems: 'flex-end',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  modeSwitch: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  modeTab: {
    flex: 1,
    height: 44,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    gap: Spacing.two,
  },
  input: {
    height: 48,
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.three,
    fontSize: 15,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.one,
  },
  chip: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.full,
  },
  error: {
    textAlign: 'center',
  },
  submitButton: {
    height: 48,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
