import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Flex } from 'theme-ui';
import { Button } from '@src/components/button';
import { Alert, AlertProps } from '../index';

export default {
	title: 'Components/Alert',
	component: Alert,
	argTypes: {
		color: {
			control: 'color',
		},
		title: {
			control: 'text',
		},
		open: {
			control: 'boolean',
		},
		showCloseButton: {
			control: 'boolean',
		},
		onClose: {
			control: false,
		},
		children: {
			control: 'text',
		},
	},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({
	color,
	title,
	showCloseButton,
	children,
}: AlertProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setOpen(!open)}>Toggle Alert</Button>
			<Alert
				color={color}
				title={title}
				open={open}
				showCloseButton={showCloseButton}
				onClose={() => setOpen(false)}
			>
				{children}
			</Alert>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	color: 'primary',
	title: 'Primary Alert',
	open: true,
	showCloseButton: true,
	children: 'The quick brown fox jumps over the lazy dog.',
};

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
