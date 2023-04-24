import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WordArt } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/WordArt',
	component: WordArt,
} as ComponentMeta<typeof WordArt>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof WordArt> = (args) => {
	return <WordArt {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	children:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	color: 'rainbow',
	artStyle: 'curved',
};
