import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../../../components/container';
import { MenuItem } from '../../../components/menu';
import { Text } from '../../../components/text';
import { SYSTEM_FONT } from '../../../constants/fonts';
import { Navbar, NavItem, NavLogo, NavMenu } from '../Navbar';

const meta: Meta<typeof Navbar> = {
	title: 'Layout/Navbar',
	component: Navbar,
	parameters: {
		docs: {
			description: {
				component:
					'A Windows 3.1-styled navigation bar. Use the `default` variant for app headers, `menu-bar` for File/Edit/View dropdowns, and `status-bar` for footer-style indicators.',
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'menu-bar', 'status-bar'],
			description:
				'Visual variant. `default`: top app bar, `menu-bar`: classic dropdown menu bar, `status-bar`: bottom status strip.',
		},
		children: { control: false },
	},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const frame = (children: React.ReactNode) => (
	<Container fluid sx={{ height: '300px', fontFamily: SYSTEM_FONT }}>
		{children}
	</Container>
);

export const Default: Story = {
	args: { variant: 'default' },
	render: (args) =>
		frame(
			<Navbar {...args}>
				<NavLogo>
					<Text variant="body2" color="#ffffff" sx={{ fontWeight: 'bold' }}>
						RetroApp
					</Text>
				</NavLogo>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						Home
					</a>
				</NavItem>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						Products
					</a>
				</NavItem>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						About
					</a>
				</NavItem>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						Contact
					</a>
				</NavItem>
			</Navbar>,
		),
};

export const MenuBar: Story = {
	args: { variant: 'menu-bar' },
	render: (args) =>
		frame(
			<Navbar {...args}>
				<NavMenu label="File">
					<MenuItem>New</MenuItem>
					<MenuItem>Open...</MenuItem>
					<MenuItem>Save</MenuItem>
					<MenuItem>Exit</MenuItem>
				</NavMenu>
				<NavMenu label="Edit">
					<MenuItem>Undo</MenuItem>
					<MenuItem>Cut</MenuItem>
					<MenuItem>Copy</MenuItem>
					<MenuItem>Paste</MenuItem>
				</NavMenu>
				<NavMenu label="View">
					<MenuItem>Normal</MenuItem>
					<MenuItem>Zoom...</MenuItem>
				</NavMenu>
				<NavMenu label="Help">
					<MenuItem>Contents</MenuItem>
					<MenuItem>About</MenuItem>
				</NavMenu>
			</Navbar>,
		),
};

export const StatusBar: Story = {
	args: { variant: 'status-bar' },
	render: (args) =>
		frame(
			<Navbar {...args}>
				<NavItem>Ready</NavItem>
				<NavItem>Line 1, Col 1</NavItem>
				<NavItem>NUM</NavItem>
				<NavItem>CAPS</NavItem>
			</Navbar>,
		),
};
