import type { Meta, StoryObj } from '@storybook/react';
import { Group } from '../../../components/group';
import { Chip } from '../index';

const meta: Meta<typeof Chip> = {
	title: 'Components/Chip',
	component: Chip,
	argTypes: {
		color: {
			description: 'Visual color token for the chip background and text.',
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warn',
				'greyscale',
				'highlight',
			],
		},
		onClick: {
			description:
				'When provided, the chip becomes interactive (focusable, role="button", Enter/Space activate).',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
	args: {
		color: 'primary',
		children: 'Active',
	},
};

export const Variants: Story = {
	render: () => (
		<Group>
			<Chip color="primary">Primary</Chip>
			<Chip color="secondary">Secondary</Chip>
			<Chip color="success">Success</Chip>
			<Chip color="error">Error</Chip>
			<Chip color="warn">Warning</Chip>
			<Chip color="greyscale">Default</Chip>
			<Chip color="highlight">New</Chip>
		</Group>
	),
};

export const Clickable: Story = {
	args: {
		color: 'primary',
		children: 'Clickable Chip',
		onClick: () => {},
	},
};
