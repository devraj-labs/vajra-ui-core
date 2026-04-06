# Center

`Box` preset with `align="center"` and `justify="center"` applied automatically. Perfect for loading states, empty states, icon containers, and anything that needs to be centred inside its parent.

## Preview

![Center example](./center-example.png)

> Screenshot from [`examples/app/src/screens/center-example.tsx`](../../examples/app/src/screens/center-example.tsx)

## Usage

```tsx
import { Center } from '@devraj-labs/vajra-ui-core';

<Center flex={1}>
  <Spinner />
</Center>
```

## API

Accepts all [`Box` props](../box/box.md). The `align` and `justify` props are fixed and cannot be overridden.
