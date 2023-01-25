import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Button.styled';

export type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warn';

export type Variant = 'solid' | 'outline' | 'text';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * The color of the Button.
	 *
	 * @default 'primary'
	 */
	color?: Color;
	/**
	 * The visual style of the Button.
	 *
	 * @default 'solid'
	 */
	variant?: Variant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			id,
			className,
			onClick,
			color = 'primary',
			variant = 'solid',
			children,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Button
				ref={ref}
				id={id}
				variant={variant}
				$color={color}
				className={classNames('button-root', className)}
				onClick={onClick}
				{...rest}
			>
				{children}
			</Sc.Button>
		);
	},
);

Button.displayName = 'Button';
