import type { Meta, StoryObj } from '@storybook/react';
import { TypewriterText } from '../index';

const meta: Meta<typeof TypewriterText> = {
	title: 'Components/TypewriterText',
	component: TypewriterText,
	argTypes: {
		text: { description: 'Text to be typed out character by character.' },
		typingSpeed: {
			control: { type: 'number', min: 10, max: 500, step: 10 },
			description: 'Milliseconds between each typed character.',
		},
		erasingSpeed: {
			control: { type: 'number', min: 10, max: 300, step: 10 },
			description:
				'Milliseconds between each erased character when repeat is enabled.',
		},
		pauseDuration: {
			control: { type: 'number', min: 500, max: 5000, step: 100 },
			description:
				'How long to wait after typing finishes before erasing begins.',
		},
		restartPause: {
			control: { type: 'number', min: 100, max: 3000, step: 100 },
			description:
				'How long to wait after erasing finishes before typing starts again.',
		},
		showCursor: {
			control: 'boolean',
			description: 'Display a blinking cursor at the end of the text.',
		},
		cursor: {
			control: 'text',
			description: 'Character to use as the cursor.',
		},
		repeat: {
			control: 'boolean',
			description: 'Loop the type/erase animation.',
		},
		color: { control: 'color', description: 'Text color.' },
	},
};

export default meta;
type Story = StoryObj<typeof TypewriterText>;

export const Default: Story = {
	args: {
		text: 'Life is like a box of chocolates. You never know what you are going to get.',
		typingSpeed: 80,
		repeat: false,
		showCursor: true,
		color: '#000000',
	},
};

export const Looping: Story = {
	args: {
		text: 'Welcome to the retro terminal...',
		typingSpeed: 80,
		erasingSpeed: 40,
		repeat: true,
		pauseDuration: 2000,
		restartPause: 1000,
		showCursor: true,
		cursor: '_',
		color: '#00ff00',
	},
};

export const NoCursor: Story = {
	args: {
		text: 'Plain typewriter text without a cursor.',
		typingSpeed: 70,
		showCursor: false,
		color: '#000000',
	},
};
