/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
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

	sx?: ThemeUICSSObject;
}

/**
 * Custom scrollbars are used to replace the default scrollbars. Only works on Chrome, Edge, Safari and other browsers that support the
 * `::webkit-scrollbar` pseudo element.
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
