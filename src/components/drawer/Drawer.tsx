/** @jsxImportSource theme-ui */
import React, { Dispatch, forwardRef, useEffect, useRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { ComponentColors } from '@src/utils/getColorScheme';
import { Portal } from '../portal/Portal';
import { Backdrop, DrawerContainer } from './Drawer.styled';

export type DrawerDirection = 'left' | 'right';
export type DrawerColors = ComponentColors | 'greyscale' | 'greyscale-dark';

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
 *
 * Pressing the `Escape` key will close the Drawer.
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
		const drawerElement = useRef<HTMLDivElement | null>(null);
		const previouslyFocusedElement = useRef<Element | null>(null);

		useEffect(() => {
			const handleClickOutside = (event) => {
				if (
					drawerElement.current &&
					!drawerElement.current.contains(event.target)
				) {
					setIsOpen(false);
				}
			};

			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [setIsOpen]);

		useEffect(() => {
			if (isOpen && drawerElement.current) {
				previouslyFocusedElement.current = document.activeElement;
				drawerElement.current.focus();
			} else {
				(previouslyFocusedElement.current as HTMLElement)?.focus();
			}
		}, [isOpen]);

		useEffect(() => {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					setIsOpen(false);
				}
			};

			window.addEventListener('keydown', handleKeyDown);
			return () => window.removeEventListener('keydown', handleKeyDown);
		}, [setIsOpen]);

		const setRefs = (element: HTMLDivElement) => {
			if (ref) {
				if (typeof ref === 'function') {
					ref(element);
				} else {
					ref.current = element;
				}
			}
			drawerElement.current = element;
		};

		const drawer = (
			<>
				{isOpen && <Backdrop onClick={() => setIsOpen((prev) => !prev)} />}
				<DrawerContainer
					ref={setRefs}
					$isOpen={isOpen}
					$direction={direction}
					$color={color}
					sx={sx}
					role="dialog"
					aria-modal="true"
					tabIndex={-1}
					{...rest}
				>
					{children}
				</DrawerContainer>
			</>
		);

		return <Portal>{drawer}</Portal>;
	},
);

Drawer.displayName = 'Drawer';
