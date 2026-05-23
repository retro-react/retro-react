import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from '../index';

export default {
	title: 'Components/Badge',
	component: Badge,
	argTypes: {
		color: {
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warn',
				'highlight',
			],
			description: 'Color of the badge dot.',
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
			description: 'Size of the badge.',
		},
		badgeContent: {
			control: 'text',
			description:
				'Text or number rendered inside the badge. Hidden when 0/null/undefined unless `showZero` is true.',
		},
		pulse: {
			control: 'boolean',
			description: 'Animates the badge with a pulsing effect.',
		},
		showZero: {
			control: 'boolean',
			description: 'Renders the badge even when the numeric content is 0.',
		},
	},
} as Meta;

const Anchor = () => (
	<div
		style={{
			display: 'grid',
			placeItems: 'center',
			width: 80,
			height: 80,
			border: '1px solid #808080',
			background: '#c0c0c0',
		}}
	>
		Inbox
	</div>
);

const Template: Story<BadgeProps> = (args) => (
	<Badge {...args}>
		<Anchor />
	</Badge>
);

export const Default = Template.bind({});
Default.args = {
	color: 'primary',
	badgeContent: 12,
	size: 'medium',
};

export const TextContent = Template.bind({});
TextContent.args = {
	color: 'highlight',
	badgeContent: 'NEW',
	size: 'medium',
};

export const Pulse = Template.bind({});
Pulse.args = {
	color: 'error',
	badgeContent: 3,
	pulse: true,
	size: 'medium',
};
