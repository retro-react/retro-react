import { ComponentMeta, StoryFn } from '@storybook/react';
import { Badge } from '@src/components/badge';
import { Group } from '@src/components/group';
import { Avatar } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Avatar',
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: StoryFn<typeof Avatar> = (args) => {
	return (
		<div style={{ display: 'flex', gap: '1rem' }}>
			<Avatar {...args} src="" />
			<Avatar {...args} />
		</div>
	);
};

const image = 'https://i.pravatar.cc/300';

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	children: 'AB',
	size: 'medium',
	variant: 'circle',
	src: image,
};

const GroupTemplate: StoryFn<typeof Avatar> = () => {
	const randomImage = () => `https://i.pravatar.cc/300?random=${Math.random()}`;
	return (
		<Group>
			<Avatar color="primary" src={randomImage()} />
			<Avatar color="secondary" src={randomImage()} />
			<Avatar color="success" src={randomImage()} />
			<Avatar color="error" src={randomImage()} />
			<Avatar color="warn" src={randomImage()} />
		</Group>
	);
};

/**
 * Using the `Group` component, you can group multiple avatars together.
 */
export const Grouped = GroupTemplate.bind({});

const WithBadgeTemplate: StoryFn<typeof Avatar> = () => {
	return (
		<Badge count={5} color="secondary">
			<Avatar color="primary">AB</Avatar>
		</Badge>
	);
};
/**
 * You can add a badge to the avatar by wrapping it in a `Badge` component.
 */
export const WithBadge = WithBadgeTemplate.bind({});
