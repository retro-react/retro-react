// Base colors
export const BLACK = '#000000';
export const WHITE = '#ffffff';

// VGA 16-Color Palette (Authentic 1980s-90s) - Used colors only
export const VGA_BLACK = '#000000';
export const VGA_BLUE = '#0000AA';
export const VGA_GREEN = '#00AA00';
export const VGA_CYAN = '#00AAAA';
export const VGA_RED = '#AA0000';
export const VGA_MAGENTA = '#AA00AA';
export const VGA_LIGHT_GRAY = '#AAAAAA';
export const VGA_DARK_GRAY = '#555555';
export const VGA_YELLOW = '#FFFF55';
export const VGA_WHITE = '#FFFFFF';

// CRT Monitor Colors (Used colors only)
export const CRT_GREEN = '#00FF41'; // Classic terminal green
export const CRT_SCAN_LINE = '#002200'; // Dark green for scanlines

// 80s Neon/Miami Vice Palette (Used colors only)
export const NEON_PINK = '#FF1493';
export const NEON_CYAN = '#00FFFF';
export const NEON_PURPLE = '#8A2BE2';
export const NEON_LIME = '#32CD32';
export const ELECTRIC_BLUE = '#0080FF';
export const HOT_MAGENTA = '#FF00FF';

// Early GUI Colors (Windows 3.1, Mac System 7 era)
export const WIN31_BUTTON_FACE = '#C0C0C0';
export const WIN31_BUTTON_SHADOW = '#808080';
export const WIN31_BUTTON_HIGHLIGHT = '#FFFFFF';
export const WIN31_BLUE = '#000080';

// Retro schemes (using authentic retro colors)
export const PRIMARY = WIN31_BLUE; // Classic Windows blue
export const SECONDARY = VGA_MAGENTA; // Classic magenta
export const SUCCESS = CRT_GREEN; // Terminal green
export const ERROR = VGA_RED; // Classic red
export const WARN = VGA_YELLOW; // Classic yellow
export const HIGHLIGHT = NEON_PINK; // 80s highlight

// Retro shades (based on VGA palette) - Only used shades
export const SHADE_1 = VGA_WHITE;
export const SHADE_2 = VGA_LIGHT_GRAY;
export const SHADE_3 = VGA_DARK_GRAY;
export const SHADE_4 = '#444444';
export const SHADE_5 = '#333333';
export const SHADE_6 = VGA_BLACK;

// Gradients using authentic retro colors
export const RAINBOW_GRADIENT = [
	VGA_RED,
	VGA_YELLOW,
	VGA_GREEN,
	VGA_CYAN,
	VGA_BLUE,
	VGA_MAGENTA,
];

export const NEON_GRADIENT = [
	NEON_PINK,
	HOT_MAGENTA,
	NEON_PURPLE,
	ELECTRIC_BLUE,
	NEON_CYAN,
	NEON_LIME,
];

export const RETRO_GRADIENT = [
	VGA_RED,
	VGA_YELLOW,
	VGA_GREEN,
	VGA_CYAN,
	VGA_BLUE,
	VGA_MAGENTA,
];

export const PASTEL_GRADIENT = [
	'#ff6666',
	'#ffcc66',
	'#ffff66',
	'#ccff66',
	'#66ff66',
	'#66ffcc',
	'#66ffff',
	'#66ccff',
	'#6666ff',
	'#cc66ff',
	'#ff66ff',
	'#ff66cc',
];

export const GRAYSCALE_GRADIENT = [
	'#000000',
	'#333333',
	'#666666',
	'#999999',
	'#cccccc',
	'#eeeeee',
];
