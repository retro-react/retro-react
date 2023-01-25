/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Box.styled';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The background of the Box.
	 *
	 * @default 'darkseagreen'
	 */
	color?: string;
	/**
	 * The border size of the Box.
	 *
	 *  @default '1rem'
	 */
	borderSize?: string;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
	(
		{
			id,
			className,
			children,
			color = 'darkseagreen',
			borderSize = '1rem',
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Box
				$color={color}
				$borderSize={borderSize}
				ref={ref}
				id={id}
				className={classNames('box-root', className)}
				{...rest}
			>
				{children}
			</Sc.Box>
		);
	},
);

Box.displayName = 'Box';
