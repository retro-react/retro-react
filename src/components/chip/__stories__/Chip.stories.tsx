import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Chip',
	component: Chip,
} as ComponentMeta<typeof Chip>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Chip> = (args) => {
	return <Chip {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary Chip',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	children: 'Secondary Chip',
};

export const Success = Template.bind({});
Success.args = {
	color: 'success',
	children: 'Success Chip',
};

export const Error = Template.bind({});
Error.args = {
	color: 'error',
	children: 'Error Chip',
};

export const Warn = Template.bind({});
Warn.args = {
	color: 'warn',
	children: 'Warn Chip',
};
