import { Meta, StoryObj } from '@storybook/react';
import { Tab, TabContent, Tabs } from '../index';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
	argTypes: {
		children: { control: false },
		defaultActiveTabLabel: {
			description: 'Label of the tab selected initially in uncontrolled mode.',
		},
		activeTabLabel: {
			description: 'Currently selected tab label when used in controlled mode.',
		},
		onTabChange: {
			description: 'Called with the new label whenever the active tab changes.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	args: {
		defaultActiveTabLabel: 'general',
	},
	render: (args) => (
		<Tabs {...args}>
			<Tab label="general">General</Tab>
			<Tab label="advanced">Advanced</Tab>
			<Tab label="about">About</Tab>
			<TabContent label="general">
				Configure the basic settings for your application here.
			</TabContent>
			<TabContent label="advanced">
				Fine-tune performance, caching and experimental flags.
			</TabContent>
			<TabContent label="about">
				retro-react v1.0, a React component library with a 90s flair.
			</TabContent>
		</Tabs>
	),
};
