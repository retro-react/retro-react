/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import React from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import {
	Breadcrumb,
	BreadcrumbActive,
	BreadcrumbAnchor,
	BreadcrumbIcon,
	BreadcrumbSeparator,
	BreadcrumbsWrapper,
	CopyButton,
	TruncationIndicator,
} from './Breadcrumbs.styled';

export interface BreadcrumbItem {
	/**
	 * The text of the breadcrumb.
	 *
	 * @default ''
	 */
	text: string;
	/**
	 * The href of the breadcrumb.
	 *
	 * @default ''
	 */
	href?: string;
	/**
	 * The onClick of the breadcrumb.
	 *
	 * @default undefined
	 */
	onClick?: (e: React.MouseEvent) => void;
	/**
	 * Is the breadcrumb active?
	 *
	 * @default false
	 */
	active?: boolean;
	/**
	 * Icon to display before the text (optional).
	 *
	 * @default undefined
	 */
	icon?: React.ReactNode;
	/**
	 * Whether this item should be disabled.
	 *
	 * @default false
	 */
	disabled?: boolean;
}

export interface BreadcrumbsProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onCopy'> {
	/**
	 * The items of the breadcrumb.
	 *
	 * @default []
	 *
	 * @example
	 * <Breadcrumbs items={[{ text: 'Home', href: '/', icon: '🏠' }, { text: 'About', href: '/about', active: true }]} />
	 */
	items?: BreadcrumbItem[];
	/**
	 * Maximum number of visible items before truncation.
	 *
	 * @default undefined
	 */
	maxItems?: number;
	/**
	 * Style of separator between breadcrumbs.
	 *
	 * @default 'arrow'
	 */
	separator?: 'arrow' | 'backslash' | 'dot' | 'pipe';
	/**
	 * Whether to show a copy path button.
	 *
	 * @default false
	 */
	showCopyButton?: boolean;
	/**
	 * Callback when path is copied.
	 *
	 * @default undefined
	 */
	onCopy?: (path: string) => void;
	sx?: ThemeUICSSObject;
}

/**
 * Breadcrumbs are used to indicate the current page's location within a navigational hierarchy.
 * Features authentic retro styling with WIN31-inspired borders and typography.
 *
 * Enhanced with:
 * - Icons support for visual hierarchy
 * - Truncation for long paths
 * - Copy path functionality
 * - Multiple separator styles
 * - Keyboard navigation
 * - Better accessibility
 *
 * @example
 * <Breadcrumbs
 *   items={[
 *     { text: 'Home', href: '/', icon: '🏠' },
 *     { text: 'Documents', href: '/docs', icon: '📁' },
 *     { text: 'Projects', active: true, icon: '📂' }
 *   ]}
 *   separator="arrow"
 *   showCopyButton
 *   maxItems={4}
 * />
 */
export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
	(
		{
			id,
			className,
			children,
			items = [],
			maxItems,
			separator = 'arrow',
			showCopyButton = false,
			onCopy,
			sx,
			...rest
		},
		ref,
	) => {
		const handleClick = (item: BreadcrumbItem) => (e: React.MouseEvent) => {
			if (item.disabled) {
				e.preventDefault();
				return;
			}

			if (!item.href || item.href === '') {
				e.preventDefault();
			}

			if (item.onClick) {
				item.onClick(e);
			}
		};

		const handleKeyDown =
			(item: BreadcrumbItem) => (e: React.KeyboardEvent) => {
				if (item.disabled) return;

				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					if (item.onClick) {
						item.onClick(e as any);
					} else if (item.href) {
						window.location.href = item.href;
					}
				}
			};

		const handleCopyPath = () => {
			const path = items.map((item) => item.text).join(' > ');
			navigator.clipboard?.writeText(path).then(() => {
				if (onCopy) {
					onCopy(path);
				}
			});
		};

		// Truncation logic
		const getDisplayItems = () => {
			if (!maxItems || items.length <= maxItems) {
				return items;
			}

			const firstItem = items[0];
			const lastItems = items.slice(-(maxItems - 2));

			return [firstItem, { text: '...', disabled: true }, ...lastItems];
		};

		const displayItems = getDisplayItems();
		const getSeparatorContent = (type: string) => {
			switch (type) {
				case 'arrow':
					return '>';
				case 'backslash':
					return '\\';
				case 'dot':
					return '•';
				case 'pipe':
					return '|';
				default:
					return '>';
			}
		};

		return (
			<BreadcrumbsWrapper
				ref={ref}
				id={id}
				className={classNames('breadcrumbs-root', className, commonClassNames)}
				role="navigation"
				aria-label="Breadcrumb navigation"
				{...rest}
			>
				{displayItems.map((item, index) => (
					<React.Fragment key={index}>
						<Breadcrumb
							$active={item.active}
							$disabled={item.disabled}
							className="breadcrumb"
							role="listitem"
						>
							{item.text === '...' ? (
								<TruncationIndicator
									title={`${items.length - maxItems! + 1} items hidden`}
									aria-label={`${items.length - maxItems! + 1} items hidden`}
								>
									...
								</TruncationIndicator>
							) : item.active ? (
								<BreadcrumbActive
									className="breadcrumb-active"
									aria-current="page"
								>
									{item.icon && <BreadcrumbIcon>{item.icon}</BreadcrumbIcon>}
									{item.text || ''}
								</BreadcrumbActive>
							) : (
								<BreadcrumbAnchor
									href={item.href}
									$disabled={item.disabled}
									onClick={handleClick(item)}
									onKeyDown={handleKeyDown(item)}
									className="breadcrumb-anchor"
									tabIndex={item.disabled ? -1 : 0}
									aria-label={`Navigate to ${item.text}`}
								>
									{item.icon && <BreadcrumbIcon>{item.icon}</BreadcrumbIcon>}
									{item.text || ''}
								</BreadcrumbAnchor>
							)}
						</Breadcrumb>

						{index < displayItems.length - 1 && (
							<BreadcrumbSeparator $type={separator} aria-hidden="true">
								{getSeparatorContent(separator)}
							</BreadcrumbSeparator>
						)}
					</React.Fragment>
				))}

				{showCopyButton && (
					<CopyButton
						onClick={handleCopyPath}
						title="Copy path to clipboard"
						aria-label="Copy breadcrumb path to clipboard"
						type="button"
					>
						📋
					</CopyButton>
				)}
			</BreadcrumbsWrapper>
		);
	},
);

Breadcrumbs.displayName = 'Breadcrumbs';
