/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import React from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
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
	/**
	 * Defines the pattern of the menu container. Can be a pattern from ComponentPatterns or 'none'.
	 *
	 * @default 'noise'
	 */
	pattern?: ComponentPatterns;
	/**
	 * Defines if the corners of the menu container should be rounded.
	 *
	 * @default false
	 */
	rounded?: boolean;
	/**
	 * Defines the color of the menu container. Can be a color from ComponentColors or 'greyscale'.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'greyscale';
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
	(
		{
			id,
			sx,
			className,
			children,
			pattern = 'noise',
			rounded = false,
			color = 'primary',
			...rest
		},
		ref,
	) => {
		return (
			<Sc.MenuContainer
				id={id}
				sx={sx}
				ref={ref}
				className={classNames('menu-container', className, commonClassNames)}
				$pattern={pattern}
				$rounded={rounded}
				$color={color}
				{...rest}
			>
				<Sc.MenuStyled>
					{React.Children.map(children, (child, index) => (
						<>
							{child}
							{index !== React.Children.count(children) - 1 && (
								<Sc.MenuItemDivider
									className="menu-item-divider"
									$color={color}
								/>
							)}
						</>
					))}
				</Sc.MenuStyled>
			</Sc.MenuContainer>
		);
	},
);

Menu.displayName = 'Menu';

export const MenuItem: React.FC<MenuItemProps> = ({ children, sx }) => {
	return (
		<Sc.MenuItem className={classNames('menu-item', commonClassNames)} sx={sx}>
			{children}
		</Sc.MenuItem>
	);
};

MenuItem.displayName = 'MenuItem';
