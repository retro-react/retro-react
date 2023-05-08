/** @jsxImportSource theme-ui */
import React, { forwardRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import {
	ChevronIcon,
	ChildrenContainer,
	NodeContainer,
	NodeContent,
	NodeLabel,
	TreeContainer,
	TreeNodeContainer,
} from './Tree.styled';

export type TreeColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn'
	| 'greyscale'
	| 'none';

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
	 * The main color of the tree.
	 *
	 * @default 'greyscale'
	 */
	color?: TreeColor;
	/**
	 * Default collapsed state of the tree.
	 *
	 * @default false
	 */
	defaultCollapsed?: boolean;
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
	$color: TreeColor;
	$defaultCollapsed: boolean;
}

const TreeNode: React.FC<TreeNodeProps> = ({
	node,
	$color,
	$defaultCollapsed,
}) => {
	const hasChildren = node.children !== undefined;
	const [collapsed, setCollapsed] = useState(
		hasChildren ? node.collapsed || $defaultCollapsed : false,
	);

	const handleClick = () => {
		if (node.children) setCollapsed(!collapsed);
	};

	return (
		<TreeNodeContainer $collapsed={collapsed} $color={$color}>
			<NodeLabel
				className="tree-node-label"
				onClick={handleClick}
				$collapsible={hasChildren}
			>
				{hasChildren && (
					<ChevronIcon
						viewBox="0 0 24 24"
						$color={$color}
						$collapsed={collapsed}
					>
						<path d="M10.4 15.4l4.8-4.8 1.4 1.4-6.2 6.2-6.2-6.2 1.4-1.4z"></path>
					</ChevronIcon>
				)}
				{node.label}
			</NodeLabel>
			{!node.children && node.content && (
				<NodeContent className="tree-node-content">{node.content}</NodeContent>
			)}
			{node.children && (
				<NodeContainer
					className={classNames(
						'tree-node-container',
						!collapsed ? 'tree-expanded' : '',
					)}
				>
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
								$color={$color}
								$defaultCollapsed={$defaultCollapsed}
							/>
						))}
					</ChildrenContainer>
				</NodeContainer>
			)}
		</TreeNodeContainer>
	);
};

/**
 * Trees are used to display hierarchical data. They are composed of nodes, which can be expanded and collapsed.
 * Each node can have a label, content and children. The content can be any React node while the label is a string.
 *
 * Currently, not recommended for use with large data sets.
 *
 * @example
 * ```tsx
 * <Tree
 * 	data={[
 * 		{
 * 			label: 'Parent 1',
 * 			content: <Text variant="paragraph">This is some content</Text>,
 * 			children: [ ... ],
 * 		},
 * ]}
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
			color = 'greyscale',
			defaultCollapsed = false,
			...rest
		},
		ref,
	) => {
		return (
			<TreeContainer
				sx={sx}
				id={id}
				className={classNames('tree-root', className, commonClassNames)}
				$color={color}
				ref={ref}
				{...rest}
			>
				{data.map((node, index) => (
					<TreeNode
						key={`tree-node-root-${index}`}
						node={node}
						className="tree-node"
						$color={color}
						$defaultCollapsed={defaultCollapsed}
					/>
				))}
			</TreeContainer>
		);
	},
);

Tree.displayName = 'Tree';
