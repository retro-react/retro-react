import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../index';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'Enhanced retro-styled breadcrumbs with authentic WIN31 appearance, icons, truncation, copy functionality, and keyboard navigation.',
			},
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{
					background: '#c0c0c0',
					padding: '20px',
					fontFamily: "'MS Sans Serif', sans-serif",
					minHeight: '100px',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		separator: {
			control: { type: 'select' },
			options: ['arrow', 'backslash', 'dot', 'pipe'],
		},
		maxItems: {
			control: { type: 'number', min: 3, max: 10 },
		},
		showCopyButton: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const FileExplorer: Story = {
	args: {
		items: [
			{ text: 'C:\\', href: '#', icon: '💾' },
			{ text: 'Windows', href: '#', icon: '📁' },
			{ text: 'System32', href: '#', icon: '📁' },
			{ text: 'drivers', active: true, icon: '📂' },
		],
		separator: 'backslash',
		showCopyButton: true,
		onCopy: (path) => {
			/* Copied: ${path} */
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Classic file system navigation with drive icons and backslash separators.',
			},
		},
	},
};

export const WebsiteNavigation: Story = {
	args: {
		items: [
			{ text: 'Home', href: '#', icon: '🏠' },
			{ text: 'Products', href: '#', icon: '📦' },
			{ text: 'Software', href: '#', icon: '💿' },
			{ text: 'Utilities', active: true, icon: '🔧' },
		],
		separator: 'arrow',
		showCopyButton: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Website navigation with icons and arrow separators.',
			},
		},
	},
};

export const WithTruncation: Story = {
	args: {
		items: [
			{ text: 'Root', href: '#', icon: '🌐' },
			{ text: 'Very Long Category Name', href: '#', icon: '📁' },
			{ text: 'Another Long Subcategory', href: '#', icon: '📁' },
			{ text: 'Item Type', href: '#', icon: '📁' },
			{ text: 'Specific Item Details', href: '#', icon: '📄' },
			{ text: 'Current Page with Long Name', active: true, icon: '📋' },
		],
		maxItems: 4,
		separator: 'arrow',
		showCopyButton: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstration of automatic truncation when breadcrumbs exceed maxItems.',
			},
		},
	},
};

export const DifferentSeparators: Story = {
	render: (args) => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<div>
				<h4
					style={{
						margin: '0 0 8px 0',
						fontSize: '11px',
						fontFamily: "'MS Sans Serif', sans-serif",
					}}
				>
					Arrow Separator:
				</h4>
				<Breadcrumbs {...args} separator="arrow" />
			</div>
			<div>
				<h4
					style={{
						margin: '0 0 8px 0',
						fontSize: '11px',
						fontFamily: "'MS Sans Serif', sans-serif",
					}}
				>
					Backslash Separator:
				</h4>
				<Breadcrumbs {...args} separator="backslash" />
			</div>
			<div>
				<h4
					style={{
						margin: '0 0 8px 0',
						fontSize: '11px',
						fontFamily: "'MS Sans Serif', sans-serif",
					}}
				>
					Dot Separator:
				</h4>
				<Breadcrumbs {...args} separator="dot" />
			</div>
			<div>
				<h4
					style={{
						margin: '0 0 8px 0',
						fontSize: '11px',
						fontFamily: "'MS Sans Serif', sans-serif",
					}}
				>
					Pipe Separator:
				</h4>
				<Breadcrumbs {...args} separator="pipe" />
			</div>
		</div>
	),
	args: {
		items: [
			{ text: 'Home', href: '#' },
			{ text: 'Category', href: '#' },
			{ text: 'Current', active: true },
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'Showcase of all available separator styles.',
			},
		},
	},
};

export const WithDisabledItems: Story = {
	args: {
		items: [
			{ text: 'Home', href: '#', icon: '🏠' },
			{ text: 'Restricted Area', disabled: true, icon: '🔒' },
			{ text: 'Accessible Page', href: '#', icon: '📄' },
			{ text: 'Current', active: true, icon: '📍' },
		],
		separator: 'arrow',
		showCopyButton: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumbs with disabled items that cannot be clicked.',
			},
		},
	},
};

export const SingleLevel: Story = {
	args: {
		items: [{ text: 'Current Page', active: true, icon: '📍' }],
		showCopyButton: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Simple single-level breadcrumb for the current page.',
			},
		},
	},
};

export const Interactive: Story = {
	args: {
		items: [
			{
				text: 'Home',
				href: '#',
				icon: '🏠',
				onClick: () => {
					/* Navigate to Home */
				},
			},
			{
				text: 'Category',
				href: '#',
				icon: '📁',
				onClick: () => {
					/* Navigate to Category */
				},
			},
			{
				text: 'Current',
				active: true,
				icon: '📍',
			},
		],
		separator: 'arrow',
		showCopyButton: true,
		onCopy: (path) => {
			/* Copied to clipboard: ${path} */
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive breadcrumbs with click handlers and copy functionality. Try clicking on links and the copy button.',
			},
		},
	},
};

export const LongPathMobile: Story = {
	args: {
		items: [
			{ text: 'Very Long Root Directory Name', href: '#', icon: '💾' },
			{ text: 'Extremely Long Subdirectory Name', href: '#', icon: '📁' },
			{ text: 'Another Very Long Path Component', href: '#', icon: '📁' },
			{ text: 'Final Long Directory Name', href: '#', icon: '📁' },
			{ text: 'Current File with Long Name.txt', active: true, icon: '📄' },
		],
		separator: 'backslash',
		showCopyButton: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Test responsive behavior with long paths. Resize browser to see mobile scrolling.',
			},
		},
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
};
