---
"retro-react": minor
---

🎨 Major retro refactoring for authentic Windows 95/98 aesthetics

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
