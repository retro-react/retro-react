import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../index';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	parameters: { layout: 'padded' },
	argTypes: {
		items: {
			description:
				'Array of breadcrumb items. Each item supports `text`, `href`, `icon`, `active`, `disabled`, and `onClick`.',
		},
		separator: {
			control: { type: 'select' },
			options: ['arrow', 'backslash', 'dot', 'pipe'],
			description: 'Visual separator between items.',
		},
		maxItems: {
			control: { type: 'number', min: 2, max: 10 },
			description:
				'Maximum items shown before middle items collapse into an ellipsis.',
		},
		showCopyButton: {
			control: 'boolean',
			description: 'Shows a button that copies the full path to the clipboard.',
		},
		onCopy: {
			action: 'copied',
			description: 'Called with the joined path string after copy succeeds.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
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
};

export const Separators: Story = {
	render: (args) => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
			<Breadcrumbs {...args} separator="arrow" />
			<Breadcrumbs {...args} separator="backslash" />
			<Breadcrumbs {...args} separator="dot" />
			<Breadcrumbs {...args} separator="pipe" />
		</div>
	),
	args: {
		items: [
			{ text: 'Home', href: '#' },
			{ text: 'Category', href: '#' },
			{ text: 'Current', active: true },
		],
	},
};

export const FilePath: Story = {
	args: {
		items: [
			{ text: 'C:\\', href: '#', icon: '💾' },
			{ text: 'Windows', href: '#', icon: '📁' },
			{ text: 'System32', href: '#', icon: '📁' },
			{ text: 'drivers', active: true, icon: '📂' },
		],
		separator: 'backslash',
		showCopyButton: true,
	},
};

export const Truncated: Story = {
	args: {
		items: [
			{ text: 'Root', href: '#' },
			{ text: 'Category', href: '#' },
			{ text: 'Subcategory', href: '#' },
			{ text: 'Section', href: '#' },
			{ text: 'Subsection', href: '#' },
			{ text: 'Current Page', active: true },
		],
		maxItems: 4,
		separator: 'arrow',
	},
};

export const WithDisabledItem: Story = {
	args: {
		items: [
			{ text: 'Home', href: '#', icon: '🏠' },
			{ text: 'Restricted', disabled: true, icon: '🔒' },
			{ text: 'Documents', href: '#', icon: '📄' },
			{ text: 'Current', active: true, icon: '📍' },
		],
		separator: 'arrow',
	},
};
