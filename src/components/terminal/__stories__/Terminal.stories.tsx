import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Terminal } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Experimental/Terminal',
	component: Terminal,
} as ComponentMeta<typeof Terminal>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Terminal> = ({ children, ...args }) => {
	return (
		<Terminal
			onCommandSubmit={(cmd) => {
				/* Command submitted: ${cmd} */
			}}
			{...args}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	prompt: 'C:\\>',
};
