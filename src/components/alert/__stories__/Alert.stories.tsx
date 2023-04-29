import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Alert',
	component: Alert,
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
				The quick brown fox jumps over the lazy dog.
			</Alert>
			<Alert {...args} color="secondary" title="Secondary Alert">
				The quick brown fox jumps over the lazy dog.
			</Alert>
			<Alert {...args} color="success" title="Success Alert">
				The quick brown fox jumps over the lazy dog.
			</Alert>
			<Alert {...args} color="warn" title="Warn Alert">
				The quick brown fox jumps over the lazy dog.
			</Alert>
			<Alert {...args} color="error" title="Error Alert">
				The quick brown fox jumps over the lazy dog.
			</Alert>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	title: 'Primary Alert',
	children: 'The quick brown fox jumps over the lazy dog.',
};
