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
			"Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
		color: 'rainbow',
		artStyle: 'curved',
	},
};
