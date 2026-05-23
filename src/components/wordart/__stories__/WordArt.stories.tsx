import type { Meta, StoryObj } from '@storybook/react';
import { WordArt } from '../index';

const meta: Meta<typeof WordArt> = {
	title: 'Components/WordArt',
	component: WordArt,
	parameters: {
		docs: {
			description: {
				component:
					'Decorative text component inspired by classic 90s desktop publishing WordArt. Combine a color variant with an art style to get bevels, shadows, rainbows, arches and more.',
			},
		},
	},
	argTypes: {
		variant: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'success',
				'warning',
				'retro',
				'terminal',
			],
			description: 'Color palette used by the text and its effects.',
		},
		artStyle: {
			control: 'select',
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
			description: 'Decorative effect applied to the text.',
		},
		size: {
			control: 'inline-radio',
			options: ['small', 'medium', 'large', 'xlarge'],
		},
		rotation: {
			control: { type: 'range', min: -45, max: 45, step: 5 },
			description: 'Rotate the whole word in degrees.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof WordArt>;

export const Default: Story = {
	args: {
		children: 'RETRO COMPUTING',
		variant: 'primary',
		artStyle: 'beveled',
		size: 'large',
		rotation: 0,
	},
};

export const ArtStyles: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: 24,
				alignItems: 'center',
				justifyItems: 'center',
			}}
		>
			<WordArt artStyle="classic">CLASSIC</WordArt>
			<WordArt artStyle="beveled">BEVELED</WordArt>
			<WordArt artStyle="shadowed">SHADOWED</WordArt>
			<WordArt artStyle="outlined">OUTLINED</WordArt>
			<WordArt artStyle="rainbow">RAINBOW</WordArt>
			<WordArt artStyle="wavy" variant="retro">
				WAVY
			</WordArt>
			<WordArt artStyle="arch">ARCH</WordArt>
			<WordArt artStyle="extruded">EXTRUDED</WordArt>
			<WordArt artStyle="perspective">PERSPECTIVE</WordArt>
			<WordArt artStyle="inflate" variant="warning">
				INFLATE
			</WordArt>
			<WordArt artStyle="pixelated" variant="terminal">
				PIXELATED
			</WordArt>
			<WordArt artStyle="retro3d" variant="retro">
				RETRO 3D
			</WordArt>
		</div>
	),
};

export const Variants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
				alignItems: 'center',
			}}
		>
			<WordArt variant="primary">PRIMARY</WordArt>
			<WordArt variant="secondary">SECONDARY</WordArt>
			<WordArt variant="success">SUCCESS</WordArt>
			<WordArt variant="warning">WARNING</WordArt>
			<WordArt variant="retro">RETRO</WordArt>
			<WordArt variant="terminal">TERMINAL</WordArt>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
				alignItems: 'center',
			}}
		>
			<WordArt size="small">SMALL</WordArt>
			<WordArt size="medium">MEDIUM</WordArt>
			<WordArt size="large">LARGE</WordArt>
			<WordArt size="xlarge">XLARGE</WordArt>
		</div>
	),
};
