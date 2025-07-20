import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pager } from '../index';

const meta: Meta<typeof Pager> = {
	title: 'Components/Pager',
	component: Pager,
	parameters: {
		docs: {
			description: {
				component: `
Authentic retro Pager (Beeper) component reminiscent of 80s/90s communication devices.

Features:
- Large, prominent LCD-style display with enhanced scanlines and glow effects
- Authentic RETROCOM-90 branding and status indicator
- Classic Windows 3.1-style button layout with proper dithering texture
- Multiple display variants with distinct color schemes (default, terminal, retro, amber)
- Message scrolling with smooth transitions and page indicators
- Period-appropriate visual effects and typography
- Enhanced sizing and proportions for better visual impact
- Proper accessibility features and focus management
				`,
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'terminal', 'retro', 'amber'],
		},
		messages: {
			control: { type: 'object' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Pager>;

export const Default: Story = {
	args: {
		messages: ['NEW MESSAGE', 'CALL HOME', 'MEETING @ 3PM', 'LOW BATTERY'],
		variant: 'default',
	},
};

export const Terminal: Story = {
	args: {
		messages: [
			'SYSTEM READY',
			'ACCESS GRANTED',
			'PROCESSING...',
			'TASK COMPLETE',
		],
		variant: 'terminal',
	},
};

export const Retro: Story = {
	args: {
		messages: [
			'WELCOME TO 1990',
			'CHECK YOUR EMAIL',
			'CONFERENCE CALL',
			'HAVE A NICE DAY',
		],
		variant: 'retro',
	},
};

export const Amber: Story = {
	args: {
		messages: ['AMBER DISPLAY', 'CLASSIC LOOK', 'RETRO VIBES', 'OLD SCHOOL'],
		variant: 'amber',
	},
};

export const LongMessages: Story = {
	args: {
		messages: [
			'THIS IS A VERY LONG MESSAGE THAT MIGHT WRAP',
			'SHORT MSG',
			'ANOTHER LENGTHY MESSAGE FOR TESTING PURPOSES',
			'OK',
		],
		variant: 'terminal',
	},
	parameters: {
		docs: {
			description: {
				story: 'Testing how the pager handles messages of varying lengths.',
			},
		},
	},
};

export const AllVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '2rem',
				alignItems: 'flex-start',
				padding: '1rem',
			}}
		>
			<div style={{ textAlign: 'center' }}>
				<h3 style={{ margin: '0 0 1rem', fontFamily: 'MS Sans Serif' }}>
					Default
				</h3>
				<Pager
					variant="default"
					messages={['NEW MESSAGE', 'CALL HOME', 'MEETING TODAY']}
				/>
			</div>
			<div style={{ textAlign: 'center' }}>
				<h3 style={{ margin: '0 0 1rem', fontFamily: 'MS Sans Serif' }}>
					Terminal
				</h3>
				<Pager
					variant="terminal"
					messages={['SYSTEM READY', 'ACCESS GRANTED', 'PROCESSING...']}
				/>
			</div>
			<div style={{ textAlign: 'center' }}>
				<h3 style={{ margin: '0 0 1rem', fontFamily: 'MS Sans Serif' }}>
					Retro
				</h3>
				<Pager
					variant="retro"
					messages={['WELCOME TO 1990', 'CHECK EMAIL', 'HAVE A NICE DAY']}
				/>
			</div>
			<div style={{ textAlign: 'center' }}>
				<h3 style={{ margin: '0 0 1rem', fontFamily: 'MS Sans Serif' }}>
					Amber
				</h3>
				<Pager
					variant="amber"
					messages={['AMBER DISPLAY', 'CLASSIC LOOK', 'OLD SCHOOL']}
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All available pager variants showcasing different authentic retro display styles with enhanced visual appeal and proper sizing.',
			},
		},
	},
};

export const InteractiveDemo: Story = {
	render: () => {
		const [currentPager, setCurrentPager] = React.useState(0);
		const pagers = [
			{
				variant: 'default' as const,
				messages: ['NEW MESSAGE', 'CALL HOME', 'MEETING @ 3PM', 'LOW BATTERY'],
			},
			{
				variant: 'terminal' as const,
				messages: [
					'SYSTEM READY',
					'ACCESS GRANTED',
					'PROCESSING...',
					'TASK COMPLETE',
				],
			},
			{
				variant: 'retro' as const,
				messages: [
					'WELCOME TO 1990',
					'CHECK YOUR EMAIL',
					'CONFERENCE CALL',
					'HAVE A NICE DAY',
				],
			},
			{
				variant: 'amber' as const,
				messages: [
					'AMBER DISPLAY',
					'CLASSIC LOOK',
					'RETRO VIBES',
					'OLD SCHOOL',
				],
			},
		];

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '2rem',
					padding: '2rem',
				}}
			>
				<div
					style={{
						display: 'flex',
						gap: '0.5rem',
						marginBottom: '1rem',
					}}
				>
					{pagers.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentPager(index)}
							style={{
								padding: '8px 16px',
								background: currentPager === index ? '#000080' : '#c0c0c0',
								color: currentPager === index ? 'white' : 'black',
								border: '2px solid',
								borderColor:
									currentPager === index
										? '#ffffff #808080 #808080 #ffffff'
										: '#ffffff #808080 #808080 #ffffff',
								fontFamily: 'MS Sans Serif',
								fontSize: '11px',
								cursor: 'pointer',
							}}
						>
							{pagers[index].variant.toUpperCase()}
						</button>
					))}
				</div>
				<Pager
					variant={pagers[currentPager].variant}
					messages={pagers[currentPager].messages}
					onButtonPress={(index) => {
						// Pager button pressed, message ${index + 1}
					}}
				/>
				<p
					style={{
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
						textAlign: 'center',
						margin: '1rem 0 0',
						color: '#666',
					}}
				>
					Click the variant buttons above to switch between different pager
					styles.
					<br />
					Use PREV/NEXT buttons on the pager to navigate through messages.
				</p>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive demo allowing you to switch between different pager variants and test the navigation functionality.',
			},
		},
	},
};
