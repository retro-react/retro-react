import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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
			{value}
			<Slider {...args} onChange={handleChange} value={value} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	value: 50,
};
