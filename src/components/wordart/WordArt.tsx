/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import { getWordArtColorOptions } from './themes';
import * as Sc from './WordArt.styled';

export type WordArtStyle =
	| 'classic'
	| 'curved'
	| 'wavy'
	| 'shadowed'
	| 'outline';

export type WordArtColor =
	| 'primary'
	| 'secondary'
	| 'rainbow'
	| 'neon'
	| 'pastel'
	| 'grayscale'
	| 'retro';

export interface WordArtProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The art style of the WordArt.
	 *
	 * @default 'classic'
	 */
	artStyle: WordArtStyle;
	/**
	 * The color of the WordArt.
	 *
	 * @default 'primary'
	 */
	color?: WordArtColor;
	sx?: any;
}

const handleWavyText = (text: string, color: WordArtColor) => {
	const wavyTextColor = getWordArtColorOptions(color);

	const wavyText = text.split('').map((char, index) => {
		const randomRotation = Math.floor(Math.random() * 10);
		const randomVerticalMovement = Math.floor(Math.random() * 4) - 2; // Randomly move up or down by up to 2 pixels
		const isEven = index % 2 === 0;
		const rotation = isEven ? randomRotation : -randomRotation; // Randomly rotate left or right

		return (
			<Sc.WordArtSpan
				key={index}
				sx={{
					transform: `rotate(${rotation}deg) translateY(${randomVerticalMovement}px)`,
					display: 'inline-block',
					paddingLeft: '2px',
					color: wavyTextColor[index % wavyTextColor.length],
				}}
			>
				{char}
			</Sc.WordArtSpan>
		);
	});

	return wavyText;
};

const handleShadowedText = (text: string, color: WordArtColor) => {
	const shadowedTextColor = getWordArtColorOptions(color);

	const shadowedText = text.split('').map((char, index) => {
		return (
			<Sc.WordArtSpan
				key={index}
				sx={{
					display: 'inline-block',
					paddingLeft: '2px',
					color: shadowedTextColor[index % shadowedTextColor.length],
					textShadow: `2px 2px 2px ${
						shadowedTextColor[index % shadowedTextColor.length]
					}`,
				}}
			>
				{char}
			</Sc.WordArtSpan>
		);
	});

	return shadowedText;
};

const handleOutlineText = (text: string, color: WordArtColor) => {
	const outlineTextColor = getWordArtColorOptions(color);

	const outlineText = text.split('').map((char, index) => {
		return (
			<Sc.WordArtSpan
				key={index}
				sx={{
					display: 'inline-block',
					paddingLeft: '2px',
					color: outlineTextColor[index % outlineTextColor.length],
					textShadow: `1px 1px 1px ${
						outlineTextColor[index % outlineTextColor.length]
					}, -1px -1px 1px ${
						outlineTextColor[index % outlineTextColor.length]
					}, 1px -1px 1px ${
						outlineTextColor[index % outlineTextColor.length]
					}, -1px 1px 1px ${outlineTextColor[index % outlineTextColor.length]}`,
				}}
			>
				{char}
			</Sc.WordArtSpan>
		);
	});

	return outlineText;
};

const handleCurvedText = (text: string, color: WordArtColor) => {
	const curvedTextColor = getWordArtColorOptions(color);

	const curvedText = text.split('').map((char, index) => {
		// curve like a rainbow
		const curve = Math.sin((index / text.length) * Math.PI) * 20;

		return (
			<Sc.WordArtSpan
				key={index}
				sx={{
					display: 'inline-block',
					paddingLeft: '2px',
					color: curvedTextColor[index % curvedTextColor.length],
					transform: `translateY(${curve}px)`,
				}}
			>
				{char}
			</Sc.WordArtSpan>
		);
	});

	return curvedText;
};

export const WordArt = forwardRef<HTMLDivElement, WordArtProps>(
	(
		{
			id,
			sx,
			className,
			children,
			color = 'primary',
			artStyle = 'classic',
			...rest
		},
		ref,
	) => {
		return (
			<Sc.WordArt
				$color={color}
				$artStyle={artStyle}
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('wordart-root', className)}
				{...rest}
			>
				{artStyle === 'wavy'
					? handleWavyText(children as string, color)
					: artStyle === 'shadowed'
					? handleShadowedText(children as string, color)
					: artStyle === 'outline'
					? handleOutlineText(children as string, color)
					: artStyle === 'curved'
					? handleCurvedText(children as string, color)
					: children}
			</Sc.WordArt>
		);
	},
);

WordArt.displayName = 'WordArt';
