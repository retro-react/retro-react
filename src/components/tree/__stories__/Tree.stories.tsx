import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text } from '@src/components/text';
import { Tree } from '../index';

const meta: Meta<typeof Tree> = {
	title: 'Components/Tree',
	component: Tree,
	parameters: {
		docs: {
			description: {
				component:
					'Authentic retro Tree component with Windows 3.1 File Manager styling. Features classic expand/collapse buttons, proper indentation, and multiple retro variants.',
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'file-manager', 'explorer'],
			description: 'Visual variant of the tree',
		},
		defaultCollapsed: {
			control: { type: 'boolean' },
			description: 'Default collapsed state of tree nodes',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tree>;

// Sample data for stories
const fileSystemData = [
	{
		label: 'C:\\',
		children: [
			{
				label: 'Windows',
				children: [
					{ label: 'System' },
					{ label: 'System32' },
					{ label: 'Temp' },
				],
			},
			{
				label: 'Program Files',
				children: [
					{
						label: 'Microsoft Office',
						children: [{ label: 'WINWORD.EXE' }, { label: 'EXCEL.EXE' }],
					},
					{ label: 'Adobe' },
				],
			},
			{
				label: 'Documents',
				children: [
					{ label: 'README.TXT' },
					{ label: 'AUTOEXEC.BAT' },
					{ label: 'CONFIG.SYS' },
				],
			},
		],
	},
];

const projectData = [
	{
		label: 'react-retro',
		content: <Text variant="body2">Root project folder</Text>,
		children: [
			{
				label: 'src',
				children: [
					{
						label: 'components',
						children: [
							{ label: 'Button.tsx' },
							{ label: 'Input.tsx' },
							{ label: 'Tree.tsx' },
						],
					},
					{ label: 'utils' },
					{ label: 'constants' },
				],
			},
			{
				label: 'docs',
				children: [{ label: 'README.md' }, { label: 'CHANGELOG.md' }],
			},
			{ label: 'package.json' },
			{ label: 'tsconfig.json' },
		],
	},
];

export const Default: Story = {
	args: {
		variant: 'default',
		defaultCollapsed: false,
		data: projectData,
	},
};

export const FileManager: Story = {
	args: {
		variant: 'file-manager',
		defaultCollapsed: false,
		data: fileSystemData,
	},
};

export const Explorer: Story = {
	args: {
		variant: 'explorer',
		defaultCollapsed: true,
		data: fileSystemData,
	},
};

export const WithContent: Story = {
	args: {
		variant: 'default',
		defaultCollapsed: false,
		data: [
			{
				label: 'Documents',
				content: <Text variant="body2">Important files and documents</Text>,
				children: [
					{
						label: 'README.TXT',
						content: (
							<Text variant="body2">
								Project documentation and setup instructions
							</Text>
						),
					},
					{
						label: 'Reports',
						children: [
							{
								label: 'Monthly Report.doc',
								content: (
									<Text variant="body2">Financial summary for the month</Text>
								),
							},
							{
								label: 'Analysis.xls',
								content: <Text variant="body2">Data analysis spreadsheet</Text>,
							},
						],
					},
				],
			},
		],
	},
};

export const WithSelection: Story = {
	render: () => {
		const [selectedNode, setSelectedNode] =
			React.useState<string>('README.TXT');

		return (
			<div>
				<Text variant="body2">Selected: {selectedNode || 'None'}</Text>
				<br />
				<Tree
					variant="file-manager"
					selectedNode={selectedNode}
					onNodeSelect={setSelectedNode}
					onNodeToggle={(label, expanded) => {
						// ${label} ${expanded ? 'expanded' : 'collapsed'}
					}}
					data={fileSystemData}
				/>
			</div>
		);
	},
};

// Comparison story showing all variants
export const AllVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				gap: '20px',
			}}
		>
			<div>
				<Text variant="h3">Default</Text>
				<Tree variant="default" data={projectData} />
			</div>
			<div>
				<Text variant="h3">File Manager</Text>
				<Tree variant="file-manager" data={fileSystemData} />
			</div>
			<div>
				<Text variant="h3">Explorer</Text>
				<Tree variant="explorer" data={fileSystemData} defaultCollapsed />
			</div>
		</div>
	),
};
