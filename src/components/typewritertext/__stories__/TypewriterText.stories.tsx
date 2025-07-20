import type { Meta, StoryObj } from '@storybook/react';
import { TypewriterText } from '../index';

const meta: Meta<typeof TypewriterText> = {
	title: 'Components/TypewriterText',
	component: TypewriterText,
	argTypes: {
		typingSpeed: {
			control: { type: 'number', min: 10, max: 500, step: 10 },
			description: 'Speed of typing in milliseconds',
		},
		erasingSpeed: {
			control: { type: 'number', min: 10, max: 300, step: 10 },
			description: 'Speed of erasing in milliseconds (when repeat is enabled)',
		},
		pauseDuration: {
			control: { type: 'number', min: 500, max: 5000, step: 100 },
			description: 'Pause after typing before erasing starts',
		},
		restartPause: {
			control: { type: 'number', min: 100, max: 3000, step: 100 },
			description: 'Pause after erasing before typing starts again',
		},
		showCursor: {
			control: 'boolean',
			description: 'Show blinking cursor',
		},
		cursor: {
			control: 'text',
			description: 'Cursor character',
		},
		repeat: {
			control: 'boolean',
			description: 'Repeat the typing animation',
		},
		color: {
			control: 'color',
			description: 'Text color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof TypewriterText>;

export const Basic: Story = {
	args: {
		text: 'Life is like a box of chocolates. You never know what you are going to get.',
		typingSpeed: 100,
		repeat: false,
		showCursor: true,
		color: '#000000',
	},
};

export const WithRepeat: Story = {
	args: {
		text: 'Welcome to the retro terminal...',
		typingSpeed: 80,
		erasingSpeed: 40,
		repeat: true,
		pauseDuration: 2000,
		restartPause: 1000,
		showCursor: true,
		color: '#00ff00',
	},
};

export const FastTyping: Story = {
	args: {
		text: 'Fast typing effect!',
		typingSpeed: 30,
		erasingSpeed: 20,
		repeat: true,
		pauseDuration: 1000,
		restartPause: 500,
		showCursor: true,
		cursor: '_',
		color: '#0000ff',
	},
};

export const SlowAndSteady: Story = {
	args: {
		text: 'Slow... and... steady... typing...',
		typingSpeed: 200,
		repeat: false,
		showCursor: true,
		cursor: '█',
		color: '#800080',
	},
};

export const NoCursor: Story = {
	args: {
		text: 'TypewriterText without cursor',
		typingSpeed: 70,
		showCursor: false,
		repeat: false,
		color: '#ff0000',
	},
};

export const TerminalStyle: Story = {
	args: {
		text: 'C:\\> AUTOEXEC.BAT\nLoading system...\nReady.',
		typingSpeed: 60,
		repeat: true,
		pauseDuration: 3000,
		restartPause: 1500,
		showCursor: true,
		cursor: '_',
		color: '#00ff00',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Terminal-style typewriter text with line breaks and retro green color',
			},
		},
	},
};

export const AllVariantsShowcase: Story = {
	render: () => (
		<div
			style={{
				padding: '20px',
				background: '#000000',
				color: '#00ff00',
				fontFamily: "'Courier New', monospace",
				minHeight: '400px',
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
			}}
		>
			<TypewriterText
				text="Basic typing effect"
				typingSpeed={80}
				color="#00ff00"
				showCursor={true}
			/>
			<TypewriterText
				text="Repeating with erase effect..."
				typingSpeed={60}
				erasingSpeed={30}
				repeat={true}
				pauseDuration={1500}
				restartPause={800}
				color="#ffff00"
				showCursor={true}
			/>
			<TypewriterText
				text="Fast typing!"
				typingSpeed={20}
				color="#ff00ff"
				showCursor={true}
				cursor="█"
			/>
			<TypewriterText
				text="Classic terminal cursor"
				typingSpeed={100}
				color="#ffffff"
				showCursor={true}
				cursor="_"
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Multiple TypewriterText components showcasing different configurations in a terminal-style layout',
			},
		},
	},
};
