/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './ProgressBar.styled';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The value of the Progress Bar.
	 *
	 * @default 0
	 */
	value?: number;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
	({ id, className, value = 0, ...rest }, ref) => {
		return (
			<Sc.ProgressBarWrapper>
				<Sc.ProgressBar
					$value={value}
					ref={ref}
					id={id}
					className={classNames('progress-bar-root', className)}
					{...rest}
				/>
			</Sc.ProgressBarWrapper>
		);
	},
);

ProgressBar.displayName = 'ProgressBar';
