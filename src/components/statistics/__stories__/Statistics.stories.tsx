import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'theme-ui';
import { Statistics } from '../index';

const meta: Meta<typeof Statistics> = {
	title: 'Data Display/Statistics',
	component: Statistics,
	argTypes: {
		icon: {
			control: {
				disable: true,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Statistics>;

export const Basic: Story = {
	args: {
		color: 'primary',
		number: '1,000',
		label: 'Total Investments',
		prefix: '$',
		size: 'medium',
		direction: 'vertical',
		onClick: () => {
			// clicked
		},
	},
	render: (args) => {
		return (
			<Flex>
				<Statistics {...args} />
				<Statistics {...args} />
				<Statistics {...args} />
			</Flex>
		);
	},
};

export const WithIcon: Story = {
	args: {
		color: 'primary',
		number: '1,000',
		label: 'Total Investments',
		size: 'medium',
		direction: 'vertical',
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1V6h2v2h2.5v2H10a.5.5 0 100 1h4a2.5 2.5 0 110 5h-1v2h-2v-2H8.5v-2z" />
			</svg>
		),
	},
	render: (args) => {
		return <Statistics {...args} />;
	},
};
