import { ComponentMeta, StoryFn } from '@storybook/react';
import { Flex } from 'theme-ui';
import { Button } from '@src/components/button';
import { Group } from '@src/components/group';
import { Text } from '@src/components/text';
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
				alignItems: 'center',
			}}
		>
			<Chip {...args} />
			<Chip
				{...args}
				onClick={() => {
					/* Chip clicked! */
				}}
			>
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
			<Chip color="greyscale">Lobster</Chip>
		</Group>
	);
};

/**
 * Shows the visual difference between chips and buttons
 */
const ComparisonTemplate: StoryFn<typeof Chip> = () => {
	return (
		<div
			style={{
				padding: '2rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<Text>Chips vs Buttons - Visual Differentiation:</Text>

			<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<Text>Chips (flat labels):</Text>
				<Chip color="primary">Tag</Chip>
				<Chip color="success">Active</Chip>
				<Chip color="warn">Warning</Chip>
			</div>

			<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<Text>Buttons (3D interactive):</Text>
				<Button size="small">Action</Button>
				<Button size="small" variant="outline">
					Save
				</Button>
				<Button size="small" variant="primary">
					Cancel
				</Button>
			</div>

			<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<Text>Clickable chips:</Text>
				<Chip color="primary" onClick={() => {}}>
					Clickable
				</Chip>
				<Chip color="secondary" onClick={() => {}}>
					Interactive
				</Chip>
			</div>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	color: 'primary',
	children: 'Primary Chip',
};

export const Highlight = Template.bind({});
Highlight.args = {
	color: 'highlight',
	children: 'NEW',
};

/**
 * Grouped chips are used to display multiple chips in a group. Used with `Group` component.
 */
export const Grouped = GroupTemplate.bind({});

/**
 * Shows visual comparison between chips and buttons
 */
export const ChipsVsButtons = ComparisonTemplate.bind({});
