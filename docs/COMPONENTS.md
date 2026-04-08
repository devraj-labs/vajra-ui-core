# Components

---

### [Box](./box/box.md)
Foundation `View` with shorthand layout + spacing props. Every other primitive builds on this.

### [Row](./row/row.md)
`Box` with `flexDirection="row"` pre-applied. Horizontal layout in one word.

### [Col](./col/col.md)
`Box` with `flexDirection="column"` pre-applied. Stacks children vertically.

### [Center](./center/center.md)
`Box` centered on both axes. No more `alignItems` + `justifyContent` boilerplate.

### [AbsoluteCenter](./absolute-center/absolute-center.md)
Fills its parent absolutely and centers children. Good for overlays and empty states.

### [Spacer](./spacer/spacer.md)
Fixed-size gap between siblings. Cleaner than adding margins everywhere.

### [Separator](./separator/separator.md)
Horizontal or vertical divider line. One prop to switch orientation.

### [CoreText](./core-text/core-text.md)
Headless `Text` with typography shorthand props. Bring your own font and color system.

### [CoreTextInput](./core-text-input/core-text-input.md)
Headless `TextInput` with the same layout and typography props as `CoreText`.

### [CorePressable](./core-pressable/core-pressable.md)
`TouchableOpacity` with full layout prop support. No wrapper `View` needed.

### [Grid](./grid/grid.md)
Compound responsive grid — `Grid.Root` + `Grid.Item`. Adapts to any screen width automatically.

### [useDimensions](./use-dimensions/use-dimensions.md)
Screen-aware dimension utilities. Responsive values without a context provider.
