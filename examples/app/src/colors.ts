export const colors = {
  // Backgrounds
  background: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceAlt: '#F1F3F5',

  // Brand
  primary: '#14B8A6',
  primaryLight: '#DBEAFE',
  primaryDark: '#0D9488',

  theme: '#14B8A6',

  // Semantic
  success: '#16A34A',
  successLight: '#DCFCE7',
  warning: '#D97706',
  warningLight: '#FEF3C7',
  error: '#DC2626',
  errorLight: '#FEE2E2',

  // Text
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textDisabled: '#D1D5DB',
  textInverse: '#FFFFFF',

  // Borders
  border: '#E5E7EB',
  borderStrong: '#9CA3AF',

  // Overlays — white on colored backgrounds
  overlayWhiteXFaint: 'rgba(255,255,255,0.1)',
  overlayWhiteFaint: 'rgba(255,255,255,0.12)',
  overlayWhiteSubtle: 'rgba(255,255,255,0.15)',
  overlayWhiteLight: 'rgba(255,255,255,0.2)',
  overlayWhiteDim: 'rgba(255,255,255,0.35)',
  overlayWhiteSoft: 'rgba(255,255,255,0.3)',
  overlayWhiteMid: 'rgba(255,255,255,0.6)',
  overlayWhiteStrong: 'rgba(255,255,255,0.75)',
  overlayWhiteBold: 'rgba(255,255,255,0.8)',

  // Overlays — dark
  overlayDark: 'rgba(0,0,0,0.35)',
  overlay: 'rgba(0, 0, 0, 0.4)',

  // Misc
  transparent: 'transparent',

  // Swatches (used in colour pickers / demos)
  swatchMidnight: '#1e293b',
} as const;

export type TColors = typeof colors;
