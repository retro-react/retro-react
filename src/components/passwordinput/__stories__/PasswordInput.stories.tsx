import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PasswordInput } from '../PasswordInput';

export default {
	title: 'Forms/PasswordInput',
	component: PasswordInput,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['classic', 'filled', 'outlined', 'terminal'],
			description: 'Visual style of the input.',
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
			description: 'Preset size, or any CSS font-size string.',
		},
		showToggle: {
			control: { type: 'boolean' },
			description: 'Show the show/hide password toggle button.',
		},
		disabled: { control: { type: 'boolean' } },
		placeholder: { control: { type: 'text' } },
		children: { control: false },
	},
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => {
	const [value, setValue] = React.useState('');
	return <PasswordInput {...args} value={value} onPasswordChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'filled',
	size: 'medium',
	showToggle: true,
	placeholder: 'Enter password...',
};

export const Variants: ComponentStory<typeof PasswordInput> = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
			maxWidth: 320,
		}}
	>
		<PasswordInput variant="classic" placeholder="Classic (Win95 sunken)" />
		<PasswordInput variant="filled" placeholder="Filled (raised 3D)" />
		<PasswordInput variant="outlined" placeholder="Outlined (flat)" />
		<PasswordInput variant="terminal" placeholder="terminal:// passphrase" />
	</div>
);

export const Sizes: ComponentStory<typeof PasswordInput> = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
			maxWidth: 320,
		}}
	>
		<PasswordInput size="small" placeholder="Small" />
		<PasswordInput size="medium" placeholder="Medium" />
		<PasswordInput size="large" placeholder="Large" />
	</div>
);

export const Disabled = Template.bind({});
Disabled.args = {
	variant: 'filled',
	disabled: true,
	placeholder: 'Disabled',
};

export const WithoutToggle = Template.bind({});
WithoutToggle.args = {
	variant: 'filled',
	showToggle: false,
	placeholder: 'No visibility toggle',
};
