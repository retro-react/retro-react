/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import {
	ColorGradients,
	getColorGradientOptions,
} from '@src/utils/getColorGradients';
import { TrailingStar } from './trails';

interface MouseTrailProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The size of each particle
	 *
	 * @default 5
	 */
	particleSize?: number;
	/**
	 * The color of each particle
	 *
	 * @default 'rainbow'
	 */
	particleColor?: ColorGradients;
	/**
	 * The offset of the particles from the mouse cursor.
	 * For example, if you want the particles to be at the bottom of the standard cursor, set offsetY to 15 and offsetX to 5.
	 *
	 * @default { x: 0, y: 0 }
	 */
	offset?: { x: number; y: number };
	sx?: ThemeUICSSObject;
}

interface MouseTrailRef {
	/**
	 * @internal The array of particles
	 *
	 * @default []
	 */
	particles: Array<HTMLDivElement>;
}

interface Star {
	x: number;
	y: number;
	size: number;
	color: string;
	visible: boolean;
}

/**
 * A component that renders a trail of particles that follow the mouse cursor around the screen when the mouse is moved.
 * Will render only inside of a container where the component is placed. For entire screen coverage, place inside of a root container.
 *
 * `IMPORTANT:` Make sure to set the parent container to `position: relative`.
 *
 */
export const MouseTrail = forwardRef<MouseTrailRef, MouseTrailProps>(
	(
		{
			id,
			className,
			particleSize = 5,
			particleColor = 'rainbow',
			offset = { x: 0, y: 0 },
			sx,
		},
		ref,
	) => {
		const offsetY = offset.y;
		const offsetX = offset.x;
		const containerRef = useRef<HTMLDivElement>(null);
		const [stars, setStars] = useState<Star[]>([]);
		const position = useRef({ x: 0, y: 0 });
		const visibleTime = 1500;
		const particleCount = 50;
		const createRefreshRate = 50;
		const updateRefreshRate = 20;

		const getStarIndex = (stars: Star[]): number => {
			for (let i = 0; i < stars.length; i++) {
				if (!stars[i].visible) return i;
			}
			return -1;
		};

		useEffect(() => {
			const handleMouseMove = (event: MouseEvent) => {
				const containerRect = containerRef.current?.getBoundingClientRect();
				if (containerRect) {
					position.current = {
						x: event.clientX - containerRect.left,
						y: event.clientY - containerRect.top,
					};
				}
			};

			const hideStar = (index: number) => {
				const randomTime = Math.floor(Math.random() * visibleTime) + 1000;
				setTimeout(() => {
					setStars((prev) =>
						prev.map((star, i) => {
							if (i === index) {
								return {
									...star,
									visible: false,
								};
							}
							return star;
						}),
					);
				}, randomTime);
			};

			const createStar = () => {
				const colors = getColorGradientOptions(particleColor);
				const randomColor = colors[Math.floor(Math.random() * colors.length)];
				const size =
					Math.floor(Math.random() * particleSize) + particleSize / 2;

				setStars((prev) => {
					const index = getStarIndex(prev);
					if (index !== -1) {
						prev[index] = {
							x: position.current.x - size / 2 + offsetX,
							y: position.current.y - size / 2 + offsetY,
							size,
							color: randomColor,
							visible: true,
						};
						hideStar(index);
					} else if (prev.length < particleCount) {
						const newStars = [
							...prev,
							{
								x: position.current.x - size / 2 + offsetX,
								y: position.current.y - size / 2 + offsetY,
								size,
								color: randomColor,
								visible: true,
							},
						];
						hideStar(newStars.length - 1);
						return newStars;
					}
					return prev;
				});
			};
			const updateStars = () => {
				const shouldResize = Math.random() > 0.5;
				setStars((prev) =>
					prev.map((star) => ({
						...star,
						y: star.y + 1 + Math.random() * 3,
						x: star.x + (Math.random() - 0.5) * 2,
						size: shouldResize ? Math.max(0, star.size - 0.1) : star.size,
					})),
				);
			};

			const interval = setInterval(createStar, createRefreshRate);
			const updateInterval = setInterval(updateStars, updateRefreshRate);

			window.addEventListener('mousemove', handleMouseMove);

			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
				clearInterval(interval);
				clearInterval(updateInterval);
			};
		}, [particleColor, particleSize]);

		return (
			<div
				id={id}
				sx={sx}
				className={classNames('mouse-trail-root', className)}
				ref={containerRef}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					overflow: 'hidden',
					pointerEvents: 'none',
					zIndex: 9999,
				}}
			>
				{stars.map((star, index) => (
					<TrailingStar
						key={`retro-mouse-trail-star-${index}`}
						$top={star.y}
						$left={star.x}
						$width={star.size}
						$height={star.size}
						$color={star.color}
						$visible={star.visible}
					/>
				))}
			</div>
		);
	},
);

MouseTrail.displayName = 'MouseTrail';
