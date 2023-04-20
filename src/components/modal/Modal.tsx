/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Modal.styled';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The background of the Modal.
	 *
	 * @default 'darkseagreen'
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
			color = 'darkseagreen',
			borderSize = '1rem',
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Modal
				$color={color}
				$borderSize={borderSize}
				$open={open}
				ref={ref}
				id={id}
				className={classNames('modal-root', className)}
				{...rest}
			>
				<Sc.CloseButton onClick={onClose} aria-label="Close Modal" />
				{children}
			</Sc.Modal>
		);
	},
);

Modal.displayName = 'Modal';
