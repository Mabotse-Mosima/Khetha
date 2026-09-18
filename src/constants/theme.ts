/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    textSecondary: '#60646C',

    // Khetha NCAP brand palette (Material 3 roles).
    primary: '#1b6b51',
    onPrimary: '#ffffff',
    primaryContainer: '#065f46',
    onPrimaryContainer: '#8bd6b7',
    primaryFixed: '#a6f2d1',
    onPrimaryFixed: '#002116',
    primaryFixedDim: '#8bd6b6',
    onPrimaryFixedVariant: '#00513b',
    secondary: '#006a61',
    onSecondary: '#ffffff',
    secondaryContainer: '#86f2e4',
    onSecondaryContainer: '#006f66',
    secondaryFixed: '#89f5e7',
    onSecondaryFixed: '#00201d',
    secondaryFixedDim: '#6bd8cb',
    onSecondaryFixedVariant: '#005049',
    tertiary: '#5e3000',
    onTertiary: '#ffffff',
    tertiaryContainer: '#804300',
    onTertiaryContainer: '#ffb87e',
    tertiaryFixed: '#ffdcc3',
    onTertiaryFixed: '#2f1500',
    tertiaryFixedDim: '#ffb77d',
    onTertiaryFixedVariant: '#6e3900',
    error: '#ba1a1a',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#93000a',
    onBackground: '#131b2e',
    surface: '#faf8ff',
    onSurface: '#131b2e',
    surfaceVariant: '#dae2fd',
    onSurfaceVariant: '#3f4944',
    outline: '#6f7973',
    outlineVariant: '#bec9c2',
    surfaceContainerLowest: '#ffffff',
    surfaceContainerLow: '#f2f3ff',
    surfaceContainer: '#eaedff',
    surfaceContainerHigh: '#e2e7ff',
    surfaceContainerHighest: '#dae2fd',
    cardBorder: 'rgba(15, 23, 42, 0.08)',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',

    // Khetha NCAP brand palette (Material 3 roles, dark scheme).
    primary: '#8bd6b6',
    onPrimary: '#00382a',
    primaryContainer: '#00513b',
    onPrimaryContainer: '#a6f2d1',
    primaryFixed: '#a6f2d1',
    onPrimaryFixed: '#002116',
    primaryFixedDim: '#8bd6b6',
    onPrimaryFixedVariant: '#00513b',
    secondary: '#6bd8cb',
    onSecondary: '#00382f',
    secondaryContainer: '#005049',
    onSecondaryContainer: '#89f5e7',
    secondaryFixed: '#89f5e7',
    onSecondaryFixed: '#00201d',
    secondaryFixedDim: '#6bd8cb',
    onSecondaryFixedVariant: '#005049',
    tertiary: '#ffb77d',
    onTertiary: '#4c2300',
    tertiaryContainer: '#6e3900',
    onTertiaryContainer: '#ffdcc3',
    tertiaryFixed: '#ffdcc3',
    onTertiaryFixed: '#2f1500',
    tertiaryFixedDim: '#ffb77d',
    onTertiaryFixedVariant: '#6e3900',
    error: '#ffb4ab',
    onError: '#690005',
    errorContainer: '#93000a',
    onErrorContainer: '#ffdad6',
    onBackground: '#dee5df',
    surface: '#0e1512',
    onSurface: '#dee5df',
    surfaceVariant: '#3f4944',
    onSurfaceVariant: '#bec9c2',
    outline: '#899289',
    outlineVariant: '#3f4944',
    surfaceContainerLowest: '#090f0d',
    surfaceContainerLow: '#171d1a',
    surfaceContainer: '#1b211e',
    surfaceContainerHigh: '#252b28',
    surfaceContainerHighest: '#303632',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

export const Radius = {
  sm: 6,
  md: 10,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const CardShadow = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.06,
  shadowRadius: 4,
  elevation: 1,
} as const;
