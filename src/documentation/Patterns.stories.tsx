import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@src/components/box';

const meta: Meta<typeof Box> = {
	title: 'Overview/Retro Design Patterns',
	component: Box,
	parameters: {
		controls: { hideNoControlsWarning: true, disable: true },
		docs: {
			description: {
				component:
					'Authentic retro design patterns showcase the visual aesthetic of the react-retro library. These examples demonstrate the classic raised and sunken panel styles that define authentic vintage interfaces.',
			},
		},
	},
	argTypes: {
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
 * Raised Panel - Classic Windows raised look
 */
export const RaisedPanel: Story = {
	args: {
		variant: 'raised',
		children: 'Raised Panel - Classic raised appearance',
		style: { padding: '16px', margin: '8px' },
	},
	parameters: {
		docs: {
			description: {
				story:
					'The raised panel style creates a classic Windows-style elevated appearance.',
			},
		},
	},
};

/**
 * Sunken Panel - Classic Windows sunken look
 */
export const SunkenPanel: Story = {
	args: {
		variant: 'sunken',
		children: 'Sunken Panel - Classic sunken appearance',
		style: { padding: '16px', margin: '8px' },
	},
	parameters: {
		docs: {
			description: {
				story:
					'The sunken panel style creates a classic Windows-style recessed appearance.',
			},
		},
	},
};

/**
 * Flat Panel - Minimal modern look
 */
export const FlatPanel: Story = {
	args: {
		variant: 'flat',
		children: 'Flat Panel - Simple flat appearance',
		style: { padding: '16px', margin: '8px' },
	},
	parameters: {
		docs: {
			description: {
				story: 'The flat panel style provides a minimal, clean appearance.',
			},
		},
	},
};

/**
 * Panel Group - Multiple panels together
 */
export const PanelGroup: Story = {
	args: {
		variant: 'panel',
		children: 'Panel Group - Standard retro panel',
		style: { padding: '16px', margin: '8px' },
	},
	parameters: {
		docs: {
			description: {
				story:
					'The panel variant provides the standard retro-style container appearance.',
			},
		},
	},
};
