import { TextProps, TextStyle } from 'react-native';

import { TSpacingProps } from '../../types';

export type TTextProps = Omit<TextProps, 'style'> &
  TSpacingProps & {
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: TextStyle['fontWeight'];
    fontFamily?: string;
    letterSpacing?: number;
    color?: string;
    align?: TextStyle['textAlign'];
    decoration?: TextStyle['textDecorationLine'];
    transform?: TextStyle['textTransform'];
    style?: TextStyle | TextStyle[];
    children?: React.ReactNode;
    flex?: number;
  };
