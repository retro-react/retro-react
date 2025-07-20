import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { Spinner } from '../index';

const meta: Meta<typeof Spinner> = {
	title: 'Components/Spinner',
	component: Spinner,
	parameters: {
		docs: {
			description: {
				component:
					'Authentic Windows 3.1 style spinner components for loading states. Features classic loading indicators reminiscent of early Windows applications.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Spinner>;

const renderSpinner = (args: Story['args'], title: string) => (
	<Container
		sx={{
			background: '#c0c0c0',
			width: '300px',
			height: '150px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 3,
			padding: 3,
		}}
	>
		<Text
			sx={{
				fontFamily: 'MS Sans Serif, sans-serif',
				fontSize: '11px',
				fontWeight: 'bold',
			}}
		>
			{title}
		</Text>
		<Spinner {...args} />
		<Text sx={{ fontFamily: 'MS Sans Serif, sans-serif', fontSize: '11px' }}>
			Please wait...
		</Text>
	</Container>
);

export const HourglassSpinner: Story = {
	args: {
		variant: 'hourglass',
		size: 'medium',
	},
	render: (args) => renderSpinner(args, 'Loading Application'),
};

export const DotsSpinner: Story = {
	args: {
		variant: 'dots',
		size: 'medium',
	},
	render: (args) => renderSpinner(args, 'Processing...'),
};

export const BarsSpinner: Story = {
	args: {
		variant: 'bars',
		size: 'medium',
	},
	render: (args) => renderSpinner(args, 'Calculating Results'),
};

export const RotatingSpinner: Story = {
	args: {
		variant: 'rotating',
		size: 'medium',
	},
	render: (args) => renderSpinner(args, 'Accessing Drive C:'),
};

export const AllSizes: Story = {
	render: () => (
		<Container sx={{ background: '#c0c0c0', padding: 4 }}>
			<Text
				sx={{
					mb: 3,
					fontFamily: 'MS Sans Serif, sans-serif',
					fontSize: '11px',
					fontWeight: 'bold',
				}}
			>
				Spinner Size Comparison
			</Text>

			<div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
				<div style={{ textAlign: 'center' }}>
					<Text
						sx={{
							mb: 2,
							fontFamily: 'MS Sans Serif, sans-serif',
							fontSize: '11px',
						}}
					>
						Small
					</Text>
					<div
						style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}
					>
						<Spinner variant="hourglass" size="small" />
						<Spinner variant="dots" size="small" />
						<Spinner variant="bars" size="small" />
						<Spinner variant="rotating" size="small" />
					</div>
				</div>

				<div style={{ textAlign: 'center' }}>
					<Text
						sx={{
							mb: 2,
							fontFamily: 'MS Sans Serif, sans-serif',
							fontSize: '11px',
						}}
					>
						Medium
					</Text>
					<div
						style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}
					>
						<Spinner variant="hourglass" size="medium" />
						<Spinner variant="dots" size="medium" />
						<Spinner variant="bars" size="medium" />
						<Spinner variant="rotating" size="medium" />
					</div>
				</div>

				<div style={{ textAlign: 'center' }}>
					<Text
						sx={{
							mb: 2,
							fontFamily: 'MS Sans Serif, sans-serif',
							fontSize: '11px',
						}}
					>
						Large
					</Text>
					<div
						style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}
					>
						<Spinner variant="hourglass" size="large" />
						<Spinner variant="dots" size="large" />
						<Spinner variant="bars" size="large" />
						<Spinner variant="rotating" size="large" />
					</div>
				</div>
			</div>
		</Container>
	),
};

export const InContext: Story = {
	render: () => (
		<Container sx={{ background: '#c0c0c0', padding: 3 }}>
			<div
				style={{
					border: '2px inset #c0c0c0',
					padding: '15px',
					backgroundColor: '#ffffff',
					marginBottom: '20px',
				}}
			>
				<Text
					sx={{
						mb: 2,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Program Manager - File Manager
				</Text>
				<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
					<Spinner variant="hourglass" size="small" />
					<Text
						sx={{ fontFamily: 'MS Sans Serif, sans-serif', fontSize: '11px' }}
					>
						Copying files to C:\WINDOWS\SYSTEM...
					</Text>
				</div>
			</div>

			<div
				style={{
					border: '2px inset #c0c0c0',
					padding: '15px',
					backgroundColor: '#ffffff',
				}}
			>
				<Text
					sx={{
						mb: 2,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Calculator
				</Text>
				<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
					<Spinner variant="bars" size="small" />
					<Text
						sx={{ fontFamily: 'MS Sans Serif, sans-serif', fontSize: '11px' }}
					>
						Computing complex calculation...
					</Text>
				</div>
			</div>
		</Container>
	),
};
