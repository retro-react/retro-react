---
'retro-react': patch
---

A polish pass on top of 1.5.0. Visual cohesion, dead props, hover feedback, and a Terminal scroll fix.

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
