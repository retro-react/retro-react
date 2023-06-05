import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Stepper } from '../index';

const meta: Meta<typeof Stepper> = {
	title: 'Experimental/Stepper',
	component: Stepper,
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Basic: Story = {
	args: {
		color: 'primary',
		showLabels: true,
		activeStep: 2,
		steps: [
			'Please select a service',
			'Please select a time',
			'Please select a stylist',
			'Done',
		],
	},
	render: (args) => (
		<Container
			sx={{
				width: '500px',
			}}
		>
			<Stepper {...args} />
		</Container>
	),
};
