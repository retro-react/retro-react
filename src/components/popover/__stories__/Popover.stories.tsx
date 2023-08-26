import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../text';
import { Popover, PopoverButton, PopoverContent } from '../index';

const meta: Meta = {
	title: 'Components/Popover',
	component: Popover,
	parameters: {
		docs: {
			description: {
				component:
					'The Popover component is a versatile UI element that can be used to display additional information or provide contextual actions. The Popover consists of two main parts: the trigger (PopoverButton) and the content (PopoverContent). The trigger is the UI element that users interact with to make the Popover appear, typically a button. The content is the information or actions you want to present within the Popover. You can customize the Popover position relative to the trigger and define whether it should close when clicking outside of it.',
			},
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
			<PopoverButton key="button">Open Popover</PopoverButton>,
			<PopoverContent key="content">
				<Text
					variant="paragraph"
					sx={{
						textAlign: 'center',
						backgroundColor: 'lightgrey',
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
