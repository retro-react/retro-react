/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { StyledSkeleton } from './Skeleton.styled';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The height of the skeleton.
	 *
	 * @default '20px'
	 */
	height?: string | number;
	/**
	 * The shape of the skeleton. For a circle, the height will also be used for the width.
	 *
	 * @default 'rectangle'
	 */
	shape?: 'rectangle' | 'circle';
	/**
	 * The effect to use for the skeleton loading animation.
	 *
	 * @default 'scanlines'
	 */
	effect?: 'scanlines' | 'dither' | 'processing';
	sx?: ThemeUICSSObject;
}

/**
 * A retro skeleton loading component with authentic WIN31 styling.
 * Features classic scan line, dithering, and processing effects reminiscent of early computer graphics.
 *
 * @example
 * <Container>
 * 		<Skeleton height="20px" effect="scanlines" />
 * 		<Skeleton height="20px" effect="dither" />
 * 		<Skeleton height="40px" shape="circle" effect="processing" />
 * </Container>
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
	({
		height = '20px',
		shape = 'rectangle',
		effect = 'scanlines',
		sx,
		className,
		...rest
	}) => {
		return (
			<StyledSkeleton
				className={classNames('skeleton-root', className)}
				$shape={shape}
				$height={height}
				$effect={effect}
				sx={sx}
				{...rest}
			/>
		);
	},
);

Skeleton.displayName = 'Skeleton';
