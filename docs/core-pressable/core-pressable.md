# CorePressable

Headless `TouchableOpacity` with Box layout props. No default visual — all styling is up to you. Use it for buttons, list rows, cards, and any tappable surface.

## Preview

![CorePressable example](./core-pressable-example.png)

> Screenshot from [`examples/app/src/screens/core-pressable-example.tsx`](../../examples/app/src/screens/core-pressable-example.tsx)

## Usage

```tsx
import { CorePressable, CoreText } from '@devraj-labs/vajra-ui-core';

<CorePressable onPress={handlePress} bg="#2563EB" rounded={8} p={14} align="center">
  <CoreText fontSize={15} fontWeight="600" color="#fff">
    Confirm
  </CoreText>
</CorePressable>
```

## API

Accepts all [`Box` props](../box/box.md) combined with all native `TouchableOpacityProps`.

### Key interaction props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onPress` | `() => void` | — | Fired on tap |
| `onPressIn` | `() => void` | — | Fired when press begins |
| `onPressOut` | `() => void` | — | Fired when press ends |
| `onLongPress` | `() => void` | — | Fired on long press |
| `disabled` | `boolean` | `false` | Prevents interaction |
| `activeOpacity` | `number` | `0.7` | Opacity while pressed |
| `style` | `ViewStyle \| ViewStyle[]` | — | Additional styles |
