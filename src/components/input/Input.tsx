/** @jsxImportSource theme-ui */
import { ForwardedRef, forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Input.styled';

export type InputVariants = 'outlined' | 'filled' | 'terminal' | 'classic';
export type InputSizes = 'small' | 'medium' | 'large' | string;

export interface OmitSizeInputHTMLAttributes
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {}

export interface BaseInputProps extends OmitSizeInputHTMLAttributes {
	/**
	 * The variant of the Input.
	 * - classic: Deep sunken Windows 95/98 dialog style with heavy inset shadow
	 * - filled: Prominent raised 3D button-like appearance with outer shadow
	 * - outlined: Clean flat design with simple border and focus ring
	 * - terminal: Subtle dark terminal aesthetic with soft green text
	 *
	 * @default 'filled'
	 */
	variant?: InputVariants;
	/**
	 * The size of the Input.
	 * Supports predefined sizes: 'small', 'medium', 'large'
	 * Or custom size string for font-size
	 *
	 * @default 'small'
	 */
	size?: InputSizes;
	/**
	 * Add a multiline Input for longer text. Replaces the `input` element with a `textarea` element.
	 * With `multiline` enabled, you can also pass `rows` and `cols` props to the Input.
	 *
	 * @default false
	 */
	multiline?: boolean;
	/**
	 * Theme-UI sx prop for additional styling
	 */
	sx?: ThemeUICSSObject;
}

type MultilineProps = BaseInputProps & {
	multiline: true;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type SingleLineProps = BaseInputProps & {
	multiline?: false;
};

export type InputProps = MultilineProps | SingleLineProps;

/**
 * Retro-themed inputs inspired by classic 90s computing aesthetics.
 *
 * Features four distinct authentic variants:
 * - Classic: Deep sunken Windows 95/98 dialog inputs with heavy inset shadows
 * - Filled: Prominent raised 3D button-style with outer drop shadows
 * - Outlined: Clean flat design with simple borders and focus rings
 * - Terminal: Subtle dark console style with soft phosphor green text
 *
 * @example
 * // Deep Windows 95 sunken style
 * <Input variant="classic" placeholder="Enter text..." />
 *
 * // Prominent 3D raised input (default)
 * <Input placeholder="Enter username..." />
 *
 * // Clean flat outlined style
 * <Input variant="outlined" placeholder="Search..." />
 *
 * // Subtle terminal style
 * <Input variant="terminal" placeholder="C:\> _" />
 *
 * // Multiline classic dialog
 * <Input multiline variant="classic" rows={4} placeholder="Message..." />
 */
export const Input = forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputProps
>(
	(
		{
			id,
			className,
			variant = 'filled',
			size = 'small',
			multiline = false,
			sx,
			...rest
		},
		ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const Component = multiline ? 'textarea' : 'input';

		return (
			<Sc.Input
				as={Component}
				// @ts-ignore-next-line
				ref={ref}
				id={id}
				$variant={variant}
				$multiline={multiline}
				$size={size}
				className={classNames(
					'retro-input-root',
					`retro-input--${variant}`,
					className,
					commonClassNames,
				)}
				sx={sx}
				{...rest}
			/>
		);
	},
);

Input.displayName = 'RetroInput';
