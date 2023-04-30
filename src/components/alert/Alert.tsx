/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
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
	sx?: any;
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
	({ id, className, color = 'primary', title = '', children, sx, ...rest }) => {
		return (
			<Sc.Alert
				id={id}
				$color={color}
				sx={sx}
				className={classNames('alert-root', className)}
				{...rest}
			>
				<Sc.Title>{title}</Sc.Title>
				{children}
			</Sc.Alert>
		);
	},
);

Alert.displayName = 'Alert';
