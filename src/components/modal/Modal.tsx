/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import { Portal } from '../portal/Portal';
import * as Sc from './Modal.styled';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The hex color background of the Modal.
	 *
	 * @default '#8fbc8f'
	 */
	color?: string;
	/**
	 * The border size of the Modal.
	 *
	 *  @default '1rem'
	 */
	borderSize?: string;
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
	 * Callback fired when the Modal is closed.
	 *
	 * @default undefined
	 *
	 * @param event The event source of the callback.
	 * You can pull out the new value by accessing `event.target.value` (string).
	 */
	onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
	(
		{
			id,
			className,
			children,
			open = false,
			onClose,
			color = '#8fbc8f',
			backdrop = false,
			borderSize = '1rem',
			...rest
		},
		ref,
	) => {
		return (
			<Portal>
				{backdrop && <Sc.ModalBackdrop $open={open} />}
				<Sc.Modal
					$color={color}
					$borderSize={borderSize}
					$backdrop={backdrop}
					$open={open}
					ref={ref}
					id={id}
					className={classNames('modal-root', className)}
					{...rest}
				>
					<Sc.CloseButton
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
