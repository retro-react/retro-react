import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container } from '../../../components/container';
import { Text } from '../../../components/text';
import { Accordion } from '../index';

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	component: Accordion,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Text shown in the accordion header.',
		},
		icon: {
			control: 'text',
			description: 'Optional icon rendered before the title.',
		},
		defaultOpen: {
			control: 'boolean',
			description: 'Initial open state when uncontrolled.',
		},
		open: {
			control: 'boolean',
			description:
				'Controlled open state. When set, the component becomes controlled.',
		},
		disabled: {
			control: 'boolean',
			description: 'Prevents interaction with the accordion.',
		},
		loading: {
			control: 'boolean',
			description: 'Shows a loading indicator inside the content area.',
		},
		animated: {
			control: 'boolean',
			description: 'Animates the expand/collapse transition.',
		},
		onToggle: {
			action: 'toggled',
			description: 'Called with the new open state when toggled.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	args: {
		title: 'System Configuration',
		icon: '⚙️',
		defaultOpen: true,
		children: (
			<Text variant="paragraph">
				Configure display drivers, sound cards, and network protocols for your
				system.
			</Text>
		),
	},
};

export const States: Story = {
	render: () => (
		<Container
			sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}
		>
			<Accordion title="Open by default" icon="📁" defaultOpen>
				<Text variant="paragraph">This panel starts expanded.</Text>
			</Accordion>
			<Accordion title="Loading state" icon="🌐" loading defaultOpen />
			<Accordion title="Disabled" icon="🔒" disabled>
				<Text variant="paragraph">Cannot be opened.</Text>
			</Accordion>
		</Container>
	),
};

export const CustomIcons: Story = {
	args: {
		title: 'Advanced Options',
		icon: '🔧',
		expandIcon: '⊞',
		collapseIcon: '⊟',
		children: (
			<Text variant="paragraph">
				Override the default arrow with custom expand/collapse icons.
			</Text>
		),
	},
};

export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = React.useState(false);
		return (
			<Accordion
				title={`Toggled: ${open ? 'open' : 'closed'}`}
				icon="🎯"
				open={open}
				onToggle={setOpen}
			>
				<Text variant="paragraph">
					Pass `open` and `onToggle` to fully control the accordion state.
				</Text>
			</Accordion>
		);
	},
};
