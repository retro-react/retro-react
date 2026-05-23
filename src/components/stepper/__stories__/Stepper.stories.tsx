import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../../../components/container';
import { Stepper } from '../index';

const meta: Meta<typeof Stepper> = {
	title: 'Components/Stepper',
	component: Stepper,
	parameters: {
		docs: {
			description: {
				component:
					'Step-by-step progress indicator with Windows 3.1 styling, used to visualize multi-step flows such as checkout, onboarding or wizards.',
			},
		},
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'process', 'warning', 'success'],
			description:
				'Visual treatment for the step state colors (e.g. process is blue, warning is red).',
		},
		activeStep: {
			control: { type: 'number', min: 0, max: 4 },
			description:
				'Zero-based index of the current step. Steps before it are marked completed.',
		},
		showLabels: {
			control: 'boolean',
			description: 'Show the step text underneath each circle.',
		},
		steps: {
			description: 'Ordered list of step labels.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const checkoutSteps = ['Cart', 'Address', 'Payment', 'Confirm'];

export const Default: Story = {
	args: {
		variant: 'default',
		showLabels: true,
		activeStep: 1,
		steps: checkoutSteps,
	},
	render: (args) => (
		<Container sx={{ width: '100%', maxWidth: 700 }}>
			<Stepper {...args} />
		</Container>
	),
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
			<Stepper
				variant="default"
				activeStep={1}
				steps={['Cart', 'Address', 'Payment', 'Confirm']}
			/>
			<Stepper
				variant="process"
				activeStep={2}
				steps={['Queued', 'Building', 'Deploying', 'Live']}
			/>
			<Stepper
				variant="warning"
				activeStep={1}
				steps={['Detected', 'Review', 'Mitigate', 'Resolved']}
			/>
			<Stepper
				variant="success"
				activeStep={3}
				steps={['Upload', 'Scan', 'Verify', 'Done']}
			/>
		</div>
	),
};

export const WithoutLabels: Story = {
	args: {
		variant: 'default',
		showLabels: false,
		activeStep: 2,
		steps: ['1', '2', '3', '4', '5'],
	},
	render: (args) => (
		<Container sx={{ width: '100%', maxWidth: 400 }}>
			<Stepper {...args} />
		</Container>
	),
};
