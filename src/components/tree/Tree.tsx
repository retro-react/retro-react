/** @jsxImportSource theme-ui */
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
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
	 * Set of expanded node labels (for controlled expand state).
	 * When provided, the Tree's expand/collapse state is controlled.
	 */
	expandedNodes?: string[];
	/**
	 * Callback when a node is expanded/collapsed
	 */
	onNodeToggle?: (nodeLabel: string, expanded: boolean) => void;
	sx?: ThemeUICSSObject;
}

type TreeNodeData = {
	label: string;
	content?: React.ReactNode;
	children?: TreeNodeData[];
	collapsed?: boolean;
};

interface TreeNodeProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * @internal The object representing the node.
	 */
	node: TreeNodeData;
	$variant: TreeVariant;
	$path: string;
	$selectedNode?: string;
	$expanded: boolean;
	$focusedPath: string | null;
	$onNodeSelect?: (nodeLabel: string) => void;
	$onToggle: (path: string, label: string, hasChildren: boolean) => void;
	$onFocusNode: (path: string) => void;
	$registerNode: (path: string, el: HTMLElement | null) => void;
	$isExpanded: (path: string) => boolean;
}

const TreeNode: React.FC<TreeNodeProps> = ({
	node,
	$variant,
	$path,
	$selectedNode,
	$expanded,
	$focusedPath,
	$onNodeSelect,
	$onToggle,
	$onFocusNode,
	$registerNode,
	$isExpanded,
}) => {
	const hasChildren = !!node.children && node.children.length > 0;
	const collapsed = hasChildren ? !$expanded : false;
	const isSelected = $selectedNode === node.label;

	const handleToggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (hasChildren) {
			$onToggle($path, node.label, hasChildren);
		}
	};

	const handleSelect = () => {
		$onFocusNode($path);
		$onNodeSelect?.(node.label);
	};

	return (
		<TreeNodeContainer
			$collapsed={collapsed}
			$variant={$variant}
			$selected={isSelected}
			role="treeitem"
			aria-expanded={hasChildren ? !collapsed : undefined}
			aria-selected={isSelected}
			tabIndex={$focusedPath === $path ? 0 : -1}
			data-tree-path={$path}
			ref={(el) => $registerNode($path, el)}
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
			{!hasChildren && node.content && (
				<NodeContent className="tree-node-content">{node.content}</NodeContent>
			)}
			{hasChildren && (
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
							{node.children?.map((child, index) => {
								const childPath = `${$path}.${index}`;
								return (
									<TreeNode
										key={childPath}
										node={child}
										$path={childPath}
										$variant={$variant}
										$selectedNode={$selectedNode}
										$expanded={$isExpanded(childPath)}
										$focusedPath={$focusedPath}
										$onNodeSelect={$onNodeSelect}
										$onToggle={$onToggle}
										$onFocusNode={$onFocusNode}
										$registerNode={$registerNode}
										$isExpanded={$isExpanded}
									/>
								);
							})}
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
const collectExpandedPaths = (
	nodes: TreeNodeData[],
	defaultCollapsed: boolean,
	prefix: string,
	acc: Set<string>,
) => {
	nodes.forEach((node, index) => {
		const path = `${prefix}.${index}`;
		const hasChildren = !!node.children && node.children.length > 0;
		if (hasChildren) {
			const expanded =
				node.collapsed !== undefined ? !node.collapsed : !defaultCollapsed;
			if (expanded) {
				acc.add(path);
			}
			collectExpandedPaths(node.children!, defaultCollapsed, path, acc);
		}
	});
	return acc;
};

const collectVisiblePaths = (
	nodes: TreeNodeData[],
	prefix: string,
	isExpanded: (path: string) => boolean,
	acc: { path: string; hasChildren: boolean; parentPath: string | null }[],
	parentPath: string | null,
) => {
	nodes.forEach((node, index) => {
		const path = `${prefix}.${index}`;
		const hasChildren = !!node.children && node.children.length > 0;
		acc.push({ path, hasChildren, parentPath });
		if (hasChildren && isExpanded(path)) {
			collectVisiblePaths(node.children!, path, isExpanded, acc, path);
		}
	});
	return acc;
};

const getNodeByPath = (
	nodes: TreeNodeData[],
	path: string,
): TreeNodeData | undefined => {
	const indices = path.split('.').slice(1).map(Number);
	let current: TreeNodeData[] | undefined = nodes;
	let node: TreeNodeData | undefined;
	for (const index of indices) {
		node = current?.[index];
		current = node?.children;
	}
	return node;
};

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
			expandedNodes,
			onNodeToggle,
			...rest
		},
		ref,
	) => {
		const isExpandControlled = expandedNodes !== undefined;
		const [internalExpanded, setInternalExpanded] = useState<Set<string>>(() =>
			collectExpandedPaths(data, defaultCollapsed, 'root', new Set()),
		);
		const [focusedPath, setFocusedPath] = useState<string | null>(null);
		const nodeRefs = useRef<Map<string, HTMLElement>>(new Map());

		const isExpanded = useCallback(
			(path: string) => {
				if (isExpandControlled) {
					const node = getNodeByPath(data, path);
					return node ? !!expandedNodes?.includes(node.label) : false;
				}
				return internalExpanded.has(path);
			},
			[isExpandControlled, expandedNodes, internalExpanded, data],
		);

		const handleToggle = useCallback(
			(path: string, label: string) => {
				const currentlyExpanded = isExpanded(path);
				if (!isExpandControlled) {
					setInternalExpanded((prev) => {
						const next = new Set(prev);
						if (currentlyExpanded) {
							next.delete(path);
						} else {
							next.add(path);
						}
						return next;
					});
				}
				onNodeToggle?.(label, !currentlyExpanded);
			},
			[isExpanded, isExpandControlled, onNodeToggle],
		);

		const registerNode = useCallback((path: string, el: HTMLElement | null) => {
			if (el) {
				nodeRefs.current.set(path, el);
			} else {
				nodeRefs.current.delete(path);
			}
		}, []);

		const focusNode = useCallback((path: string) => {
			setFocusedPath(path);
			nodeRefs.current.get(path)?.focus();
		}, []);

		const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
			const visible = collectVisiblePaths(data, 'root', isExpanded, [], null);
			if (visible.length === 0) return;
			const currentIndex = visible.findIndex((v) => v.path === focusedPath);

			if (e.key === 'ArrowDown') {
				e.preventDefault();
				const nextIndex =
					currentIndex < 0 ? 0 : Math.min(currentIndex + 1, visible.length - 1);
				focusNode(visible[nextIndex].path);
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				const prevIndex = currentIndex <= 0 ? 0 : currentIndex - 1;
				focusNode(visible[prevIndex].path);
			} else if (e.key === 'ArrowRight') {
				e.preventDefault();
				if (currentIndex < 0) return;
				const current = visible[currentIndex];
				if (current.hasChildren && !isExpanded(current.path)) {
					const node = getNodeByPath(data, current.path);
					if (node) handleToggle(current.path, node.label);
				} else if (currentIndex < visible.length - 1) {
					focusNode(visible[currentIndex + 1].path);
				}
			} else if (e.key === 'ArrowLeft') {
				e.preventDefault();
				if (currentIndex < 0) return;
				const current = visible[currentIndex];
				if (current.hasChildren && isExpanded(current.path)) {
					const node = getNodeByPath(data, current.path);
					if (node) handleToggle(current.path, node.label);
				} else if (current.parentPath) {
					focusNode(current.parentPath);
				}
			} else if (e.key === 'Enter') {
				e.preventDefault();
				if (currentIndex < 0) return;
				const node = getNodeByPath(data, visible[currentIndex].path);
				if (node) onNodeSelect?.(node.label);
			}
		};

		return (
			<TreeContainer
				sx={sx}
				id={id}
				className={classNames('tree-root', className, commonClassNames)}
				$variant={variant}
				ref={ref}
				role="tree"
				onKeyDown={handleKeyDown}
				{...rest}
			>
				{data.map((node, index) => {
					const path = `root.${index}`;
					return (
						<TreeNode
							key={path}
							node={node}
							className="tree-node"
							$path={path}
							$variant={variant}
							$selectedNode={selectedNode}
							$expanded={isExpanded(path)}
							$focusedPath={focusedPath}
							$onNodeSelect={onNodeSelect}
							$onToggle={(p, label) => handleToggle(p, label)}
							$onFocusNode={focusNode}
							$registerNode={registerNode}
							$isExpanded={isExpanded}
						/>
					);
				})}
			</TreeContainer>
		);
	},
);

Tree.displayName = 'Tree';
