import type { Meta, StoryObj } from '@storybook/react';
import { createElement } from 'react';
import { Carousel, CarouselProps } from '../index';

const meta: Meta<typeof Carousel> = {
	title: 'Components/Carousel',
	component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;
export const Basic: Story = {
	args: {
		interval: 3000,
		color: 'primary',
		pattern: 'noise',
		hideArrows: false,
		children: [
			<img alt="img1" src="https://picsum.photos/1000/500" />,
			<img alt="img2" src="https://picsum.photos/1000/500?grayscale" />,
			<img alt="img3" src="https://picsum.photos/1000/500?blur" />,
		],
	},
	render: ({ interval, children, ...rest }: CarouselProps) => {
		return (
			<Carousel interval={interval} {...rest}>
				{children.map((child, index) =>
					createElement('div', { key: index }, child),
				)}
			</Carousel>
		);
	},
};
