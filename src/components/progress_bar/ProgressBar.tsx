/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './ProgressBar.styled';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The value of the Progress Bar.
	 *
	 * @default 0
	 */
	value?: number;
	/**
	 * The color of the Progress Bar.
	 *
	 * @default 'primary'
	 */
	color?: string;
	/**
	 * The pattern of the Progress Bar.
	 *
	 * @default 'stripes'
	 */
	pattern?: ComponentPatterns;
	sx?: any;
}

/**
 * Progress Bars are used to show the progress of a task.
 * Use `sx` prop to style the Progress Bar.
 *
 * @example
 * <ProgressBar value={50} />
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
	(
		{ id, className, value = 0, color, pattern = 'noise', sx, ...rest },
		ref,
	) => {
		return (
			<Sc.ProgressBarWrapper>
				<Sc.ProgressBar
					$value={value}
					$color={color}
					$pattern={pattern}
					ref={ref}
					id={id}
					sx={sx}
					className={classNames(
						'progress-bar-root',
						className,
						commonClassNames,
					)}
					{...rest}
				/>
			</Sc.ProgressBarWrapper>
		);
	},
);

ProgressBar.displayName = 'ProgressBar';
