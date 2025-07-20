import { useArgs } from '@storybook/preview-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from '../../text';
import { Slider } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/Slider',
	component: Slider,
	argTypes: {
		showTooltip: {
			control: { type: 'boolean' },
		},
		showTicks: {
			control: { type: 'boolean' },
		},
		disabled: {
			control: { type: 'boolean' },
		},
	},
} as ComponentMeta<typeof Slider>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Slider> = (args) => {
	const [value, setValue] = React.useState(args.value);
	const [, updateArgs] = useArgs();

	const handleChange = (newValue: number) => {
		setValue(newValue);
		updateArgs({ value: newValue });
	};

	return (
		<div style={{ width: '400px', padding: '20px' }}>
			<Text variant="paragraph" style={{ marginBottom: '10px' }}>
				Value: {value}
			</Text>
			<Slider {...args} onChange={handleChange} value={value} />
		</div>
	);
};

const VariantsTemplate: ComponentStory<typeof Slider> = () => {
	const [basicValue, setBasicValue] = React.useState(50);
	const [volumeValue, setVolumeValue] = React.useState(75);
	const [qualityValue, setQualityValue] = React.useState(2);

	return (
		<div style={{ width: '500px', padding: '20px' }}>
			<div style={{ marginBottom: '40px' }}>
				<Text variant="paragraph" style={{ marginBottom: '10px' }}>
					Basic Slider: {basicValue}%
				</Text>
				<Slider
					value={basicValue}
					min={0}
					max={100}
					step={1}
					onChange={setBasicValue}
					showTooltip
				/>
			</div>

			<div style={{ marginBottom: '40px' }}>
				<Text variant="paragraph" style={{ marginBottom: '10px' }}>
					Volume: {volumeValue}%
				</Text>
				<Slider
					value={volumeValue}
					min={0}
					max={100}
					step={5}
					onChange={setVolumeValue}
					showTooltip
					showTicks
				/>
			</div>

			<div style={{ marginBottom: '40px' }}>
				<Text variant="paragraph" style={{ marginBottom: '10px' }}>
					Quality Setting: {['Low', 'Medium', 'High', 'Ultra'][qualityValue]}
				</Text>
				<Slider
					value={qualityValue}
					min={0}
					max={3}
					step={1}
					onChange={setQualityValue}
					showTooltip
					marks={{
						0: 'Low',
						1: 'Medium',
						2: 'High',
						3: 'Ultra',
					}}
				/>
			</div>

			<div style={{ marginBottom: '20px' }}>
				<Text variant="paragraph" style={{ marginBottom: '10px' }}>
					Disabled Slider
				</Text>
				<Slider value={25} min={0} max={100} disabled />
			</div>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	value: 50,
	min: 0,
	max: 100,
	step: 1,
	disabled: false,
	showTooltip: true,
	showTicks: false,
};

export const WithTicks = Template.bind({});
WithTicks.args = {
	value: 25,
	min: 0,
	max: 100,
	step: 10,
	disabled: false,
	showTooltip: true,
	showTicks: true,
};

export const WithMarks = Template.bind({});
WithMarks.args = {
	value: 1,
	min: 0,
	max: 3,
	step: 1,
	disabled: false,
	showTooltip: true,
	marks: {
		0: 'Off',
		1: 'Low',
		2: 'Medium',
		3: 'High',
	},
};

export const AllVariants = VariantsTemplate.bind({});
AllVariants.args = {};
