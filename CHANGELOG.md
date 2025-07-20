# retro-react

## 1.5.0

### Minor Changes

- 97275aa: Major retro refactoring for authentic Windows 95/98 aesthetics
- 🎨 Major retro refactoring for authentic Windows 95/98 aesthetics

  ## 🚀 New Features

  - **Authentic retro styling**: All components now use hardcoded Windows 95/98 colors and effects
  - **Retro variant systems**: Replaced color/pattern props with meaningful retro variants
  - **Production-ready**: Comprehensive cleanup of console statements, unused code, and memory leaks
  - **Improved accessibility**: Enhanced keyboard navigation and screen reader support
  - **Better TypeScript**: Fixed all type errors and improved type safety

  ## 🔄 Breaking Changes

  - Removed `color` and `pattern` props from most components (replaced with `variant`)
  - Button: removed `color` prop, use `variant` instead (`primary`, `secondary`, `success`, `warning`, `outline`, `flat`)
  - Scrollbar: replaced `theme` prop with `variant` (`default`, `windows`, `terminal`, `amber`)
  - Various components now use retro-specific variants instead of generic color systems

  ## 📦 Component Updates

  - **Input/Select/PasswordInput**: Added `classic`, `filled`, `outlined`, `terminal` variants
  - **Slider**: Improved marks visibility and z-index layering
  - **Box**: Added retro variants (`panel`, `raised`, `sunken`, `flat`)
  - **Chip**: Redesigned to be visually distinct from buttons
  - **Tooltip**: Added retro variants (`default`, `help`, `warning`, `info`)
  - **TypewriterText**: Rewritten with fluid repeat functionality and blinking cursor
  - **WordArt**: Added authentic retro effects (beveled, shadowed, outlined, retro3d, pixelated, etc.)
  - **Pager**: Authentic Windows 3.1 button styling with retro variants
  - **Stepper**: Improved visual hierarchy with Windows 3.1 styling
  - **Tree**: Windows File Manager/Explorer look with expand/collapse buttons
  - **Navbar**: Menu bar, status bar variants with nested dropdown support

  ## 🛠️ Technical Improvements

  - Removed all unused legacy files and imports
  - Fixed memory leaks in Tooltip, TypewriterText, and other components
  - Comprehensive production readiness review
  - Updated documentation and Storybook stories
  - Clean TypeScript compilation with no errors

  ## 📚 Documentation

  - Updated `RETRO_DESIGN_HELPER.md` with design principles and guidelines
  - Refreshed all Storybook stories to showcase retro styling
  - Added comprehensive examples and usage patterns

- 0b1b32d: changes to ARIA accessibility, updates to responsive design

### Patch Changes

- df47a9b: new component: PasswordInput, changes to Navbar and Input
- ae3eb7e: new pattern, added greyscale for many components, changes to navbar, text and tab for visual retro clarity
- 4a633af: Further fixes and optimizations for Autocomplete component
- 011e769: Add Autocomplete component
- 3985025: New component: Navbar, revamped Carousel and Badge
- 2faf3f4: updated ARIA for upload, new changes to badge, tooltip, box, breadcrumps, spinner
- 7184f6e: new components Menu and Upload. Changes to navbar, wordart, and others
- 9284929: Update index.tsx and README
- 4a633af: New changes to various components, AC, Menu, Popover, Skeleton, Avatar, Card
- bd9841f: New components: Pager and Terminal
- 072172b: New components: Skeleton, Divider. Fixed popover positions, update styles documentation
- bd9841f: visual distinction to the autocomplete component, updated background documentation, adjusted color for breadcrumbs, checkbox added optional label, navbar added ability to pass no links only logo, pager high customizations to color and look of font, skeleton new design for blink animation, slider better responsivness of tooltip and new thumb look, statistics adjusted for smaller screens to show entire content, text new variant "small", togglebutton better visuals for selected/active button, tooltip new option rounded, tree new color greyscale-dark
- ef936d9: New components: Table, Statistics, Radio. Fixes to Alert, Accordtion, Button, Card, Checkbox, Input, Slider, Skeleton, etc.
- 223a2dc: new components: Stepper, Badge, Group, ButtonGroup. Changes to existing components: Button, Chip, Carousel, Box

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
