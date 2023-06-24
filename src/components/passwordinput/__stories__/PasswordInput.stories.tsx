import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from '@src/components/text';
import { colorOptions, ComponentColors } from '@src/utils/getColorScheme';
import { PasswordInput } from '../PasswordInput';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Experimental/PasswordInput',
	component: PasswordInput,
	argTypes: {
		color: {
			control: { type: 'radio' },
			options: colorOptions,
		},
		children: {
			control: false,
		},
	},
} as ComponentMeta<typeof PasswordInput>;

const TextValue = ({
	color,
	value,
}: {
	color?: ComponentColors | 'greyscale';
	value: string;
}) => (
	<>
		<br />
		<Text color={color || 'primary'}>Entered value: {value}</Text>
	</>
);

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof PasswordInput> = ({ ...args }) => {
	const [value, setValue] = React.useState('');

	return (
		<div>
			<PasswordInput
				{...args}
				value={value}
				onPasswordChange={(val) => setValue(val)}
			/>
			<TextValue color={args.color} value={value} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	pattern: 'noise',
	color: 'primary',
	rounded: true,
	size: 'medium',
	length: 6,
};
