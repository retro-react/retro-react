/** @jsxImportSource theme-ui */
import _ from 'lodash';
import { forwardRef, useEffect, useRef } from 'react';
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
	label?: string | React.ReactNode;
	/**
	 * Puts the checkbox in an indeterminate state.
	 * @default false
	 */
	indeterminate?: boolean;
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
export const Checkbox = forwardRef(
	(
		{
			id,
			className,
			onClick,
			color = 'primary',
			sx,
			label,
			indeterminate,
			...rest
		}: CheckboxProps,
		ref: React.Ref<HTMLInputElement>,
	) => {
		id = id ?? `retro-checkbox-${_.uniqueId()}`;
		const localRef = useRef<HTMLInputElement>(null);
		const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || localRef;

		useEffect(() => {
			if ('current' in resolvedRef && resolvedRef.current) {
				resolvedRef.current.indeterminate = indeterminate ?? false;
			}
		}, [resolvedRef, indeterminate]);

		const checkbox = (
			<Sc.Checkbox
				id={id}
				type="checkbox"
				className={classNames(commonClassNames, className)}
				onClick={onClick}
				$color={color}
				sx={sx}
				ref={resolvedRef}
				{...rest}
			/>
		);

		if (label) {
			return (
				<Sc.CheckboxWrapper
					className={classNames('checkbox-root', className, commonClassNames)}
				>
					<Sc.CheckboxLabel
						htmlFor={id}
						$color={color}
						className={commonClassNames}
					>
						{checkbox}
						{label}
					</Sc.CheckboxLabel>
				</Sc.CheckboxWrapper>
			);
		}

		return checkbox;
	},
);

Checkbox.displayName = 'Checkbox';
