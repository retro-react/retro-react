/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Spinner.styled';
import { getSpinnerColorOptions } from './themes';

export type SpinnerShape = 'circle' | 'square' | 'star' | 'diamond';

export type SpinnerColor =
	| 'primary'
	| 'secondary'
	| 'rainbow'
	| 'neon'
	| 'pastel'
	| 'grayscale'
	| 'retro';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The color of the spinner. __Hex colors__ are also supported.
	 *
	 * @default 'primary'
	 */
	color?: SpinnerColor;
	/**
	 * The shape of the spinner.
	 *
	 * @default 'circle'
	 */
	shape?: SpinnerShape;
	sx?: any;
}

/**
 * Spinners are used to indicate the loading state of a component or page.
 *
 * @example
 * <Spinner color="primary" shape="circle" />
 * <Spinner color="secondary" shape="square" />
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
	(
		{
			id,
			className,
			children,
			color = 'primary',
			shape = 'circle',
			sx,
			...rest
		},
		ref,
	) => {
		const colors = getSpinnerColorOptions(color);

		return (
			<Sc.Wrapper
				ref={ref}
				className={classNames('spinner-root', className, commonClassNames)}
				{...rest}
				sx={sx}
			>
				{shape === 'circle' && (
					<Sc.CircleSpinner $colors={colors} {...rest} ref={ref} />
				)}
				{shape === 'square' && (
					<Sc.SquareSpinner $colors={colors} {...rest} ref={ref} />
				)}
				{shape === 'star' && (
					<Sc.StarSpinner $colors={colors} {...rest} ref={ref} />
				)}
				{shape === 'diamond' && (
					<Sc.DiamondSpinner $colors={colors} {...rest} ref={ref} />
				)}
			</Sc.Wrapper>
		);
	},
);

Spinner.displayName = 'Spinner';
