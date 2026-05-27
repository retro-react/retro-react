# retro-react

## 1.6.0

### Minor Changes

- e1a22ad: New `Window` component plus a round of fixes from a consumer-side audit.

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

## 1.5.2

### Patch Changes

- a03ea92: Two small fixes found in real-consumer testing of 1.5.1.

  ProgressBar animation loop now cycles seamlessly. The previous shift of `8px` per cycle was the stripe period along the gradient axis, but at 45 degrees that projects to `8 / √2` ≈ 5.66 horizontal pixels, not 8. The pattern was almost-but-not-quite returning to the same visual position at the loop boundary and you could see the jump. The shift is now `8 × √2` ≈ 11.31px, which is exactly one stripe period along the diagonal.

  Button heights now actually match form fields. 1.5.1 sized buttons with content-box math, but Button is `box-sizing: border-box`, so the external box ended up 8px shorter than Input / Select / Autocomplete. Heights bumped to 28 / 32 / 36 (small / medium / large) so a Button sits the same height as a same-size Input in the same row.

## 1.5.1

### Patch Changes

- 04adbff: A polish pass on top of 1.5.0. Visual cohesion, dead props, hover feedback, and a Terminal scroll fix.

  ## Visual

  The bevel mixin now uses a real 1px border plus a 1px inset shadow instead of four stacked inset shadows on a transparent border. The old approach leaked the page background through the corners on small elements, so Checkbox, dot indicators, the Modal close button, and similar small surfaces had a visible 1px gap at the top-right. Pixel-perfect corners now, library-wide.

  Select height now matches Input, Autocomplete, and PasswordInput at every size. Button heights were also re-tuned so a Button sits the same height as an Input in the same row.

  ProgressBar diagonal stripes no longer have visible seams. The animation scrolls one full stripe period per cycle, and the `background-size` override that was cutting the gradient mid-stripe is gone.

  Tabs active tab now has a clear right edge against its neighbor. Active tabs render with `margin: 0 2px 0 -2px` so the bevel reads as separated.

  Slider track is 4px tall plus a 1px border and a 1px inset shadow instead of stacking a 2-layer bevel on a 6px height, which was producing a flat dark line on Storybook. Tick marks dropped the 1px white right-border that was rendering as a hairline.

  Stepper labels no longer truncate. Max width is 120px with word-wrap, so "Welcome", "Setup", "Configuration", "Review", "Done" all render in full.

  DocumentUpload picked up a hover state. A 1px dashed outline in the chosen color fades in on hover, intensifies to 2px on drag-over, and the background goes white. Focus uses the same color.

  Avatar text contrast is fixed. Initials on a navy or red fill render in VGA white with a darker text-shadow.

  Statistics `:active` works now. The clickable wrapper had `${pressed.styles}` in a plain template literal, which never applied the active bevel.

  Badge text-shadow drops at the small size so 8px glyphs stay sharp.

  Modal title bar now actually uses the `color` prop. Pass `color="success"` and the title bar paints green.

  ## Dead or no-op props removed or implemented

  Tooltip dropped the unused `$position` styled prop. The visible `position` prop still works the same way and content now carries a `data-position` attribute.

  Pager's `PagerBody` and `PagerButton` no longer accept the dead `$variant` styled prop. The component-level `variant` still drives the screen, indicator, and message colors.

  CRT `curvature` actually toggles now. Passing `curvature={false}` disables the screen-edge gradient and rounded corners.

  Stepper `variant="process"` now renders with VGA teal so it looks distinct from the default navy.

  Tree `variant="file-manager"` uses a Win 3.1 cyan selection and a softer grey border so it looks distinct from the default.

  Autocomplete `variant="outlined"` was declared but ignored. It now renders with a flat 1px border and a colored focus ring, the same way Input and Select handle outlined.

  Group was missing the `retro-ui` class hook that every other layout component carries. Fixed.

  ## Accessibility

  Tabs `aria-label` was clobbering the visible text content for screen readers. The aria-label now only applies when `children` is not a string.

  Navbar NavItem clicks no longer flip the mobile menu state on desktop. The handler runs only when the menu was open.

  ## Bug fix

  Terminal auto-focuses its input on mount, which on a long page was scrolling the browser viewport to the Terminal (visible on the overview page, which loaded at the bottom). The focus call now passes `preventScroll: true`.

  ## Docs

  Switch `variant` default in the JSDoc was `'square'` but the runtime default is `'rounded'`. Fixed.

  Avatar `rounded` prop now documents that it only affects the square variant.

  Statistics no longer claims a `color` prop that wasn't in the interface.

## 1.5.0

### Minor Changes

