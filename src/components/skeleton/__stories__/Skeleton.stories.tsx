import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Skeleton } from '../index';

const meta: Meta<typeof Skeleton> = {
	title: 'Components/Skeleton',
	component: Skeleton,
	parameters: {
		docs: {
			description: {
				component:
					'A retro skeleton loading component with authentic WIN31 styling. Features classic scan line and dithering effects reminiscent of early computer graphics.',
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
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
	args: {
		height: '20px',
		shape: 'rectangle',
		effect: 'scanlines',
	},
	render: (props) => (
		<Container fluid style={{ padding: '20px', maxWidth: '600px' }}>
			<h3
				style={{
					marginBottom: '16px',
					fontFamily: 'MS Sans Serif',
					fontSize: '11px',
				}}
			>
				💾 Loading data...
			</h3>
			<Skeleton {...props} />
			<Skeleton {...props} />
			<Skeleton {...props} />
		</Container>
	),
};

export const AllEffects: Story = {
	render: () => (
		<Container fluid style={{ padding: '20px', maxWidth: '600px' }}>
			<div style={{ marginBottom: '20px' }}>
				<h4
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
						marginBottom: '8px',
					}}
				>
					📺 Scan Lines Effect (CRT Monitor)
				</h4>
				<Skeleton height="16px" effect="scanlines" />
				<Skeleton height="20px" effect="scanlines" />
				<Skeleton height="24px" effect="scanlines" />
			</div>

			<div style={{ marginBottom: '20px' }}>
				<h4
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
						marginBottom: '8px',
					}}
				>
					🔲 Dither Pattern Effect (Early Graphics)
				</h4>
				<Skeleton height="16px" effect="dither" />
				<Skeleton height="20px" effect="dither" />
				<Skeleton height="24px" effect="dither" />
			</div>

			<div style={{ marginBottom: '20px' }}>
				<h4
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
						marginBottom: '8px',
					}}
				>
					⚡ Processing Effect (WIN31 Progress)
				</h4>
				<Skeleton height="16px" effect="processing" />
				<Skeleton height="20px" effect="processing" />
				<Skeleton height="24px" effect="processing" />
			</div>

			<div>
				<h4
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
						marginBottom: '8px',
					}}
				>
					👤 Circle Shapes (User Avatars)
				</h4>
				<div
					style={{
						display: 'flex',
						gap: '12px',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}
				>
					<Skeleton height="32px" shape="circle" effect="scanlines" />
					<Skeleton height="40px" shape="circle" effect="dither" />
					<Skeleton height="48px" shape="circle" effect="processing" />
				</div>
			</div>
		</Container>
	),
};
