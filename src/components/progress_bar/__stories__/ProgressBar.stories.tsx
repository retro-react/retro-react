import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgressBar } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/ProgressBar',
	component: ProgressBar,
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

export const Default = Template.bind({});
Default.args = {
	value: 50,
};
