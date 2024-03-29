/**
 * Convert hex string to RGBA color.
 *
 * @see https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
 * @example
 * rgba('#000', 0.5) // rgba(0, 0, 0, 0.5)
 */
export const rgba = (hexCode: string, opacity = 1) => {
	let hex = hexCode;
	if (hexCode.indexOf('#') > -1) {
		hex = hexCode.replace('#', '');

		if (hex.length === 3) {
			hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
		}
	}
	if (hex.indexOf('rgba') > -1) {
		// transform to hex
		hex = hex
			.replace('rgba(', '')
			.replace(')', '')
			.split(',')
			.map((item) => parseInt(item, 10).toString(16))
			.join('');
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	/* Backward compatibility for whole number based opacity values. */
	if (opacity > 1 && opacity <= 100) {
		opacity = opacity / 100;
	}

	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
