import React, { Children, cloneElement, forwardRef, useState } from 'react';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Navbar.styled';

export type NavbarVariant = 'default' | 'menu-bar' | 'status-bar';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The visual variant of the Navbar.
	 * - default: Standard Windows 3.1 application bar
	 * - menu-bar: Top menu bar with Windows 3.1 styling
	 * - status-bar: Bottom status bar styling
	 *
	 * @default 'default'
	 */
	variant?: NavbarVariant;
	/**
	 * The items of the Navbar.
	 */
	children: React.ReactNode;
}

export interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content of the NavItem.
	 */
	children: React.ReactNode;
	/**
	 * @internal The variant of the NavItem.
	 */
	_internalVariant?: NavbarVariant;
	/**
	 * @internal On click handler for the NavItem.
	 */
	_internalOnClick?: () => void;
	/**
	 * On click handler for the NavItem.
	 */
	onClick?: () => void;
}

/**
 * Navbar is used to create a navigation bar for your application.
 * Features authentic Windows 3.1 styling with multiple variants.
 *
 * @example
 * <Navbar variant="menu-bar">
 * 	<NavItem>File</NavItem>
 * 	<NavItem>Edit</NavItem>
 * 	<NavItem>View</NavItem>
 * </Navbar>
 */
export const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
	({ variant = 'default', children, className, id, ...rest }, ref) => {
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
				$variant={variant}
				ref={ref}
				id={id}
				className={classNames('navbar-root', className, commonClassNames)}
				{...rest}
			>
				{NavLogoElement}
				{NavItemsElements.length > 0 && (
					<Sc.HamburgerMenu
						onClick={toggleMenu}
						className="navbar-hamburger"
						$open={open}
						$variant={variant}
						aria-controls="navbar-menu"
						aria-expanded={open}
					/>
				)}
				<Sc.NavbarItemsContainer
					$variant={variant}
					$open={open}
					className="navbar-items"
					id="navbar-menu"
					role="menu"
				>
					{Children.map(NavItemsElements, (child, index) => {
						return (
							<Sc.NavbarItemWrapper key={`navbar-item-${index}`}>
								{cloneElement(child as React.ReactElement, {
									_internalVariant: variant,
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
	_internalVariant = 'default',
	_internalOnClick,
	onClick,
	id,
	...rest
}) => {
	return (
		<Sc.NavItem
			id={id}
			className={classNames('navbar-item', className)}
			$variant={_internalVariant}
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

export interface NavMenuProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The label for the menu trigger
	 */
	label: string;
	/**
	 * Menu items to be displayed in the dropdown
	 */
	children: React.ReactNode;
	/**
	 * @internal The variant of the NavMenu
	 */
	_internalVariant?: NavbarVariant;
}

/**
 * NavMenu creates a dropdown menu within the navbar, perfect for Windows 3.1 style menu bars.
 *
 * @example
 * <Navbar variant="menu-bar">
 * 	<NavMenu label="File">
 * 		<MenuItem>New</MenuItem>
 * 		<MenuItem>Open</MenuItem>
 * 		<MenuItem>Save</MenuItem>
 * 	</NavMenu>
 * </Navbar>
 */
export const NavMenu: React.FC<NavMenuProps> = ({
	label,
	children,
	className,
	_internalVariant = 'default',
	...rest
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<Sc.NavMenuContainer
			className={classNames('nav-menu', className)}
			onMouseLeave={handleClose}
			{...rest}
		>
			<Sc.NavMenuTrigger
				$variant={_internalVariant}
				$isOpen={isOpen}
				onClick={handleToggle}
				onMouseEnter={() => _internalVariant === 'menu-bar' && setIsOpen(true)}
			>
				{label}
			</Sc.NavMenuTrigger>
			{isOpen && (
				<Sc.NavMenuDropdown $variant={_internalVariant}>
					{children}
				</Sc.NavMenuDropdown>
			)}
		</Sc.NavMenuContainer>
	);
};

NavMenu.displayName = 'NavMenu';
