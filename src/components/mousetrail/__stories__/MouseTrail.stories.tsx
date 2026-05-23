import type { Meta, StoryObj } from '@storybook/react';
import { MouseTrail } from '../index';

const meta: Meta<typeof MouseTrail> = {
	title: 'Components/MouseTrail',
	component: MouseTrail,
	argTypes: {
		particleSize: {
			control: { type: 'number', min: 1, max: 20 },
			description: 'Maximum particle size in pixels.',
		},
		particleColor: {
			description:
				'Color token (or gradient name such as `rainbow`) used to tint particles.',
		},
		offset: {
			description:
				'Offset of the particle origin from the cursor, e.g. `{ x: 5, y: 15 }` places them below-right of the pointer.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof MouseTrail>;

const Stage: React.FC<React.PropsWithChildren> = ({ children }) => (
	<div
		style={{
			position: 'relative',
			height: 360,
			width: '100%',
			border: '1px dashed #888',
			background:
				'repeating-linear-gradient(45deg, #fafafa, #fafafa 12px, #f0f0f0 12px, #f0f0f0 24px)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: '#666',
			fontFamily: 'monospace',
		}}
	>
		Move your mouse inside this area
		{children}
	</div>
);

export const Default: Story = {
	args: {
		particleSize: 6,
		particleColor: 'rainbow',
		offset: { x: 0, y: 0 },
	},
	render: (args) => (
		<Stage>
			<MouseTrail {...args} />
		</Stage>
	),
};

export const LargeParticles: Story = {
	args: {
		particleSize: 14,
		particleColor: 'primary',
		offset: { x: 0, y: 0 },
	},
	render: (args) => (
		<Stage>
			<MouseTrail {...args} />
		</Stage>
	),
};
