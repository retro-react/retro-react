import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Input.styled';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ id, className, children, ...rest }, ref) => {
		return (
			<Sc.Input
				ref={ref}
				id={id}
				className={classNames('input-root', className)}
				{...rest}
			>
				{children}
			</Sc.Input>
		);
	},
);

Input.displayName = 'Input';
