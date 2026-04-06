# Col

`Box` preset with `direction="column"` applied automatically. Use it for vertical stacks — form fields, card content, list items, settings rows, notification feeds.

## Preview

![Col example](./col-example.png)

> Screenshot from [`examples/app/src/screens/col-example.tsx`](../../examples/app/src/screens/col-example.tsx)

## Usage

```tsx
import { Col } from '@devraj-labs/vajra-ui-core';

<Col gap={8} p={16}>
  <Title />
  <Subtitle />
</Col>
```

## API

Accepts all [`Box` props](../box/box.md). The `direction` prop is fixed to `"column"` and cannot be overridden.
