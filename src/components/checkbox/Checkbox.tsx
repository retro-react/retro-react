/** @jsxImportSource theme-ui */
import _ from 'lodash';
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
	| 'warn'
	| 'greyscale'
	| 'greyscale-dark';

export interface CheckboxProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * The color of the Checkbox.
	 *
	 * @default 'primary'
	 */
	color?: CheckboxColor;
	/**
	 * The content of the Checkbox.
	 *
	 * @default undefined
	 */
	label?: React.ReactNode;
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
	({ id, className, onClick, color = 'primary', sx, label, ...rest }, ref) => {
		id = id ?? `retro-checkbox-${_.uniqueId()}`;

		if (label) {
			return (
				<Sc.CheckboxWrapper
					sx={sx}
					className={classNames('checkbox-root', className, commonClassNames)}
				>
					<Sc.Checkbox
						ref={ref}
						id={id}
						$color={color}
						type="checkbox"
						className={classNames('checkbox-root', className, commonClassNames)}
						onClick={onClick}
						{...rest}
					/>
					<Sc.CheckboxLabel htmlFor={id} $color={color}>
						{label}
					</Sc.CheckboxLabel>
				</Sc.CheckboxWrapper>
			);
		}

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
