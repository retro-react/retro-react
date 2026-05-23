import type { Meta, StoryObj } from '@storybook/react';
import { SevenSegmentDisplay } from '../index';

const meta: Meta<typeof SevenSegmentDisplay> = {
	title: 'Components/SevenSegmentDisplay',
	component: SevenSegmentDisplay,
	parameters: {
		docs: {
			description: {
				component:
					'A pure-CSS seven-segment numeric display. Useful for visitor counters, scores, clocks, and digital readouts.',
			},
		},
	},
	argTypes: {
		value: {
			control: { type: 'number' },
			description: 'Numeric value to display.',
		},
		color: {
			control: { type: 'color' },
			description: 'Segment colour — any library colour name or CSS colour.',
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
		},
		segmentThickness: {
			control: { type: 'radio' },
			options: ['none', 'thin', 'thick'],
			description: 'Segment border thickness.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SevenSegmentDisplay>;

export const Default: Story = {
	args: {
		value: 1946,
		color: 'black',
		size: 'medium',
		segmentThickness: 'none',
	},
};

export const OnBlackBackground: Story = {
	args: {
		value: 8088,
		color: '#ff3333',
		size: 'large',
		segmentThickness: 'none',
	},
	render: (args) => (
		<div
			style={{
				background: 'black',
				padding: '2rem',
				display: 'inline-block',
			}}
		>
			<SevenSegmentDisplay {...args} />
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
			<SevenSegmentDisplay value={123} size="small" />
			<SevenSegmentDisplay value={123} size="medium" />
			<SevenSegmentDisplay value={123} size="large" />
		</div>
	),
};
