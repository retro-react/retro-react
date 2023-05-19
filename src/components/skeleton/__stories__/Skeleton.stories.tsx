import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Skeleton } from '../index';

const meta: Meta<typeof Skeleton> = {
	title: 'Components/Skeleton',
	component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
	args: {
		height: '20px',
		color: 'greyscale',
		shape: 'rectangle',
		effect: 'blink',
		rounded: false,
	},
	render: (props) => (
		<Container fluid>
			<Skeleton {...props} />
			<Skeleton {...props} />
			<Skeleton {...props} />
		</Container>
	),
};
