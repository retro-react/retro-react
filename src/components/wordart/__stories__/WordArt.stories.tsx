import type { Meta, StoryObj } from '@storybook/react';
import { WordArt } from '../index';

const meta: Meta<typeof WordArt> = {
	title: 'Components/WordArt',
	component: WordArt,
};

export default meta;
type Story = StoryObj<typeof WordArt>;

export const Basic: Story = {
	args: {
		children:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		color: 'rainbow',
		artStyle: 'curved',
	},
};
