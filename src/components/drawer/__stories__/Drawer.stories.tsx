import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../../components/button';
import { Text } from '../../../components/text/Text';
import { Drawer } from '../Drawer';

const meta: Meta<typeof Drawer> = {
	title: 'Components/Drawer',
	component: Drawer,
	argTypes: {
		isOpen: { control: { disable: true } },
		setIsOpen: { control: { disable: true } },
		direction: {
			control: { type: 'radio' },
			options: ['left', 'right'],
			description: 'Side of the viewport from which the drawer slides in.',
		},
		color: {
			description: 'Color token used for the drawer background.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerDemo = (args: React.ComponentProps<typeof Drawer>) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open drawer</Button>
			<Drawer {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 16,
						padding: 24,
						height: '100%',
					}}
				>
					<Text variant="h4" color="white">
						Settings
					</Text>
					<Text color="white">
						Side content rendered in a portal. Press Escape or click outside to
						dismiss.
					</Text>
					<div style={{ flex: 1 }} />
					<Button onClick={() => setIsOpen(false)}>Close</Button>
				</div>
			</Drawer>
		</>
	);
};

export const Default: Story = {
	args: { color: 'primary', direction: 'right' },
	render: (args) => <DrawerDemo {...args} />,
};

export const LeftSide: Story = {
	args: { color: 'primary', direction: 'left' },
	render: (args) => <DrawerDemo {...args} />,
};
