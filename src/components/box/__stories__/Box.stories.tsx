import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Box',
	component: Box,
} as ComponentMeta<typeof Box>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Box> = (args) => {
	return <Box {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	children:
		'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
	color: 'darkseagreen',

	sx: {
		height: '500px',
		width: '500px',
	},
};
