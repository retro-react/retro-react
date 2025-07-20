import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { Accordion } from '../index';

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	component: Accordion,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'Enhanced retro-styled accordion with authentic WIN31 appearance, icons, loading states, and keyboard navigation.',
			},
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{
					background: '#c0c0c0',
					padding: '20px',
					fontFamily: "'MS Sans Serif', sans-serif",
					minHeight: '200px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		defaultOpen: {
			control: { type: 'boolean' },
		},
		disabled: {
			control: { type: 'boolean' },
		},
		loading: {
			control: { type: 'boolean' },
		},
		animated: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
	args: {
		title: 'System Configuration',
		icon: '⚙️',
		defaultOpen: false,
		children: (
			<div>
				<Text variant="paragraph">
					Configure your Windows 3.1 system settings including display drivers,
					sound cards, and network protocols.
				</Text>
				<br />
				<Text variant="small">
					• Display: 256 Color VGA
					<br />
					• Sound: Sound Blaster Compatible
					<br />
					• Network: TCP/IP Protocol
					<br />• Memory: 4MB Extended Memory
				</Text>
			</div>
		),
	},
};

export const WithStates: Story = {
	render: () => (
		<Container sx={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
			<Accordion title="File Manager Options" icon="📁" defaultOpen={true}>
				<div>
					<Text variant="paragraph">
						Customize File Manager behavior and display preferences.
					</Text>
					<br />
					<div
						style={{
							fontFamily: "'MS Sans Serif', sans-serif",
							fontSize: '11px',
						}}
					>
						<label>
							<input type="checkbox" /> Show hidden files
						</label>
						<br />
						<label>
							<input type="checkbox" defaultChecked /> Display file extensions
						</label>
						<br />
						<label>
							<input type="checkbox" defaultChecked /> Show system files
						</label>
					</div>
				</div>
			</Accordion>

			<Accordion
				title="Network Connection Status"
				icon="🌐"
				loading={true}
				defaultOpen={true}
			/>

			<Accordion title="Restricted System Area" icon="🔒" disabled={true}>
				<Text variant="paragraph">
					This area requires administrator privileges to access.
				</Text>
			</Accordion>
		</Container>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates different accordion states: open, loading, and disabled.',
			},
		},
	},
};

export const CustomIcons: Story = {
	args: {
		title: 'Advanced Options',
		icon: '🔧',
		expandIcon: '⊞',
		collapseIcon: '⊟',
		defaultOpen: false,
		children: (
			<div>
				<Text variant="paragraph">
					Advanced system configuration with custom toggle icons.
				</Text>
				<br />
				<div
					style={{
						fontFamily: "'MS Sans Serif', sans-serif",
						fontSize: '11px',
					}}
				>
					<button
						style={{
							border: '1px outset #c0c0c0',
							background: '#c0c0c0',
							padding: '2px 8px',
							fontFamily: "'MS Sans Serif', sans-serif",
							fontSize: '11px',
							marginRight: '4px',
						}}
					>
						Registry Editor
					</button>
					<button
						style={{
							border: '1px outset #c0c0c0',
							background: '#c0c0c0',
							padding: '2px 8px',
							fontFamily: "'MS Sans Serif', sans-serif",
							fontSize: '11px',
						}}
					>
						System Monitor
					</button>
				</div>
			</div>
		),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Accordion with custom expand/collapse icons and interactive content.',
			},
		},
	},
};

export const Interactive: Story = {
	render: () => {
		const [toggleCount, setToggleCount] = React.useState(0);

		return (
			<Accordion
				title={`Interactive Demo (Toggled ${toggleCount} times)`}
				icon="🎯"
				defaultOpen={false}
				onToggle={(isOpen) => {
					setToggleCount((prev) => prev + 1);
					// Accordion toggled: isOpen
				}}
			>
				<div>
					<Text variant="paragraph">
						This demonstrates the onToggle callback and keyboard navigation.
					</Text>
					<br />
					<div
						style={{
							fontFamily: "'MS Sans Serif', sans-serif",
							fontSize: '11px',
						}}
					>
						<em>Keyboard navigation:</em>
						<br />• Tab to focus • Enter/Space to toggle
					</div>
				</div>
			</Accordion>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive accordion with callback functionality and keyboard navigation.',
			},
		},
	},
};
