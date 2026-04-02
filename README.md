# Vajra UI Core

Headless React Native layout primitives. No theme. No opinions. Just structure.

Built to be consumed by `vajra-ui` or used standalone when you want layout building blocks without a design system attached.

---

## Install

```sh
yarn add vajra-core
```

`react` and `react-native` are peer dependencies.

---

## Primitives

### `Box`

The foundation. A `View` with shorthand style props.

```tsx
<Box w="100%" p={16} bg="#fff" rounded={8} direction="row" align="center" gap={8}>
  {children}
</Box>
```

**Props:** `w`, `h`, `minW`, `maxW`, `minH`, `maxH`, `bg`, `borderColor`, `borderWidth`, `borderTopWidth`, `borderBottomWidth`, `borderLeftWidth`, `borderRightWidth`, `rounded`, `roundedT`, `roundedB`, `roundedL`, `roundedR`, `flex`, `gap`, `justify`, `align`, `direction`, `wrap`, `m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr`, `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr`, `position`, `top`, `bottom`, `left`, `right` — plus all native `ViewProps`.

---

### `Row`

`Box` with `direction="row"` preset.

```tsx
<Row align="center" gap={12}>
  <Icon />
  <Label />
</Row>
```

---

### `Col`

`Box` with `direction="column"` preset.

```tsx
<Col gap={8} p={16}>
  <Title />
  <Subtitle />
</Col>
```

---

### `Center`

`Box` with `align="center"` and `justify="center"` preset.

```tsx
<Center flex={1}>
  <Spinner />
</Center>
```

---

### `AbsoluteCenter`

Fills parent absolutely and centers its children.

```tsx
<AbsoluteCenter>
  <Overlay />
</AbsoluteCenter>
```

---

### `Grid`

Compound component for responsive grid layouts. Uses screen width to calculate column widths.

```tsx
<Grid.Root gap={8} columns={2}>
  <Grid.Item span={1} columns={2} colGap={8} screenPadding={16}>
    <Card />
  </Grid.Item>
  <Grid.Item span={1} columns={2} colGap={8} screenPadding={16}>
    <Card />
  </Grid.Item>
</Grid.Root>
```

---

### `CoreText`

Headless `Text` with typography shorthand props.

```tsx
<CoreText fontSize={16} fontWeight="600" color="#111" lineHeight={24}>
  Hello
</CoreText>
```

**Props:** `fontSize`, `lineHeight`, `fontWeight`, `fontFamily`, `letterSpacing`, `color`, `align`, `decoration`, `transform` — plus all native `TextProps`.

---

### `CoreTextInput`

Headless `TextInput` with box layout props and typography props.

```tsx
<CoreTextInput
  p={12}
  rounded={8}
  borderWidth={1}
  borderColor="#ccc"
  fontSize={14}
  color="#000"
  placeholder="Type here..."
  placeholderColor="#aaa"
/>
```

---

### `CorePressable`

Headless `Pressable` with box layout props and a built-in press opacity.

```tsx
<CorePressable onPress={handlePress} bg="#000" rounded={8} p={12} opacity={0.6}>
  <CoreText color="#fff">Press me</CoreText>
</CorePressable>
```

`opacity` controls the pressed-state opacity (default `0.7`).

---

### `Spacer`

Fixed-size empty space.

```tsx
<Spacer h={16} />
<Spacer w={8} />
```

---

### `Separator`

A thin line divider.

```tsx
<Separator orientation="horizontal" thickness={1} color="#e0e0e0" variant="solid" />
<Separator orientation="vertical" thickness={1} color="#e0e0e0" />
```

---

## Hooks

### `useDimensions`

Screen-aware dimension utilities. Useful for building responsive layouts.

```tsx
const { width, height, contentWidth, getItemWidth } = useDimensions(screenPadding);

// width of one column in a 3-column grid with 8px gaps
const colWidth = getItemWidth(3, 8);
```

---

## License

MIT
