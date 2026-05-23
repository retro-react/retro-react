import { create } from '@storybook/theming';
import {
	PRIMARY,
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../src/constants/colors';

export default create({
	base: 'light',

	colorPrimary: PRIMARY,
	colorSecondary: PRIMARY,

	// Light chrome, navy accents
	appBg: VGA_WHITE,
	appContentBg: VGA_WHITE,
	appBorderColor: WIN31_BUTTON_SHADOW,
	appBorderRadius: 0,

	// Title bar — classic Win95 navy
	barBg: PRIMARY,
	barTextColor: VGA_WHITE,
	barSelectedColor: VGA_WHITE,
	barHoverColor: '#3030c0',

	// Typography
	fontBase:
		'"MS Sans Serif", "Tahoma", "Geneva", "Verdana", sans-serif',
	fontCode: '"Courier New", "Consolas", "Monaco", monospace',

	textColor: VGA_BLACK,
	textInverseColor: VGA_WHITE,
	textMutedColor: WIN31_BUTTON_SHADOW,

	// Form fields — sunken Win95 style
	inputBg: VGA_WHITE,
	inputBorder: WIN31_BUTTON_SHADOW,
	inputTextColor: VGA_BLACK,
	inputBorderRadius: 0,

	// Buttons in toolbar
	buttonBg: WIN31_BUTTON_FACE,
	buttonBorder: WIN31_BUTTON_SHADOW,
	booleanBg: WIN31_BUTTON_FACE,
	booleanSelectedBg: PRIMARY,

	brandTitle: 'Retro React',
	brandUrl: 'https://github.com/retro-react/retro-react',
	brandTarget: '_self',
});
