import { colors } from '../../colors';

export const STATS = [
  {
    label: 'Revenue',
    value: '$24.8k',
    change: '+12%',
    color: colors.success,
    bg: colors.successLight,
  },
  {
    label: 'Orders',
    value: '1,284',
    change: '+8%',
    color: colors.primary,
    bg: colors.primaryLight,
  },
  {
    label: 'Returns',
    value: '36',
    change: '-3%',
    color: colors.error,
    bg: colors.errorLight,
  },
];

export const ACTIVITY = [
  { title: 'New order #5821', time: '2 min ago', dot: colors.success },
  { title: 'Payment failed — #5819', time: '18 min ago', dot: colors.error },
  { title: 'Refund issued #5810', time: '1 hr ago', dot: colors.warning },
  { title: 'New user registered', time: '2 hr ago', dot: colors.primary },
  { title: 'Server restarted', time: '5 hr ago', dot: colors.textDisabled },
];

export const QUICK_ACTIONS = [
  {
    label: 'New Order',
    emoji: '🛒',
    bg: colors.primaryLight,
    fg: colors.primary,
  },
  {
    label: 'Inventory',
    emoji: '📦',
    bg: colors.successLight,
    fg: colors.success,
  },
  {
    label: 'Reports',
    emoji: '📊',
    bg: colors.warningLight,
    fg: colors.warning,
  },
  {
    label: 'Settings',
    emoji: '⚙️',
    bg: colors.surfaceAlt,
    fg: colors.textSecondary,
  },
];

export const SALES_BY_CATEGORY = [
  { label: 'Electronics', pct: 68, color: colors.primary },
  { label: 'Clothing', pct: 45, color: colors.success },
  { label: 'Home & Garden', pct: 31, color: colors.warning },
  { label: 'Books', pct: 19, color: colors.error },
];
