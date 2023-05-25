import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Flex } from 'theme-ui';
import { Button } from '@src/components/button';
import { Alert } from '../index';

export default {
	title: 'Components/Alert',
	component: Alert,
	argTypes: {
		color: {
			control: false,
		},
		title: {
			control: false,
		},
		open: {
			control: false,
		},
		position: {
			control: false,
		},
		showCloseButton: {
			control: false,
		},
		onClose: {
			control: false,
		},
	},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Button onClick={() => setOpen(!open)}>Toggle Alert</Button>
			<Alert
				color="primary"
				title="Primary Alert"
				open={open}
				showCloseButton={true}
				onClose={() => setOpen(false)}
			>
				The quick brown fox jumps over the lazy dog.
			</Alert>
		</div>
	);
};

export const Default = Template.bind({});

export const AlertColors: ComponentStory<typeof Alert> = () => (
	<Flex sx={{ flexDirection: 'column', gap: '1rem', width: '300px' }}>
		<Alert color="primary" title="Primary Alert">
			The quick brown fox jumps over the lazy dog.
		</Alert>
		<Alert color="secondary" title="Secondary Alert">
			The quick brown fox jumps over the lazy dog.
		</Alert>
		<Alert color="success" title="Success Alert">
			The quick brown fox jumps over the lazy dog.
		</Alert>
		<Alert color="warn" title="Warn Alert">
			The quick brown fox jumps over the lazy dog.
		</Alert>
		<Alert color="error" title="Error Alert">
			The quick brown fox jumps over the lazy dog.
		</Alert>
	</Flex>
);
