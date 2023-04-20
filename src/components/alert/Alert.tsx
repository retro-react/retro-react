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
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
	({ id, className, color = 'primary', title = '', children, ...rest }) => {
		return (
			<Sc.Alert
				id={id}
				$color={color}
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
