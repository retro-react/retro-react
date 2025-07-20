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
					'The Popover component is a WIN31-styled dropdown element for displaying contextual information. Features authentic Windows 3.1 dialog styling with proper raised borders and drop shadows.',
			},
		},
		backgrounds: {
			default: 'win31',
			values: [
				{
					name: 'win31',
					value: '#C0C0C0',
				},
			],
		},
	},
	argTypes: {
		position: {
			options: ['top', 'right', 'bottom', 'left'],
			control: { type: 'radio' },
			description: 'Position of the popover relative to the trigger.',
			table: {
				defaultValue: { summary: 'bottom' },
			},
		},
		closeOnClickOutside: {
			description:
				'Whether or not the popover should close when clicking outside of it.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
	args: {
		closeOnClickOutside: true,
		position: 'bottom',
		children: [
			<PopoverButton key="button">📁 Open Popover</PopoverButton>,
			<PopoverContent key="content">
				<Text
					variant="paragraph"
					sx={{
						textAlign: 'left',
						margin: 0,
						fontSize: '11px',
						lineHeight: 1.3,
					}}
				>
					Welcome to Windows 3.1! This popover demonstrates authentic retro
					styling with proper borders and typography.
				</Text>
			</PopoverContent>,
		],
	},
	render: (args) => (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				padding: '100px',
			}}
		>
			<Popover {...args} />
		</div>
	),
};
