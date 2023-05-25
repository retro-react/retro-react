import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../index';

const meta: Meta<typeof Table> = {
	title: 'Data Display/Table',
	component: Table,
	argTypes: {
		columnAlign: {
			control: {
				type: 'select',
			},
			options: ['left', 'center', 'right', 'justify'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Basic: Story = {
	args: {
		color: 'greyscale',
		headers: ['Name', 'Age', 'City'],
		data: [
			['John', '30', 'New York'],
			['Jane', '25', 'London'],
			['Jack', '20', 'Paris'],
			['Jimmy', '25', 'Tokyo'],
		],
		columnWidths: ['20%', '30%', '50%'],
		striped: false,
		bordered: true,
		pagination: false,
		sortable: true,
		onRowClick: undefined,
	},
};

/**
 * To enable pagination, set the `pagination` prop to `true`. You can also set the `paginationOptions` prop to configure the pagination. Here the `pageSize` is set to `10` and the `initialPage` is set to `1` as default.
 */
export const Pagination: Story = {
	args: {
		headers: ['Name', 'Age', 'City'],
		data: [
			['Jane', '25', 'London'],
			['Jack', '20', 'Paris'],
			['Jimmy', '25', 'Kathmandu'],
			['Helen', '32', 'Belgrade'],
			['James', '28', 'Tokyo'],
			['Steve', '32', 'San Francisco'],
			['Samantha', '45', 'Los Angeles'],
			['Simon', '27', 'Berlin'],
			['Sara', '34', 'Sydney'],
			['Stan', '38', 'Chicago'],
			['Selena', '23', 'Austin'],
			['Shawn', '40', 'Toronto'],
			['Stella', '29', 'New Delhi'],
			['Sam', '35', 'Mumbai'],
			['Sophie', '31', 'Shanghai'],
			['Sylvester', '33', 'Seoul'],
			['Sandy', '39', 'Dallas'],
			['Susan', '26', 'Boston'],
			['Scott', '36', 'Hong Kong'],
		],
		columnWidths: ['20%', '30%', '50%'],
		striped: false,
		bordered: true,
		onRowClick: undefined,
		pagination: true,
		sortable: true,
	},
};
