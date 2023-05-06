/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
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
	color?: ComponentColors | string;
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
	onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Modals are used to display content in a layer above the app.
 * They are centered on the screen and can be triggered by a button.
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
			...rest
		},
		ref,
	) => {
		return (
			<Portal>
				{backdrop && <Sc.ModalBackdrop $open={open} />}
				<Sc.Modal
					$color={color}
					$pattern={pattern}
					$backdrop={backdrop}
					$open={open}
					ref={ref}
					id={id}
					className={classNames('modal-root', className, commonClassNames)}
					{...rest}
				>
					<Sc.CloseButton
						className="modal-close-button"
						onClick={onClose}
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
