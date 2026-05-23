/** @jsxImportSource theme-ui */
import { ElementType, forwardRef, Ref } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Box.styled';

export type BoxVariants = 'raised' | 'sunken' | 'flat' | 'panel';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
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
	 * Render Box as a different HTML element (`section`, `article`, `aside`, `main`, etc.)
	 * for semantic markup. Defaults to `'div'`.
	 *
	 * @default 'div'
	 */
	as?: ElementType;

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
export const Box = forwardRef<HTMLElement, BoxProps>(
	({ id, className, children, variant = 'panel', as, sx, ...rest }, ref) => {
		return (
			<Sc.Box
				as={as}
				$variant={variant}
				ref={ref as Ref<HTMLDivElement>}
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
