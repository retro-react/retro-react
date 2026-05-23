import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../../chip';
import { Group } from '../index';

const meta: Meta<typeof Group> = {
	title: 'Layout/Group',
	component: Group,
	argTypes: {
		gap: {
			description: 'CSS gap between children (any valid CSS length).',
			control: { type: 'text' },
		},
		direction: {
			description: 'Flex direction for the group.',
			control: { type: 'radio' },
			options: ['row', 'column'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Group>;

export const Default: Story = {
	args: { gap: '10px', direction: 'row' },
	render: (args) => (
		<Group {...args}>
			<Chip color="primary">Pizza</Chip>
			<Chip color="secondary">Sushi</Chip>
			<Chip color="success">Burgers</Chip>
			<Chip color="warn">Tacos</Chip>
		</Group>
	),
};

export const Column: Story = {
	args: { gap: '8px', direction: 'column' },
	render: (args) => (
		<Group {...args}>
			<Chip color="primary">Step 1</Chip>
			<Chip color="primary">Step 2</Chip>
			<Chip color="primary">Step 3</Chip>
		</Group>
	),
};
