import { useArgs } from '@storybook/preview-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from '../../text';
import { Slider } from '../index';

export default {
	title: 'Forms/Slider',
	component: Slider,
	argTypes: {
		value: { description: 'Current value (controlled).' },
		min: { description: 'Minimum allowed value.' },
		max: { description: 'Maximum allowed value.' },
		step: { description: 'Increment between selectable values.' },
		showTooltip: {
			control: { type: 'boolean' },
			description: 'Show the value tooltip while hovering or dragging.',
		},
		showTicks: {
			control: { type: 'boolean' },
			description: 'Render tick marks along the track.',
		},
		marks: {
			description:
				'Object mapping values to labels, e.g. `{ 0: "Low", 100: "High" }`.',
		},
		disabled: { control: { type: 'boolean' } },
	},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
	const [, updateArgs] = useArgs();
	return (
		<div style={{ width: 360, padding: 20 }}>
			<Text variant="paragraph" style={{ marginBottom: 10 }}>
				Volume: {args.value}%
			</Text>
			<Slider {...args} onChange={(value) => updateArgs({ value })} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	value: 50,
	min: 0,
	max: 100,
	step: 1,
	showTooltip: true,
	showTicks: false,
	disabled: false,
};

export const WithTicks = Template.bind({});
WithTicks.args = {
	value: 30,
	min: 0,
	max: 100,
	step: 10,
	showTooltip: true,
	showTicks: true,
};

export const WithMarks: ComponentStory<typeof Slider> = () => {
	const [value, setValue] = React.useState(2);
	const labels = ['Low', 'Medium', 'High', 'Ultra'];
	return (
		<div style={{ width: 360, padding: 20 }}>
			<Text variant="paragraph" style={{ marginBottom: 10 }}>
				Graphics quality: {labels[value]}
			</Text>
			<Slider
				value={value}
				min={0}
				max={3}
				step={1}
				onChange={setValue}
				showTooltip
				marks={{ 0: 'Low', 1: 'Medium', 2: 'High', 3: 'Ultra' }}
			/>
		</div>
	);
};

export const Disabled = Template.bind({});
Disabled.args = {
	value: 25,
	min: 0,
	max: 100,
	disabled: true,
	showTooltip: false,
};
