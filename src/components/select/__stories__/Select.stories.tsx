import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from '@src/components/text';
import { Select } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Select',
	component: Select,
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'success', 'error', 'warn'],
			},
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large'],
			},
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
		<>
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
			&nbsp;&nbsp;
			<Select
				{...args}
				defaultValue={value2}
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
			<br /> <br />
			<Text variant="paragraph">Selected value 1: {value1 || 'none'}</Text>
			<Text variant="paragraph">Selected value 2: {value2 || 'none'}</Text>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	color: 'primary',
	size: 'medium',
	label: 'Favorite car',
	onChange: action('onChange'),
};
