import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const TOKEN_KEY = 'khetha_auth_token';

// expo-secure-store has no web implementation; fall back to localStorage there.
export const AuthStorage = {
  async getToken(): Promise<string | null> {
    if (Platform.OS === 'web') return window.localStorage.getItem(TOKEN_KEY);
    return SecureStore.getItemAsync(TOKEN_KEY);
  },
  async setToken(token: string): Promise<void> {
    if (Platform.OS === 'web') {
      window.localStorage.setItem(TOKEN_KEY, token);
      return;
    }
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  },
  async clearToken(): Promise<void> {
    if (Platform.OS === 'web') {
      window.localStorage.removeItem(TOKEN_KEY);
      return;
    }
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  },
};
