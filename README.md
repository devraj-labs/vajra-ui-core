<div align="center">

# Vajra UI Core

### Layout primitives for React Native.

<table>
  <tr>
    <td align="center"><strong>~9 kB</strong></td>
    <td align="center"><strong>0</strong></td>
    <td align="center"><strong>0</strong></td>
    <td align="center"><strong>12</strong></td>
  </tr>
  <tr>
    <td align="center">Download size</td>
    <td align="center">Dependencies</td>
    <td align="center">Providers needed</td>
    <td align="center">Primitives</td>
  </tr>
</table>

<br />

[![npm version](https://img.shields.io/npm/v/@devraj-labs/vajra-ui-core)](https://www.npmjs.com/package/@devraj-labs/vajra-ui-core)
[![bundle size](https://img.shields.io/bundlephobia/min/@devraj-labs/vajra-ui-core)](https://bundlephobia.com/package/@devraj-labs/vajra-ui-core)
[![zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/@devraj-labs/vajra-ui-core)
[![license](https://img.shields.io/npm/l/@devraj-labs/vajra-ui-core)](./LICENSE)

<br />

<img src="./docs/box/box-example.png" height="500" />&nbsp;<img src="./docs/row/row-example.png" height="500" />&nbsp;<img src="./docs/col/col-example.png" height="500" />

</div>

---

## Why

Raw RN layout is verbose. Design systems fix that but ship a theme, a provider, and a dependency tree you didn't ask for.

Vajra UI Core is neither. It's a thin prop layer over the primitives you're already using — `View`, `Text`, `TouchableOpacity`. The whole thing is 9 kB and pulls in nothing. Drop it in, style with your own system, done.

```tsx
// before
<View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 8 }}>

// after
<Row align="center" px={16} gap={8}>
```

---

## Install

```sh
yarn add @devraj-labs/vajra-ui-core
```

`react` and `react-native` are peer dependencies. Nothing else is.

---

## Primitives

| Component | Purpose |
|-----------|---------|
| `Box` | Foundation `View` with shorthand layout + spacing props |
| `Row` | `Box` with `direction="row"` |
| `Col` | `Box` with `direction="column"` |
| `Center` | `Box` centered on both axes |
| `AbsoluteCenter` | Fills parent absolutely and centers children |
| `Spacer` | Fixed-size gap |
| `Separator` | Horizontal or vertical divider line |
| `CoreText` | Headless `Text` with typography props |
| `CoreTextInput` | Headless `TextInput` with layout + typography props |
| `CorePressable` | `TouchableOpacity` with full layout prop support |
| `Grid` | Compound responsive grid — `Grid.Root` + `Grid.Item` |
| `useDimensions` | Screen-aware dimension utilities |

---

## Usage

```tsx
import { Box, Row, Col, CoreText, CorePressable } from '@devraj-labs/vajra-ui-core';

export function Card() {
  return (
    <Box bg="#fff" rounded={12} p={16} gap={12}>
      <CoreText fontSize={18} fontWeight="600">
        Hello
      </CoreText>
      <Row gap={8} align="center">
        <Box w={40} h={40} rounded={20} bg="#eee" />
        <Col gap={2}>
          <CoreText fontSize={14}>Name</CoreText>
          <CoreText fontSize={12} color="#888">Subtitle</CoreText>
        </Col>
      </Row>
      <CorePressable bg="#000" rounded={8} py={12} align="center" onPress={() => {}}>
        <CoreText color="#fff" fontWeight="600">Tap me</CoreText>
      </CorePressable>
    </Box>
  );
}
```

---

## Docs

| Component | |
|-----------|--|
| `Box` | [docs/box](./docs/box/box.md) |
| `Row` | [docs/row](./docs/row/row.md) |
| `Col` | [docs/col](./docs/col/col.md) |
| `Center` | [docs/center](./docs/center/center.md) |
| `AbsoluteCenter` | [docs/absolute-center](./docs/absolute-center/absolute-center.md) |
| `Spacer` | [docs/spacer](./docs/spacer/spacer.md) |
| `Separator` | [docs/separator](./docs/separator/separator.md) |
| `CoreText` | [docs/core-text](./docs/core-text/core-text.md) |
| `CoreTextInput` | [docs/core-text-input](./docs/core-text-input/core-text-input.md) |
| `CorePressable` | [docs/core-pressable](./docs/core-pressable/core-pressable.md) |
| `Grid` | [docs/grid](./docs/grid/grid.md) |
| `useDimensions` | [docs/use-dimensions](./docs/use-dimensions/use-dimensions.md) |

---

## Examples

A runnable React Native CLI app lives in [`examples/app/`](./examples/app/).

```sh
cd examples/app

# iOS
bundle exec pod install --project-directory=ios
npx react-native run-ios

# Android
npx react-native run-android
```

---

## License

MIT
