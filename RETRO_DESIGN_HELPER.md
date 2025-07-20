# Retro UI Design Helper

**Quick reference for maintaining authentic retro styling across all components.**

## 🎯 Core Design Patterns

### Borders & Elevation

- **Raised**: `border-color: #ffffff #808080 #808080 #ffffff` (light top/left, dark bottom/right)
- **Sunken**: `border-color: #808080 #ffffff #ffffff #808080` (dark top/left, light bottom/right)
- **Always 2px borders** for authentic feel

### Essential Colors

- **Background**: `#c0c0c0` (classic gray)
- **Text**: `#000000` (black)
- **Highlight**: `#0000ff` (blue selections)
- **Disabled**: `#808080` (medium gray)

### Typography

- **Primary**: `'MS Sans Serif', sans-serif` at `11px`
- **Monospace**: `'Courier New', monospace` for terminals

### Key Effects

- **Dithering**: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0); background-size: 2px 2px`
- **Focus**: `outline: 1px dotted #000000`
- **Images**: `image-rendering: pixelated`

## ✅ Component Status

**COMPLETED** (authentic retro styling, props cleaned):
Input, Autocomplete, Button, Tabs, Modal, Popover, Skeleton, Carousel, Radio, ProgressBar, Spinner, Menu, Card, CRT, Breadcrumbs, Accordion, Select, Slider, PasswordInput, Box, Chip, Tooltip, TypewriterText, WordArt, Pager, Stepper, Tree, Navbar

**Key Changes**: Removed `color`/`pattern`/`rounded` props, hardcoded retro styling, enhanced accessibility, added consistent variant system (classic/filled/outlined/terminal for inputs, raised/sunken/flat/panel for containers, default/help/warning/info for tooltips, default/terminal/retro/amber for pager, default/process/warning/success for stepper, default/file-manager/explorer for tree, default/menu-bar/status-bar for navbar), improved fluid interactions, differentiated chips from buttons, **fixed tooltip positioning with proper getBoundingClientRect() usage and fixed positioning**, **completely rewrote TypewriterText with fluid repeat functionality, proper cleanup, blinking cursor, configurable speeds, and eliminated flickering**, **refactored WordArt with authentic retro text effects including beveled, shadowed, outlined, retro3d, pixelated, rainbow, wavy, curved, arch, and extruded styles using hardcoded retro colors**, **refactored Pager with authentic 80s/90s beeper styling, LCD display with scanlines, multiple color variants (default/terminal/retro/amber), retro button layout, and period-appropriate animations**, **refactored Stepper with authentic Windows 3.1 styling, proper raised/sunken borders, dithering texture, visual distinction between active/completed/inactive steps with check marks, and multiple retro variants with proper color coding**, **refactored Tree with authentic Windows 3.1 File Manager/Explorer styling, classic expand/collapse buttons, file/folder icons, selection states, proper indentation, retro scrollbars, and sunken panel effects**, **refactored Navbar with authentic Windows 3.1 application/menu/status bar styling, removed hamburger icons in favor of text-based mobile navigation, authentic button behaviors, and period-appropriate color schemes**

## 🚫 Anti-Patterns to Avoid

- ❌ Rounded corners (`border-radius > 0`)
- ❌ Modern gradients/shadows
- ❌ Color theming props
- ❌ System fonts (use MS Sans Serif)
- ❌ Smooth animations (use stepped/pixelated)

## ⚡ Quick Checklist

1. ✅ Compiles without errors
2. ✅ No unused props in interfaces
3. ✅ Stories showcase retro styling
4. ✅ Responsive design works
5. ✅ Focus states visible
6. ✅ Authentic color scheme maintained

## � Story Guidelines

**Keep stories focused and minimal:**

- ✅ **Basic** - Core functionality
- ✅ **WithStates** - Multiple states in one story (loading, disabled, etc.)
- ✅ **Interactive** - Callbacks and user interaction
- ✅ **CustomVariants** - Different configurations
- ❌ Don't create separate stories for each minor variation
- ❌ Avoid redundant examples that show the same thing

## �🔧 Common Patterns

### Authentic WIN31 Styling

```css
border: 2px inset/outset;
font-family: 'MS Sans Serif', sans-serif;
background: #c0c0c0;
border-radius: 0;
```

### WordArt Retro Effects

```css
/* Beveled text effect */
text-shadow: 1px 1px 0px #ffffff, 2px 2px 0px #c0c0c0, 3px 3px 0px #808080, 4px
		4px 2px rgba(0, 0, 0, 0.6);

/* Pixelated text */
image-rendering: pixelated;
font-family: 'Courier New', monospace;
```

### Responsive Breakpoints

```css
@media (max-width: 768px) {
	/* Mobile */
}
@media (max-width: 480px) {
	/* Small mobile */
}
```

## 🛠️ Quick Commands

**Search prop usage**: `grep -r "propName" src/`  
**Build**: `npm run build`
