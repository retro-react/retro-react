import type { Meta, StoryObj } from '@storybook/react';
import { Pager } from '../index';

const meta: Meta<typeof Pager> = {
	title: 'Components/Pager',
	component: Pager,
	parameters: {
		docs: {
			description: {
				component:
					'A retro pager (beeper) display reminiscent of 80s/90s communication devices. Cycles through a list of messages with PREV/NEXT buttons.',
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'terminal', 'retro', 'amber'],
			description: 'Display colour scheme.',
		},
		messages: {
			control: { type: 'object' },
			description: 'List of messages displayed on the pager screen.',
		},
		deviceLabel: {
			description: 'Brand label shown above the screen.',
		},
		onButtonPress: {
			description:
				'Fired with the new message index when PREV/NEXT is pressed.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Pager>;

export const Default: Story = {
	args: {
		variant: 'default',
		messages: ['NEW MESSAGE', 'CALL HOME', 'MEETING @ 3PM', 'LOW BATTERY'],
	},
};

export const Variants: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
				gap: '2rem',
			}}
		>
			<Pager
				variant="default"
				messages={['NEW MESSAGE', 'CALL HOME', 'MEETING TODAY']}
			/>
			<Pager
				variant="terminal"
				messages={['SYSTEM READY', 'ACCESS GRANTED', 'PROCESSING...']}
			/>
			<Pager
				variant="retro"
				messages={['WELCOME TO 1990', 'CHECK EMAIL', 'HAVE A NICE DAY']}
			/>
			<Pager
				variant="amber"
				messages={['AMBER DISPLAY', 'CLASSIC LOOK', 'OLD SCHOOL']}
			/>
		</div>
	),
};

export const Localized: Story = {
	args: {
		variant: 'retro',
		messages: ['NUEVO MENSAJE', 'LLAMAR A CASA', 'REUNIÓN @ 3PM'],
		deviceLabel: 'RETROCOM-ES',
		prevLabel: '◀ ANTERIOR',
		nextLabel: 'SIGUIENTE ▶',
		renderPageIndicator: (c, t) => `${c} de ${t}`,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Override `deviceLabel`, `prevLabel`, `nextLabel`, and `renderPageIndicator` for localization.',
			},
		},
	},
};
