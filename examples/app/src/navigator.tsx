import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens/home-screen';
import { BoxExample } from './screens/box-example';
import { RowExample } from './screens/row-example';
import { ColExample } from './screens/col-example';
import { CenterExample } from './screens/center-example';
import { AbsoluteCenterExample } from './screens/absolute-center-example';
import { SpacerExample } from './screens/spacer-example';
import { SeparatorExample } from './screens/separator-example';
import { CoreTextExample } from './screens/core-text-example';
import { CoreTextInputExample } from './screens/core-text-input-example';
import { CorePressableExample } from './screens/core-pressable-example';
import { GridExample } from './screens/grid-example';
import { UseDimensionsExample } from './screens/use-dimensions-example';
import { colors } from './colors';

export type RootStackParamList = {
  Home: undefined;
  BoxExample: undefined;
  RowExample: undefined;
  ColExample: undefined;
  CenterExample: undefined;
  AbsoluteCenterExample: undefined;
  SpacerExample: undefined;
  SeparatorExample: undefined;
  CoreTextExample: undefined;
  CoreTextInputExample: undefined;
  CorePressableExample: undefined;
  GridExample: undefined;
  UseDimensionsExample: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: colors.theme },
        headerTintColor: colors.textInverse,
        headerTitleStyle: { fontWeight: '600', fontSize: 16 },
        contentStyle: { backgroundColor: colors.textInverse },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Vajra UI Core' }} />
      <Stack.Screen name="BoxExample" component={BoxExample} options={{ title: 'Box' }} />
      <Stack.Screen name="RowExample" component={RowExample} options={{ title: 'Row' }} />
      <Stack.Screen name="ColExample" component={ColExample} options={{ title: 'Col' }} />
      <Stack.Screen name="CenterExample" component={CenterExample} options={{ title: 'Center' }} />
      <Stack.Screen name="AbsoluteCenterExample" component={AbsoluteCenterExample} options={{ title: 'AbsoluteCenter' }} />
      <Stack.Screen name="SpacerExample" component={SpacerExample} options={{ title: 'Spacer' }} />
      <Stack.Screen name="SeparatorExample" component={SeparatorExample} options={{ title: 'Separator' }} />
      <Stack.Screen name="CoreTextExample" component={CoreTextExample} options={{ title: 'CoreText' }} />
      <Stack.Screen name="CoreTextInputExample" component={CoreTextInputExample} options={{ title: 'CoreTextInput' }} />
      <Stack.Screen name="CorePressableExample" component={CorePressableExample} options={{ title: 'CorePressable' }} />
      <Stack.Screen name="GridExample" component={GridExample} options={{ title: 'Grid' }} />
      <Stack.Screen name="UseDimensionsExample" component={UseDimensionsExample} options={{ title: 'useDimensions' }} />
    </Stack.Navigator>
  );
}
