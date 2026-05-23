import type { Meta, StoryObj } from '@storybook/react';
import { CRT } from '../CRT';

const meta: Meta<typeof CRT> = {
	title: 'Components/CRT',
	component: CRT,
	parameters: { layout: 'centered' },
	argTypes: {
		phosphor: {
			control: { type: 'select' },
			options: ['green', 'amber', 'white', 'blue'],
			description: 'Phosphor color of the simulated CRT tube.',
		},
		scanlines: {
			control: { type: 'boolean' },
			description: 'Overlay horizontal scanlines for authenticity.',
		},
		curvature: {
			control: { type: 'boolean' },
			description: 'Apply a subtle CRT screen curvature.',
		},
		flicker: {
			control: { type: 'boolean' },
			description: 'Animate a faint screen flicker (use sparingly).',
		},
		glowIntensity: {
			control: { type: 'range', min: 0, max: 1, step: 0.1 },
			description: 'Strength of the phosphor glow halo (0–1).',
		},
	},
};

export default meta;
type Story = StoryObj<typeof CRT>;

const terminalText = `> SYSTEM STARTUP...
> LOADING RETRO INTERFACE v1.0
> MEMORY: 640K OK
> GRAPHICS: VGA DETECTED
>
> C:\\> DIR
> RETRO.EXE    12,345   07-20-25   3:14p
> CONFIG.SYS      234   07-20-25   3:14p
> AUTOEXEC.BAT    456   07-20-25   3:14p
>
> C:\\> _`;

export const Default: Story = {
	args: {
		phosphor: 'green',
		scanlines: true,
		curvature: true,
		flicker: false,
		glowIntensity: 0.5,
		children: terminalText,
	},
};

export const Amber: Story = {
	args: {
		...Default.args,
		phosphor: 'amber',
		glowIntensity: 0.6,
	},
};

export const PaperWhite: Story = {
	args: {
		...Default.args,
		phosphor: 'white',
		glowIntensity: 0.3,
	},
};

export const WithFlicker: Story = {
	args: {
		...Default.args,
		phosphor: 'blue',
		flicker: true,
		glowIntensity: 0.7,
	},
};
