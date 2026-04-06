import { colors } from '../../colors';

export type ToggleSetting = {
  id: string;
  label: string;
  description: string;
  emoji: string;
};

export const TOGGLE_SETTINGS: ToggleSetting[] = [
  {
    id: 'push',
    label: 'Push notifications',
    description: 'Receive alerts for activity',
    emoji: '🔔',
  },
  {
    id: 'email',
    label: 'Email digest',
    description: 'Weekly summary to your inbox',
    emoji: '📧',
  },
  {
    id: 'marketing',
    label: 'Marketing emails',
    description: 'Tips, news, and promotions',
    emoji: '📣',
  },
];

export const NAV_SECTIONS = [
  {
    title: 'Account',
    items: [
      { label: 'Edit profile', emoji: '👤', chevron: true },
      { label: 'Change password', emoji: '🔑', chevron: true },
      {
        label: 'Two-factor auth',
        emoji: '🛡️',
        badge: 'Off',
        badgeBg: colors.errorLight,
        badgeFg: colors.error,
        chevron: true,
      },
    ],
  },
  {
    title: 'Preferences',
    items: [
      {
        label: 'Appearance',
        emoji: '🎨',
        badge: 'Light',
        badgeBg: colors.surfaceAlt,
        badgeFg: colors.textSecondary,
        chevron: true,
      },
      {
        label: 'Language',
        emoji: '🌐',
        badge: 'English',
        badgeBg: colors.surfaceAlt,
        badgeFg: colors.textSecondary,
        chevron: true,
      },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Help centre', emoji: '❓', chevron: true },
      { label: 'Report a bug', emoji: '🐛', chevron: true },
      { label: 'Sign out', emoji: '🚪', danger: true, chevron: false },
    ],
  },
];
