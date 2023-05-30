import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@src/components/button';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text/Text';
import { Drawer } from '../Drawer';

const meta: Meta<typeof Drawer> = {
	title: 'Components/Drawer',
	component: Drawer,
	argTypes: {
		isOpen: {
			control: {
				disable: true,
			},
		},
		setIsOpen: {
			control: {
				disable: true,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
	args: {
		isOpen: false,
		setIsOpen: () => {},
		color: 'primary',
		direction: 'right',
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<Button onClick={() => setIsOpen(true)}>Toggle Drawer</Button>
				<Drawer {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
					<Container
						sx={{
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							p: 3,
						}}
					>
						<Text color="white">Drawer Content</Text>
						<div style={{ flex: 1 }} />
						<Button onClick={() => setIsOpen(false)}>Close Drawer</Button>
					</Container>
				</Drawer>
			</>
		);
	},
};
