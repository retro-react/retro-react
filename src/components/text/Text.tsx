/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Text.styled';

export type TextVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'body1'
	| 'body2'
	| 'paragraph';

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The variant of the Text.
	 *
	 * @default 'body1'
	 */
	variant?: TextVariant;
	/**
	 * The color of the Text.
	 *
	 * @default 'darkseagreen'
	 */
	color?: string;
	/**
	 * Add bevel effect to Text.
	 *
	 * @default false
	 */
	bevel?: boolean;
	sx?: any;
}

/**
 * Text with different variants. Used instead of HTML tags.
 *
 * @example
 * <Text variant="h1">
 * 	Heading 1
 * </Text>
 */
export const Text = forwardRef<HTMLDivElement, TextProps>(
	(
		{
			id,
			className,
			children,
			color = 'darkseagreen',
			variant = 'body1',
			bevel = false,
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Text
				$bevel={bevel}
				$color={color}
				$variant={variant}
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('text-root', className)}
				{...rest}
			>
				{children}
			</Sc.Text>
		);
	},
);

Text.displayName = 'Text';
