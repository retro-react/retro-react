import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from '../../text';
import { Checkbox } from '../index';
import { getColorScheme } from '../themes';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Checkbox> = (args) => {
	const [checked, setChecked] = React.useState(false);
	return (
		<>
			{checked ? (
				<Text
					variant="paragraph"
					color={getColorScheme(args.color || 'primary')}
				>
					Checked
				</Text>
			) : (
				<Text
					variant="paragraph"
					color={getColorScheme(args.color || 'primary')}
				>
					Unchecked
				</Text>
			)}
			<br />
			<Checkbox
				{...args}
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			&nbsp;&nbsp;
			<Checkbox {...args} disabled />
		</>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	onClick: action('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	onClick: action('clicked'),
};

export const Success = Template.bind({});
Success.args = {
	color: 'success',
	onClick: action('clicked'),
};

export const Error = Template.bind({});
Error.args = {
	color: 'error',
	onClick: action('clicked'),
};

export const Warn = Template.bind({});
Warn.args = {
	color: 'warn',
	onClick: action('clicked'),
};
