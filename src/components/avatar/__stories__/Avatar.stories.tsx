import { ComponentMeta, StoryFn } from '@storybook/react';
import { Badge } from '../../../components/badge';
import { Group } from '../../../components/group';
import { Avatar } from '../index';

export default {
	title: 'Components/Avatar',
	component: Avatar,
	argTypes: {
		color: {
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warn',
				'greyscale',
				'greyscale-dark',
			],
			description: 'Background color used when no image is loaded.',
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
			description: 'Size of the avatar.',
		},
		variant: {
			control: { type: 'radio' },
			options: ['circle', 'square'],
			description: 'Shape of the avatar.',
		},
		rounded: {
			control: 'boolean',
			description: 'Applies extra rounding (mainly visible on square variant).',
		},
		src: {
			control: 'text',
			description:
				'Image URL. Falls back to children (initials) on error or if omitted.',
		},
		children: {
			control: 'text',
			description: 'Fallback initials shown when no image is available.',
		},
	},
} as ComponentMeta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'AB',
	color: 'primary',
	size: 'medium',
	variant: 'circle',
	src: 'https://i.pravatar.cc/300',
};

export const Initials = Template.bind({});
Initials.args = {
	children: 'AB',
	color: 'primary',
	size: 'medium',
	variant: 'circle',
};

export const Sizes: StoryFn<typeof Avatar> = () => (
	<Group>
		<Avatar size="small">SM</Avatar>
		<Avatar size="medium">MD</Avatar>
		<Avatar size="large">LG</Avatar>
	</Group>
);

export const Grouped: StoryFn<typeof Avatar> = () => {
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

export const WithBadge: StoryFn<typeof Avatar> = () => (
	<Badge badgeContent={5} color="secondary">
		<Avatar color="primary">AB</Avatar>
	</Badge>
);
