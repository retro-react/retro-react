export type ComponentPatterns = 'noise' | 'stripes' | 'dots';

export function getPatternScheme(pattern: ComponentPatterns) {
	switch (pattern) {
		case 'noise':
			return require('../assets/svg/noise_pattern.svg');
		case 'stripes':
			return require('../assets/svg/diagonal_line_pattern.svg');
		case 'dots':
			return require('../assets/svg/checkboard_pattern.svg');
		default:
			return pattern;
	}
}
