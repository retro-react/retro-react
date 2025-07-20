/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Box.styled';

export type BoxVariants = 'raised' | 'sunken' | 'flat' | 'panel';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The visual variant of the Box.
	 * - raised: 3D button-like appearance with raised borders
	 * - sunken: Inset appearance like dialog content areas
	 * - flat: Simple flat box with border
	 * - panel: Classic Windows 95 panel styling with face color background
	 *
	 * @default 'panel'
	 */
	variant?: BoxVariants;

	/**
	 * Theme-UI sx prop for additional styling
	 */
	sx?: ThemeUICSSObject;
}

/**
 * Retro-themed boxes inspired by classic Windows 95/98 interface elements.
 *
 * Features four authentic variants:
 * - Raised: 3D button-like appearance with raised borders for interactive elements
 * - Sunken: Inset appearance like dialog content areas and text fields
 * - Flat: Simple flat box with border for minimal layouts
 * - Panel: Classic Windows face color background with subtle border for containers
 *
 * @example
 * // Classic Windows panel container
 * <Box variant="panel">Content area</Box>
 *
 * // Raised button-like box
 * <Box variant="raised">Interactive content</Box>
 *
 * // Sunken content area
 * <Box variant="sunken">Text area content</Box>
 *
 * // Simple flat box
 * <Box variant="flat">Minimal content</Box>
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(
	({ id, className, children, variant = 'panel', sx, ...rest }, ref) => {
		return (
			<Sc.Box
				$variant={variant}
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('box-root', className, commonClassNames)}
				{...rest}
			>
				{children}
			</Sc.Box>
		);
	},
);

Box.displayName = 'Box';
