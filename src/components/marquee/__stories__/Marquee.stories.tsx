import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from '../index';

const meta: Meta<typeof Marquee> = {
	title: 'Components/Marquee',
	component: Marquee,
	argTypes: {
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
			description: 'Font size preset for the scrolling content.',
		},
		color: {
			control: { type: 'color' },
			description: 'Text color (any valid CSS color).',
		},
		speed: {
			control: { type: 'text' },
			description:
				'Animation duration as a CSS time value (e.g. "10s"). Lower = faster.',
		},
		gap: {
			control: { type: 'text' },
			description: 'Spacing between the two repeated text tracks.',
		},
		pauseOnHover: {
			description:
				'Pause the scroll animation while the user hovers the marquee.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
	args: {
		children: '★ Breaking news, retro is back! ★ Tune in for more updates.',
		color: '#000000',
		speed: '20s',
		size: 'medium',
		gap: '2rem',
		pauseOnHover: false,
	},
};

export const PauseOnHover: Story = {
	args: {
		...Default.args,
		pauseOnHover: true,
		children: 'Hover me to pause the scroll →',
	},
};

export const Fast: Story = {
	args: {
		...Default.args,
		speed: '6s',
		size: 'large',
		color: '#d2042d',
		children: '⚠ URGENT BULLETIN ⚠',
	},
};
