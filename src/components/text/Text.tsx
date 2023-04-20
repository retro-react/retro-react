/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Text.styled';

export type Variant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'body1'
	| 'body2';

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The variant of the Text.
	 *
	 * @default 'body1'
	 */
	variant?: Variant;
	/**
	 * The color of the Text.
	 *
	 * @default 'darkseagreen'
	 */
	color?: string;
}

export const Text = forwardRef<HTMLDivElement, TextProps>(
	(
		{
			id,
			className,
			children,
			color = 'darkseagreen',
			variant = 'body1',
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Text
				$color={color}
				$variant={variant}
				ref={ref}
				id={id}
				className={classNames('text-root', className)}
				{...rest}
			>
				{children}
			</Sc.Text>
		);
	},
);

Text.displayName = 'Text';
