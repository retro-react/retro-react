import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from '../../text';
import { Slider } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Slider',
	component: Slider,
} as ComponentMeta<typeof Slider>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Slider> = (args) => {
	const [value, setValue] = React.useState(args.value);
	const [, updateArgs] = useArgs();

	const handleChange = (value: number) => {
		setValue(value);
		updateArgs({ value });
	};

	return (
		<div
			style={{
				width: '500px',
			}}
		>
			<Text variant="paragraph">{value}</Text>
			<Slider {...args} onChange={handleChange} value={value} />
		</div>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	value: 50,
	min: 0,
	max: 100,
	step: 1,
	color: 'primary',
	disabled: false,
};
