# retro-react

[![npm version](https://badge.fury.io/js/retro-react.svg)](https://www.npmjs.com/package/retro-react)
[![npm license](https://img.shields.io/npm/l/retro-react.svg)](https://www.npmjs.com/package/retro-react)

Authentic Windows 95 / 98 component library for React. 50+ typed, tree-shakable components with classic 3D bevels, sharp pixels, and CRT vibes — including buttons, inputs, modals, tabs, accordions, tables, trees, popovers, alerts, plus retro one-of-a-kind extras like `Pager`, `CRT`, `Terminal`, `WordArt`, `Marquee`, `TypewriterText`, and `SevenSegmentDisplay`.

→ **[Live demo & docs](https://retro-react.github.io/retro-react/?path=/docs/overview-introduction--docs/)**

## Highlights

- **Authentic Win9x look** — sunken / raised / pressed bevels, system fonts, navy-and-silver palette, no rounded corners
- **One-command install** — no peer dep dance, no theme provider, no global CSS
- **Tree-shakable** — `sideEffects: false`, single ESM + CJS entry, ships only what you import
- **First-class TypeScript** — strict types ship with the package; works with `tsc`, Vite, Next.js, Remix
- **Controlled & uncontrolled** — every form-style component supports both
- **Accessible by default** — focus trap on dialogs, ARIA on combobox/tree/tabs/menu, full keyboard nav
- **React 16.8 – 19** as the only peer dependency

## Install

```bash
npm install retro-react
# or
yarn add retro-react
# or
pnpm add retro-react
```

That's it. `@emotion/react`, `@emotion/styled`, and `theme-ui` install transitively. No provider setup required.

## Quick start

```tsx
import { Button, Card, Input, Modal } from 'retro-react';
import { useState } from 'react';

export default function App() {
	const [open, setOpen] = useState(false);

	return (
		<Card header="Sign in">
			<Input placeholder="Username" />
			<Button variant="primary" onClick={() => setOpen(true)}>
				OK
			</Button>
			<Button variant="outline">Cancel</Button>

			<Modal open={open} onClose={() => setOpen(false)} title="Welcome">
				<p>Logged in.</p>
			</Modal>
		</Card>
	);
}
```

## What's in the box

**Buttons & actions** — `Button`, `ButtonGroup`, `ToggleButton`, `ToggleButtonGroup`, `Chip`

**Form controls** — `Input`, `PasswordInput`, `Select`, `Autocomplete`, `Checkbox`, `Radio`, `Switch`, `Slider`, `DocumentUpload`

**Data display** — `Table`, `Statistics`, `Avatar`, `Badge`, `Tree`, `SevenSegmentDisplay`, `Carousel`

**Feedback & status** — `Alert`, `ProgressBar`, `Spinner`, `Skeleton`, `Stepper`

**Navigation** — `Tabs`, `Menu`, `Navbar`, `Breadcrumbs`, `Pager`

**Layout & containers** — `Box`, `Card`, `Container`, `Accordion`, `Divider`, `FlexibleLayout`, `Group`

**Retro text effects** — `Text`, `WordArt`, `Marquee`, `TypewriterText`

**Dialogs & overlays** — `Modal`, `Drawer`, `Popover`, `Tooltip`

**Atmosphere** — `CRT`, `Terminal`, `StarField`, `MouseTrail`, `PixelatedImage`, `Scrollbar`, `Background`

See the [demo](https://retro-react.github.io/retro-react/?path=/docs/overview-introduction--docs/) for live props, controls, and source for every component.

## Styling

### `sx` prop

Every component accepts an `sx` prop for one-off overrides:

```tsx
<Button sx={{ minWidth: 120 }}>Send</Button>
<Text sx={{ color: '#000080' }}>Heading</Text>
```

### `retro-ui` class

Every component carries the `retro-ui` class so you can override globally without targeting internals:

```css
.retro-ui {
	font-family: 'Pixelated MS Sans Serif', system-ui;
}
```

### Emotion

`styled` and `useTheme` are re-exported for consumers that want their own retro-styled components:

```tsx
import { styled, useTheme } from 'retro-react';

const Bevel = styled('div')`
	border: 2px solid;
	border-color: #fff #808080 #808080 #fff;
	background: #c0c0c0;
	padding: 8px 12px;
`;
```

## Contributing

Issues and PRs are welcome at [github.com/retro-react/retro-react](https://github.com/retro-react/retro-react). For non-trivial changes please open an issue first.

## License

MIT
