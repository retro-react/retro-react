import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Checkbox.styled';

export type CheckboxColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn';

export interface CheckboxProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * The color of the Checkbox.
	 *
	 * @default 'primary'
	 */
	color?: CheckboxColor;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ id, className, onClick, color = 'primary', ...rest }, ref) => {
		return (
			<Sc.Checkbox
				ref={ref}
				id={id}
				$color={color}
				type="checkbox"
				className={classNames('checkbox-root', className)}
				onClick={onClick}
				{...rest}
			/>
		);
	},
);

Checkbox.displayName = 'Checkbox';
