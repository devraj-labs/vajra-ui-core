import { colors } from '../../colors';

export const SCREEN_PADDING = 16;
export const GAP = 12;

export const CATEGORIES = [
  {
    label: 'Productivity',
    emoji: '⚡',
    color: colors.warning,
    bg: colors.warningLight,
  },
  {
    label: 'Design',
    emoji: '🎨',
    color: colors.primary,
    bg: colors.primaryLight,
  },
  {
    label: 'Developer',
    emoji: '💻',
    color: colors.success,
    bg: colors.successLight,
  },
  { label: 'Finance', emoji: '💰', color: colors.error, bg: colors.errorLight },
  {
    label: 'Health',
    emoji: '❤️',
    color: colors.success,
    bg: colors.successLight,
  },
  {
    label: 'Social',
    emoji: '💬',
    color: colors.primary,
    bg: colors.primaryLight,
  },
];

export const FEATURED_APPS = [
  {
    id: 'f1',
    name: 'Vajra UI',
    tagline: 'Headless primitives',
    emoji: '⚡',
    rating: '4.9',
    category: 'Developer',
    price: 'Free',
    color: colors.primary,
    bg: colors.primaryLight,
  },
  {
    id: 'f2',
    name: 'Canvas Pro',
    tagline: 'Vector design tool',
    emoji: '🎨',
    rating: '4.7',
    category: 'Design',
    price: '$9.99',
    color: colors.warning,
    bg: colors.warningLight,
  },
];

export const APP_GRID = [
  {
    id: '1',
    name: 'Notion',
    emoji: '📝',
    rating: '4.8',
    category: 'Productivity',
    price: 'Free',
  },
  {
    id: '2',
    name: 'Figma',
    emoji: '🔷',
    rating: '4.6',
    category: 'Design',
    price: 'Free',
  },
  {
    id: '3',
    name: 'Linear',
    emoji: '📐',
    rating: '4.9',
    category: 'Developer',
    price: 'Free',
  },
  {
    id: '4',
    name: 'Raycast',
    emoji: '🚀',
    rating: '5.0',
    category: 'Productivity',
    price: 'Free',
  },
  {
    id: '5',
    name: 'Arc',
    emoji: '🌈',
    rating: '4.7',
    category: 'Productivity',
    price: 'Free',
  },
  {
    id: '6',
    name: 'Zed',
    emoji: '⚡',
    rating: '4.5',
    category: 'Developer',
    price: 'Free',
  },
];
