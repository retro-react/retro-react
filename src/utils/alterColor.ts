/**
 * Alter a hex color code by increasing the red value and decreasing the blue value.
 *
 * @param hex hex color code.
 * @returns a new hex color code.
 */
export const alterColor = (hex) => {
	// Convert the hex color code to RGB
	let r = parseInt(hex.substring(1, 3), 16);
	const g = parseInt(hex.substring(3, 5), 16);
	let b = parseInt(hex.substring(5, 7), 16);

	// Alter the color by increasing the red value and decreasing the blue value
	r = (r + 50) % 256;
	b = (b - 50 + 256) % 256;

	// Convert the RGB color back to a hex code
	const newHex =
		'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

	return newHex;
};
