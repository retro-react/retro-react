import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../index';

const meta: Meta<typeof Table> = {
	title: 'Data Display/Table',
	component: Table,
	argTypes: {
		color: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warning',
				'greyscale',
			],
		},
		columnAlign: {
			control: 'select',
			options: ['left', 'center', 'right', 'justify'],
		},
		striped: { description: 'Apply alternating row backgrounds.' },
		bordered: { description: 'Draw borders between cells.' },
		sortable: {
			description: 'Allow clicking a header to sort by that column.',
		},
		pagination: {
			description: 'Render a paginated footer instead of all rows.',
		},
		maxHeight: {
			description: 'Constrain the body height and make it scrollable.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Table>;

const headers = ['Name', 'Role', 'Location'];
const data = [
	['Ada Lovelace', 'Engineer', 'London'],
	['Grace Hopper', 'Admiral', 'New York'],
	['Alan Turing', 'Cryptographer', 'Cambridge'],
	['Linus Torvalds', 'Maintainer', 'Helsinki'],
];

export const Default: Story = {
	args: {
		color: 'greyscale',
		headers,
		data,
		columnWidths: ['30%', '30%', '40%'],
		striped: false,
		bordered: true,
		sortable: true,
	},
};

export const Striped: Story = {
	args: {
		...Default.args,
		striped: true,
	},
};

export const Pagination: Story = {
	args: {
		headers,
		data: Array.from({ length: 23 }, (_, i) => [
			`User ${i + 1}`,
			i % 2 === 0 ? 'Engineer' : 'Designer',
			['London', 'Tokyo', 'Berlin', 'Austin'][i % 4],
		]),
		columnWidths: ['30%', '30%', '40%'],
		bordered: true,
		sortable: true,
		pagination: true,
		paginationOptions: { pageSize: 8, initialPage: 1 },
	},
};

export const Scrollable: Story = {
	args: {
		headers,
		data: Array.from({ length: 30 }, (_, i) => [
			`Row ${i + 1}`,
			'Operator',
			'Remote',
		]),
		bordered: true,
		maxHeight: '240px',
	},
};
