/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Box.styled';

export type BoxPattern = 'noise' | 'stripes' | 'dots';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The background of the Box.
	 *
	 * @default 'darkseagreen'
	 */
	color?: string;
	/**
	 * The pattern of the Box.
	 *
	 * @default 'stripes'
	 */
	pattern?: BoxPattern;
	sx?: any;
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
			color = 'darkseagreen',
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
