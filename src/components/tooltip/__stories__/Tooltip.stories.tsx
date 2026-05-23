import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components/button';
import { Tooltip } from '../Tooltip';

const meta: Meta<typeof Tooltip> = {
	title: 'Components/Tooltip',
	component: Tooltip,
	argTypes: {
		variant: {
			control: 'inline-radio',
			options: ['default', 'help', 'warning', 'info'],
			description: 'Visual theme of the tooltip bubble.',
		},
		position: {
			control: 'inline-radio',
			options: ['top', 'bottom', 'left', 'right'],
			description:
				'Preferred position relative to the trigger. Will flip automatically if there is no room.',
		},
		delay: {
			control: { type: 'number', min: 0, max: 2000, step: 100 },
			description: 'Milliseconds before the tooltip appears on hover/focus.',
		},
		label: { description: 'Text shown inside the tooltip bubble.' },
		children: { control: false },
	},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {
		label: 'Save the current document (Ctrl+S)',
		variant: 'default',
		position: 'top',
		delay: 100,
	},
	render: (args) => (
		<div style={{ padding: 80, display: 'flex', justifyContent: 'center' }}>
			<Tooltip {...args}>
				<Button>Save</Button>
			</Tooltip>
		</div>
	),
};

export const Variants: Story = {
	render: () => (
		<div
			style={{
				padding: 80,
				display: 'flex',
				gap: 32,
				justifyContent: 'center',
			}}
		>
			<Tooltip label="Classic help bubble" variant="default" delay={100}>
				<Button size="small">Default</Button>
			</Tooltip>
			<Tooltip label="Need assistance?" variant="help" delay={100}>
				<Button size="small">Help</Button>
			</Tooltip>
			<Tooltip
				label="This action cannot be undone"
				variant="warning"
				delay={100}
			>
				<Button size="small">Warning</Button>
			</Tooltip>
			<Tooltip label="Additional information" variant="info" delay={100}>
				<Button size="small">Info</Button>
			</Tooltip>
		</div>
	),
};

export const Positions: Story = {
	render: () => (
		<div
			style={{
				padding: 96,
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: 48,
				justifyItems: 'center',
			}}
		>
			<Tooltip label="Tooltip on top" position="top" delay={100}>
				<Button>Top</Button>
			</Tooltip>
			<Tooltip label="Tooltip on right" position="right" delay={100}>
				<Button>Right</Button>
			</Tooltip>
			<Tooltip label="Tooltip on bottom" position="bottom" delay={100}>
				<Button>Bottom</Button>
			</Tooltip>
			<Tooltip label="Tooltip on left" position="left" delay={100}>
				<Button>Left</Button>
			</Tooltip>
		</div>
	),
};
