import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Button.styled';

export type ButtonColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn';

export type ButtonVariant = 'solid' | 'outline' | 'text';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * The color of the Button.
	 *
	 * @default 'primary'
	 */
	color?: ButtonColor;
	/**
	 * The visual style of the Button.
	 *
	 * @default 'solid'
	 */
	variant?: ButtonVariant;
}

/**
 * Buttons are used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 *
 * @example
 * <Button color="success" variant="solid">
 * 	Submit
 * </Button>
 */
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
				className={classNames('button-root', className, commonClassNames)}
				onClick={onClick}
				{...rest}
			>
				{children}
			</Sc.Button>
		);
	},
);

Button.displayName = 'Button';
