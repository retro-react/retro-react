import type { Meta, StoryObj } from '@storybook/react';
import { TypewriterText } from '../index';

const meta: Meta<typeof TypewriterText> = {
	title: 'Components/TypewriterText',
	component: TypewriterText,
	argTypes: {
		typingSpeed: {
			control: false,
		},
		color: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof TypewriterText>;

export const Basic: Story = {
	args: {
		text: 'Life is like a box of chocolates. You never know what you are going to get.',
		typingSpeed: 100,
		variant: 'body1',
		repeat: false,
		bevel: false,
		color: '#000000',
	},
};
