import { create } from '@storybook/theming';
import { PRIMARY, SECONDARY } from '../src/constants/colors';

export default create({
	base: 'light', // or 'dark'

	// Color palette
	colorPrimary: PRIMARY,
	colorSecondary: SECONDARY,

	// UI
	appBg: 'white',
	appContentBg: 'white',
	appBorderColor: 'grey',
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: 'black',
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: 'white',
	barSelectedColor: 'silver',
	barBg: PRIMARY,

	// Form colors
	inputBg: 'white',
	inputBorder: 'silver',
	inputTextColor: 'black',
	inputBorderRadius: 4,

	brandTitle: 'Retro React',
	brandUrl: 'https://github.com/retro-react/retro-react',
	// brandImage: 'https://your-url.com/your-logo.png',
});
