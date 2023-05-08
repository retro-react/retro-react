import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Spinner } from '../index';

const meta: Meta<typeof Spinner> = {
	title: 'Components/Spinner',
	component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

const renderSpinner = (args: Story['args']) => (
	<Container
		sx={{
			width: '500px',
			height: '500px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		<Spinner {...args} />
	</Container>
);

export const CircleSpinner: Story = {
	args: {
		color: 'rainbow',
		shape: 'circle',
		size: 'medium',
	},
	render: renderSpinner,
};

export const SquareSpinner: Story = {
	args: {
		color: 'primary',
		shape: 'square',
		size: 'medium',
	},
	render: renderSpinner,
};

export const StarSpinner: Story = {
	args: {
		color: 'primary',
		shape: 'star',
		size: 'medium',
	},
	render: renderSpinner,
};

export const DiamondSpinner: Story = {
	args: {
		color: 'primary',
		shape: 'diamond',
		size: 'medium',
	},
	render: renderSpinner,
};
