import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../index';

export default {
	title: 'Forms/Checkbox',
	component: Checkbox,
	argTypes: {
		color: {
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warn',
				'greyscale',
				'greyscale-dark',
			],
			description: 'Color used for the checked state.',
		},
		label: {
			control: 'text',
			description: 'Optional label rendered next to the checkbox.',
		},
		checked: {
			control: 'boolean',
			description: 'Controlled checked state.',
		},
		indeterminate: {
			control: 'boolean',
			description: 'Renders the checkbox in an indeterminate state.',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables interaction.',
		},
	},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
	const [checked, setChecked] = React.useState(args.checked ?? false);
	return (
		<Checkbox
			{...args}
			checked={checked}
			onChange={(e) => {
				setChecked(e.target.checked);
				action('changed')(e.target.checked);
			}}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	color: 'primary',
	label: 'Accept terms and conditions',
};

export const Variants: ComponentStory<typeof Checkbox> = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
		<Checkbox color="primary" label="Primary" defaultChecked />
		<Checkbox color="secondary" label="Secondary" defaultChecked />
		<Checkbox color="success" label="Success" defaultChecked />
		<Checkbox color="warn" label="Warning" defaultChecked />
		<Checkbox color="error" label="Error" defaultChecked />
	</div>
);

export const States: ComponentStory<typeof Checkbox> = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
		<Checkbox label="Unchecked" />
		<Checkbox label="Checked" defaultChecked />
		<Checkbox label="Indeterminate" indeterminate />
		<Checkbox label="Disabled" disabled />
		<Checkbox label="Disabled & checked" disabled defaultChecked />
	</div>
);

export const WithoutLabel: ComponentStory<typeof Checkbox> = () => (
	<div style={{ display: 'flex', gap: 8 }}>
		<Checkbox color="primary" defaultChecked />
		<Checkbox color="success" defaultChecked />
		<Checkbox color="error" defaultChecked />
	</div>
);
