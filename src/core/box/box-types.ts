import { DimensionValue, ViewProps, ViewStyle } from 'react-native';

import { TSpacingProps } from '../../types';

type TDimensionProps = {
  w?: DimensionValue;
  h?: DimensionValue;
  minW?: DimensionValue;
  maxW?: DimensionValue;
  minH?: DimensionValue;
  maxH?: DimensionValue;
};

type TColorProps = {
  bg?: string;
  borderColor?: string;
};

type TBorderProps = {
  borderWidth?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
};

type TRoundedProps = {
  rounded?: number;
  roundedT?: number;
  roundedB?: number;
  roundedL?: number;
  roundedR?: number;
};

type TPositionProps = {
  position?: ViewStyle['position'];
  top?: DimensionValue;
  bottom?: DimensionValue;
  left?: DimensionValue;
  right?: DimensionValue;
  overflow?: ViewStyle['overflow'];
};

type TFlexProps = {
  flex?: number;
  gap?: number;
  justify?: ViewStyle['justifyContent'];
  align?: ViewStyle['alignItems'];
  direction?: ViewStyle['flexDirection'];
  wrap?: ViewStyle['flexWrap'];
};

export type TBoxProps = Omit<ViewProps, 'style'> &
  TDimensionProps &
  TColorProps &
  TBorderProps &
  TRoundedProps &
  TFlexProps &
  TSpacingProps &
  TPositionProps & {
    style?: ViewStyle | ViewStyle[];
    children?: React.ReactNode;
  };
