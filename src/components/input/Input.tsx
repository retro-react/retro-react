/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Input.styled';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	sx?: any;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ id, className, children, sx, ...rest }, ref) => {
		return (
			<Sc.Input
				ref={ref}
				id={id}
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
