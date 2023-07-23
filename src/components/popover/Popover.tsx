/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { Button, ButtonProps } from '../button';
import { Portal } from '../portal/Portal';
import * as Sc from './Popover.styled';

export type PopoverPosition = 'top' | 'right' | 'bottom' | 'left';

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
	sx?: ThemeUICSSObject;
}

export interface PopoverButtonProps extends ButtonProps {
	isOpen?: boolean;
}

/**
 * A button that opens a popover.
 */
export const PopoverButton = forwardRef<HTMLButtonElement, PopoverButtonProps>(
	({ sx, children, className, id, isOpen, ...rest }, ref) => {
		return (
			<Button
				ref={ref}
				id={id}
				sx={sx}
				className={classNames(
					'popover-button-root',
					isOpen ? 'retro-active' : '',
					className,
				)}
				{...rest}
			>
				{children}
			</Button>
		);
	},
);

PopoverButton.displayName = 'PopoverButton';

export interface PopoverContentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	sx?: ThemeUICSSObject;
	position?: { top: number; left: number };
}

/**
 * The content of a popover.
 */
export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
	({ id, className, children, position, sx, ...rest }, ref) => {
		return (
			<Sc.PopoverContent
				ref={ref}
				id={id}
				sx={sx}
				$top={position?.top}
				$left={position?.left}
				className={classNames('popover-content-root', className)}
				{...rest}
			>
				{children}
			</Sc.PopoverContent>
		);
	},
);

PopoverContent.displayName = 'PopoverContent';

export interface PopoverProps {
	/**
	 * The content and trigger of the popover. Use `PopoverButton` and `PopoverContent` to render the trigger and content.
	 */
	children: React.ReactElement | React.ReactElement[];
	/**
	 * Position of the popover relative to the trigger.
	 *
	 * @default 'bottom'
	 */
	position?: PopoverPosition;
	/**
	 * Close the popover when clicking outside of it.
	 *
	 * @default true
	 */
	closeOnClickOutside?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * A popover. The content is rendered in a Portal. Use `sx` to style the popover container.
 *
 * @example
 * <Popover>
 * 	<PopoverButton>Open Popover</PopoverButton>
 * 	<PopoverContent>
 * 		<Text>This is the content of the popover.</Text>
 * 	</PopoverContent>
 * </Popover>
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
	(
		{ children, position = 'bottom', closeOnClickOutside = true, sx, ...rest },
		ref,
	) => {
		const [isOpen, setIsOpen] = useState(false);
		const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
		const buttonRef = useRef<HTMLButtonElement | null>(null);
		const popoverRef = useRef<HTMLDivElement | null>(null);

		useEffect(() => {
			if (!isOpen) return;

			const rect = buttonRef.current?.getBoundingClientRect() || {
				top: 0,
				left: 0,
				width: 0,
				height: 0,
				right: 0,
				bottom: 0,
			};
			const popoverRect = popoverRef.current?.getBoundingClientRect() || {
				width: 0,
				height: 0,
			};

			let pos = { top: 0, left: 0 };

			switch (position) {
				case 'top':
					pos = {
						top: rect.top - popoverRect.height - rect.height / 2,
						left: rect.left + rect.width / 2,
					};
					break;
				case 'bottom':
					pos = {
						top: rect.bottom,
						left: rect.left + rect.width / 2,
					};
					break;
				case 'right':
					pos = {
						top: rect.top + rect.height / 2 - popoverRect.height / 2,
						left: rect.right + rect.width,
					};
					break;
				case 'left':
					pos = {
						top: rect.top + rect.height / 2 - popoverRect.height / 2,
						left: rect.left - rect.width,
					};
					break;
			}

			setPopoverPosition(pos);
		}, [isOpen, position]);

		useEffect(() => {
			if (!closeOnClickOutside || !isOpen) return;
			const handleClickOutside = (event: MouseEvent) => {
				if (
					popoverRef.current &&
					!popoverRef.current.contains(event.target as Node) &&
					buttonRef.current &&
					!buttonRef.current.contains(event.target as Node)
				) {
					setIsOpen(false);
				}
			};
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [isOpen, closeOnClickOutside]);

		const onButtonClick = () => {
			setIsOpen(!isOpen);
		};

		const childrenWithProps = Children.map(children, (child) => {
			if (!child) return null;
			if (child.type === PopoverButton) {
				return cloneElement(child, {
					onClick: onButtonClick,
					ref: buttonRef,
					isOpen,
				});
			}
			if (child.type === PopoverContent) {
				return (
					<Portal>
						<PopoverContent
							ref={popoverRef}
							position={isOpen ? popoverPosition : undefined}
							style={{
								position: 'fixed',
								visibility: isOpen ? 'visible' : 'hidden',
								transition: 'visibility 0s linear 0.2s',
								// Position the popover far off-screen when it's not open.
								left: isOpen ? undefined : '-9999px',
							}}
						>
							{child.props.children}
						</PopoverContent>
					</Portal>
				);
			}

			return child;
		});

		return (
			<div
				{...rest}
				ref={ref}
				sx={{
					position: 'relative',
					...sx,
				}}
			>
				{childrenWithProps}
			</div>
		);
	},
);

Popover.displayName = 'Popover';
