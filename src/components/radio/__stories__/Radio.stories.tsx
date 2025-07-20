import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { Radio, RadioGroup } from '../index';

const meta: Meta<typeof RadioGroup> = {
	title: 'Forms/RadioGroup',
	component: RadioGroup,
	parameters: {
		docs: {
			description: {
				component:
					'Authentic Windows 3.1 style radio buttons for single-selection forms. Features classic inset radio buttons with proper dotted focus indicators.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
	args: {
		defaultValue: 'playstation',
		disabled: false,
	},
	render(args) {
		const [value, setValue] = useState(args.defaultValue);

		return (
			<Container sx={{ background: '#c0c0c0', padding: 3 }}>
				<Text
					sx={{
						mb: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Select your favorite retro gaming console:
				</Text>
				<RadioGroup {...args} onChange={setValue}>
					<Radio
						label="Super Nintendo Entertainment System"
						name="console"
						value="snes"
					/>
					<Radio
						label="Sega Genesis / Mega Drive"
						name="console"
						value="genesis"
					/>
					<Radio label="Sony PlayStation" name="console" value="playstation" />
					<Radio label="Nintendo Game Boy" name="console" value="gameboy" />
					<Radio label="Atari 2600" name="console" value="atari" />
				</RadioGroup>
				<Text
					sx={{
						mt: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Selected: {value}
				</Text>
			</Container>
		);
	},
};

export const Disabled: Story = {
	args: {
		defaultValue: 'windows',
		disabled: true,
	},
	render(args) {
		return (
			<Container sx={{ background: '#c0c0c0', padding: 3 }}>
				<Text
					sx={{
						mb: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Operating System (Disabled):
				</Text>
				<RadioGroup {...args}>
					<Radio label="Windows 3.1" name="os" value="windows" />
					<Radio label="MS-DOS 6.22" name="os" value="msdos" />
					<Radio label="OS/2 Warp" name="os" value="os2" />
				</RadioGroup>
			</Container>
		);
	},
};

export const WithoutLabels: Story = {
	args: {
		defaultValue: 'option2',
	},
	render(args) {
		const [value, setValue] = useState(args.defaultValue);

		return (
			<Container sx={{ background: '#c0c0c0', padding: 3 }}>
				<Text
					sx={{
						mb: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Basic Options:
				</Text>
				<RadioGroup {...args} onChange={setValue}>
					<Radio name="basicOptions" value="option1" />
					<Radio name="basicOptions" value="option2" />
					<Radio name="basicOptions" value="option3" />
				</RadioGroup>
				<Text
					sx={{
						mt: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
					}}
				>
					Selected option: {value}
				</Text>
			</Container>
		);
	},
};

export const LongLabels: Story = {
	args: {
		defaultValue: 'performance',
	},
	render(args) {
		const [value, setValue] = useState(args.defaultValue);

		return (
			<Container sx={{ background: '#c0c0c0', padding: 3, maxWidth: '400px' }}>
				<Text
					sx={{
						mb: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					System Configuration:
				</Text>
				<RadioGroup {...args} onChange={setValue}>
					<Radio
						label="High Performance - Maximum speed and responsiveness"
						name="config"
						value="performance"
					/>
					<Radio
						label="Balanced - Good performance with power efficiency"
						name="config"
						value="balanced"
					/>
					<Radio
						label="Power Saver - Extended battery life on laptops"
						name="config"
						value="powersaver"
					/>
				</RadioGroup>
				<Text
					sx={{
						mt: 3,
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '11px',
						fontWeight: 'bold',
					}}
				>
					Selected: {value}
				</Text>
			</Container>
		);
	},
};
