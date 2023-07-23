import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'theme-ui';
import { Divider } from '../index';

const meta: Meta<typeof Divider> = {
	title: 'Components/Divider',
	component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Basic: Story = {
	args: {
		color: 'rainbow',
		orientation: 'horizontal',
		flexItem: false,
	},
	render: (args) => (
		<div>
			<p>Yesterday was a good day.</p>
			<Divider {...args} />
			<p>Today is a good day.</p>
			<Divider {...args} />
			<p>Tomorrow will be a good day.</p>
			<Divider {...args} />
			<p>Another day will be a good day.</p>
		</div>
	),
};

/**
 * Used with Flexbox to create a vertical divider.
 */
export const Vertical: Story = {
	name: 'Vertical Divider',
	args: {
		color: 'rainbow',
		orientation: 'vertical',
		flexItem: true,
	},
	render: (args) => (
		<Flex
			sx={{
				width: '100%',
				height: '200px',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div style={{ padding: '20px' }}>Content on the left</div>
			<Divider {...args} />
			<div style={{ padding: '20px' }}>Content on the right</div>
		</Flex>
	),
};
