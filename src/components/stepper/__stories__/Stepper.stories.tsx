import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container } from '@src/components/container';
import { Stepper } from '../index';

const meta: Meta<typeof Stepper> = {
	title: 'Components/Stepper',
	component: Stepper,
	parameters: {
		docs: {
			description: {
				component: `
Authentic retro Stepper component with Windows 3.1 styling for step-by-step processes.

Features:
- Authentic Windows 3.1 button and panel styling with dithering texture
- Visual distinction between active, completed, and inactive steps
- Multiple retro variants (default, process, warning, success)
- Proper step connectors showing progress flow
- Optional step labels with authentic typography
- Check marks for completed steps
- Proper sizing and proportions for retro aesthetic
				`,
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'process', 'warning', 'success'],
		},
		activeStep: {
			control: { type: 'number', min: 0, max: 4 },
		},
		showLabels: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
	args: {
		variant: 'default',
		showLabels: true,
		activeStep: 2,
		steps: [
			'Select Service',
			'Choose Time',
			'Pick Stylist',
			'Confirm Booking',
			'Payment',
		],
	},
	render: (args) => (
		<Container sx={{ width: '100%', maxWidth: '800px' }}>
			<Stepper {...args} />
		</Container>
	),
};

export const Process: Story = {
	args: {
		variant: 'process',
		showLabels: true,
		activeStep: 1,
		steps: ['Initialize', 'Processing', 'Validating', 'Complete'],
	},
	render: (args) => (
		<Container sx={{ width: '100%', maxWidth: '600px' }}>
			<Stepper {...args} />
		</Container>
	),
};

export const Warning: Story = {
	args: {
		variant: 'warning',
		showLabels: true,
		activeStep: 2,
		steps: ['Warning Detected', 'Analysis', 'Action Required', 'Resolution'],
	},
	render: (args) => (
		<Container sx={{ width: '100%', maxWidth: '600px' }}>
			<Stepper {...args} />
		</Container>
	),
};

export const Success: Story = {
	args: {
		variant: 'success',
		showLabels: true,
		activeStep: 3,
		steps: ['Start', 'Progress', 'Success', 'Complete'],
	},
	render: (args) => (
		<Container sx={{ width: '100%', maxWidth: '500px' }}>
			<Stepper {...args} />
		</Container>
	),
};

export const WithoutLabels: Story = {
	args: {
		variant: 'default',
		showLabels: false,
		activeStep: 2,
		steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
	},
	render: (args) => (
		<Container sx={{ width: '100%', maxWidth: '400px' }}>
			<Stepper {...args} />
		</Container>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Stepper without labels, showing only numbered steps and connectors.',
			},
		},
	},
};

export const AllVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '12px',
						margin: '0 0 1rem',
					}}
				>
					Default
				</h3>
				<Stepper
					variant="default"
					activeStep={1}
					steps={['Start', 'Process', 'Complete']}
				/>
			</div>
			<div>
				<h3
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '12px',
						margin: '0 0 1rem',
					}}
				>
					Process
				</h3>
				<Stepper
					variant="process"
					activeStep={2}
					steps={['Init', 'Run', 'Done']}
				/>
			</div>
			<div>
				<h3
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '12px',
						margin: '0 0 1rem',
					}}
				>
					Warning
				</h3>
				<Stepper
					variant="warning"
					activeStep={1}
					steps={['Alert', 'Review', 'Fix']}
				/>
			</div>
			<div>
				<h3
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '12px',
						margin: '0 0 1rem',
					}}
				>
					Success
				</h3>
				<Stepper
					variant="success"
					activeStep={2}
					steps={['Begin', 'Progress', 'Success']}
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All available stepper variants showcasing different authentic retro color schemes.',
			},
		},
	},
};

export const InteractiveDemo: Story = {
	render: () => {
		const [activeStep, setActiveStep] = React.useState(0);
		const [variant, setVariant] = React.useState<
			'default' | 'process' | 'warning' | 'success'
		>('default');

		const steps = ['Welcome', 'Setup', 'Configuration', 'Review', 'Complete'];

		const nextStep = () => {
			setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
		};

		const prevStep = () => {
			setActiveStep((prev) => Math.max(prev - 1, 0));
		};

		const reset = () => {
			setActiveStep(0);
		};

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
					padding: '2rem',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						gap: '0.5rem',
						marginBottom: '1rem',
					}}
				>
					{(['default', 'process', 'warning', 'success'] as const).map((v) => (
						<button
							key={v}
							onClick={() => setVariant(v)}
							style={{
								padding: '6px 12px',
								background: variant === v ? '#000080' : '#c0c0c0',
								color: variant === v ? 'white' : 'black',
								border: '2px solid',
								borderColor:
									variant === v
										? '#ffffff #808080 #808080 #ffffff'
										: '#ffffff #808080 #808080 #ffffff',
								fontFamily: 'MS Sans Serif',
								fontSize: '11px',
								cursor: 'pointer',
							}}
						>
							{v.toUpperCase()}
						</button>
					))}
				</div>

				<Container sx={{ width: '100%', maxWidth: '700px' }}>
					<Stepper variant={variant} activeStep={activeStep} steps={steps} />
				</Container>

				<div
					style={{
						display: 'flex',
						gap: '1rem',
						marginTop: '2rem',
					}}
				>
					<button
						onClick={prevStep}
						disabled={activeStep === 0}
						style={{
							padding: '8px 16px',
							background: activeStep === 0 ? '#808080' : '#c0c0c0',
							color: activeStep === 0 ? '#c0c0c0' : 'black',
							border: '2px solid',
							borderColor: '#ffffff #808080 #808080 #ffffff',
							fontFamily: 'MS Sans Serif',
							fontSize: '11px',
							cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
						}}
					>
						◀ Previous
					</button>
					<button
						onClick={nextStep}
						disabled={activeStep === steps.length - 1}
						style={{
							padding: '8px 16px',
							background:
								activeStep === steps.length - 1 ? '#808080' : '#c0c0c0',
							color: activeStep === steps.length - 1 ? '#c0c0c0' : 'black',
							border: '2px solid',
							borderColor: '#ffffff #808080 #808080 #ffffff',
							fontFamily: 'MS Sans Serif',
							fontSize: '11px',
							cursor:
								activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
						}}
					>
						Next ▶
					</button>
					<button
						onClick={reset}
						style={{
							padding: '8px 16px',
							background: '#c0c0c0',
							color: 'black',
							border: '2px solid',
							borderColor: '#ffffff #808080 #808080 #ffffff',
							fontFamily: 'MS Sans Serif',
							fontSize: '11px',
							cursor: 'pointer',
						}}
					>
						Reset
					</button>
				</div>

				<p
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
						textAlign: 'center',
						margin: '1rem 0 0',
						color: '#666',
						maxWidth: '500px',
					}}
				>
					Use the variant buttons above to switch styles, and the navigation
					buttons to control the active step. Notice how completed steps show
					check marks and the connectors change color to show progress.
				</p>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive demo allowing you to test stepper variants and navigation functionality.',
			},
		},
	},
};
