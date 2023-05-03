/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import React from 'react';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import {
	Breadcrumb,
	BreadcrumbActive,
	BreadcrumbAnchor,
	BreadcrumbsWrapper,
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
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The items of the breadcrumb.
	 *
	 * @default []
	 *
	 * @example
	 * <Breadcrumbs items={[{ text: 'Home', href: '/', active: true }, { text: 'About', href: '/about' }]} />
	 */
	items?: BreadcrumbItem[];
	/**
	 * The color of the breadcrumb.
	 *
	 * @default undefined
	 */
	color?: string;
	sx?: any;
}

/**
 * Breadcrumbs are used to indicate the current page's location within a navigational hierarchy.
 *
 *
 * @example
 * <Breadcrumbs items={[{ text: 'Home', href: '/', active: true }, { text: 'About', href: '/about' }]} />
 */
export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
	({ id, className, children, color, items = [], sx, ...rest }, ref) => {
		const handleClick = (item: BreadcrumbItem) => (e: React.MouseEvent) => {
			if (!item.href || item.href === '') {
				e.preventDefault();
			}
			if (item.onClick) {
				item.onClick(e);
			}
		};

		return (
			<BreadcrumbsWrapper
				ref={ref}
				id={id}
				className={classNames('breadcrumbs-root', className, commonClassNames)}
				{...rest}
			>
				{items.map((item, index) => (
					<Breadcrumb key={index} $active={item.active} $color={color}>
						{item.active ? (
							<BreadcrumbActive $color={color}>
								{item.text || ''}
							</BreadcrumbActive>
						) : (
							<BreadcrumbAnchor href={item.href} onClick={handleClick(item)}>
								{item.text || ''}
							</BreadcrumbAnchor>
						)}
					</Breadcrumb>
				))}
			</BreadcrumbsWrapper>
		);
	},
);

Breadcrumbs.displayName = 'Breadcrumbs';
