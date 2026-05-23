import type { Meta, StoryObj } from '@storybook/react';
import { PixelatedImage } from '../index';

const meta: Meta<typeof PixelatedImage> = {
	title: 'Components/PixelatedImage',
	component: PixelatedImage,
	parameters: {
		docs: {
			description: {
				component:
					'Renders an image with a pixelation effect onto a canvas. Lower `blockSize` values produce a chunkier, more pixelated result.',
			},
		},
	},
	argTypes: {
		src: { description: 'Image source URL.' },
		blockSize: {
			control: { type: 'range', min: 1, max: 100, step: 1 },
			description:
				'Resolution percentage (1-100). Lower = more pixelated. Recommended 1-50.',
		},
		width: { description: 'Canvas width in pixels.' },
		height: { description: 'Canvas height in pixels.' },
	},
};

export default meta;
type Story = StoryObj<typeof PixelatedImage>;

export const Default: Story = {
	args: {
		src: 'https://picsum.photos/id/91/600/600',
		blockSize: 5,
		width: 400,
		height: 400,
	},
};

export const Comparison: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
			{[3, 10, 25, 50].map((blockSize) => (
				<div key={blockSize} style={{ textAlign: 'center' }}>
					<PixelatedImage
						src="https://picsum.photos/id/91/600/600"
						blockSize={blockSize}
						width={200}
						height={200}
					/>
					<div style={{ fontFamily: 'MS Sans Serif', fontSize: 11 }}>
						blockSize={blockSize}
					</div>
				</div>
			))}
		</div>
	),
};
