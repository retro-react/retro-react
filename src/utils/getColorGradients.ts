import {
	GRAYSCALE_GRADIENT,
	NEON_GRADIENT,
	PASTEL_GRADIENT,
	PRIMARY,
	RAINBOW_GRADIENT,
	RETRO_GRADIENT,
	SECONDARY,
} from '@src/constants/colors';

export type ColorGradients =
	| 'rainbow'
	| 'neon'
	| 'pastel'
	| 'grayscale'
	| 'retro'
	| 'primary'
	| 'secondary';

export const getColorGradientOptions = (color: ColorGradients): string[] => {
	switch (color) {
		case 'rainbow':
			return RAINBOW_GRADIENT;
		case 'neon':
			return NEON_GRADIENT;
		case 'pastel':
			return PASTEL_GRADIENT;
		case 'grayscale':
			return GRAYSCALE_GRADIENT;
		case 'retro':
			return RETRO_GRADIENT;
		case 'primary':
			return [PRIMARY];
		case 'secondary':
			return [SECONDARY];
		default:
			return [PRIMARY];
	}
};
