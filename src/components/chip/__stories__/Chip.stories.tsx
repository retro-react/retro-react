import { ComponentMeta, StoryFn } from '@storybook/react';
import { Flex } from 'theme-ui';
import { Group } from '@src/components/group';
import { Chip } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Chip',
	component: Chip,
} as ComponentMeta<typeof Chip>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: StoryFn<typeof Chip> = (args) => {
	return (
		<Flex
			sx={{
				gap: 2,
			}}
		>
			<Chip {...args} />
			<Chip {...args} onClick={() => {}}>
				Clickable Chip
			</Chip>
		</Flex>
	);
};

const GroupTemplate: StoryFn<typeof Chip> = () => {
	return (
		<Group>
			<Chip color="primary">Pizza</Chip>
			<Chip color="secondary">Sushi</Chip>
			<Chip color="success">Burgers</Chip>
			<Chip color="error">Tacos</Chip>
			<Chip color="warn">Chicken</Chip>
		</Group>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	color: 'primary',
	children: 'Primary Chip',
};
/**
 * Grouped chips are used to display multiple chips in a group. Used with `Group` component.
 */
export const Grouped = GroupTemplate.bind({});
