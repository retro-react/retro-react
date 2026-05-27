---
"retro-react": minor
---

New `Window` component plus a round of fixes from a consumer-side audit.

**New**

- `Window` — draggable, resizable Win 9x style window. Built on Pointer Events with `setPointerCapture` (touch + mouse), RAF-coalesced drag and resize, controlled and uncontrolled position / size / active props, configurable `bounds` (`'viewport' | 'parent' | false`), `minSize` / `maxSize`, Escape to close, lifecycle events (`onDragStart` / `End`, `onResizeStart` / `End`), and a dev warning when `size` is passed without `onSizeChange`.
- `Button` — new `error` variant.
- `MenuItem` — new `disabled` prop with proper ARIA and pointer state.
- `Spinner` — accepts `'bar'` as an alias for `'bars'`.
- `SevenSegmentDisplay` — new `digits` prop pads the value with leading zeros.

**Fixes**

- `ProgressBar` — fill now sits inside the bevel ring instead of overlapping it, and the barber-pole animation uses an integer-pixel tile so the stripes glide continuously instead of jittering at the left edge.
- `Button` — `large` size height now matches `Input` `large` so they line up in shared rows.
- `Badge` — JSDoc clarifies that `children` is the anchor element (avatar, icon, button) and `badgeContent` is the count. The badge is hidden when `badgeContent` is `0`, `null`, or `undefined` unless `showZero` is set.
