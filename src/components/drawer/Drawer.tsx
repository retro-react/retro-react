/** @jsxImportSource theme-ui */
import React, {
	Dispatch,
	forwardRef,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { ComponentColors } from '../../utils/getColorScheme';
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
	 * Compatible with `useState` setters.
	 *
	 * Prefer `onOpenChange` for non-`useState` integrations
	 * (Zustand, Redux, controlled parents). If both are provided, both run.
	 */
	setIsOpen?: Dispatch<React.SetStateAction<boolean>>;
	/**
	 * Callback fired when the drawer's open state should change.
	 * Receives the next open value.
	 */
	onOpenChange?: (open: boolean) => void;
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
			onOpenChange,
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

		const requestClose = useCallback(() => {
			setIsOpen?.(false);
			onOpenChange?.(false);
		}, [setIsOpen, onOpenChange]);

		useEffect(() => {
			if (!isOpen) return;

			const handleClickOutside = (event: MouseEvent) => {
				if (
					drawerElement.current &&
					!drawerElement.current.contains(event.target as Node)
				) {
					requestClose();
				}
			};

			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [isOpen, requestClose]);

		useEffect(() => {
			if (isOpen && drawerElement.current) {
				previouslyFocusedElement.current = document.activeElement;
				drawerElement.current.focus();
				return () => {
					(previouslyFocusedElement.current as HTMLElement)?.focus();
				};
			}
		}, [isOpen]);

		useEffect(() => {
			if (!isOpen) return;

			const handleFocusTrap = (event: KeyboardEvent) => {
				if (event.key !== 'Tab' || !drawerElement.current) return;

				const focusable = drawerElement.current.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
				);
				const elements = Array.from(focusable);
				const first = elements[0] ?? drawerElement.current;
				const last = elements[elements.length - 1] ?? drawerElement.current;
				const active = document.activeElement;

				if (event.shiftKey) {
					if (active === first || active === drawerElement.current) {
						event.preventDefault();
						last.focus();
					}
				} else if (active === last) {
					event.preventDefault();
					first.focus();
				}
			};

			document.addEventListener('keydown', handleFocusTrap);
			return () => document.removeEventListener('keydown', handleFocusTrap);
		}, [isOpen]);

		useEffect(() => {
			if (!isOpen) return;
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					requestClose();
				}
			};

			window.addEventListener('keydown', handleKeyDown);
			return () => window.removeEventListener('keydown', handleKeyDown);
		}, [isOpen, requestClose]);

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
				{isOpen && <Backdrop onClick={requestClose} />}
				<DrawerContainer
					ref={setRefs}
					$isOpen={isOpen}
					$direction={direction}
					$color={color}
					sx={sx}
					role="dialog"
					aria-modal="true"
					tabIndex={-1}
					data-state={isOpen ? 'open' : 'closed'}
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
