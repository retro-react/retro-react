import type { Meta, StoryObj } from '@storybook/react';
import { Terminal } from '../index';

const meta: Meta<typeof Terminal> = {
	title: 'Experimental/Terminal',
	component: Terminal,
	argTypes: {
		prompt: {
			description: 'String shown before each input line (e.g. "C:\\>" or "$").',
		},
		onCommandSubmit: {
			description:
				'Called with the submitted command. Returning a string or string array appends them as output.',
		},
		getCurrentText: {
			description: 'Called on every keystroke with the current input value.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Terminal>;

export const Default: Story = {
	args: {
		prompt: 'C:\\>',
	},
};

export const WithEcho: Story = {
	args: {
		prompt: '$',
		onCommandSubmit: (cmd) => {
			if (cmd.trim() === 'help') {
				return ['Available commands:', '  help', '  about', '  clear'];
			}
			if (cmd.trim() === 'about') {
				return 'retro-react Terminal v1.0';
			}
			return `Unknown command: ${cmd}`;
		},
	},
};
