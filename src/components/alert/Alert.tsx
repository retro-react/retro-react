/** @jsxImportSource theme-ui */
import { forwardRef, MouseEventHandler } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import closeIcon from '../../assets/svg/close_icon.svg';
import * as Sc from './Alert.styled';

export type AlertColor = 'primary' | 'secondary' | 'success' | 'error' | 'warn';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
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
			color = 'primary',
			title = '',
			showCloseButton = false,
			onClose,
			children,
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Alert
				id={id}
				$color={color}
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
	},
);

Alert.displayName = 'Alert';
