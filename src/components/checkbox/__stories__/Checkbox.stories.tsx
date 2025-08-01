import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Flex } from 'theme-ui';
import getColorScheme from '@src/utils/getColorScheme';
import { Text } from '../../text';
import { Checkbox } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/Checkbox',
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
			<Flex>
				<Checkbox
					{...args}
					name="retro-checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
				&nbsp;&nbsp;
				<Checkbox {...args} disabled label="Disabled" />
			</Flex>
		</>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	label: 'Click me',
	indeterminate: false,
	onClick: action('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	label: 'Click me',
	indeterminate: false,
	onClick: action('clicked'),
};

export const Success = Template.bind({});
Success.args = {
	color: 'success',
	label: 'Click me',
	indeterminate: false,
	onClick: action('clicked'),
};

export const Error = Template.bind({});
Error.args = {
	color: 'error',
	label: 'Click me',
	indeterminate: false,
	onClick: action('clicked'),
};

export const Warn = Template.bind({});
Warn.args = {
	color: 'warn',
	label: 'Click me',
	indeterminate: false,
	onClick: action('clicked'),
};
