import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
} from '@src/constants/colors';

const themeColors = {
	primary: PRIMARY,
	secondary: SECONDARY,
	success: SUCCESS,
	error: ERROR,
	warn: WARN,
};

/**
 * Alter a hex color code or a theme color name by increasing the red value and decreasing the blue value.
 *
 * @param color hex color code or a theme color name.
 * @param amount (optional) amount to alter the color.
 * @returns a new hex color code.
 */
export const alterColor = (color: string, amount = 0) => {
	// Retrieve the hex color code from the theme colors if a color name is provided
	const hex = themeColors[color] || color;

	// Convert the hex color code to RGB
	let r = parseInt(hex.substring(1, 3), 16);
	const g = parseInt(hex.substring(3, 5), 16);
	let b = parseInt(hex.substring(5, 7), 16);

	r = (r + amount) % 256;
	// Alter the color by increasing the red value and decreasing the blue value
	r = (r + 50) % 256;
	b = (b - 50 + 256) % 256;

	// Convert the RGB color back to a hex code
	const newHex =
		'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

	return newHex;
};
