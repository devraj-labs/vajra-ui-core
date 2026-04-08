import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { buildBoxStyle } from '../box/build-box-style';
import { TCorePressableProps } from './pressable-types';

export const CorePressable = memo(
  ({
    style,
    children,
    w,
    h,
    minW,
    maxW,
    minH,
    maxH,
    bg,
    borderColor,
    borderWidth,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    rounded,
    roundedT,
    roundedB,
    roundedL,
    roundedR,
    align,
    justify,
    gap,
    flex,
    direction,
    wrap,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    opacity,
    ...rest
  }: TCorePressableProps) => {
    const boxStyleProps = {
      w,
      h,
      minW,
      maxW,
      minH,
      maxH,
      bg,
      borderColor,
      borderWidth,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      rounded,
      roundedT,
      roundedB,
      roundedL,
      roundedR,
      align,
      justify,
      gap,
      flex,
      direction,
      wrap,
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      p,
      px,
      py,
      pt,
      pb,
      pl,
      pr,
    };

    return (
      <TouchableOpacity style={[buildBoxStyle(boxStyleProps), { opacity }, style]} {...rest}>
        {children}
      </TouchableOpacity>
    );
  },
);

CorePressable.displayName = 'CorePressable';
