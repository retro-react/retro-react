import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Select } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/Select',
	component: Select,
	argTypes: {
		variant: {
			options: ['classic', 'filled', 'outlined', 'terminal'],
			control: { type: 'radio' },
		},
		size: {
			control: {
				type: 'radio',
				options: ['small', 'medium', 'large'],
			},
		},
		children: {
			control: false,
		},
	},
} as ComponentMeta<typeof Select>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Select> = (args) => {
	const [value1, setValue1] = React.useState('');
	const [value2, setValue2] = React.useState('');
	return (
		<div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
			<Select
				{...args}
				defaultValue={value1}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setValue1(e.target.value)
				}
			>
				<option value="">None</option>
				<option value="Chevrolet Camaro SS 1969">
					Chevrolet Camaro SS 1969
				</option>
				<option value="Ford Mustang Boss 302 1970">
					Ford Mustang Boss 302 1970
				</option>
				<option value="Dodge Charger R/T 1968">Dodge Charger R/T 1968</option>
			</Select>
			<Select
				{...args}
				id="least-favorite-car"
				label={`Least ${args.label}`}
				defaultValue={value2}
				disabled
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setValue2(e.target.value)
				}
			>
				<option value="">None</option>
				<option value="Chevrolet Camaro SS 1969">
					Chevrolet Camaro SS 1969
				</option>
				<option value="Ford Mustang Boss 302 1970">
					Ford Mustang Boss 302 1970
				</option>
				<option value="Dodge Charger R/T 1968">Dodge Charger R/T 1968</option>
			</Select>
		</div>
	);
};

const VariantsTemplate: ComponentStory<typeof Select> = (args) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<div
					style={{
						width: '80px',
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
					}}
				>
					Classic:
				</div>
				<Select {...args} variant="classic" label="Deep sunken style">
					<option value="">Select option...</option>
					<option value="1">Windows 95</option>
					<option value="2">Windows 98</option>
					<option value="3">Windows ME</option>
				</Select>
			</div>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<div
					style={{
						width: '80px',
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
					}}
				>
					Filled:
				</div>
				<Select {...args} variant="filled" label="Prominent 3D style">
					<option value="">Select option...</option>
					<option value="1">Option A</option>
					<option value="2">Option B</option>
					<option value="3">Option C</option>
				</Select>
			</div>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<div
					style={{
						width: '80px',
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
					}}
				>
					Outlined:
				</div>
				<Select {...args} variant="outlined" label="Clean flat style">
					<option value="">Select option...</option>
					<option value="1">Choice 1</option>
					<option value="2">Choice 2</option>
					<option value="3">Choice 3</option>
				</Select>
			</div>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<div
					style={{
						width: '80px',
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
					}}
				>
					Terminal:
				</div>
				<Select {...args} variant="terminal" label="Console style">
					<option value="">Select system...</option>
					<option value="1">MS-DOS 6.22</option>
					<option value="2">Windows 3.11</option>
					<option value="3">OS/2 Warp</option>
				</Select>
			</div>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	variant: 'filled',
	size: 'medium',
	label: 'Favorite car',
	required: false,
	disabled: false,
	onChange: action('onChange'),
};

export const AllVariants = VariantsTemplate.bind({});
AllVariants.args = {
	onChange: action('onChange'),
	size: 'medium',
};

export const TerminalStyle = Template.bind({});
TerminalStyle.args = {
	variant: 'terminal',
	size: 'medium',
	label: 'Operating System',
	required: false,
	disabled: false,
	onChange: action('onChange'),
};
