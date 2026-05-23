/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useId, useRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { ComponentColors } from '../../utils/getColorScheme';
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
	onClose?: (event: React.MouseEvent | KeyboardEvent | Event) => void;
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
		const generatedId = useId();
		const titleId = `${id ?? generatedId}-title`;
		const modalElement = useRef<HTMLDivElement | null>(null);
		const previouslyFocusedElement = useRef<Element | null>(null);

		const setRefs = (element: HTMLDivElement | null) => {
			modalElement.current = element;
			if (typeof ref === 'function') {
				ref(element);
			} else if (ref) {
				ref.current = element;
			}
		};

		useEffect(() => {
			if (!open) return;
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					onClose?.(event);
				}
			};

			window.addEventListener('keydown', handleKeyDown);
			return () => window.removeEventListener('keydown', handleKeyDown);
		}, [open, onClose]);

		useEffect(() => {
			if (!open || !modalElement.current) return;

			previouslyFocusedElement.current = document.activeElement;

			const focusable = modalElement.current.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
			);
			(focusable[0] ?? modalElement.current).focus();

			return () => {
				(previouslyFocusedElement.current as HTMLElement)?.focus();
			};
		}, [open]);

		useEffect(() => {
			if (!open) return;

			const handleFocusTrap = (event: KeyboardEvent) => {
				if (event.key !== 'Tab' || !modalElement.current) return;

				const focusable = modalElement.current.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
				);
				const elements = Array.from(focusable);
				const first = elements[0] ?? modalElement.current;
				const last = elements[elements.length - 1] ?? modalElement.current;
				const active = document.activeElement;

				if (event.shiftKey) {
					if (active === first || active === modalElement.current) {
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
		}, [open]);

		if (!open) {
			return null;
		}

		return (
			<Portal>
				{backdrop && (
					<Sc.ModalBackdrop $open={open} onClick={(e) => onClose?.(e)} />
				)}
				<Sc.Modal
					$color={color}
					$open={open}
					ref={setRefs}
					id={id}
					tabIndex={-1}
					sx={sx}
					role="dialog"
					aria-modal="true"
					aria-labelledby={titleId}
					data-state={open ? 'open' : 'closed'}
					className={classNames('modal-root', className, commonClassNames)}
					{...rest}
				>
					<Sc.ModalTitleBar $color={color}>
						<Sc.ModalTitle id={titleId}>{title}</Sc.ModalTitle>
						<Sc.CloseButton
							className="modal-close-button"
							onClick={(e) => onClose?.(e)}
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
