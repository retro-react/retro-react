import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Avatar> = (args) => {
	return <Avatar {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	children: 'AB',
	size: 'medium',
	variant: 'circle',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	children: 'AB',
	size: 'medium',
	variant: 'circle',
};

export const Success = Template.bind({});
Success.args = {
	color: 'success',
	children: 'AB',
	size: 'medium',
	variant: 'circle',
};

export const Error = Template.bind({});
Error.args = {
	color: 'error',
	children: 'AB',
	size: 'medium',
	variant: 'circle',
};

export const Warn = Template.bind({});
Warn.args = {
	color: 'warn',
	children: 'AB',
	size: 'medium',
	variant: 'circle',
};
