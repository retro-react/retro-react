import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: 'White',
		values: [
			{ name: 'White', value: '#ffffff' },
			{ name: 'Win95 grey', value: '#c0c0c0' },
			{ name: 'Win95 navy', value: '#000080' },
			{ name: 'CRT black', value: '#000000' },
			{ name: 'Terminal green', value: '#002200' },
			{ name: 'Amber', value: '#221100' },
		],
	},
	options: {
		storySort: {
			order: [
				'Overview',
				['Introduction', 'Retro Components', 'Retro Design Patterns', 'Global Styles'],
				'Layout',
				'Data Display',
				'Forms',
				'Components',
				'Experimental',
				'CSS',
				['General'],
			],
		},
	},
};
