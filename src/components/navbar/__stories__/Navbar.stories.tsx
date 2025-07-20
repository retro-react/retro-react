import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Menu, MenuItem } from '@src/components/menu';
import { Text } from '@src/components/text';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';
import { Navbar, NavItem, NavLogo, NavMenu } from '../Navbar';

const meta: Meta<typeof Navbar> = {
	title: 'Layout/Navbar',
	component: Navbar,
	parameters: {
		docs: {
			description: {
				component:
					'Authentic retro Navbar component with Windows 3.1 styling. Features multiple variants for different navigation contexts.',
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'menu-bar', 'status-bar'],
			description: 'Visual variant of the navbar',
		},
		children: {
			control: false,
		},
	},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const PageContent = () => {
	return (
		<div
			style={{
				lineHeight: '2',
				overflow: 'auto',
				height: '100%',
				backgroundColor: WIN31_BUTTON_FACE,
				color: VGA_BLACK,
				border: '2px solid',
				borderColor: `${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}`,
				borderTop: 'none',
				padding: '1rem',
				fontFamily: SYSTEM_FONT,
				fontSize: '11px',
			}}
		>
			Welcome to the retro computing era! A time of authentic Windows 3.1
			interfaces, authentic VGA colors, and true period-appropriate design. This
			navbar component captures the essence of early 1990s application design
			with authentic button styling, proper color schemes, and classic
			interaction patterns.
			<br />
			<br />
			Navigate through different sections using the authentic Windows 3.1 styled
			navigation items above. Each variant provides a different context - from
			application menu bars to status bars.
		</div>
	);
};

export const Default: Story = {
	args: {
		variant: 'default',
	},
	render: (args) => (
		<Container
			fluid
			sx={{
				height: '400px',
				marginBottom: '5rem',
				fontFamily: SYSTEM_FONT,
			}}
		>
			<Navbar {...args}>
				<NavLogo>
					<Text variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
						RetroApp
					</Text>
				</NavLogo>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						File
					</a>
				</NavItem>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						Edit
					</a>
				</NavItem>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						View
					</a>
				</NavItem>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						Help
					</a>
				</NavItem>
			</Navbar>
			<PageContent />
		</Container>
	),
};

export const MenuBar: Story = {
	args: {
		variant: 'menu-bar',
	},
	render: (args) => (
		<Container
			fluid
			sx={{
				height: '400px',
				marginBottom: '5rem',
				fontFamily: SYSTEM_FONT,
			}}
		>
			<Navbar {...args}>
				<NavMenu label="File">
					<MenuItem>New</MenuItem>
					<MenuItem>Open...</MenuItem>
					<MenuItem>Save</MenuItem>
					<MenuItem>Save As...</MenuItem>
					<MenuItem>Print...</MenuItem>
					<MenuItem>Exit</MenuItem>
				</NavMenu>
				<NavMenu label="Edit">
					<MenuItem>Undo</MenuItem>
					<MenuItem>Cut</MenuItem>
					<MenuItem>Copy</MenuItem>
					<MenuItem>Paste</MenuItem>
					<MenuItem>Select All</MenuItem>
					<MenuItem>Find...</MenuItem>
				</NavMenu>
				<NavMenu label="View">
					<MenuItem>Normal</MenuItem>
					<MenuItem>Print Layout</MenuItem>
					<MenuItem>Outline</MenuItem>
					<MenuItem>Zoom...</MenuItem>
					<MenuItem>Ruler</MenuItem>
				</NavMenu>
				<NavMenu label="Insert">
					<MenuItem>Page Break</MenuItem>
					<MenuItem>Date and Time</MenuItem>
					<MenuItem>Picture...</MenuItem>
					<MenuItem>Object...</MenuItem>
				</NavMenu>
				<NavMenu label="Format">
					<MenuItem>Font...</MenuItem>
					<MenuItem>Paragraph...</MenuItem>
					<MenuItem>Tabs...</MenuItem>
				</NavMenu>
				<NavMenu label="Tools">
					<MenuItem>Spelling...</MenuItem>
					<MenuItem>Options...</MenuItem>
				</NavMenu>
				<NavMenu label="Window">
					<MenuItem>New Window</MenuItem>
					<MenuItem>Arrange All</MenuItem>
				</NavMenu>
				<NavMenu label="Help">
					<MenuItem>Contents</MenuItem>
					<MenuItem>Search for Help on...</MenuItem>
					<MenuItem>About WordPad</MenuItem>
				</NavMenu>
			</Navbar>
			<PageContent />
		</Container>
	),
};

export const StatusBar: Story = {
	args: {
		variant: 'status-bar',
	},
	render: (args) => (
		<Container
			fluid
			sx={{
				height: '400px',
				marginBottom: '5rem',
				fontFamily: SYSTEM_FONT,
			}}
		>
			<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
				<PageContent />
				<Navbar {...args}>
					<NavItem>Ready</NavItem>
					<NavItem>Line 1, Col 1</NavItem>
					<NavItem>NUM</NavItem>
					<NavItem>CAPS</NavItem>
				</Navbar>
			</div>
		</Container>
	),
};
