import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgressBar } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/ProgressBar',
	component: ProgressBar,
	argTypes: {
		colorBg: { control: 'color' },
		color: { control: 'color' },
	},
} as ComponentMeta<typeof ProgressBar>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof ProgressBar> = (args) => {
	return (
		<div
			style={{
				width: '500px',
				height: '20px',
			}}
		>
			<ProgressBar {...args} />
		</div>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	value: 50,
	pattern: 'stripes',
	animated: false,
};

export const Animated = Template.bind({});
Animated.args = {
	value: 50,
	pattern: 'stripes',
	color: '#000000',
	animated: true,
};

export const NoBackground = Template.bind({});
NoBackground.args = {
	value: 50,
	pattern: 'stripes',
	colorBg: 'none',
};
