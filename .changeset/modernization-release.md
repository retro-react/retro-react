---
'retro-react': minor
---

A long-overdue cleanup pass. The package now installs with one command, builds in under a second, and works in modern React stacks (RSC, Next.js App Router, Vite, Remix) without any setup beyond `npm install retro-react`.

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
