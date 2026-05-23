import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from 'theme-ui';
import { Alert } from '../index';

export default {
	title: 'Components/Alert',
	component: Alert,
	argTypes: {
		color: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warn', 'error'],
			description: 'Semantic color of the alert.',
		},
		title: {
			control: 'text',
			description: 'Alert heading text.',
		},
		showCloseButton: {
			control: 'boolean',
			description: 'Renders a close button in the top-right corner.',
		},
		open: {
			control: 'boolean',
			description:
				'If provided, the Alert renders into a Portal positioned via `position`. Leave undefined for inline rendering.',
		},
		position: {
			control: { type: 'select' },
			options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
			description: 'Portal position when `open` is set.',
		},
		onClose: { control: false },
	},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
	color: 'success',
	title: 'Account created',
	showCloseButton: true,
	children: 'Your account has been created successfully.',
};

export const Variants: ComponentStory<typeof Alert> = () => (
	<Flex sx={{ flexDirection: 'column', gap: '1rem', width: '320px' }}>
		<Alert color="primary" title="Information">
			A new update is available for download.
		</Alert>
		<Alert color="success" title="Success">
			Your changes have been saved.
		</Alert>
		<Alert color="warn" title="Warning">
			Your session will expire in 5 minutes.
		</Alert>
		<Alert color="error" title="Error">
			Unable to connect to the server.
		</Alert>
	</Flex>
);

export const Dismissible = Template.bind({});
Dismissible.args = {
	color: 'warn',
	title: 'Unsaved changes',
	showCloseButton: true,
	children:
		'You have unsaved changes. They will be lost if you leave this page.',
};
