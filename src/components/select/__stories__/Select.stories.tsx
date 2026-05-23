import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Select } from '../index';

export default {
	title: 'Forms/Select',
	component: Select,
	argTypes: {
		variant: {
			options: ['classic', 'filled', 'outlined', 'terminal'],
			control: { type: 'radio' },
			description: 'Visual style of the dropdown.',
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'radio' },
		},
		label: { description: 'Label rendered above the select.' },
		required: { control: { type: 'boolean' } },
		disabled: { control: { type: 'boolean' } },
		errorMessage: {
			control: { type: 'text' },
			description: 'Error message displayed below the select.',
		},
		children: { control: false },
	},
} as ComponentMeta<typeof Select>;

const countries = (
	<>
		<option value="">Select a country...</option>
		<option value="us">United States</option>
		<option value="uk">United Kingdom</option>
		<option value="de">Germany</option>
		<option value="jp">Japan</option>
		<option value="br">Brazil</option>
	</>
);

const Template: ComponentStory<typeof Select> = (args) => {
	const [value, setValue] = React.useState('');
	return (
		<div style={{ width: 280 }}>
			<Select
				{...args}
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
					args.onChange?.(e);
				}}
			>
				{countries}
			</Select>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	variant: 'filled',
	size: 'medium',
	label: 'Country',
	required: false,
	disabled: false,
	onChange: action('onChange'),
};

export const Variants: ComponentStory<typeof Select> = () => (
	<div
		style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}
	>
		<Select variant="classic" label="Classic">
			{countries}
		</Select>
		<Select variant="filled" label="Filled">
			{countries}
		</Select>
		<Select variant="outlined" label="Outlined">
			{countries}
		</Select>
		<Select variant="terminal" label="Terminal">
			{countries}
		</Select>
	</div>
);

export const Sizes: ComponentStory<typeof Select> = () => (
	<div
		style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}
	>
		<Select size="small" label="Small">
			{countries}
		</Select>
		<Select size="medium" label="Medium">
			{countries}
		</Select>
		<Select size="large" label="Large">
			{countries}
		</Select>
	</div>
);

export const WithError = Template.bind({});
WithError.args = {
	variant: 'filled',
	label: 'Country',
	required: true,
	errorMessage: 'Please select a country.',
};

export const Disabled = Template.bind({});
Disabled.args = {
	variant: 'filled',
	label: 'Country',
	disabled: true,
};
