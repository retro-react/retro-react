/** @jsxImportSource theme-ui */
import React, { forwardRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import {
	ChildrenContainer,
	ExpandIcon,
	NodeContainer,
	NodeContent,
	NodeIcon,
	NodeLabel,
	TreeContainer,
	TreeNodeContainer,
	TreeNodeWrapper,
	TreeVariant,
} from './Tree.styled';

interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The data to be displayed in the tree.
	 *
	 * `Label` is the only required property.
	 *
	 * @default []
	 *
	 * @example
	 * ```tsx
	 * const data = [
	 * 	{
	 * 		label: 'Parent 1',
	 * 		content: <Text variant="paragraph">This is some content</Text>,
	 * 		children: [
	 * 			{
	 * 				label: 'Child 1',
	 * 				content: 'Child 1 content',
	 * 				collapsed: false,
	 * 			},
	 * 			{
	 * 				label: 'Child 2',
	 * 				children: [ ... ],
	 * 			},
	 * 		],
	 * 	},
	 * ];
	 *```
	 */
	data: TreeNodeProps['node'][];
	/**
	 * The visual variant of the Tree.
	 * - default: Basic tree with white background
	 * - file-manager: File Manager style with proper indentation
	 * - explorer: Windows Explorer style with button face background
	 *
	 * @default 'default'
	 */
	variant?: TreeVariant;
	/**
	 * Default collapsed state of the tree.
	 *
	 * @default false
	 */
	defaultCollapsed?: boolean;
	/**
	 * Currently selected node label (for controlled selection)
	 */
	selectedNode?: string;
	/**
	 * Callback when a node is selected
	 */
	onNodeSelect?: (nodeLabel: string) => void;
	/**
	 * Callback when a node is expanded/collapsed
	 */
	onNodeToggle?: (nodeLabel: string, expanded: boolean) => void;
	sx?: ThemeUICSSObject;
}

interface TreeNodeProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * @internal The object representing the node.
	 *
	 * @example
	 * ```tsx
	 * const node = {
	 * 	label: 'Parent 1',
	 * 	content: <Text variant="paragraph">This is some content</Text>,
	 * 	children: [ ... ],
	 * };
	 * ```
	 */
	node: {
		label: string;
		content?: React.ReactNode;
		children?: TreeNodeProps['node'][];
		collapsed?: boolean;
	};
	$variant: TreeVariant;
	$defaultCollapsed: boolean;
	$selectedNode?: string;
	$onNodeSelect?: (nodeLabel: string) => void;
	$onNodeToggle?: (nodeLabel: string, expanded: boolean) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({
	node,
	$variant,
	$defaultCollapsed,
	$selectedNode,
	$onNodeSelect,
	$onNodeToggle,
}) => {
	const hasChildren = node.children !== undefined;
	const [collapsed, setCollapsed] = useState(
		hasChildren ? node.collapsed || $defaultCollapsed : false,
	);
	const isSelected = $selectedNode === node.label;

	const handleToggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (node.children) {
			const newCollapsed = !collapsed;
			setCollapsed(newCollapsed);
			$onNodeToggle?.(node.label, !newCollapsed);
		}
	};

	const handleSelect = () => {
		$onNodeSelect?.(node.label);
	};

	return (
		<TreeNodeContainer
			$collapsed={collapsed}
			$variant={$variant}
			$selected={isSelected}
		>
			<NodeLabel
				className="tree-node-label"
				onClick={handleSelect}
				$collapsible={hasChildren}
				$variant={$variant}
				$selected={isSelected}
			>
				{hasChildren && (
					<ExpandIcon
						$variant={$variant}
						$collapsed={collapsed}
						onClick={handleToggle}
					>
						{collapsed ? '+' : '−'}
					</ExpandIcon>
				)}
				<NodeIcon>{hasChildren ? (collapsed ? '📁' : '📂') : '📄'}</NodeIcon>
				{node.label}
			</NodeLabel>
			{!node.children && node.content && (
				<NodeContent className="tree-node-content">{node.content}</NodeContent>
			)}
			{node.children && (
				<TreeNodeWrapper
					$expanded={!collapsed}
					className={collapsed ? '' : 'tree-expanded'}
				>
					<NodeContainer className="tree-node-container">
						{node.content && (
							<NodeContent className="tree-node-content">
								{node.content}
							</NodeContent>
						)}
						<ChildrenContainer className={classNames('tree-node-children')}>
							{node.children.map((child, index) => (
								<TreeNode
									key={`${node.label}-${index}`}
									node={child}
									$variant={$variant}
									$defaultCollapsed={$defaultCollapsed}
									$selectedNode={$selectedNode}
									$onNodeSelect={$onNodeSelect}
									$onNodeToggle={$onNodeToggle}
								/>
							))}
						</ChildrenContainer>
					</NodeContainer>
				</TreeNodeWrapper>
			)}
		</TreeNodeContainer>
	);
};

/**
 * Authentic retro Tree component with Windows 3.1 File Manager styling.
 *
 * Features:
 * - Authentic Windows 3.1 File Manager appearance
 * - Classic expand/collapse buttons with + and - symbols
 * - Multiple retro variants (default, file-manager, explorer)
 * - Proper indentation and tree hierarchy
 * - Period-appropriate fonts and styling
 * - Hierarchical data display with collapsible nodes
 *
 * @example
 * ```tsx
 * <Tree
 * 	variant="file-manager"
 * 	data={[
 * 		{
 * 			label: 'Documents',
 * 			children: [
 * 				{ label: 'Resume.doc' },
 * 				{ label: 'Cover Letter.doc' }
 * 			]
 * 		}
 * 	]}
 * />
 * ```
 */
export const Tree = forwardRef<HTMLDivElement, TreeProps>(
	(
		{
			id,
			sx,
			className,
			data,
			variant = 'default',
			defaultCollapsed = false,
			selectedNode,
			onNodeSelect,
			onNodeToggle,
			...rest
		},
		ref,
	) => {
		return (
			<TreeContainer
				sx={sx}
				id={id}
				className={classNames('tree-root', className, commonClassNames)}
				$variant={variant}
				ref={ref}
				{...rest}
			>
				{data.map((node, index) => (
					<TreeNode
						key={`tree-node-root-${index}`}
						node={node}
						className="tree-node"
						$variant={variant}
						$defaultCollapsed={defaultCollapsed}
						$selectedNode={selectedNode}
						$onNodeSelect={onNodeSelect}
						$onNodeToggle={onNodeToggle}
					/>
				))}
			</TreeContainer>
		);
	},
);

Tree.displayName = 'Tree';
