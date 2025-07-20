import {
	CRT_GREEN,
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	VGA_BLACK,
	VGA_DARK_GRAY,
	VGA_LIGHT_GRAY,
	VGA_WHITE,
	WARN,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';

export default {
	colors: {
		primary: PRIMARY, // VGA Cyan
		secondary: SECONDARY, // VGA Magenta
		success: SUCCESS, // CRT Green
		error: ERROR, // VGA Red
		warn: WARN, // VGA Yellow
		text: VGA_BLACK, // Pure black for text
		greyscale: WIN31_BUTTON_FACE, // Windows 3.1 button face
		'greyscale-dark': WIN31_BUTTON_SHADOW,
		none: 'transparent',
	},
	shades: {
		shade1: VGA_WHITE,
		shade2: VGA_LIGHT_GRAY,
		shade3: WIN31_BUTTON_FACE,
		shade4: WIN31_BUTTON_SHADOW,
		shade5: VGA_DARK_GRAY,
		shade6: VGA_BLACK,
	},
	gui: {
		buttonFace: WIN31_BUTTON_FACE,
		buttonShadow: WIN31_BUTTON_SHADOW,
		buttonHighlight: WIN31_BUTTON_HIGHLIGHT,
		windowBackground: WIN31_BUTTON_FACE,
	},
	terminal: {
		background: VGA_BLACK,
		foreground: CRT_GREEN,
	},
};
