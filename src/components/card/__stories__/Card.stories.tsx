import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Card> = (args) => {
	return <Card {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	children:
		'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
	color: 'darkseagreen',
	header: 'Header',
	footer: 'Footer',
	image: 'https://picsum.photos/500/200',
	// @ts-ignore
	sx: {
		height: '500px',
		width: '500px',
	},
};
