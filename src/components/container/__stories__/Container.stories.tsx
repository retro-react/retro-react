import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../index';

const meta: Meta<typeof Container> = {
	title: 'Layout/Container',
	component: Container,
	argTypes: {
		fluid: {
			description:
				'When true, the container spans 100% width instead of being constrained to 1024px.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
	args: {
		fluid: false,
		sx: { background: '#e5e5e5', p: 3 },
		children: 'Centered content with max-width 1024px.',
	},
};

export const Fluid: Story = {
	args: {
		fluid: true,
		sx: { background: '#e5e5e5', p: 3 },
		children: 'Fluid container — spans the full available width.',
	},
};
