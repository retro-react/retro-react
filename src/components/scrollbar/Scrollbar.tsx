/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import { GlobalScrollbarStyles } from './GlobalScrollbarStyles';

export type ScrollbarColor =
	| 'primary'
	| 'secondary'
	| 'pastel'
	| 'neon'
	| 'grayscale';

export interface ScrollbarProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * The theme of the Scrollbar.
	 *
	 * @default 'pastel'
	 */
	theme?: ScrollbarColor;

	sx?: any;
}

/**
 * Custom scrollbars are used to replace the default scrollbars.
 *
 * @example
 * <Scrollbar theme="pastel">
 * 	...
 * </Scrollbar>
 */
export const Scrollbar = forwardRef<HTMLElement, ScrollbarProps>(
	({ id, className, children, theme = 'pastel', sx, ...rest }, ref) => {
		return (
			<>
				<GlobalScrollbarStyles theme={theme} />
				<div
					ref={ref as any}
					id={id}
					sx={sx}
					className={classNames('scrollbar-root', theme, className)}
					{...rest}
				>
					{children}
				</div>
			</>
		);
	},
);

Scrollbar.displayName = 'Scrollbar';
