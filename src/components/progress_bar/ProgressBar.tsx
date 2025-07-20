/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './ProgressBar.styled';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The value of the Progress Bar (0-100).
	 *
	 * @default 0
	 */
	value?: number;
	/**
	 * Animation effect with classic "barber pole" stripes moving from left to right.
	 *
	 * @default false
	 */
	animated?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * Authentic Windows 3.1 style progress bar with classic inset border and diagonal stripe pattern.
 * Features the iconic "barber pole" animation when animated is enabled.
 * Use `sx` prop to customize styling if needed.
 *
 * @example
 * <ProgressBar value={50} />
 * <ProgressBar value={75} animated />
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
	({ id, className, value = 0, animated = false, sx, ...rest }, ref) => {
		return (
			<Sc.ProgressBarWrapper>
				<Sc.ProgressBar
					$value={value}
					$animated={animated}
					ref={ref}
					id={id}
					sx={sx}
					className={classNames(
						'progress-bar-root',
						className,
						commonClassNames,
					)}
					role="progressbar"
					aria-valuenow={value}
					aria-valuemin={0}
					aria-valuemax={100}
					{...rest}
				/>
			</Sc.ProgressBarWrapper>
		);
	},
);

ProgressBar.displayName = 'ProgressBar';
