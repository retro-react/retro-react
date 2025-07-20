/** @jsxImportSource theme-ui */
import { forwardRef, useEffect } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
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
	 * The title of the modal (displayed in title bar).
	 *
	 * @default undefined
	 */
	title?: string;
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
 * <Modal open={open} onClose={handleClose} title="Dialog">
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
			backdrop = true,
			title = 'Dialog',
			sx,
			...rest
		},
		ref,
	) => {
		useEffect(() => {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === 'Escape' && open) {
					onClose?.(event as unknown as Event);
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
					$backdrop={backdrop}
					$open={open}
					ref={ref}
					id={id}
					sx={sx}
					role="dialog"
					aria-modal="true"
					className={classNames('modal-root', className, commonClassNames)}
					{...rest}
				>
					<Sc.ModalTitleBar>
						<Sc.ModalTitle>{title}</Sc.ModalTitle>
						<Sc.CloseButton
							className="modal-close-button"
							onClick={(e) => onClose?.(e as any)}
							aria-label="Close Modal"
						/>
					</Sc.ModalTitleBar>
					<Sc.ModalContent className="modal-content">
						{children}
					</Sc.ModalContent>
				</Sc.Modal>
			</Portal>
		);
	},
);

Modal.displayName = 'Modal';
