/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
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
	/**
	 * If true, the Marquee will pause on hover.
	 *
	 * @default false
	 */
	pauseOnHover?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * Marquees are used to display scrolling text.
 * Used as a fun way to display information.
 *
 * @example
 * <Marquee size="large" color="#ffffff" speed="10s">
 * 	Hello World!
 * </Marquee>
 */
export const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
	(
		{
			id,
			className,
			children,
			size = 'medium',
			color = '#000000',
			pauseOnHover = false,
			speed = '10s',
			gap = '1rem',
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.MarqueeWrapper
				className={classNames('marquee-root', className, commonClassNames)}
				ref={ref}
				id={id}
				sx={sx}
				{...rest}
			>
				<Sc.MarqueeTrack $speed={speed} $pauseOnHover={pauseOnHover}>
					<Sc.MarqueeContent
						$gap={gap}
						$size={size}
						$color={color}
						className="marquee-content"
					>
						{children}
					</Sc.MarqueeContent>
					<Sc.MarqueeContent
						$gap={gap}
						$size={size}
						$color={color}
						className="marquee-content"
						aria-hidden="true"
					>
						{children}
					</Sc.MarqueeContent>
				</Sc.MarqueeTrack>
			</Sc.MarqueeWrapper>
		);
	},
);

Marquee.displayName = 'Marquee';
