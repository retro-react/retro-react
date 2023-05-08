/** @jsxImportSource theme-ui */
import React, { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './FlexibleLayout.styled';

interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content of the section.
	 *
	 * @default undefined
	 */
	children: React.ReactNode;
	sx?: ThemeUICSSObject;
}

export interface FlexibleLayoutProps extends CommonProps {}
export interface HeaderProps extends CommonProps {}
export interface FooterProps extends CommonProps {}
export interface SidebarLeftProps extends CommonProps {}
export interface SidebarRightProps extends CommonProps {}
export interface MainContentProps extends CommonProps {}

/**
 * FlexibleLayout with header, footer, sidebar, and content. Used for the main layout of the app. Similar to old school HTML tables.
 * Uses CSS Grid and media queries to change the layout at different breakpoints. Use `sx` prop to modify the layout.
 *
 * Includes `LayoutHeader`, `LayoutFooter`, `LayoutSidebarLeft`, `LayoutSidebarRight`, and `LayoutMain`.
 * Must be wrapped in `FlexibleLayout`.
 * Each of these components can be used individually. The order of the components does not matter.
 *
 * @example
 * <FlexibleLayout>
 * 	<LayoutHeader>
 *   	 Header
 * 	</LayoutHeader>
 * 	<LayoutMain>
 * 		Main Content
 * 	</LayoutMain>
 * <FlexibleLayout>
 **/
export const FlexibleLayout = forwardRef<HTMLDivElement, FlexibleLayoutProps>(
	({ children, className, id, ...rest }, ref) => {
		return (
			<Sc.FlexibleLayout
				ref={ref}
				id={id}
				className={classNames(
					className,
					'flexible-layout-root',
					commonClassNames,
				)}
				{...rest}
			>
				{children}
			</Sc.FlexibleLayout>
		);
	},
);

export const LayoutHeader: React.FC<HeaderProps> = ({
	children,
	className,
	id,
	...rest
}) => {
	return (
		<Sc.Header
			id={id}
			className={classNames(
				className,
				'flexible-layout-header',
				'flexible-layout-child-cell',
				commonClassNames,
			)}
			{...rest}
		>
			{children}
		</Sc.Header>
	);
};

export const LayoutFooter: React.FC<FooterProps> = ({
	children,
	className,
	id,
	...rest
}) => {
	return (
		<Sc.Footer
			id={id}
			className={classNames(
				className,
				'flexible-layout-footer',
				'flexible-layout-child-cell',
				commonClassNames,
			)}
			{...rest}
		>
			{children}
		</Sc.Footer>
	);
};

export const LayoutSidebarLeft: React.FC<SidebarLeftProps> = ({
	children,
	className,
	id,
	...rest
}) => {
	return (
		<Sc.SidebarLeft
			id={id}
			className={classNames(
				className,
				'flexible-layout-sidebar-left',
				'flexible-layout-child-cell',
				commonClassNames,
			)}
			{...rest}
		>
			{children}
		</Sc.SidebarLeft>
	);
};

export const LayoutSidebarRight: React.FC<SidebarRightProps> = ({
	children,
	className,
	id,
	...rest
}) => {
	return (
		<Sc.SidebarRight
			id={id}
			className={classNames(
				className,
				'flexible-layout-sidebar-right',
				'flexible-layout-child-cell',
				commonClassNames,
			)}
			{...rest}
		>
			{children}
		</Sc.SidebarRight>
	);
};

export const LayoutMain: React.FC<MainContentProps> = ({
	children,
	className,
	id,
	...rest
}) => {
	return (
		<Sc.Content
			id={id}
			className={classNames(
				className,
				'flexible-layout-main-content',
				'flexible-layout-child-cell',
				commonClassNames,
			)}
			{...rest}
		>
			{children}
		</Sc.Content>
	);
};

FlexibleLayout.displayName = 'FlexibleLayout';