- 4589c62: A long-overdue cleanup pass. The package now installs with one command, builds in under a second, and works in modern React stacks (RSC, Next.js App Router, Vite, Remix) without any setup beyond `npm install retro-react`.

  ## Install and compatibility

  `npm install retro-react` is now enough. `@emotion/react`, `@emotion/styled`, and `theme-ui` install transitively, so consumers no longer have to add them by hand. React stays as the only peer dependency, with the range widened to cover 16.8 through 19.

  ## Output

  Both bundles start with `"use client";` so the package works inside React Server Components / Next.js App Router without consumers wrapping every import in their own client boundary.

  The package ships a single ESM and CJS entry with bundled type declarations and source maps. `publint` is clean.

  ## API additions

  Most form-style components now support both controlled and uncontrolled usage properly:

  - `Accordion` got `open` alongside `defaultOpen`.
  - `Autocomplete` got `value` + `onChange`. Blur no longer wipes typed text.
  - `Carousel` got `activeIndex` + `onChange`. Pauses on hover. Handles single child and empty children cleanly.
  - `RadioGroup` got controlled `value`. Per-radio ids are unique, and `name` auto-injects into children.
  - `Select` got a clean dual model. The clear button now fires a real change event and has `type="button"`.
  - `Slider` got `defaultValue`. Tick rendering is capped for large ranges.
  - `Switch` got `defaultToggled`. `name`, `value`, and `aria-label` are forwarded.
  - `Tabs` got `activeTabLabel` + `onTabChange`. Accepts a single child. Defaults to the first tab when no default is set.
  - `Tree` got `expandedNodes` for controlled expand state, full keyboard nav, and proper ARIA roles.
  - `Pager` got overridable `deviceLabel`, `prevLabel`, `nextLabel`, `renderPageIndicator` for localization. Doesn't crash on empty `messages`.
  - `Terminal` `onCommandSubmit` can return a string or string array to append to history.
  - `ToggleButtonGroup` controlled `value` now syncs across re-renders.
  - `Drawer` got `onOpenChange` alongside the existing `setIsOpen`, so consumers driving state from Redux/Zustand/parent state no longer need a `useState` setter.

  ## Modern UI patterns

  - `data-state` attributes on `Modal`, `Drawer`, `Popover`, `Tooltip`, `Accordion`, `Switch`. Style internal state with plain CSS attribute selectors, the way Radix and Ark UI do it. `data-disabled` is exposed where applicable.
  - Polymorphic `as` prop on `Box`. Use `<Box as="section">`, `<Box as="article">`, etc. for semantic HTML.
  - `prefers-reduced-motion` is respected in `Marquee`, `TypewriterText`, and `Carousel` auto-advance. A `usePrefersReducedMotion` utility hook is exposed for your own animated components.

  ## Bug fixes

  There were a lot. The audit-driven ones:

  - `Statistics` `onClick` is wired to the root element. It was previously declared but never fired.
  - `Modal` and `Drawer` trap and restore focus correctly. `Modal` returns `null` when closed.
  - `Popover` repositions on scroll and resize, supports controlled `isOpen`, and closes on Escape. Closed content is fully unmounted rather than left at `left: -9999px`.
  - `Portal` no longer touches `document` during render, so SSR works.
  - `Breadcrumbs` keyboard activation no longer hard-reloads the page. The clipboard handler no longer throws on browsers where `navigator.clipboard` is undefined.
  - `MouseTrail` stopped mutating state in place and parks its animation when idle.
  - `Marquee` no longer jumps mid-cycle. The seamless loop is a real two-copy track.
  - `Carousel` slides fill the viewport. There's no white-strip gap when content is narrower.
  - `DocumentUpload` and `Checkbox` forward both object and callback refs. `DocumentUpload` `id` is unique per instance.
  - `Table` `Next` button respects bounds on empty data. The sort comparator is safer. `pageSize: 0` is clamped to 1 so `totalPages` never goes infinite.
  - `Terminal` now actually forwards refs to its root element.
  - `Tabs` arrow-key nav is scoped to tab buttons. Typing in inputs inside `TabContent` no longer steals focus and switches tabs.
  - `Menu` ArrowUp from no-focus state jumps to the last item (was off-by-one).
  - `PixelatedImage` redraws when `width` / `height` change.
  - `Pager` clamps `currentIndex` when the `messages` array shrinks.
  - `Modal` and `Drawer` Escape listeners only attach while open. No orphan handlers.
  - `Tooltip` cloneElement guards against non-DOM / non-`forwardRef` children. Tooltips can be dismissed with Escape, which fixes WCAG 1.4.13.
  - `Modal` and `Autocomplete` now use `React.useId()` so SSR doesn't throw hydration mismatch warnings.
  - `Statistics` panels grow to fit their value instead of clipping the leading `$`.
  - `SevenSegmentDisplay` renders a minus segment for negative numbers. The sign used to be silently stripped.
  - `PasswordInput` reveal toggle is reachable with Tab and reports its state via `aria-pressed`.
  - `ToggleButtonGroup` ignores children whose `value` isn't a string, so the selected array can't contain `undefined`.
  - `Input.displayName` is now `Input` instead of `RetroInput`, so React DevTools and Storybook autodocs pick it up.

  ## Accessibility

  - `Tooltip` links trigger to tooltip via `aria-describedby`, shows on focus, and dismisses on Escape.
  - `Menu` supports Arrow / Enter / Space.
  - `Tree` is fully keyboard-navigable with `tree` / `treeitem` roles, `aria-expanded`, `aria-selected`.
  - `Radio` drops the redundant `role="radio"` on the native input. The group gets `role="radiogroup"`.
  - `Modal` is properly focus-trapped.

  ## Visual

  `Card`, `Alert`, `Modal`, `Box`, `Table`, `Slider`, `Select`, and `Input` now use shared Win9x bevel mixins (`raised`, `sunken`, `pressed`, `windowFrame`). Sharp corners are baked into those mixins, so every styled `<button>` that uses them is guaranteed to render flat-cornered (this fixes a UA-default rounded-corner leak on `Pager` / `Carousel` / `Table` buttons).

  `Text` is back on fixed pixel sizes instead of viewport-responsive scaling. `Table` headers render as authentic raised column headers. `Checkbox` unchecked state is the classic white sunken box instead of a solid colored fill, and its label is forced to VGA black so it matches every other form label.

  `Pager` was redesigned with a proper header row, deeper LCD, and snappier buttons. `DocumentUpload` lost the CRT scanline and phosphor green and is now a plain Windows-style sunken drop zone with sentence-case labels and a silver default surface (so the sunken bevel reads against white). `ToggleButton` text contrast is fixed (was white on grey). `Navbar` title-bar blue is corrected to `#000080` so it matches primary buttons. `Divider` default is the solid primary color, with the rainbow gradient moved to an opt-in story. `Carousel` no longer collapses when slides are text-only. `Autocomplete` dropdown has a 1px outline so it reads as a panel against any background.

  ## Other

  - The misspelled `LICENCE` is gone. There's a proper `LICENSE` file with MIT and the correct copyright holder.
  - `README.md` was rewritten for the npm page. It leads with what the library actually is and lists components by category.

