/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { StyledSkeleton } from './Skeleton.styled';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The height of the skeleton.
	 *
	 * @default '20px'
	 */
	height?: string | number;
	/**
	 * The color of the skeleton.
	 *
	 * @default 'greyscale'
	 */
	color?: ComponentColors | 'greyscale';
	/**
	 * The shape of the skeleton. For a circle, the height will also be used for the width.
	 *
	 * @default 'rectangle'
	 */
	shape?: 'rectangle' | 'circle';
	/**
	 * Whether or not the skeleton should have rounded corners.
	 *
	 * @default false
	 */
	rounded?: boolean;
	/**
	 * The effect to use for the skeleton.
	 *
	 * @default 'blink'
	 */
	effect?: 'blink' | 'shimmer';
	sx?: ThemeUICSSObject;
}

/**
 * A simple skeleton loading component. Useful for when you need to show a loading state for a component.
 *
 * @example
 * <Container>
 * 		<Skeleton height="20px" />
 * 		<Skeleton height="20px" />
 * 		<Skeleton height="20px" />
 * </Container>
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
	({
		height = '20px',
		color = 'greyscale',
		shape = 'rectangle',
		effect = 'blink',
		rounded = false,
		sx,
		className,
		...rest
	}) => {
		const skeletonRef = useRef<HTMLDivElement>(null);
		const gradientColor = getColorScheme(color);

		const [gradientWidth, setGradientWidth] = useState(0);

		useEffect(() => {
			if (skeletonRef.current) {
				setGradientWidth(skeletonRef.current.offsetWidth);
			}
		}, []);

		return (
			<StyledSkeleton
				ref={skeletonRef}
				className={classNames('skeleton-root', className)}
				$color={gradientColor}
				$shape={shape}
				$rounded={rounded}
				$height={height}
				$effect={effect}
				$gradientWidth={gradientWidth}
				{...rest}
			/>
		);
	},
);

Skeleton.displayName = 'Skeleton';
