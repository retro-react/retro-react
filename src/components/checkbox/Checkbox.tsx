/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
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
	sx?: ThemeUICSSObject;
}

/**
 * Checkboxes are used to select one or more options from a list of options.
 *
 * @example
 * <Checkbox color="primary" />
 * <Checkbox color="primary" checked />
 * <Checkbox color="primary" disabled />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ id, className, onClick, color = 'primary', sx, ...rest }, ref) => {
		return (
			<Sc.Checkbox
				ref={ref}
				id={id}
				sx={sx}
				$color={color}
				type="checkbox"
				className={classNames('checkbox-root', className, commonClassNames)}
				onClick={onClick}
				{...rest}
			/>
		);
	},
);

Checkbox.displayName = 'Checkbox';
