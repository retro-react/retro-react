import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Button> = (args) => {
	return (
		<>
			<Button {...args} />
			&nbsp;&nbsp;
			<Button {...args} disabled />
		</>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	onClick: action('clicked'),
	size: 'medium',
	disableClickEffect: false,
	children: 'Primary Button',
	variant: 'solid',
	color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	onClick: action('clicked'),
	size: 'medium',
	disableClickEffect: false,
	children: 'Secondary Button',
	variant: 'solid',
};

export const Success = Template.bind({});
Success.args = {
	color: 'success',
	onClick: action('clicked'),
	size: 'medium',
	disableClickEffect: false,
	children: 'Success Button',
	variant: 'solid',
};

export const Error = Template.bind({});
Error.args = {
	color: 'error',
	onClick: action('clicked'),
	size: 'medium',
	disableClickEffect: false,
	children: 'Error Button',
	variant: 'solid',
};

export const Warn = Template.bind({});
Warn.args = {
	color: 'warn',
	onClick: action('clicked'),
	size: 'medium',
	disableClickEffect: false,
	children: 'Warn Button',
	variant: 'solid',
};

export const Greyscale = Template.bind({});
Greyscale.args = {
	color: 'greyscale',
	onClick: action('clicked'),
	size: 'medium',
	disableClickEffect: false,
	children: 'Greyscale Button',
	variant: 'solid',
};

export const GreyscaleDark = Template.bind({});
GreyscaleDark.args = {
	color: 'greyscale-dark',
	onClick: action('clicked'),
	size: 'medium',
	disableClickEffect: false,
	children: 'Dark Greyscale Button',
	variant: 'solid',
};
