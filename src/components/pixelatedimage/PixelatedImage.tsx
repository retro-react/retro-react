/** @jsxImportSource theme-ui */
import {
	CSSProperties,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
} from 'react';
import { classNames } from '@src/utils/classNames';

export interface PixelatedImageProps
	extends React.ImgHTMLAttributes<HTMLCanvasElement> {
	/**
	 * The image source.
	 *
	 */
	src: string;
	/**
	 * The size of the pixelation blocks as a percentage of the image dimensions.
	 * A higher value results in a image with more pixels (higher resolution).
	 * Recommended range: 1 to 50.
	 *
	 * @default 50
	 */
	blockSize?: number;
	/**
	 * The width of the image. You have to explicitly set this value since it controls the canvas width.
	 *
	 * @default 600
	 */
	width?: number;
	/**
	 * The height of the image. You have to explicitly set this value since it controls the canvas height.
	 *
	 * @default 600
	 */
	height?: number;
	/**
	 * The style of the image. Used instead of the `sx` prop.
	 *
	 * @default undefined
	 */
	style?: CSSProperties;
}

/**
 * A component that pixelates an image. The image is drawn on a canvas element resulting in a pixelated image.
 * It is not a standard img element and does not support the same props.
 *
 * @example
 * <PixelatedImage src="https://picsum.photos/id/91/600/600" blockSize={5} width={600} height={600} />
 */
export const PixelatedImage = forwardRef<
	HTMLCanvasElement,
	PixelatedImageProps
>(
	(
		{
			id,
			className,
			src,
			blockSize = 20,
			width = 600,
			height = 600,
			style,
			...rest
		},
		ref,
	) => {
		const canvasRef = useRef<HTMLCanvasElement>(null);
		useImperativeHandle(
			ref,
			() => canvasRef.current || document.createElement('canvas'),
		);

		useEffect(() => {
			const canvas = canvasRef.current;
			if (!canvas) return;

			const ctx = canvas.getContext('2d');
			if (!ctx) return;

			ctx.imageSmoothingEnabled = false;

			const img = new Image();
			img.crossOrigin = 'Anonymous';
			img.src = src;

			img.onload = () => {
				const size = blockSize * 0.01;
				const w = canvas.width * size;
				const h = canvas.height * size;

				ctx.drawImage(img, 0, 0, w, h);
				ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
			};
		}, [src, blockSize]);

		return (
			<canvas
				ref={canvasRef}
				id={id}
				className={classNames('pixelated-image-root', className)}
				width={width}
				height={height}
				style={style}
				{...rest}
			/>
		);
	},
);

PixelatedImage.displayName = 'PixelatedImage';
