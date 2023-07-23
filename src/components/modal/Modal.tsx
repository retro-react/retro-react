/** @jsxImportSource theme-ui */
import { forwardRef, useEffect } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import { Portal } from '../portal/Portal';
import * as Sc from './Modal.styled';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The library colors or hex color for background of the Modal.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'greyscale' | string;
	/**
	 * Whether the Modal is open or not.
	 *
	 * @default false
	 *
	 */
	open?: boolean;
	/**
	 * Enable backdrop for Modal.
	 *
	 * @default false
	 */
	backdrop?: boolean;
	/**
	 * The pattern of the Modal.
	 *
	 * @default 'stripes'
	 */
	pattern?: ComponentPatterns;
	/**
	 * Callback fired when the Modal is closed.
	 *
	 * @default undefined
	 *
	 * @param event The event source of the callback.
	 * You can pull out the new value by accessing `event.target.value` (string).
	 */
	onClose?: (event: Event) => void;
	sx?: ThemeUICSSObject;
}

/**
 * Modals are used to display content in a layer above the app.
 * They are centered on the screen and can be triggered by a button.
 *
 * Pressing the `Escape` key will close the Modal.
 *
 * @example
 * <Modal open={open} onClose={handleClose}>
 * 		Content
 * </Modal>
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
	(
		{
			id,
			className,
			children,
			open = false,
			onClose,
			color = 'primary',
			pattern = 'noise',
			backdrop = false,
			sx,
			...rest
		},
		ref,
	) => {
		useEffect(() => {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === 'Escape' && open) {
					onClose?.(event);
				}
			};

			window.addEventListener('keydown', handleKeyDown);
			return () => window.removeEventListener('keydown', handleKeyDown);
		}, [open, onClose]);

		return (
			<Portal>
				{backdrop && (
					<Sc.ModalBackdrop $open={open} onClick={(e) => onClose?.(e as any)} />
				)}
				<Sc.Modal
					$color={color}
					$pattern={pattern}
					$backdrop={backdrop}
					$open={open}
					ref={ref}
					id={id}
					sx={sx}
					className={classNames('modal-root', className, commonClassNames)}
					{...rest}
				>
					<Sc.CloseButton
						className="modal-close-button"
						onClick={(e) => onClose?.(e as any)}
						aria-label="Close Modal"
						$color={color}
					/>
					{children}
				</Sc.Modal>
			</Portal>
		);
	},
);

Modal.displayName = 'Modal';
