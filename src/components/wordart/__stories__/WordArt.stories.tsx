import type { Meta, StoryObj } from '@storybook/react';
import { WordArt } from '../index';

const meta: Meta<typeof WordArt> = {
	title: 'Components/WordArt',
	component: WordArt,
	parameters: {
		docs: {
			description: {
				component: `
Authentic retro WordArt component inspired by classic desktop publishing software.

Features authentic 80s/90s text styling with:
- Classic beveled and 3D effects
- Retro color schemes and variants
- Pixelated styling options
- Authentic shadow and outline effects
- Period-appropriate fonts and sizing
				`,
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'success',
				'warning',
				'retro',
				'terminal',
			],
		},
		artStyle: {
			control: { type: 'select' },
			options: [
				'classic',
				'beveled',
				'shadowed',
				'outlined',
				'retro3d',
				'pixelated',
				'rainbow',
				'wavy',
				'curved',
				'arch',
				'extruded',
				'perspective',
				'inflate',
			],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large', 'xlarge'],
		},
		rotation: {
			control: { type: 'range', min: -45, max: 45, step: 5 },
		},
	},
};

export default meta;
type Story = StoryObj<typeof WordArt>;

export const Classic: Story = {
	args: {
		children: 'RETRO COMPUTING',
		variant: 'primary',
		artStyle: 'classic',
		size: 'medium',
		rotation: 0,
	},
};

export const Beveled: Story = {
	args: {
		children: 'SYSTEM READY',
		variant: 'secondary',
		artStyle: 'beveled',
		size: 'large',
	},
};

export const RetroRainbow: Story = {
	args: {
		children: 'RAINBOW POWER',
		variant: 'primary',
		artStyle: 'rainbow',
		size: 'large',
	},
};

export const WavyText: Story = {
	args: {
		children: 'SURF THE WEB',
		variant: 'retro',
		artStyle: 'wavy',
		size: 'large',
	},
};

export const CurvedClassic: Story = {
	args: {
		children: 'WordArt',
		variant: 'primary',
		artStyle: 'curved',
		size: 'xlarge',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Classic curved WordArt style like Microsoft Word with red text and blue shadow.',
			},
		},
	},
};

export const ExtrudedThick: Story = {
	args: {
		children: 'RETRO COMPUTING',
		variant: 'primary',
		artStyle: 'extruded',
		size: 'xlarge',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Thick 3D extruded effect with deep dimensional shadows matching classic WordArt.',
			},
		},
	},
};

export const ArchedText: Story = {
	args: {
		children: 'CURVED',
		variant: 'primary',
		artStyle: 'arch',
		size: 'xlarge',
	},
	parameters: {
		docs: {
			description: {
				story:
					'True arched text where each letter is individually positioned to create a curved arc.',
			},
		},
	},
};

export const PerspectiveView: Story = {
	args: {
		children: 'FUTURE VISION',
		variant: 'primary',
		artStyle: 'perspective',
		size: 'large',
	},
};

export const InflatedBubble: Story = {
	args: {
		children: 'BUBBLE TEXT',
		variant: 'warning',
		artStyle: 'inflate',
		size: 'medium',
	},
};

export const Terminal: Story = {
	args: {
		children: 'ACCESS GRANTED',
		variant: 'terminal',
		artStyle: 'pixelated',
		size: 'medium',
	},
};

export const Outlined: Story = {
	args: {
		children: 'DIGITAL FRONTIER',
		variant: 'warning',
		artStyle: 'outlined',
		size: 'large',
	},
};

export const Shadowed: Story = {
	args: {
		children: 'NEON NIGHTS',
		variant: 'success',
		artStyle: 'shadowed',
		size: 'medium',
		rotation: -5,
	},
};

export const Playground: Story = {
	args: {
		children: 'CUSTOMIZE ME',
		variant: 'primary',
		artStyle: 'beveled',
		size: 'medium',
		rotation: 0,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Experiment with different combinations of variants, art styles, sizes, and rotations.',
			},
		},
	},
};

export const AllVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				alignItems: 'center',
			}}
		>
			<WordArt variant="primary" artStyle="beveled" size="medium">
				PRIMARY
			</WordArt>
			<WordArt variant="secondary" artStyle="beveled" size="medium">
				SECONDARY
			</WordArt>
			<WordArt variant="success" artStyle="beveled" size="medium">
				SUCCESS
			</WordArt>
			<WordArt variant="warning" artStyle="beveled" size="medium">
				WARNING
			</WordArt>
			<WordArt variant="retro" artStyle="beveled" size="medium">
				RETRO
			</WordArt>
			<WordArt variant="terminal" artStyle="beveled" size="medium">
				TERMINAL
			</WordArt>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'All available variants with beveled styling for comparison.',
			},
		},
	},
};

export const AllArtStyles: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				alignItems: 'center',
			}}
		>
			<WordArt variant="primary" artStyle="classic" size="medium">
				CLASSIC
			</WordArt>
			<WordArt variant="primary" artStyle="beveled" size="medium">
				BEVELED
			</WordArt>
			<WordArt variant="primary" artStyle="shadowed" size="medium">
				SHADOWED
			</WordArt>
			<WordArt variant="primary" artStyle="outlined" size="medium">
				OUTLINED
			</WordArt>
			<WordArt variant="retro" artStyle="retro3d" size="medium">
				RETRO 3D
			</WordArt>
			<WordArt variant="terminal" artStyle="pixelated" size="medium">
				PIXELATED
			</WordArt>
			<WordArt variant="primary" artStyle="rainbow" size="medium">
				RAINBOW
			</WordArt>
			<WordArt variant="retro" artStyle="wavy" size="medium">
				WAVY
			</WordArt>
			<WordArt variant="primary" artStyle="curved" size="medium">
				CURVED
			</WordArt>
			<WordArt variant="primary" artStyle="arch" size="medium">
				ARCHED
			</WordArt>
			<WordArt variant="primary" artStyle="extruded" size="medium">
				EXTRUDED
			</WordArt>
			<WordArt variant="primary" artStyle="perspective" size="medium">
				PERSPECTIVE
			</WordArt>
			<WordArt variant="warning" artStyle="inflate" size="medium">
				INFLATE
			</WordArt>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All available art styles showcasing different retro text effects including animated rainbow, wavy transformations, 3D perspective, and inflated bubble effects.',
			},
		},
	},
};
