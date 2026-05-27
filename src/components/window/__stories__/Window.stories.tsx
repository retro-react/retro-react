import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../button';
import { Text } from '../../text';
import { Window } from '../index';

const meta: Meta<typeof Window> = {
	title: 'Components/Window',
	component: Window,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		color: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warn', 'error'],
		},
		draggable: { control: 'boolean' },
		resizable: { control: 'boolean' },
		closable: { control: 'boolean' },
	},
};
export default meta;
type Story = StoryObj<typeof Window>;

const Stage = ({ children }: { children: React.ReactNode }) => (
	<div
		style={{
			position: 'relative',
			minHeight: '100vh',
			background: '#008080',
			overflow: 'hidden',
		}}
	>
		{children}
	</div>
);

export const Default: Story = {
	args: {
		title: 'My Computer',
		defaultPosition: { x: 80, y: 60 },
		defaultSize: { width: 360, height: 220 },
	},
	render: (args) => (
		<Stage>
			<Window {...args}>
				<Text>A draggable window. Grab the title bar to move it.</Text>
			</Window>
		</Stage>
	),
};

export const Resizable: Story = {
	args: {
		title: 'Notepad - Untitled',
		resizable: true,
		defaultPosition: { x: 80, y: 60 },
		defaultSize: { width: 380, height: 240 },
	},
	render: (args) => (
		<Stage>
			<Window {...args}>
				<Text>
					Drag the bottom-right corner to resize. Drag the title bar to move.
				</Text>
			</Window>
		</Stage>
	),
};

export const ManyWindows: Story = {
	render: () => {
		const [active, setActive] = useState('a');
		const windows = [
			{
				id: 'a',
				title: 'My Computer',
				pos: { x: 60, y: 40 },
				color: 'primary' as const,
			},
			{
				id: 'b',
				title: 'Calculator',
				pos: { x: 220, y: 110 },
				color: 'success' as const,
			},
			{
				id: 'c',
				title: 'System Settings',
				pos: { x: 380, y: 180 },
				color: 'secondary' as const,
			},
		];
		return (
			<Stage>
				{windows.map((w) => (
					<Window
						key={w.id}
						title={w.title}
						defaultPosition={w.pos}
						defaultSize={{ width: 280, height: 160 }}
						color={w.color}
						active={active === w.id}
						onActivate={() => setActive(w.id)}
						resizable
					>
						<Text>
							Window {w.id.toUpperCase()}. Click another window to deactivate
							this one.
						</Text>
					</Window>
				))}
			</Stage>
		);
	},
};

export const Controlled: Story = {
	render: () => {
		const [pos, setPos] = useState({ x: 100, y: 80 });
		return (
			<Stage>
				<div
					style={{
						position: 'absolute',
						top: 10,
						left: 10,
						background: '#c0c0c0',
						padding: 8,
					}}
				>
					<Text>
						x: {pos.x}, y: {pos.y}
					</Text>
					<Button size="small" onClick={() => setPos({ x: 100, y: 80 })}>
						Reset
					</Button>
				</div>
				<Window
					title="Controlled position"
					position={pos}
					onPositionChange={setPos}
					defaultSize={{ width: 320, height: 180 }}
				>
					<Text>Position is controlled by parent state.</Text>
				</Window>
			</Stage>
		);
	},
};

export const WithIcon: Story = {
	args: {
		title: 'README.txt',
		icon: '📄',
		defaultPosition: { x: 80, y: 60 },
		defaultSize: { width: 360, height: 220 },
		resizable: true,
	},
	render: (args) => (
		<Stage>
			<Window {...args}>
				<Text>Window with a leading icon in the title bar.</Text>
			</Window>
		</Stage>
	),
};
