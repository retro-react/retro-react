// Authentic retro font stacks prioritizing period-accurate fonts

// DOS/Terminal Era Fonts (1980s-early 90s)
export const DOS_FONT = `
  'Perfect DOS VGA 437', 
  'MS-DOS', 
  'Courier New', 
  'Courier', 
  monospace
`;

// Early GUI Fonts (Windows 3.1, Mac System 7 era)
export const SYSTEM_FONT = `
  'MS Sans Serif', 
  'Chicago', 
  'Geneva', 
  'Helvetica', 
  sans-serif
`;

// Classic Terminal/Console Fonts
export const TERMINAL_FONT = `
  'Consolas', 
  'Monaco', 
  'Lucida Console', 
  'Liberation Mono', 
  'DejaVu Sans Mono', 
  'Courier New', 
  monospace
`;

// Retro Display Fonts (for headers/titles)
export const DISPLAY_FONT = `
  'OCR A Std', 
  'Orbitron', 
  'Space Mono', 
  'Courier New', 
  monospace
`;

// 80s/90s Sans Serif (chunky, geometric)
export const RETRO_SANS = `
  'Orbitron', 
  'Exo 2', 
  'Rajdhani', 
  'Arial Black', 
  'Impact', 
  sans-serif
`;

// Pixel/Bitmap style fonts
export const PIXEL_FONT = `
  'Press Start 2P', 
  '04b_03', 
  'Silkscreen', 
  'Courier New', 
  monospace
`;

// Default retro body font (readable but period-appropriate)
export const BODY_FONT = `
  'MS Sans Serif', 
  'Tahoma', 
  'Verdana', 
  sans-serif
`;

// CRT/Monitor style fonts
export const CRT_FONT = `
  'VT323', 
  'Share Tech Mono', 
  'Courier New', 
  monospace
`;

// Font sizes that feel authentically chunky/pixelated
export const FONT_SIZES = {
	TINY: '8px', // Authentic tiny bitmap text
	SMALL: '11px', // Standard small GUI text
	NORMAL: '12px', // Standard GUI text size
	MEDIUM: '14px', // Larger GUI elements
	LARGE: '16px', // Headers
	XLARGE: '20px', // Large headers
	DISPLAY: '24px', // Display text
	GIANT: '32px', // Large display
};

// Font weights that were available in retro era
export const FONT_WEIGHTS = {
	NORMAL: 400,
	BOLD: 700, // Bold was often all that was available
	// No thin/light weights - they didn't exist in early computing
};
