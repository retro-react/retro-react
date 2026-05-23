import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Button } from '../../../components/button';
import { Text } from '../../../components/text';
import { ProgressBar } from '../index';

const meta: Meta<typeof ProgressBar> = {
	title: 'Components/ProgressBar',
	component: ProgressBar,
	parameters: {
		docs: {
			description: {
				component:
					'Windows 3.1 style progress bar with an inset border and diagonal stripe fill. Set `animated` for the classic "barber pole" effect.',
			},
		},
	},
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
			description: 'Progress value (0-100).',
		},
		animated: {
			control: { type: 'boolean' },
			description: 'Enable the barber-pole stripe animation.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

const label = { fontFamily: 'MS Sans Serif, sans-serif', fontSize: '11px' };

export const Default: Story = {
	args: { value: 65, animated: false },
	render: (args) => (
		<div style={{ width: 320 }}>
			<Text sx={{ ...label, mb: 2, fontWeight: 'bold' }}>
				File Download Progress
			</Text>
			<ProgressBar {...args} />
			<Text sx={{ ...label, mt: 2 }}>{args.value}% complete</Text>
		</div>
	),
};

export const Animated: Story = {
	args: { value: 45, animated: true },
	render: (args) => (
		<div style={{ width: 320 }}>
			<Text sx={{ ...label, mb: 2, fontWeight: 'bold' }}>
				Installing Program Manager...
			</Text>
			<ProgressBar {...args} />
		</div>
	),
};

export const Steps: Story = {
	render: () => (
		<div
			style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 16 }}
		>
			{[0, 25, 50, 75, 100].map((v) => (
				<div key={v}>
					<Text sx={{ ...label, mb: 1 }}>{v}%</Text>
					<ProgressBar value={v} />
				</div>
			))}
		</div>
	),
};

export const Interactive: Story = {
	render: () => {
		const [progress, setProgress] = useState(0);
		const [isRunning, setIsRunning] = useState(false);

		useEffect(() => {
			if (!isRunning || progress >= 100) return;
			const interval = setInterval(() => {
				setProgress((p) => {
					if (p + 1 >= 100) {
						setIsRunning(false);
						return 100;
					}
					return p + 1;
				});
			}, 50);
			return () => clearInterval(interval);
		}, [isRunning, progress]);

		return (
			<div style={{ width: 360 }}>
				<Text sx={{ ...label, mb: 2, fontWeight: 'bold' }}>
					Copying files... {progress}%
				</Text>
				<ProgressBar value={progress} animated={isRunning} />
				<div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
					<Button
						onClick={() => {
							if (progress >= 100) setProgress(0);
							setIsRunning(true);
						}}
						disabled={isRunning}
					>
						{progress >= 100 ? 'Restart' : 'Start'}
					</Button>
					<Button onClick={() => setIsRunning(false)} disabled={!isRunning}>
						Pause
					</Button>
					<Button
						onClick={() => {
							setProgress(0);
							setIsRunning(false);
						}}
					>
						Reset
					</Button>
				</div>
			</div>
		);
	},
};
