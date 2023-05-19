import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../text';
import { Popover, PopoverButton, PopoverContent } from '../index';

const meta: Meta = {
	title: 'Components/Popover',
	component: Popover,
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
			<PopoverButton key="button">Open Popover</PopoverButton>,
			<PopoverContent key="content">
				<Text
					variant="paragraph"
					sx={{
						textAlign: 'center',
					}}
				>
					This is the content of the popover. You can click outside of the
					popover to close it.
				</Text>
			</PopoverContent>,
		],
		sx: {
			display: 'flex',
			justifyContent: 'center',
		},
	},
	render: function renderStory(args) {
		return <Popover {...args}>{args.children}</Popover>;
	},
};
