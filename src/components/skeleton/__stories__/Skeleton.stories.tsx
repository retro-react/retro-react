import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../index';

const meta: Meta<typeof Skeleton> = {
	title: 'Components/Skeleton',
	component: Skeleton,
	parameters: {
		docs: {
			description: {
				component:
					'A retro loading placeholder. Three effects evoke different eras of computing: `scanlines`, `dither`, and `processing`.',
			},
		},
		backgrounds: {
			default: 'win31',
			values: [{ name: 'win31', value: '#C0C0C0' }],
		},
	},
	argTypes: {
		height: { description: 'Height as a CSS value or pixel number.' },
		shape: {
			control: { type: 'radio' },
			options: ['rectangle', 'circle'],
			description: 'For `circle`, the height is also used as width.',
		},
		effect: {
			control: { type: 'radio' },
			options: ['scanlines', 'dither', 'processing'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	args: {
		height: '20px',
		shape: 'rectangle',
		effect: 'scanlines',
	},
	render: (args) => (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 480 }}
		>
			<Skeleton {...args} />
			<Skeleton {...args} />
			<Skeleton {...args} />
		</div>
	),
};

export const Effects: Story = {
	render: () => (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 480 }}
		>
			{(['scanlines', 'dither', 'processing'] as const).map((effect) => (
				<div key={effect}>
					<div
						style={{
							fontFamily: 'MS Sans Serif',
							fontSize: 11,
							marginBottom: 6,
						}}
					>
						{effect}
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
						<Skeleton height="16px" effect={effect} />
						<Skeleton height="20px" effect={effect} />
						<Skeleton height="24px" effect={effect} />
					</div>
				</div>
			))}
		</div>
	),
};

export const UserCardPlaceholder: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 16, alignItems: 'center', width: 360 }}>
			<Skeleton height="48px" shape="circle" effect="scanlines" />
			<div
				style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}
			>
				<Skeleton height="16px" effect="scanlines" />
				<Skeleton height="12px" effect="scanlines" sx={{ width: '60%' }} />
			</div>
		</div>
	),
};
