import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../../components/button';
import { Text } from '../../../components/text';
import { colorOptions } from '../../../utils/getColorScheme';
import { Modal } from '../index';

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
	argTypes: {
		color: {
			control: { type: 'select' },
			options: [...colorOptions, 'greyscale'],
			description: 'Color token applied to the title bar.',
		},
		title: {
			control: { type: 'text' },
			description: 'Title rendered in the Windows 3.1 style title bar.',
		},
		backdrop: {
			description:
				'When true, renders a click-to-dismiss backdrop behind the modal.',
		},
		open: { control: { disable: true } },
		onClose: { control: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = (args: React.ComponentProps<typeof Modal>) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setOpen(true)}>Open modal</Button>
			<Modal {...args} open={open} onClose={() => setOpen(false)} />
		</>
	);
};

export const Default: Story = {
	args: {
		title: 'Confirm action',
		backdrop: true,
		color: 'primary',
		children: (
			<Text variant="body1" color="black">
				Are you sure you want to continue? Press Escape or click the close
				button to dismiss.
			</Text>
		),
	},
	render: (args) => <ModalDemo {...args} />,
};

export const NoBackdrop: Story = {
	args: {
		title: 'Information',
		backdrop: false,
		color: 'secondary',
		children: (
			<Text variant="body1" color="black">
				This modal has no backdrop, page content remains visible behind it.
			</Text>
		),
	},
	render: (args) => <ModalDemo {...args} />,
};

export const LongContent: Story = {
	args: {
		title: 'Release notes',
		backdrop: true,
		color: 'success',
		children: (
			<div>
				<Text variant="body1" color="black">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
				<br />
				<Text variant="body1" color="black">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Text>
				<br />
				<Text variant="body1" color="black">
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id est laborum.
				</Text>
			</div>
		),
	},
	render: (args) => <ModalDemo {...args} />,
};
