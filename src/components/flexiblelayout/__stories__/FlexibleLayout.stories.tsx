import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../text';
import {
	FlexibleLayout,
	LayoutFooter,
	LayoutHeader,
	LayoutMain,
	LayoutSidebarLeft,
	LayoutSidebarRight,
} from '../FlexibleLayout';

const meta: Meta<typeof FlexibleLayout> = {
	title: 'Layout/FlexibleLayout',
	component: FlexibleLayout,
	argTypes: {
		children: { control: false },
	},
};

export default meta;
type Story = StoryObj<typeof FlexibleLayout>;

const cellStyles = {
	'& .flexible-layout-child-cell': {
		border: '1px solid #888',
		backgroundColor: '#f3f3f3',
		padding: 2,
	},
};

export const Default: Story = {
	args: { sx: cellStyles },
	render: (args) => (
		<FlexibleLayout {...args}>
			<LayoutHeader>
				<Text variant="h4">Dashboard</Text>
			</LayoutHeader>
			<LayoutSidebarLeft>
				<ul style={{ paddingLeft: 16 }}>
					<li>Home</li>
					<li>Reports</li>
					<li>Settings</li>
				</ul>
			</LayoutSidebarLeft>
			<LayoutMain>
				<Text variant="paragraph">
					Main content goes here. The layout uses CSS Grid and reflows on
					smaller screens, sidebars stack above and below the main area.
				</Text>
			</LayoutMain>
			<LayoutSidebarRight>
				<Text variant="paragraph">Activity feed</Text>
			</LayoutSidebarRight>
			<LayoutFooter>
				<Text variant="paragraph">© 2026 Acme Inc.</Text>
			</LayoutFooter>
		</FlexibleLayout>
	),
};

export const HeaderMainOnly: Story = {
	args: { sx: cellStyles },
	render: (args) => (
		<FlexibleLayout {...args}>
			<LayoutHeader>
				<Text variant="h4">Article title</Text>
			</LayoutHeader>
			<LayoutMain>
				<Text variant="paragraph">
					Slots are optional, render only the regions you need.
				</Text>
			</LayoutMain>
		</FlexibleLayout>
	),
};
