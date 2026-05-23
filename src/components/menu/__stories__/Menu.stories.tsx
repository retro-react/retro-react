import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem } from '../index';

const meta: Meta<typeof Menu> = {
	title: 'Components/Menu',
	component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
	render: () => (
		<Menu>
			<MenuItem>New Document</MenuItem>
			<MenuItem>Open File...</MenuItem>
			<MenuItem>Save</MenuItem>
			<MenuItem>Save As...</MenuItem>
			<MenuItem>Exit</MenuItem>
		</Menu>
	),
};

export const ContextMenu: Story = {
	render: () => (
		<Menu>
			<MenuItem>Cut</MenuItem>
			<MenuItem>Copy</MenuItem>
			<MenuItem>Paste</MenuItem>
			<MenuItem>Delete</MenuItem>
			<MenuItem>Properties</MenuItem>
		</Menu>
	),
};

export const WithHandlers: Story = {
	render: () => (
		<Menu>
			<MenuItem onClick={() => alert('New')}>New</MenuItem>
			<MenuItem onClick={() => alert('Open')}>Open...</MenuItem>
			<MenuItem onClick={() => alert('Save')}>Save</MenuItem>
		</Menu>
	),
};
