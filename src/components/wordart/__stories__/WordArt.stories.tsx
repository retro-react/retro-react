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
		children: "Life moves pretty fast. Make sure you don't miss it.",
		color: 'rainbow',
		artStyle: 'curved',
		size: 'medium',
		rotation: 0,
	},
};
