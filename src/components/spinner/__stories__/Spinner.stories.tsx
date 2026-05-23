import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../index';

const meta: Meta<typeof Spinner> = {
	title: 'Components/Spinner',
	component: Spinner,
	parameters: {
		docs: {
			description: {
				component: 'Authentic Windows 3.1 style spinner for loading states.',
			},
		},
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['hourglass', 'dots', 'bars', 'rotating'],
			description: 'Visual style of the loading indicator.',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Overall size of the spinner.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
	args: {
		variant: 'hourglass',
		size: 'medium',
	},
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
			<Spinner variant="hourglass" />
			<Spinner variant="dots" />
			<Spinner variant="bars" />
			<Spinner variant="rotating" />
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
			<Spinner variant="hourglass" size="small" />
			<Spinner variant="hourglass" size="medium" />
			<Spinner variant="hourglass" size="large" />
		</div>
	),
};
