import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from '../index';

const meta: Meta<typeof Switch> = {
	title: 'Forms/Switch',
	component: Switch,
	argTypes: {
		variant: {
			control: 'inline-radio',
			options: ['rounded', 'square'],
			description: 'Visual shape of the switch track and thumb.',
		},
		size: {
			control: 'inline-radio',
			options: ['small', 'medium', 'large'],
		},
		color: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warn',
				'greyscale',
			],
			description: 'Theme color applied when the switch is toggled on.',
		},
		toggled: {
			control: 'boolean',
			description: 'Controlled checked state. Omit to use uncontrolled mode.',
		},
		disabled: { control: 'boolean' },
		onChange: { action: 'changed' },
	},
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	args: {
		variant: 'square',
		size: 'medium',
		color: 'primary',
		toggled: false,
		disabled: false,
	},
	render: (args) => {
		const [, updateArgs] = useArgs();
		const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
			updateArgs({ toggled: e.target.checked });
			args.onChange?.(e);
		};
		return <Switch {...args} onChange={handleToggle} />;
	},
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
			<Switch variant="square" defaultToggled />
			<Switch variant="rounded" defaultToggled />
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
			<Switch size="small" defaultToggled />
			<Switch size="medium" defaultToggled />
			<Switch size="large" defaultToggled />
		</div>
	),
};

export const Colors: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
			<Switch color="primary" defaultToggled />
			<Switch color="secondary" defaultToggled />
			<Switch color="success" defaultToggled />
			<Switch color="warn" defaultToggled />
			<Switch color="error" defaultToggled />
			<Switch color="greyscale" defaultToggled />
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
			<Switch disabled />
			<Switch disabled defaultToggled />
		</div>
	),
};
