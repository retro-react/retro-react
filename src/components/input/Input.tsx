/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Input.styled';

export type InputVariants = 'outlined' | 'filled';
export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * The variant of the Input.
	 *
	 * @default 'filled'
	 */
	variant?: InputVariants;
	sx?: any;
}

/**
 * Inputs are used to collect user provided information.
 *
 * @example
 * <Input name="Username" />
 * <Input name="Username" disabled />
 * <Input name="Username" placeholder="Username" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ id, className, children, variant = 'filled', sx, ...rest }, ref) => {
		return (
			<Sc.Input
				ref={ref}
				id={id}
				$variant={variant}
				className={classNames('input-root', className)}
				sx={sx}
				{...rest}
			>
				{children}
			</Sc.Input>
		);
	},
);

Input.displayName = 'Input';
