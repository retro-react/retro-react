import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '../index';

const meta: Meta<typeof Carousel> = {
	title: 'Components/Carousel',
	component: Carousel,
	parameters: {
		docs: {
			description: {
				component:
					'A retro carousel component with authentic WIN31 styling. Features classic button navigation and dot indicators reminiscent of early multimedia software.',
			},
		},
		backgrounds: {
			default: 'win31',
			values: [
				{
					name: 'win31',
					value: '#C0C0C0',
				},
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
	args: {
		interval: 4000,
		hideArrows: false,
	},
	render: (args) => {
		return (
			<div style={{ maxWidth: '800px', height: '400px', margin: '0 auto' }}>
				<Carousel {...args}>
					<img
						alt="Retro Computer Setup"
						src="https://picsum.photos/800/400?random=1"
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
					<img
						alt="Classic Gaming"
						src="https://picsum.photos/800/400?random=2"
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
					<img
						alt="Vintage Technology"
						src="https://picsum.photos/800/400?random=3"
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</Carousel>
			</div>
		);
	},
};

export const RetroContent: Story = {
	args: {
		interval: 5000,
		hideArrows: false,
	},
	render: (args) => (
		<div style={{ maxWidth: '600px', height: '300px', margin: '0 auto' }}>
			<Carousel {...args}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						backgroundColor: '#000080',
						color: '#FFFFFF',
						fontFamily: 'MS Sans Serif',
						fontSize: '14px',
						textAlign: 'center',
						padding: '20px',
					}}
				>
					<div>
						<h2 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
							💾 Welcome to Windows 3.1!
						</h2>
						<p style={{ margin: 0 }}>Authentic retro computing experience</p>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						backgroundColor: '#008080',
						color: '#FFFFFF',
						fontFamily: 'MS Sans Serif',
						fontSize: '14px',
						textAlign: 'center',
						padding: '20px',
					}}
				>
					<div>
						<h2 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
							🖥️ Classic Interface
						</h2>
						<p style={{ margin: 0 }}>Featuring authentic WIN31 styling</p>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						backgroundColor: '#800080',
						color: '#FFFFFF',
						fontFamily: 'MS Sans Serif',
						fontSize: '14px',
						textAlign: 'center',
						padding: '20px',
					}}
				>
					<div>
						<h2 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
							⚡ Retro Innovation
						</h2>
						<p style={{ margin: 0 }}>Modern React with vintage aesthetics</p>
					</div>
				</div>
			</Carousel>
		</div>
	),
};
