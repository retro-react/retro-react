import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../index';

const meta: Meta<typeof Input> = {
	title: 'Forms/Input',
	component: Input,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['classic', 'filled', 'outlined', 'terminal'],
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
		},
		label: { description: 'Optional label rendered above the input.' },
		helperText: {
			description: 'Optional helper text rendered below the input.',
		},
		error: {
			description:
				'Renders the input in an error state and tints the helper text.',
		},
		multiline: {
			description:
				'When true, renders a textarea instead of an input. Use the `rows` prop to size it.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: 'Enter your username',
		variant: 'filled',
		size: 'medium',
		sx: { width: 260 },
		onChange: action('onChange'),
	},
};

export const WithLabel: Story = {
	args: {
		label: 'Email address',
		helperText: "We'll never share your email.",
		placeholder: 'you@example.com',
		variant: 'classic',
		sx: { width: 260 },
	},
};

export const Error: Story = {
	args: {
		label: 'Password',
		type: 'password',
		error: true,
		helperText: 'Password must be at least 8 characters.',
		defaultValue: 'abc',
		variant: 'classic',
		sx: { width: 260 },
	},
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: 12, width: 320 }}>
			<Input variant="classic" placeholder="Classic, sunken Win95 dialog" />
			<Input variant="filled" placeholder="Filled, raised 3D" />
			<Input variant="outlined" placeholder="Outlined, flat border" />
			<Input variant="terminal" placeholder="Terminal, C:\> _" />
		</div>
	),
};

export const Multiline: Story = {
	args: {
		multiline: true,
		rows: 4,
		placeholder: 'Write a longer message...',
		variant: 'classic',
		sx: { width: 320 },
	},
};
