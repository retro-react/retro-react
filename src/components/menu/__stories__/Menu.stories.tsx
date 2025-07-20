import type { Meta, Story } from '@storybook/react';
import { Menu, MenuItem } from '../index';

const meta: Meta = {
	title: 'Components/Menu',
	component: Menu,
	parameters: {
		docs: {
			description: {
				component:
					'Authentic Windows 3.1 style menu component with classic raised border styling and blue highlight on hover.',
			},
		},
	},
};

export default meta;

const Template: Story = (args) => (
	<Menu {...args}>
		<MenuItem>File</MenuItem>
		<MenuItem>Edit</MenuItem>
		<MenuItem>View</MenuItem>
		<MenuItem>Tools</MenuItem>
		<MenuItem>Help</MenuItem>
	</Menu>
);

const ContextMenuTemplate: Story = (args) => (
	<div style={{ padding: '40px', background: '#c0c0c0' }}>
		<p
			style={{
				fontFamily: 'MS Sans Serif',
				fontSize: '11px',
				marginBottom: '20px',
			}}
		>
			Right-click context menu style:
		</p>
		<Menu {...args}>
			<MenuItem>Cut</MenuItem>
			<MenuItem>Copy</MenuItem>
			<MenuItem>Paste</MenuItem>
			<MenuItem>Delete</MenuItem>
			<MenuItem>Properties</MenuItem>
		</Menu>
	</div>
);

const DropdownMenuTemplate: Story = (args) => (
	<div style={{ padding: '40px', background: '#c0c0c0' }}>
		<p
			style={{
				fontFamily: 'MS Sans Serif',
				fontSize: '11px',
				marginBottom: '20px',
			}}
		>
			Dropdown menu with longer items:
		</p>
		<Menu {...args}>
			<MenuItem>New Document</MenuItem>
			<MenuItem>Open File...</MenuItem>
			<MenuItem>Save Document</MenuItem>
			<MenuItem>Save As...</MenuItem>
			<MenuItem>Print Document</MenuItem>
			<MenuItem>Exit Application</MenuItem>
		</Menu>
	</div>
);

export const Basic: Story = Template.bind({});
Basic.args = {};
Basic.parameters = {
	docs: {
		description: {
			story: 'Basic Windows 3.1 style menu with classic menu items.',
		},
	},
};

export const ContextMenu: Story = ContextMenuTemplate.bind({});
ContextMenu.args = {};
ContextMenu.parameters = {
	docs: {
		description: {
			story: 'Context menu style with typical right-click options.',
		},
	},
};

export const DropdownMenu: Story = DropdownMenuTemplate.bind({});
DropdownMenu.args = {};
DropdownMenu.parameters = {
	docs: {
		description: {
			story: 'Dropdown menu with longer item names for application menus.',
		},
	},
};

export const WithKeyboardFocus: Story = (args) => (
	<div style={{ padding: '40px', background: '#c0c0c0' }}>
		<p
			style={{
				fontFamily: 'MS Sans Serif',
				fontSize: '11px',
				marginBottom: '20px',
			}}
		>
			Use Tab key to navigate menu items (dotted focus outline):
		</p>
		<Menu {...args}>
			<MenuItem tabIndex={0}>First Item</MenuItem>
			<MenuItem tabIndex={0}>Second Item</MenuItem>
			<MenuItem tabIndex={0}>Third Item</MenuItem>
			<MenuItem tabIndex={0}>Fourth Item</MenuItem>
		</Menu>
	</div>
);
WithKeyboardFocus.parameters = {
	docs: {
		description: {
			story:
				'Menu items with keyboard focus support and WIN31-style dotted focus indicators.',
		},
	},
};
