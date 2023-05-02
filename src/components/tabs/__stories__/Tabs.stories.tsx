// tabs.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Tab, TabContent, Tabs, TabsProps } from '../index';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
	argTypes: {
		children: {
			control: false,
		},
	},
	args: {
		defaultActiveTabLabel: 'tab3',
		color: 'primary',
		pattern: 'noise',
	},
	render: ({ ...rest }: TabsProps) => {
		return (
			<Tabs {...rest}>
				<Tab label="tab1">Fresh Prince</Tab>
				<TabContent label="tab1">
					In West Philadelphia, born and raised, on the playground is where I
					spent most of my days.
				</TabContent>
				<Tab label="tab2">Nirvana</Tab>
				<TabContent label="tab2">
					Come as you are, as you were, as I want you to be.
				</TabContent>
				<Tab label="tab3">Tamagotchi</Tab>
				<TabContent label="tab3">
					Caring for a virtual pet was never more fun than with a Tamagotchi in
					the 90s.
				</TabContent>
				<Tab label="tab4">The Matrix</Tab>
				<TabContent label="tab4">
					Welcome to the real world. Remember, there is no spoon.
				</TabContent>
				<Tab label="tab5">Y2K</Tab>
				<TabContent label="tab5">
					The turn of the millennium brought the Y2K bug, making everyone
					question if computers would survive the year 2000.
				</TabContent>
			</Tabs>
		);
	},
};
