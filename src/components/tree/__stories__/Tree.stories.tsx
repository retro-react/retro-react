import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text } from '../../../components/text';
import { Tree } from '../index';

const meta: Meta<typeof Tree> = {
	title: 'Components/Tree',
	component: Tree,
	parameters: {
		docs: {
			description: {
				component:
					'Hierarchical tree view styled after the Windows 3.1 File Manager. Supports expand/collapse, selection and arbitrary node content.',
			},
		},
	},
	argTypes: {
		variant: {
			control: 'inline-radio',
			options: ['default', 'file-manager', 'explorer'],
			description: 'Visual treatment of the tree container and nodes.',
		},
		defaultCollapsed: {
			control: 'boolean',
			description: 'When true, all nodes start collapsed.',
		},
		data: { control: false },
	},
};

export default meta;
type Story = StoryObj<typeof Tree>;

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

export const Default: Story = {
	args: {
		variant: 'file-manager',
		defaultCollapsed: false,
		data: fileSystemData,
	},
};

export const Variants: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gap: 16,
			}}
		>
			<div>
				<Text variant="h6">Default</Text>
				<Tree variant="default" data={fileSystemData} />
			</div>
			<div>
				<Text variant="h6">File Manager</Text>
				<Tree variant="file-manager" data={fileSystemData} />
			</div>
			<div>
				<Text variant="h6">Explorer</Text>
				<Tree variant="explorer" data={fileSystemData} defaultCollapsed />
			</div>
		</div>
	),
};

export const WithContent: Story = {
	args: {
		variant: 'default',
		data: [
			{
				label: 'Documents',
				content: <Text variant="body2">Important files and documents.</Text>,
				children: [
					{
						label: 'README.TXT',
						content: (
							<Text variant="body2">
								Project documentation and setup instructions.
							</Text>
						),
					},
					{
						label: 'Reports',
						children: [
							{
								label: 'Monthly Report.doc',
								content: (
									<Text variant="body2">Financial summary for the month.</Text>
								),
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
				<Tree
					variant="file-manager"
					selectedNode={selectedNode}
					onNodeSelect={setSelectedNode}
					data={fileSystemData}
				/>
			</div>
		);
	},
};
