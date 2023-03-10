import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Input> = (args) => {
	return (
		<>
			<Input {...args} />
			&nbsp;&nbsp;
			<Input {...args} disabled />
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Placeholder',
	onChange: action('onChange'),
};
