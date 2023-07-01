/** @jsxImportSource theme-ui */
import { CSSProperties, forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
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
	color?: CSSProperties['color'];
	/**
	 * The background color of the Progress Bar.
	 * Set to `none` to remove the background completely.
	 *
	 * @default 'white'
	 */
	colorBg?: CSSProperties['color'] | 'none';
	/**
	 * The pattern of the Progress Bar.
	 *
	 * @default 'stripes'
	 */
	pattern?: ComponentPatterns;
	/**
	 * Animation effect of the Progress Bar. Will not work if `pattern` is set to `solid` or `stars`.
	 *
	 * @default false
	 */
	animated?: boolean;
	sx?: ThemeUICSSObject;
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
		{
			id,
			className,
			value = 0,
			color,
			colorBg,
			pattern = 'noise',
			animated = false,
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.ProgressBarWrapper>
				<Sc.ProgressBar
					$bg={colorBg}
					$value={value}
					$color={color}
					$pattern={pattern}
					$animated={animated}
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
