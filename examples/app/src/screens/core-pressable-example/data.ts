import { colors } from '../../colors';

export const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export const COLOR_OPTIONS = [
  { label: 'Midnight', hex: colors.swatchMidnight },
  { label: 'Ocean', hex: colors.primary },
  { label: 'Moss', hex: colors.success },
  { label: 'Amber', hex: colors.warning },
];

export const REVIEWS = [
  {
    id: '1',
    author: 'Alice K.',
    rating: 5,
    text: 'Perfect fit and incredibly soft. Ordered twice already.',
  },
  {
    id: '2',
    author: 'Ben M.',
    rating: 4,
    text: 'Great quality, but the XL runs slightly large.',
  },
  {
    id: '3',
    author: 'Clara O.',
    rating: 5,
    text: 'Fast delivery. Exactly as described.',
  },
];
