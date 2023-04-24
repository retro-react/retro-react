import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Switch } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Switch> = (args) => {
	const [, updateArgs] = useArgs();

	const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateArgs({ toggled: e.target.checked });

		if (args.onChange) {
			args.onChange(e);
		}
	};

	return <Switch {...args} toggled={args.toggled} onChange={handleToggle} />;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'square',
	size: 'medium',
	color: 'primary',
	toggled: false,
};
