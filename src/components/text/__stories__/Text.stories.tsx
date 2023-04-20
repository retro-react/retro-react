import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Text> = (args) => {
	return <Text {...args} />;
};

export const h1 = Template.bind({});
h1.args = {
	children:
		'h1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'darkseagreen',
	variant: 'h1',
};

export const h2 = Template.bind({});
h2.args = {
	children:
		'h2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'darkseagreen',
	variant: 'h2',
};

export const h3 = Template.bind({});
h3.args = {
	children:
		'h3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'darkseagreen',
	variant: 'h3',
};

export const h4 = Template.bind({});
h4.args = {
	children:
		'h4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'darkseagreen',
	variant: 'h4',
};

export const h5 = Template.bind({});
h5.args = {
	children:
		'h5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'darkseagreen',
	variant: 'h5',
};

export const h6 = Template.bind({});
h6.args = {
	children:
		'h6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'darkseagreen',
	variant: 'h6',
};

export const body1 = Template.bind({});
body1.args = {
	children:
		'body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'darkseagreen',
	variant: 'body1',
};

export const body2 = Template.bind({});
body2.args = {
	children:
		'body2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'darkseagreen',
	variant: 'body2',
};
