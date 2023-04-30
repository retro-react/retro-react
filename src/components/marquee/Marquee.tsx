/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Marquee.styled';

export type MarqueeSize = 'small' | 'medium' | 'large';

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The size of the Marquee.
	 *
	 * @default 'medium'
	 */
	size?: MarqueeSize;
	/**
	 * The hex color of the Marquee.
	 *
	 * @default '#000000'
	 */
	color?: string;
	/**
	 * The speed of the Marquee.
	 *
	 * @default '10s'
	 */
	speed?: string;
	/**
	 * Amount of space between the two Marquee elements.
	 *
	 * @default '1rem'
	 */
	gap?: string;
	sx?: any;
}

export const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
	(
		{
			id,
			className,
			children,
			size = 'medium',
			color = '#000000',
			speed = '10s',
			gap = '1rem',
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.MarqueeWrapper
				className={classNames('Marquee-root', className)}
				$gap={gap}
				ref={ref}
				id={id}
				sx={sx}
				{...rest}
			>
				<Sc.Marquee $gap={gap} $size={size} $color={color} $speed={speed}>
					{children}
				</Sc.Marquee>
				<Sc.Marquee $gap={gap} $size={size} $color={color} $speed={speed}>
					{children}
				</Sc.Marquee>
			</Sc.MarqueeWrapper>
		);
	},
);

Marquee.displayName = 'Marquee';