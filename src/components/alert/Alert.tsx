/** @jsxImportSource theme-ui */
import { forwardRef, MouseEventHandler } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import closeIcon from '../../assets/svg/close_icon.svg';
import { Portal } from '../portal/Portal';
import * as Sc from './Alert.styled';

export type AlertColor = 'primary' | 'secondary' | 'success' | 'error' | 'warn';
export type AlertPosition =
	| 'bottom-left'
	| 'bottom-right'
	| 'top-left'
	| 'top-right';

const availablePositions = {
	'bottom-left': {
		bottom: 10,
		left: 10,
	},
	'bottom-right': {
		bottom: 10,
		right: 10,
	},
	'top-left': {
		top: 10,
		left: 10,
	},
	'top-right': {
		top: 10,
		right: 10,
	},
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * If open is passed, the Alert will show on the screen until the user closes it.
	 *
	 * @default undefined
	 */
	open?: boolean;
	/**
	 * The position of the Alert. Only works if `open` is passed.
	 *
	 * @default 'bottom-left'
	 */
	position?: AlertPosition;
	/**
	 * The color of the Alert.
	 *
	 * @default 'primary'
	 */
	color?: AlertColor;
	/**
	 * The title of the Alert.
	 *
	 * @default ''
	 */
	title?: string;
	/**
	 * Show close button.
	 *
	 * @default false
	 */
	showCloseButton?: boolean;
	/**
	 * On close callback.
	 *
	 * @default undefined
	 */
	onClose?: MouseEventHandler<HTMLButtonElement>;
	sx?: ThemeUICSSObject;
}

/**
 * Alerts are used to communicate a state that affects a system, feature or page.
 * They should draw attention and provide a clear call to action.
 *
 * @example
 * <Alert color="success" title="Success">
 * 	Your account has been created.
 * </Alert>
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
	(
		{
			id,
			className,
			open,
			color = 'primary',
			position = 'bottom-left',
			title = '',
			showCloseButton = false,
			onClose,
			children,
			sx,
			...rest
		},
		ref,
	) => {
		const isOpenProp = open !== undefined;

		const AlertComponent = (
			<Sc.Alert
				id={id}
				$color={color}
				$isOpenProp={isOpenProp}
				sx={sx}
				ref={ref}
				className={classNames('alert-root', className, commonClassNames)}
				{...rest}
			>
				{showCloseButton && (
					<Sc.CloseButton
						className="alert-close-button"
						onClick={onClose}
						$icon={closeIcon}
						aria-label="Close"
					/>
				)}
				<Sc.Title className="alert-title">{title}</Sc.Title>
				{children}
			</Sc.Alert>
		);

		if (open !== undefined) {
			return open ? (
				<Portal
					position={
						availablePositions[position]
							? availablePositions[position]
							: availablePositions['bottom-left']
					}
				>
					{AlertComponent}
				</Portal>
			) : null;
		}

		return AlertComponent;
	},
);

Alert.displayName = 'Alert';