## 1.4.0

### Minor Changes

- 97275aa: Major retro refactoring for authentic Windows 95/98 aesthetics. Reworked styling across the component library, added centralized retro effect utilities (`src/utils/retroEffects.ts`) and font constants, and introduced the Win31 components overview documentation.

## 1.3.11

### Patch Changes

- bd9841f: Changes across a range of components (see changeset for the full list).

## 1.3.10

### Minor Changes

- 5208a72: New components: Pager and Terminal.

## 1.3.9

### Patch Changes

- 4a633af: Autocomplete additions — disabled state, clear button, and ARIA improvements.

## 1.3.8

### Patch Changes

- de9a89a: Changes to Autocomplete, Menu, Popover, Skeleton, Avatar and Card.

## 1.3.7

### Minor Changes

- 011e769: New component: Autocomplete.

## 1.3.6

### Patch Changes

- 9284929: Expose emotion utilities from the package index.

## 1.3.5

### Minor Changes

- 2faf3f4: New component: ToggleButton. Updated existing components for new colors.

## 1.3.4

### Patch Changes

- 7184f6e: ARIA changes and minor style improvements to Tooltip, Popover, Badge, Upload and Statistics.

## 1.3.3

### Minor Changes

- ae3eb7e: New components: Upload and Menu.

## 1.3.2

### Patch Changes

- df47a9b: New pattern; added greyscale option to many components.

## 1.3.1

### Minor Changes

- 0b1b32d: New component: PasswordInput.

## 1.3.0

### Minor Changes

- 6824fd6: Large ARIA accessibility updates across components.

## 1.2.10

### Patch Changes

- 3985025: Moved Navbar to the Layout section in docs.

## 1.2.9

### Patch Changes

- 223a2dc: Documentation updates.

## 1.2.8

### Minor Changes

- d17fe55: New component and improvements to existing components.

## 1.2.7

### Patch Changes

- 3feaba9: Documentation updates.

## 1.2.6

### Patch Changes

- cb27a84: Maintenance release.

## 1.2.5

### Major Changes

- 47be083: release missing components
- 2d3dbe0: added components tooltip, slider, select, avatar. Updated modal, container, checkbox and text to be more responsive.

### Minor Changes

- a1219ff: resolve issue with svg && font imports
- 2e2b384: add README
- 961be32: new components Scrollbar, Background, Breadcrumbs, Spinner, Marquee. Fix to previous components: Modal, Tooltip and Container
- fbc52ed: new components: Accordion, Carousel and Tabs. Improved docs for others
- 15d9674: implement 3 new components: Alert, Text, Chip

### Patch Changes

- 512d6f3: Update to several components (TypewriterText, PixelatedImage, MouseTrail, Background, SevenSegmentDisplay)
- 512d6f3: New components: Starfield, Tree, FlexibleLayout
  Component changes: Spinner (new shapes), Alert (add close button), ProgressBar (add option to remove background)

  Bugfixes:

  - Change sx prop type from any to ThemeUICSSObject
  - Fix previous color type issues for all components

- 5caec65: Add GlobalStyles ThemeProvider
- b646327: Changes to classname of components Breadcrumbs, Background, Tooltip, Text and ProgressBar
- 764686d: updated component modal to be more responsive
- 2d3dbe0: implement switch, checkbox, wordart components
- d8a6a76: new component: Popover, add button click effect"
