/** @jsxImportSource theme-ui */
import { forwardRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
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
		const [isHovered, setIsHovered] = useState(false);

		const handleMouseEnter = () => {
			if (!pauseOnHover) return;
			setIsHovered(true);
		};

		const handleMouseLeave = () => {
			if (!pauseOnHover) return;
			setIsHovered(false);
		};

		return (
			<Sc.MarqueeWrapper
				className={classNames('marquee-root', className, commonClassNames)}
				$gap={gap}
				ref={ref}
				id={id}
				sx={sx}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				{...rest}
			>
				<Sc.Marquee
					$gap={gap}
					$size={size}
					$color={color}
					$speed={speed}
					$isHovered={isHovered}
					className="marquee-content"
				>
					{children}
				</Sc.Marquee>
				<Sc.Marquee
					$gap={gap}
					$size={size}
					$color={color}
					$speed={speed}
					$isHovered={isHovered}
					className="marquee-content"
				>
					{children}
				</Sc.Marquee>
			</Sc.MarqueeWrapper>
		);
	},
);

Marquee.displayName = 'Marquee';
