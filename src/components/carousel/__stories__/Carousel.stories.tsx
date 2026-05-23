import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '../index';

const meta: Meta<typeof Carousel> = {
	title: 'Components/Carousel',
	component: Carousel,
	argTypes: {
		interval: {
			control: { type: 'number', min: 1000, step: 500 },
			description: 'Milliseconds between automatic slide transitions.',
		},
		hideArrows: {
			control: 'boolean',
			description: 'Hides the previous/next navigation buttons.',
		},
		activeIndex: {
			control: { type: 'number', min: 0 },
			description: 'Controlled active slide index.',
		},
		onChange: {
			action: 'changed',
			description: 'Called with the new active index when the slide changes.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const slideStyle = (bg: string): React.CSSProperties => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	backgroundColor: bg,
	color: '#FFFFFF',
	fontFamily: 'MS Sans Serif, sans-serif',
	fontSize: 16,
});

export const Default: Story = {
	args: { interval: 4000, hideArrows: false },
	render: (args) => (
		<div style={{ maxWidth: 600, height: 300 }}>
			<Carousel {...args}>
				<div style={slideStyle('#000080')}>Slide One</div>
				<div style={slideStyle('#008080')}>Slide Two</div>
				<div style={slideStyle('#800080')}>Slide Three</div>
			</Carousel>
		</div>
	),
};

export const Images: Story = {
	args: { interval: 4000 },
	render: (args) => (
		<div style={{ maxWidth: 600, height: 300 }}>
			<Carousel {...args}>
				<img
					alt="Slide 1"
					src="https://picsum.photos/600/300?random=1"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
				<img
					alt="Slide 2"
					src="https://picsum.photos/600/300?random=2"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
				<img
					alt="Slide 3"
					src="https://picsum.photos/600/300?random=3"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			</Carousel>
		</div>
	),
};

export const NoArrows: Story = {
	args: { interval: 3000, hideArrows: true },
	render: (args) => (
		<div style={{ maxWidth: 600, height: 300 }}>
			<Carousel {...args}>
				<div style={slideStyle('#000080')}>Use dots to navigate</div>
				<div style={slideStyle('#008080')}>Arrows are hidden</div>
				<div style={slideStyle('#800080')}>Auto-advances on interval</div>
			</Carousel>
		</div>
	),
};
