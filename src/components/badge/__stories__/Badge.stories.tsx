import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from '../index';

export default {
	title: 'Components/Badge',
	component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => (
	<Badge {...args}>
		<div
			style={{
				display: 'grid',
				placeItems: 'center',
				// Width and height are required for the badge to show correctly
				width: '100px',
				height: '100px',
				border: '1px solid black',
			}}
		>
			100x100
		</div>
	</Badge>
);

export const Default = Template.bind({});
Default.args = {
	color: 'primary',
	badgeContent: 15,
	size: 'medium',
	pulse: false,
	showZero: false,
};

export const WithWords = Template.bind({});
WithWords.args = {
	color: 'primary',
	badgeContent: 'NEW',
	size: 'medium',
	pulse: false,
	showZero: false,
};

export const Highlight = Template.bind({});
Highlight.args = {
	color: 'highlight',
	badgeContent: 'NEW',
	size: 'medium',
	pulse: false,
	showZero: false,
};

export const Pulsating = Template.bind({});
Pulsating.args = {
	color: 'primary',
	badgeContent: 5,
	pulse: true,
	size: 'medium',
	showZero: false,
};
