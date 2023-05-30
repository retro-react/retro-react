/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Input.styled';

export type InputVariants = 'outlined' | 'filled';
export type InputSizes = 'small' | 'medium' | string;

export interface OmitSizeInputHTMLAttributes
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {}
export interface BaseInputProps extends OmitSizeInputHTMLAttributes {
	/**
	 * The variant of the Input.
	 *
	 * @default 'outlined'
	 */
	variant?: InputVariants;
	/**
	 * The color of the Input.
	 *
	 * @default 'primary'
	 */
	/**
	 * Rounded corners for the Input.
	 *
	 * @default true
	 */
	rounded?: boolean;
	color?: ComponentColors | 'greyscale';
	/**
	 * The size of the Input.
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
 * Inputs are used to collect user provided information.
 *
 * @example
 * <Input name="Username" />
 * <Input name="Username" disabled />
 * <Input name="Username" placeholder="Username" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			id,
			className,
			children,
			variant = 'filled',
			color = 'primary',
			size = 'small',
			rounded = true,
			multiline = false,
			sx,
			...rest
		},
		ref,
	) => {
		const Component = multiline ? 'textarea' : 'input';

		return (
			<Sc.Input
				as={Component}
				ref={ref}
				id={id}
				$variant={variant}
				$rounded={rounded}
				$multiline={multiline}
				$color={color}
				$size={size}
				className={classNames('input-root', className, commonClassNames)}
				sx={sx}
				{...rest}
			>
				{children}
			</Sc.Input>
		);
	},
);

Input.displayName = 'Input';
