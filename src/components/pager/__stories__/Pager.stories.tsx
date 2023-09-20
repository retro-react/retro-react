import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pager } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Experimental/Pager',
	component: Pager,
} as ComponentMeta<typeof Pager>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Pager> = (args) => {
	return <Pager {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	messages: ['Hello', 'World', 'This', 'Is', 'A', 'Test'],
};
