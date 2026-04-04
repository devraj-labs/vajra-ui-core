import { TouchableOpacityProps, ViewStyle } from 'react-native';

import { TBoxProps } from '../box/box-types';

export type TCorePressableProps = Omit<TouchableOpacityProps, 'style'> &
  Omit<TBoxProps, keyof TouchableOpacityProps | 'children'> & {
    style?: ViewStyle | ViewStyle[];
  };
