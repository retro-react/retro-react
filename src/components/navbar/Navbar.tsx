import React, { Children, cloneElement, forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Navbar.styled';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The color of the Navbar.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors;
	/**
	 * The background pattern of the Navbar.
	 *
	 * @default 'solid'
	 */
	pattern?: ComponentPatterns;
	/**
	 * The items of the Navbar.
	 *
	 */
	children: React.ReactNode;
}

export interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content of the NavItem.
	 *
	 * @default undefined
	 */
	children: React.ReactNode;
	/**
	 * @internal The color of the NavItem.
	 *
	 * @default 'primary'
	 */
	_internalBgColor?: ComponentColors;
}

/**
 * Navbar is used to create a navigation bar for your application.
 * It is highly customizable and can contain any sort of children components.
 *
 * @example
 * <Navbar color="primary">
 * 	<NavItem>Home</NavItem>
 * 	<NavItem>About</NavItem>
 * 	<NavItem>Contact</NavItem>
 * </Navbar>
 */
export const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
	(
		{ color = 'primary', pattern = 'solid', children, className, id, ...rest },
		ref,
	) => {
		return (
			<Sc.NavbarContainer
				$color={color}
				$pattern={pattern}
				ref={ref}
				id={id}
				className={classNames('navbar-root', className, commonClassNames)}
				{...rest}
			>
				{Children.map(children, (child, index) => {
					return (
						<Sc.NavbarItemWrapper key={`navbar-item-${index}`}>
							{cloneElement(child as React.ReactElement, {
								_internalBgColor: color,
							})}
						</Sc.NavbarItemWrapper>
					);
				})}
			</Sc.NavbarContainer>
		);
	},
);

Navbar.displayName = 'Navbar';

/**
 * NavItem is used inside Navbar to represent an individual navigation item.
 * It can contain any sort of children components, typically anchor (<a>) tags.
 *
 * @example
 * <Navbar color="primary">
 * 	<NavItem><a href="#">Home</a></NavItem>
 * 	<NavItem><a href="#">About</a></NavItem>
 * 	<NavItem><a href="#">Contact</a></NavItem>
 * </Navbar>
 */
export const NavItem: React.FC<NavItemProps> = ({
	children,
	className,
	_internalBgColor = 'primary',
	id,
	...rest
}) => {
	return (
		<Sc.NavItem
			id={id}
			className={classNames('navbar-item', className)}
			$color={_internalBgColor}
			{...rest}
		>
			{children}
		</Sc.NavItem>
	);
};

NavItem.displayName = 'NavItem';
