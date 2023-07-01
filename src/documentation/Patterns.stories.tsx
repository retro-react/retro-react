import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@src/components/box';

const meta: Meta<typeof Box> = {
	title: 'Overview/Patterns',
	component: Box,
	parameters: {
		controls: { hideNoControlsWarning: true, disable: true },
		docs: {
			description: {
				component:
					'Almost every component has a `pattern` prop that you can use to apply a background pattern to it. This is useful to create a visual hierarchy between components. You can use the `color` prop to change the color of the pattern.',
			},
		},
	},
	argTypes: {
		color: {
			table: {
				disable: true,
			},
		},

		sx: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Box>;

/**
 * Noise Pattern
 */
export const Noise: Story = {
	args: {
		pattern: 'noise',
		children: 'This is a noise pattern',
		color: '#9DB2BF',
	},
	parameters: {
		docs: {
			description: {
				story: 'The Noise pattern provides a dense, grungy texture.',
			},
		},
	},
};

/**
 * Dots Pattern
 */
export const Dots: Story = {
	args: {
		pattern: 'dots',
		children: 'This is a dots pattern',
		color: '#9DB2BF',
	},
	parameters: {
		docs: {
			description: {
				story: 'The Dots pattern displays a regular arrangement of circles.',
			},
		},
	},
};

/**
 * Stars Pattern
 */
export const Stars: Story = {
	args: {
		pattern: 'stars',
		children: 'This is a stars pattern',
		color: '#9DB2BF',
	},
	parameters: {
		docs: {
			description: {
				story: 'The Stars pattern shines with a celestial theme.',
			},
		},
	},
};

/**
 * Stripes Pattern
 */
export const Stripes: Story = {
	args: {
		pattern: 'stripes',
		children: 'This is a stripes pattern',
		color: '#9DB2BF',
	},
	parameters: {
		docs: {
			description: {
				story: 'The Stripes pattern features a classic, linear design.',
			},
		},
	},
};
