import checkboardPattern from '../assets/svg/checkboard_pattern.svg';
import diagonalLinePattern from '../assets/svg/diagonal_line_pattern.svg';
import noisePattern from '../assets/svg/noise_pattern.svg';
import transparentPattern from '../assets/svg/transparent_pattern.svg';

export type ComponentPatterns = 'solid' | 'noise' | 'stripes' | 'dots';

export function getPatternScheme(pattern: ComponentPatterns) {
	switch (pattern) {
		case 'solid':
			return transparentPattern;
		case 'noise':
			return noisePattern;
		case 'stripes':
			return diagonalLinePattern;
		case 'dots':
			return checkboardPattern;
		default:
			return pattern;
	}
}
