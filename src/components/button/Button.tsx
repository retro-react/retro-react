/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Button.styled';

export type ButtonColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn'
	| 'greyscale'
	| 'greyscale-dark';

export type ButtonVariant = 'solid' | 'outline' | 'text';

export type ButtonSize = 'small' | 'medium' | 'large';

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
	/**
	 * The size of the Button.
	 *
	 * @default 'medium'
	 */
	size?: ButtonSize;
	/**
	 * If true disables the click transform effect.
	 *
	 * @default false
	 */
	disableClickEffect?: boolean;
	sx?: ThemeUICSSObject;

	/**
	 * @internal
	 *
	 * Modify styles for ButtonGroup component.
	 */
	isButtonGroup?: boolean;
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
			size = 'medium',
			isButtonGroup = false,
			disableClickEffect = false,
			children,
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Button
				ref={ref}
				id={id}
				variant={variant}
				$size={size}
				$color={color}
				$isButtonGroup={isButtonGroup}
				$disableClickEffect={disableClickEffect}
				className={classNames('button-root', className, commonClassNames)}
				onClick={onClick}
				sx={sx}
				{...rest}
			>
				{children}
			</Sc.Button>
		);
	},
);

Button.displayName = 'Button';
