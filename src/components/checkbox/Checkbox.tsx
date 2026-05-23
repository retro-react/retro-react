/** @jsxImportSource theme-ui */
import { forwardRef, useCallback, useEffect, useRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { uniqueId } from '../../utils/uniqueId';
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
		id = id ?? uniqueId('retro-checkbox-');
		const localRef = useRef<HTMLInputElement | null>(null);

		const setRefs = useCallback(
			(node: HTMLInputElement | null) => {
				localRef.current = node;
				if (typeof ref === 'function') {
					ref(node);
				} else if (ref && typeof ref === 'object') {
					(ref as React.MutableRefObject<HTMLInputElement | null>).current =
						node;
				}
			},
			[ref],
		);

		useEffect(() => {
			if (localRef.current) {
				localRef.current.indeterminate = indeterminate ?? false;
			}
		}, [indeterminate]);

		const checkbox = (
			<Sc.Checkbox
				id={id}
				type="checkbox"
				className={label ? undefined : classNames(commonClassNames, className)}
				onClick={onClick}
				$color={color}
				sx={sx}
				ref={setRefs}
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
