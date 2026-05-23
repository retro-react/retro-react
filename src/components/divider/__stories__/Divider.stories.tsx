import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'theme-ui';
import { Divider } from '../index';

const meta: Meta<typeof Divider> = {
	title: 'Components/Divider',
	component: Divider,
	argTypes: {
		color: {
			description:
				'Gradient or solid color token. Pass `rainbow` for the multi-stop gradient.',
		},
		orientation: {
			control: { type: 'radio' },
			options: ['horizontal', 'vertical'],
			description: 'Layout axis of the divider.',
		},
		flexItem: {
			description:
				'Set to true when used as a child of a flex container so the divider stretches to fill the cross axis.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
	args: {
		color: 'primary',
		orientation: 'horizontal',
	},
	render: (args) => (
		<div>
			<p>Section one, introductory copy.</p>
			<Divider {...args} />
			<p>Section two, more content below.</p>
		</div>
	),
};

export const Vertical: Story = {
	args: {
		color: 'primary',
		orientation: 'vertical',
		flexItem: true,
	},
	render: (args) => (
		<Flex sx={{ height: 120, alignItems: 'center' }}>
			<div style={{ padding: 16 }}>Left</div>
			<Divider {...args} />
			<div style={{ padding: 16 }}>Right</div>
		</Flex>
	),
};

export const Rainbow: Story = {
	args: {
		color: 'rainbow',
		orientation: 'horizontal',
	},
	render: (args) => (
		<div>
			<p>Section one, introductory copy.</p>
			<Divider {...args} />
			<p>Section two, more content below.</p>
		</div>
	),
};
