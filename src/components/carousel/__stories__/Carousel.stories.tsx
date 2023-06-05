import type { Meta, StoryObj } from '@storybook/react';
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
			<img src="https://picsum.photos/700/500" />,
			<img src="https://picsum.photos/700/500?grayscale" />,
			<img src="https://picsum.photos/700/500?blur" />,
		],
	},
	render: ({ interval, children, ...rest }: CarouselProps) => {
		const divStyle = {
			maxHeight: '500px',
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			margin: '0 auto',
		};

		return (
			<Carousel interval={interval} {...rest}>
				{children.map((child, index) => (
					<div key={index} style={divStyle}>
						{child}
					</div>
				))}
			</Carousel>
		);
	},
};
