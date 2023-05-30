/** @jsxImportSource theme-ui */
import React, { Dispatch, forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { ComponentColors } from '@src/utils/getColorScheme';
import { Backdrop, DrawerContainer } from './Drawer.styled';

export type DrawerDirection = 'left' | 'right';
export type DrawerColors = ComponentColors | 'greyscale';

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Whether the drawer is visible or not.
	 *
	 * @default false
	 */
	isOpen: boolean;
	/**
	 * A function to set the visibility of the drawer.
	 *
	 * @default () => {}
	 */
	setIsOpen: Dispatch<React.SetStateAction<boolean>>;
	/**
	 * The direction from which the drawer will appear.
	 *
	 * @default 'right'
	 */
	direction?: DrawerDirection;
	/**
	 * The main color of the drawer.
	 *
	 * @default 'primary'
	 */
	color?: DrawerColors;
	sx?: ThemeUICSSObject;
}

/**
 * Drawers provide a flexible and effective way to display side content.
 * They can slide from the left or right side of the screen, providing additional space to place content.
 * With the `isOpen` prop, you can control the visibility of the Drawer and with the `setIsOpen` prop you can set its state.
 * The `direction` prop allows you to set the direction from which the drawer will appear.
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Drawer isOpen={isOpen} setIsOpen={setIsOpen} direction="right" color="primary">
 *     Drawer Content
 * </Drawer>
 * <button onClick={() => setIsOpen(true)}>Open Drawer</button>
 */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
	(
		{
			isOpen,
			setIsOpen,
			direction = 'right',
			color = 'primary',
			sx,
			children,
			...rest
		},
		ref,
	) => {
		return (
			<>
				{isOpen && <Backdrop onClick={() => setIsOpen((prev) => !prev)} />}
				<DrawerContainer
					ref={ref}
					$isOpen={isOpen}
					$direction={direction}
					$color={color}
					sx={sx}
					{...rest}
				>
					{children}
				</DrawerContainer>
			</>
		);
	},
);

Drawer.displayName = 'Drawer';
