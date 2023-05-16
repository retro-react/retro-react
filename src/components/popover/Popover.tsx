/** @jsxImportSource theme-ui */
import { Children, cloneElement, forwardRef, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { Box } from '../box';
import { Button, ButtonProps } from '../button';
import { Portal } from '../portal/Portal';
import * as Sc from './Popover.styled';

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
	sx?: ThemeUICSSObject;
}

/**
 * A button that opens a popover.
 */
export const PopoverButton = forwardRef<HTMLButtonElement, ButtonProps>(
	({ sx, children, className, id, ...rest }, ref) => {
		return (
			<Button
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('popover-button-root', className)}
				{...rest}
			>
				{children}
			</Button>
		);
	},
);

PopoverButton.displayName = 'PopoverButton';

/**
 * The content of a popover.
 */
export const PopoverContent = forwardRef<
	HTMLDivElement,
	PopoverProps & { position?: { top: number; left: number } }
>(({ id, className, children, position, sx, ...rest }, ref) => {
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
});

PopoverContent.displayName = 'PopoverContent';

export interface PopoverProps {
	/**
	 * The content and trigger of the popover. Use `PopoverButton` and `PopoverContent` to render the trigger and content.
	 */
	children: React.ReactElement | React.ReactElement[];
	sx?: ThemeUICSSObject;
}

/**
 * A popover. The content is rendered in a Portal.
 *
 * @example
 * <Popover>
 * 	<PopoverButton>Open Popover</PopoverButton>
 * 	<PopoverContent>
 * 		<Text>This is the content of the popover.</Text>
 * 	</PopoverContent>
 * </Popover>
 */
export const Popover: React.FC<PopoverProps> = ({ children, sx }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const onButtonClick = () => {
		const rect = buttonRef.current
			? buttonRef.current.getBoundingClientRect()
			: { top: 0, left: 0, width: 0, bottom: 0 };
		const top = rect.bottom;
		const left = rect.left + rect.width / 2;
		setIsOpen(!isOpen);
		setPosition({ top, left });
	};

	const childrenWithProps = Children.map(children, (child) => {
		if (!child) return null;
		if (child.type === PopoverButton) {
			return cloneElement(child, {
				onClick: onButtonClick,
				ref: buttonRef,
			});
		}
		if (child.type === PopoverContent) {
			return isOpen ? (
				<Portal>
					<PopoverContent position={position}>
						{child.props.children}
					</PopoverContent>
				</Portal>
			) : null;
		}

		return child;
	});

	return (
		<div
			sx={{
				position: 'relative',
				...sx,
			}}
		>
			{childrenWithProps}
		</div>
	);
};
