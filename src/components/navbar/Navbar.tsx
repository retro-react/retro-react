import React, { Children, cloneElement, forwardRef, useState } from 'react';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import closeIcon from '../../assets/svg/close_icon.svg';
import hamburgerIcon from '../../assets/svg/hamburger_icon.svg';
import * as Sc from './Navbar.styled';

export type NavbarColors = ComponentColors | 'greyscale';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The color of the Navbar.
	 *
	 * @default 'primary'
	 */
	color?: NavbarColors;
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
	/**
	 * @internal On click handler for the NavItem.
	 *
	 * @default undefined
	 */
	_internalOnClick?: () => void;
	/**
	 * On click handler for the NavItem.
	 *
	 * @default undefined
	 */
	onClick?: () => void;
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
		const [open, setOpen] = useState(false);
		const toggleMenu = () => {
			setOpen(!open);
		};

		const NavLogoElement = Children.toArray(children).find(
			(child) => (child as React.ReactElement).type === NavLogo,
		);
		const NavItemsElements = Children.toArray(children).filter(
			(child) => (child as React.ReactElement).type !== NavLogo,
		);

		return (
			<Sc.NavbarContainer
				$color={color}
				$pattern={pattern}
				ref={ref}
				id={id}
				className={classNames('navbar-root', className, commonClassNames)}
				{...rest}
			>
				{NavLogoElement}
				<Sc.HamburgerMenu
					onClick={toggleMenu}
					className="navbar-hamburger"
					$hamburgerIcon={hamburgerIcon}
					$closeIcon={closeIcon}
					$open={open}
					$color={color}
					aria-controls="navbar-menu"
					aria-expanded={open}
				/>
				<Sc.NavbarItemsContainer
					$color={color}
					$pattern={pattern}
					$open={open}
					className="navbar-items"
					id="navbar-menu"
					role="menu"
				>
					{Children.map(NavItemsElements, (child, index) => {
						return (
							<Sc.NavbarItemWrapper key={`navbar-item-${index}`}>
								{cloneElement(child as React.ReactElement, {
									_internalBgColor: color,
									_internalOnClick: toggleMenu,
								})}
							</Sc.NavbarItemWrapper>
						);
					})}
				</Sc.NavbarItemsContainer>
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
	_internalOnClick,
	onClick,
	id,
	...rest
}) => {
	return (
		<Sc.NavItem
			id={id}
			className={classNames('navbar-item', className)}
			$color={_internalBgColor}
			onClick={() => {
				if (_internalOnClick) {
					_internalOnClick();
				}
				if (onClick) {
					onClick();
				}
			}}
			role="menuitem"
			{...rest}
		>
			{children}
		</Sc.NavItem>
	);
};

NavItem.displayName = 'NavItem';

interface NavLogoProps {
	/**
	 * The content of the NavLogo.
	 * Typically an image or text.
	 *
	 * @default undefined
	 */
	children: React.ReactNode;
}

export const NavLogo: React.FC<NavLogoProps> = ({ children }) => {
	return (
		<Sc.NavbarLogoContainer id="retro-navbar-logo">
			{children}
		</Sc.NavbarLogoContainer>
	);
};

NavLogo.displayName = 'NavLogo';
