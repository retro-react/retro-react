/** @jsxImportSource theme-ui */
import { forwardRef, useRef } from 'react';
import React from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Menu.styled';

/**
 * Properties for `Menu` component
 */
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Children elements, ideally MenuItem components.
	 */
	children?: React.ReactNode;
	/**
	 * Theme-ui styling properties
	 *
	 * @example { backgroundColor: 'primary', ':hover': { backgroundColor: 'secondary' } }
	 */
	sx?: ThemeUICSSObject;
}

/**
 * Properties for `MenuItem` component
 */
export interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	/**
	 * Theme-ui styling properties
	 *
	 * @example { backgroundColor: 'primary', ':hover': { backgroundColor: 'secondary' } }
	 */
	sx?: ThemeUICSSObject;
}

/**
 * Menu component for displaying a list of items. Can be used for navigation or dropdowns. Uses the `Menu` and `MenuItem` components for implementation.
 *
 * @example
 * <Menu>
 * 	<MenuItem>Item 1</MenuItem>
 * 	<MenuItem>Item 2</MenuItem>
 * 	<MenuItem>Item 3</MenuItem>
 * </Menu>
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
	({ id, sx, className, children, ...rest }, ref) => {
		const menuRef = useRef<HTMLUListElement>(null);

		const getItems = (): HTMLElement[] => {
			if (!menuRef.current) return [];
			return Array.from(
				menuRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]'),
			);
		};

		const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
			const items = getItems();
			if (items.length === 0) return;

			const currentIndex = items.findIndex(
				(item) => item === document.activeElement,
			);

			if (event.key === 'ArrowDown') {
				event.preventDefault();
				const nextIndex =
					currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
				items[nextIndex]?.focus();
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				const prevIndex =
					currentIndex < 0
						? items.length - 1
						: (currentIndex - 1 + items.length) % items.length;
				items[prevIndex]?.focus();
			} else if (event.key === 'Enter' || event.key === ' ') {
				if (currentIndex >= 0) {
					event.preventDefault();
					items[currentIndex].click();
				}
			}
		};

		return (
			<Sc.MenuContainer
				id={id}
				sx={sx}
				ref={ref}
				role="menu"
				onKeyDown={handleKeyDown}
				className={classNames('menu-container', className, commonClassNames)}
				{...rest}
			>
				<Sc.MenuStyled ref={menuRef}>
					{React.Children.map(children, (child, index) => (
						<>
							{React.isValidElement(child)
								? React.cloneElement(child as React.ReactElement, {
										tabIndex: index === 0 ? 0 : -1,
								  })
								: child}
							{index !== React.Children.count(children) - 1 && (
								<Sc.MenuItemDivider className="menu-item-divider" />
							)}
						</>
					))}
				</Sc.MenuStyled>
			</Sc.MenuContainer>
		);
	},
);

Menu.displayName = 'Menu';

export const MenuItem: React.FC<MenuItemProps> = ({
	children,
	sx,
	tabIndex = 0,
	...rest
}) => {
	return (
		<Sc.MenuItem
			role="menuitem"
			tabIndex={tabIndex}
			className={classNames('menu-item', commonClassNames)}
			sx={sx}
			{...rest}
		>
			{children}
		</Sc.MenuItem>
	);
};

MenuItem.displayName = 'MenuItem';
