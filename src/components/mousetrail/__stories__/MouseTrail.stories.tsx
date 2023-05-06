import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { MouseTrail } from '../index';

const meta: Meta<typeof MouseTrail> = {
	title: 'Components/MouseTrail',
	component: MouseTrail,
};

export default meta;
type Story = StoryObj<typeof MouseTrail>;

export const Basic: Story = {
	args: {
		particleSize: 5,
		particleColor: 'rainbow',
		offset: { x: 5, y: 15 },
	},
	render: (args) => (
		<Container
			sx={{
				height: '500px',
				width: '500px',
				border: '1px solid black',
			}}
		>
			<MouseTrail {...args} />
		</Container>
	),
};
