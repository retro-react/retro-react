import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../text';
import { Popover, PopoverButton, PopoverContent } from '../index';

const meta: Meta = {
	title: 'Components/Popover',
	component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
	args: {
		children: [
			<PopoverButton key="button">Open Popover</PopoverButton>,
			<PopoverContent key="content">
				<Text variant="paragraph">This is the content of the popover.</Text>
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
