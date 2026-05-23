import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from 'theme-ui';
import { Statistics } from '../index';

const meta: Meta<typeof Statistics> = {
	title: 'Data Display/Statistics',
	component: Statistics,
	argTypes: {
		icon: { control: { disable: true } },
		number: { description: 'The primary numeric value to display.' },
		label: { description: 'Caption shown beneath or beside the number.' },
		prefix: {
			description:
				'Small text rendered before the number (e.g. a currency symbol).',
		},
		suffix: {
			description: 'Small text rendered after the number (e.g. a unit).',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Overall scale of number, label and icon.',
		},
		direction: {
			control: 'inline-radio',
			options: ['horizontal', 'vertical'],
			description: 'Layout of label relative to the number.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Statistics>;

const DollarIcon = (
	<svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
		<path fill="none" d="M0 0h24v24H0z" />
		<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1V6h2v2h2.5v2H10a.5.5 0 100 1h4a2.5 2.5 0 110 5h-1v2h-2v-2H8.5v-2z" />
	</svg>
);

export const Default: Story = {
	args: {
		number: '42,500',
		label: 'Total Revenue',
		prefix: '$',
		size: 'medium',
		direction: 'vertical',
	},
};

export const Dashboard: Story = {
	render: () => (
		<Flex sx={{ gap: 4 }}>
			<Statistics number="42,500" label="Total Revenue" prefix="$" />
			<Statistics number="1,284" label="New Customers" />
			<Statistics number="98.6" label="Uptime" suffix="%" />
		</Flex>
	),
};

export const WithIcon: Story = {
	args: {
		number: '1,000',
		label: 'Total Investments',
		prefix: '$',
		icon: DollarIcon,
	},
};

export const Horizontal: Story = {
	args: {
		number: '256',
		label: 'Active Users',
		direction: 'horizontal',
		icon: DollarIcon,
	},
};

export const Sizes: Story = {
	render: () => (
		<Flex sx={{ gap: 4, alignItems: 'center' }}>
			<Statistics number="120" label="Small" size="small" />
			<Statistics number="120" label="Medium" size="medium" />
			<Statistics number="120" label="Large" size="large" />
		</Flex>
	),
};
