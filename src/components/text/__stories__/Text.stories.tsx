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

export const paragraph = Template.bind({});
paragraph.args = {
	children:
		'paragraph -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'paragraph',
};

export const h1 = Template.bind({});
h1.args = {
	children:
		'h1 -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'h1',
};

export const h2 = Template.bind({});
h2.args = {
	children:
		'h2 -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'h2',
};

export const h3 = Template.bind({});
h3.args = {
	children:
		'h3 -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'h3',
};

export const h4 = Template.bind({});
h4.args = {
	children:
		'h4 -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'h4',
};

export const h5 = Template.bind({});
h5.args = {
	children:
		'h5 -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'h5',
};

export const h6 = Template.bind({});
h6.args = {
	children:
		'h6 -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'h6',
};

export const body1 = Template.bind({});
body1.args = {
	children:
		'body1 -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'body1',
};

export const body2 = Template.bind({});
body2.args = {
	children:
		'body2 -  It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
	color: '#000000',
	bevel: false,
	blink: false,
	variant: 'body2',
};
