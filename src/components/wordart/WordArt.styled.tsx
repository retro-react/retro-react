import styled from '@emotion/styled';
import { PRIMARY, SECONDARY } from '@src/constants/colors';
import { getWordArtColorOptions } from './themes';
import { WordArtColor, WordArtSize, WordArtStyle } from './WordArt';

export const getWordArtColor = (color: WordArtColor) => {
	switch (color) {
		case 'primary':
			return PRIMARY;
		case 'secondary':
			return SECONDARY;
		case 'rainbow':
			return `linear-gradient(to right, ${getWordArtColorOptions(
				'rainbow',
			).join(', ')})`;
		case 'neon':
			return `linear-gradient(to right, ${getWordArtColorOptions('neon').join(
				', ',
			)})`;
		case 'pastel':
			return `linear-gradient(to right, ${getWordArtColorOptions('pastel').join(
				', ',
			)})`;
		case 'grayscale':
			return `linear-gradient(to right, ${getWordArtColorOptions(
				'grayscale',
			).join(', ')})`;
		case 'retro':
			return `linear-gradient(to right, ${getWordArtColorOptions('retro').join(
				', ',
			)})`;
		default:
			return PRIMARY;
	}
};

export const WordArt = styled.h1<{
	$color: WordArtColor;
	$size: WordArtSize;
	$artStyle: WordArtStyle;
	$rotation: number;
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	transform: ${({ $rotation }) => `rotate(${$rotation}deg)`};
	font-weight: 400;

	${({ $artStyle, $color }) =>
		$artStyle === 'classic' &&
		`
		background: ${getWordArtColor($color)};
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	`}

	${({ $size }) =>
		$size === 'small' &&
		`
		font-size: 1rem;
	`}

	${({ $size }) =>
		$size === 'medium' &&
		`
		font-size: 2rem;
	`}

	${({ $size }) =>
		$size === 'large' &&
		`
		font-size: 3rem;
	`}
`;

export const WordArtSpan = styled.span``;
