/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Box.styled';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The background of the Box. Accepts library colors or hex colors.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | string;
	/**
	 * The pattern of the Box.
	 *
	 * @default 'stripes'
	 */
	pattern?: ComponentPatterns;
	sx?: ThemeUICSSObject;
}

/**
 * Boxes are used to group content together.
 * They can be used to create layouts, or to group content within a layout.
 * With `sx` prop you can use all the CSS properties of the theme.
 *
 * @example
 * <Box color="#fff">
 * 	Content
 * </Box>
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(
	(
		{
			id,
			className,
			children,
			color = 'primary',
			pattern = 'noise',
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Box
				$color={color}
				$pattern={pattern}
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
