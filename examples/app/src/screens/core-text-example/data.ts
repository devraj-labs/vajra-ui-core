import { colors } from '../../colors';

export const CATEGORIES = ['All', 'Tech', 'Design', 'Business', 'Science'];

export const ARTICLES = [
  {
    id: '1',
    category: 'Tech',
    tag: 'BREAKING',
    tagColor: colors.error,
    tagBg: colors.errorLight,
    headline:
      'Open-source React Native tooling hits 10 million weekly downloads',
    summary:
      'The headless component ecosystem continues to grow as developers demand more control over their UI layer without sacrificing productivity.',
    author: 'Maya Chen',
    readTime: '4 min',
    emoji: '📱',
  },
  {
    id: '2',
    category: 'Design',
    tag: 'FEATURED',
    tagColor: colors.primary,
    tagBg: colors.primaryLight,
    headline:
      'Why design tokens are the new CSS variables — and why it matters',
    summary:
      "Design tokens have crossed from Figma into production codebases. Here's what changed and how to adopt them without rewriting your design system.",
    author: 'James Obi',
    readTime: '6 min',
    emoji: '🎨',
  },
  {
    id: '3',
    category: 'Business',
    tag: 'ANALYSIS',
    tagColor: colors.warning,
    tagBg: colors.warningLight,
    headline: 'Developer tools market reaches $28 billion in 2026',
    summary:
      'As software teams grow, so does investment in the infrastructure they rely on. A new report maps the fastest-growing segments.',
    author: 'Sara Kim',
    readTime: '3 min',
    emoji: '📊',
  },
];

export const TYPE_SCALE = [
  { label: 'Display', size: 28, weight: '800' as const, lh: 34 },
  { label: 'H1', size: 22, weight: '700' as const, lh: 28 },
  { label: 'H2', size: 18, weight: '700' as const, lh: 24 },
  { label: 'H3', size: 16, weight: '600' as const, lh: 22 },
  { label: 'Body', size: 14, weight: '400' as const, lh: 21 },
  { label: 'Caption', size: 12, weight: '400' as const, lh: 18 },
  { label: 'Label', size: 10, weight: '600' as const, lh: 14 },
];

export const SEMANTIC_COLORS = [
  { label: 'Success', color: colors.success, text: 'Deployment succeeded ✓' },
  { label: 'Warning', color: colors.warning, text: 'API rate limit at 80%' },
  { label: 'Error', color: colors.error, text: 'Build failed — see logs' },
  { label: 'Primary', color: colors.primary, text: 'View full report →' },
  {
    label: 'Disabled',
    color: colors.textDisabled,
    text: 'Feature unavailable',
  },
];
