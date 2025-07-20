import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Button } from '@src/components/button';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { ProgressBar } from '../index';

const meta: Meta<typeof ProgressBar> = {
	title: 'Components/ProgressBar',
	component: ProgressBar,
	parameters: {
		docs: {
			description: {
				component:
					'Authentic Windows 3.1 style progress bar with classic inset border and diagonal stripe pattern. Features the iconic "barber pole" animation.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Basic: Story = {
	args: {
		value: 65,
		animated: false,
	},
	render: (args) => {
		return (
			<Container sx={{ background: '#c0c0c0', padding: 3 }}>
				<Text
					sx={{
						mb: 2,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					File Download Progress
				</Text>
				<div style={{ width: '300px', height: '20px' }}>
					<ProgressBar {...args} />
				</div>
				<Text
					sx={{
						mt: 2,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
					}}
				>
					{args.value}% Complete
				</Text>
			</Container>
		);
	},
};

export const Animated: Story = {
	args: {
		value: 45,
		animated: true,
	},
	render: (args) => {
		return (
			<Container sx={{ background: '#c0c0c0', padding: 3 }}>
				<Text
					sx={{
						mb: 2,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Installing Program Manager... (Animated)
				</Text>
				<div style={{ width: '350px', height: '20px' }}>
					<ProgressBar {...args} />
				</div>
				<Text
					sx={{
						mt: 2,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
					}}
				>
					{args.value}% Complete - Please wait...
				</Text>
			</Container>
		);
	},
};

export const VariousValues: Story = {
	render: () => {
		return (
			<Container sx={{ background: '#c0c0c0', padding: 3 }}>
				<Text
					sx={{
						mb: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Progress Bar Examples
				</Text>

				<div style={{ marginBottom: '20px' }}>
					<Text
						sx={{
							mb: 1,
							fontFamily: 'MS Sans Serif, sans-serif',
							fontSize: '11px',
						}}
					>
						Empty (0%)
					</Text>
					<div style={{ width: '250px', height: '20px' }}>
						<ProgressBar value={0} />
					</div>
				</div>

				<div style={{ marginBottom: '20px' }}>
					<Text
						sx={{
							mb: 1,
							fontFamily: 'MS Sans Serif, sans-serif',
							fontSize: '11px',
						}}
					>
						Quarter (25%)
					</Text>
					<div style={{ width: '250px', height: '20px' }}>
						<ProgressBar value={25} />
					</div>
				</div>

				<div style={{ marginBottom: '20px' }}>
					<Text
						sx={{
							mb: 1,
							fontFamily: 'MS Sans Serif, sans-serif',
							fontSize: '11px',
						}}
					>
						Half (50%)
					</Text>
					<div style={{ width: '250px', height: '20px' }}>
						<ProgressBar value={50} />
					</div>
				</div>

				<div style={{ marginBottom: '20px' }}>
					<Text
						sx={{
							mb: 1,
							fontFamily: 'MS Sans Serif, sans-serif',
							fontSize: '11px',
						}}
					>
						Three Quarters (75%)
					</Text>
					<div style={{ width: '250px', height: '20px' }}>
						<ProgressBar value={75} />
					</div>
				</div>

				<div style={{ marginBottom: '20px' }}>
					<Text
						sx={{
							mb: 1,
							fontFamily: 'MS Sans Serif, sans-serif',
							fontSize: '11px',
						}}
					>
						Complete (100%)
					</Text>
					<div style={{ width: '250px', height: '20px' }}>
						<ProgressBar value={100} />
					</div>
				</div>
			</Container>
		);
	},
};

export const InteractiveDemo: Story = {
	render: () => {
		const [progress, setProgress] = useState(0);
		const [isRunning, setIsRunning] = useState(false);

		useEffect(() => {
			let interval: NodeJS.Timeout | null = null;

			if (isRunning && progress < 100) {
				interval = setInterval(() => {
					setProgress((prev) => {
						const next = prev + 1;
						if (next >= 100) {
							setIsRunning(false);
							return 100;
						}
						return next;
					});
				}, 50);
			}

			return () => {
				if (interval) clearInterval(interval);
			};
		}, [isRunning, progress]);

		const handleStart = () => {
			if (progress >= 100) {
				setProgress(0);
			}
			setIsRunning(true);
		};

		const handleStop = () => {
			setIsRunning(false);
		};

		const handleReset = () => {
			setProgress(0);
			setIsRunning(false);
		};

		return (
			<Container sx={{ background: '#c0c0c0', padding: 3 }}>
				<Text
					sx={{
						mb: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					File Copy Operation - Enhanced Animation
				</Text>

				<div style={{ width: '400px', height: '20px', marginBottom: '15px' }}>
					<ProgressBar value={progress} animated={isRunning} />
				</div>

				<Text
					sx={{
						mb: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
					}}
				>
					Copying files... {progress}% complete
				</Text>

				<div style={{ display: 'flex', gap: '8px' }}>
					<Button onClick={handleStart} disabled={isRunning}>
						{progress >= 100 ? 'Restart' : 'Start'}
					</Button>
					<Button onClick={handleStop} disabled={!isRunning}>
						Pause
					</Button>
					<Button onClick={handleReset}>Reset</Button>
				</div>
			</Container>
		);
	},
};
