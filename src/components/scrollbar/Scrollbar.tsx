/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { GlobalScrollbarStyles } from './GlobalScrollbarStyles';

export type ScrollbarVariant = 'default' | 'windows' | 'terminal' | 'amber';

export interface ScrollbarProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * The variant of the Scrollbar.
	 * - default: Classic Windows 95/98 scrollbar with raised 3D effect
	 * - windows: Authentic Windows 3.1 style scrollbar
	 * - terminal: Dark terminal-style scrollbar with green accents
	 * - amber: Vintage amber terminal scrollbar
	 *
	 * @default 'default'
	 */
	variant?: ScrollbarVariant;

	sx?: ThemeUICSSObject;
}

/**
 * Retro-themed custom scrollbars inspired by Windows 95/98 and classic terminal interfaces.
 *
 * Features authentic retro scrollbar styling:
 * - Default: Classic Windows 95/98 raised 3D scrollbar
 * - Windows: Authentic Windows 3.1 style scrollbar
 * - Terminal: Dark terminal-style with green accents
 * - Amber: Vintage amber terminal scrollbar
 *
 * Only works on Chrome, Edge, Safari and other browsers that support the
 * `::webkit-scrollbar` pseudo element.
 *
 * @example
 * // Classic Windows 95 scrollbar
 * <Scrollbar variant="default">
 * 	<div style={{ height: 200, overflow: 'auto' }}>
 * 		Long content here...
 * 	</div>
 * </Scrollbar>
 *
 * // Terminal style scrollbar
 * <Scrollbar variant="terminal">
 * 	<div style={{ height: 200, overflow: 'auto' }}>
 * 		Terminal content...
 * 	</div>
 * </Scrollbar>
 */
export const Scrollbar = forwardRef<HTMLElement, ScrollbarProps>(
	({ id, className, children, variant = 'default', sx, ...rest }, ref) => {
		return (
			<>
				<GlobalScrollbarStyles variant={variant} />
				<div
					ref={ref as any}
					id={id}
					sx={sx}
					className={classNames('scrollbar-root', variant, className)}
					{...rest}
				>
					{children}
				</div>
			</>
		);
	},
);

Scrollbar.displayName = 'Scrollbar';
