import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../text';
import { Popover, PopoverButton, PopoverContent } from '../index';

const meta: Meta<typeof Popover> = {
	title: 'Components/Popover',
	component: Popover,
	parameters: {
		docs: {
			description: {
				component:
					'A Windows 3.1-styled popover that renders its content in a portal. Compose with `PopoverButton` and `PopoverContent`.',
			},
		},
		backgrounds: {
			default: 'win31',
			values: [{ name: 'win31', value: '#C0C0C0' }],
		},
	},
	argTypes: {
		position: {
			options: ['top', 'right', 'bottom', 'left'],
			control: { type: 'radio' },
			description: 'Where the content opens relative to the trigger.',
		},
		closeOnClickOutside: {
			control: { type: 'boolean' },
			description: 'Dismiss the popover when clicking outside.',
		},
		isOpen: {
			description:
				'Optional. When provided, the popover becomes controlled — pair with `onOpenChange`.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	args: {
		position: 'bottom',
		closeOnClickOutside: true,
	},
	render: (args) => (
		<div style={{ display: 'flex', justifyContent: 'center', padding: 80 }}>
			<Popover {...args}>
				<PopoverButton>Open Popover</PopoverButton>
				<PopoverContent>
					<Text
						variant="paragraph"
						sx={{ margin: 0, fontSize: '11px', lineHeight: 1.3 }}
					>
						This popover is portal-rendered with authentic Win31 styling.
					</Text>
				</PopoverContent>
			</Popover>
		</div>
	),
};

export const Positions: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: 80,
				padding: 80,
				justifyItems: 'center',
			}}
		>
			{(['top', 'right', 'bottom', 'left'] as const).map((position) => (
				<Popover key={position} position={position}>
					<PopoverButton>{position}</PopoverButton>
					<PopoverContent>
						<Text sx={{ margin: 0, fontSize: '11px' }}>
							Position: {position}
						</Text>
					</PopoverContent>
				</Popover>
			))}
		</div>
	),
};
