/** @jsxImportSource theme-ui */
import React, { CSSProperties, useEffect, useRef } from 'react';

interface StarFieldProps {
	/**
	 * The number of stars to render.
	 *
	 * @default 100
	 */
	numStars?: number;
	/**
	 * The speed of the stars.
	 *
	 * @default 1
	 */
	speed?: number;
	/**
	 * The size of the stars.
	 *
	 * @default 2
	 */
	size?: number;
	/**
	 * The color of the stars.
	 *
	 * @default 'white'
	 */
	starColor?: CSSProperties['color'];
	/**
	 * The style of the image. Used instead of the `sx` prop.
	 *
	 * @default undefined
	 */
	style?: CSSProperties;
}

/**
 * A starfield component used similarly to the `<Background />` component. It renders a `canvas` element that animates a starfield. It is recommended to wrap this component in a `<Container />` component.
 * Since this component uses a canvas element, it is recommended to use this component sparingly.
 *
 * @example
 * ```tsx
 * <Container sx={{ width: '100%', height: '500px', position: 'relative' }}>
 * 	<StarField />
 * </Container>
 * ```
 */
export const StarField: React.FC<StarFieldProps> = ({
	numStars = 100,
	speed = 1,
	size = 2,
	starColor = 'white',
	style,
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;

		const stars = Array.from({ length: numStars }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			velocity: (Math.random() + 0.5) * speed,
		}));

		let animationFrameId: number;

		const animate = () => {
			ctx.fillStyle = 'black';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			stars.forEach((star) => {
				ctx.fillStyle = starColor;
				ctx.fillRect(star.x, star.y, size, size);

				star.y += star.velocity;
				if (star.y > canvas.height) {
					star.y = 0;
					star.x = Math.random() * canvas.width;
				}
			});

			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			// Clean up the animation
			cancelAnimationFrame(animationFrameId);
		};
	}, [canvasRef, numStars, speed, size, starColor]);

	return (
		<canvas
			ref={canvasRef}
			style={{ width: '100%', height: '100%', ...style }}
		/>
	);
};

StarField.displayName = 'StarField';
