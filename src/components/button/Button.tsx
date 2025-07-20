/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Button.styled';

export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'outline'
	| 'flat';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * The visual style of the Button.
	 * - primary: Classic blue primary button
	 * - secondary: Classic grey secondary button
	 * - success: Classic green success button
	 * - warning: Classic yellow warning button
	 * - outline: Outlined button style
	 * - flat: Flat button style
	 *
	 * @default 'primary'
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
 * <Button variant="success">
 * 	Submit
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			id,
			className,
			onClick,
			variant = 'primary',
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
