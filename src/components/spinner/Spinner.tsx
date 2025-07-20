/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Spinner.styled';

export type SpinnerVariant = 'hourglass' | 'dots' | 'bars' | 'rotating';
export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The variant of the spinner - authentic WIN31 loading styles.
	 *
	 * @default 'hourglass'
	 */
	variant?: SpinnerVariant;
	/**
	 * The size of the spinner.
	 *
	 * @default 'medium'
	 */
	size?: SpinnerSize;
	sx?: ThemeUICSSObject;
}

/**
 * Authentic Windows 3.1 style spinner components for loading states.
 * Features classic loading indicators reminiscent of early Windows applications.
 *
 * @example
 * <Spinner variant="hourglass" size="medium" />
 * <Spinner variant="dots" size="small" />
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
	(
		{
			id,
			className,
			children,
			variant = 'hourglass',
			size = 'medium',
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Wrapper
				ref={ref}
				className={classNames('spinner-root', className, commonClassNames)}
				{...rest}
				sx={sx}
				role="status"
				aria-label="Loading"
			>
				{variant === 'hourglass' && <Sc.HourglassSpinner $size={size} />}
				{variant === 'dots' && (
					<Sc.DotsSpinner $size={size}>
						<Sc.Dot />
						<Sc.Dot />
						<Sc.Dot />
					</Sc.DotsSpinner>
				)}
				{variant === 'bars' && (
					<Sc.BarsSpinner $size={size}>
						<Sc.Bar />
						<Sc.Bar />
						<Sc.Bar />
						<Sc.Bar />
					</Sc.BarsSpinner>
				)}
				{variant === 'rotating' && <Sc.RotatingSpinner $size={size} />}
			</Sc.Wrapper>
		);
	},
);

Spinner.displayName = 'Spinner';
