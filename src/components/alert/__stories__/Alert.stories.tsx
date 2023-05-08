import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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
	},
} as ComponentMeta<typeof Alert>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Alert> = (args) => {
	return (
		<div
			style={{
				width: '50vmin',
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
			}}
		>
			<Alert {...args} color="primary" title="Primary Alert">
				{args.children}
			</Alert>
			<Alert {...args} color="secondary" title="Secondary Alert">
				{args.children}
			</Alert>
			<Alert {...args} color="success" title="Success Alert">
				{args.children}
			</Alert>
			<Alert {...args} color="warn" title="Warn Alert">
				{args.children}
			</Alert>
			<Alert {...args} color="error" title="Error Alert">
				{args.children}
			</Alert>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'Primary Alert',
	children: 'The quick brown fox jumps over the lazy dog.',
	showCloseButton: true,
	onClose: action('onClose'),
	sx: {
		width: '300px',
	},
};
