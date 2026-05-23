import type { Meta, StoryObj } from '@storybook/react';
import { Scrollbar, ScrollbarVariant } from '../index';

const meta: Meta<typeof Scrollbar> = {
	title: 'Components/Scrollbar',
	component: Scrollbar,
	parameters: {
		docs: {
			description: {
				component:
					'Applies a retro custom scrollbar style to its content. Works in WebKit-based browsers via `::-webkit-scrollbar`.',
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'windows', 'terminal', 'amber'],
			description:
				'Scrollbar style: `default` (Win95/98), `windows` (Win3.1), `terminal`, `amber`.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Scrollbar>;

const sampleContent = `It was a time when grunge ruled the airwaves, and everybody was dialing up to the world wide web. Jordan soared on the basketball court, while Ross and Rachel kept us glued to our TV sets.

Life was simpler back then. We rocked out to Nirvana and Pearl Jam on our Walkmans, and we hopped on our skateboards to cruise the streets. Our cell phones were as big as bricks, but we didn't care; we were too busy playing Snake or trading Pokémon cards.

The 90s brought us the Spice Girls and boy bands, and we all wanted to be like our favorite TV characters from Saved by the Bell or Beverly Hills, 90210. We marveled at the special effects in Jurassic Park.

Those were the days of AOL Instant Messenger, of Saturday morning cartoons, and of rollerblading in the park.`;

const ScrollBox = ({ variant }: { variant: ScrollbarVariant }) => (
	<Scrollbar variant={variant}>
		<div
			style={{
				width: 260,
				height: 220,
				overflowY: 'scroll',
				background: 'white',
				padding: '1rem',
				border: '2px inset #c0c0c0',
				fontFamily: 'MS Sans Serif',
				fontSize: 12,
				lineHeight: 1.5,
			}}
		>
			{sampleContent}
		</div>
	</Scrollbar>
);

export const Default: Story = {
	args: { variant: 'default' },
	render: (args) => <ScrollBox variant={args.variant ?? 'default'} />,
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
			{(['default', 'windows', 'terminal', 'amber'] as const).map((v) => (
				<div key={v}>
					<div
						style={{
							fontFamily: 'MS Sans Serif',
							fontSize: 11,
							marginBottom: 6,
						}}
					>
						{v}
					</div>
					<ScrollBox variant={v} />
				</div>
			))}
		</div>
	),
};
