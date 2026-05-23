import React, {
	Children,
	cloneElement,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from 'react';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { uniqueId } from '../../utils/uniqueId';
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
	onClick?: React.MouseEventHandler<HTMLSpanElement>;
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
		const menuIdRef = useRef(uniqueId('navbar-menu-'));
		const menuId = menuIdRef.current;
		const containerRef = useRef<HTMLDivElement | null>(null);
		const toggleMenu = () => {
			setOpen((prev) => !prev);
		};
		const closeMenuIfOpen = () => {
			setOpen((prev) => (prev ? false : prev));
		};

		useEffect(() => {
			if (!open) return;

			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					setOpen(false);
				}
			};

			const handleClickOutside = (event: MouseEvent) => {
				if (
					containerRef.current &&
					!containerRef.current.contains(event.target as Node)
				) {
					setOpen(false);
				}
			};

			document.addEventListener('keydown', handleKeyDown);
			document.addEventListener('mousedown', handleClickOutside);

			return () => {
				document.removeEventListener('keydown', handleKeyDown);
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [open]);

		const NavLogoElement = Children.toArray(children).find(
			(child) => (child as React.ReactElement).type === NavLogo,
		);
		const NavItemsElements = Children.toArray(children).filter(
			(child) => (child as React.ReactElement).type !== NavLogo,
		);

		return (
			<Sc.NavbarContainer
				$variant={variant}
				ref={(node: HTMLDivElement | null) => {
					containerRef.current = node;
					if (typeof ref === 'function') {
						ref(node);
					} else if (ref) {
						ref.current = node;
					}
				}}
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
						aria-label="Menu"
						aria-controls={menuId}
						aria-expanded={open}
					/>
				)}
				<Sc.NavbarItemsContainer
					$variant={variant}
					$open={open}
					className="navbar-items"
					id={menuId}
					role="menu"
				>
					{Children.map(NavItemsElements, (child, index) => {
						return (
							<Sc.NavbarItemWrapper key={`navbar-item-${index}`}>
								{cloneElement(child as React.ReactElement, {
									_internalVariant: variant,
									_internalOnClick: closeMenuIfOpen,
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
			onClick={(e) => {
				if (_internalOnClick) {
					_internalOnClick();
				}
				if (onClick) {
					onClick(e);
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
	const logoIdRef = useRef(uniqueId('retro-navbar-logo-'));

	return (
		<Sc.NavbarLogoContainer id={logoIdRef.current}>
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
