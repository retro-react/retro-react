import type { Meta, StoryObj } from '@storybook/react';
import { PixelatedImage } from '../index';

const meta: Meta<typeof PixelatedImage> = {
	title: 'Components/PixelatedImage',
	component: PixelatedImage,
	argTypes: {
		blockSize: {
			control: {
				type: 'range',
				min: 1,
				max: 100,
				step: 5,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof PixelatedImage>;

export const Basic: Story = {
	args: {
		src: 'https://picsum.photos/id/91/600/600',
		blockSize: 5,
		width: 600,
		height: 600,
	},
};
