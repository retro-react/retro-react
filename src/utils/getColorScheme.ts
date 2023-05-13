import { Theme } from '@emotion/react';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SHADE_3,
	SUCCESS,
	WARN,
} from '@src/constants/colors';

export type ComponentColors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn';

export const colorOptions = [
	'primary',
	'secondary',
	'success',
	'error',
	'warn',
];

function getColorScheme(color: ComponentColors | string, theme?: Theme) {
	if (theme && theme.colors && theme.colors[color]) return theme.colors[color];

	switch (color) {
		case 'error':
			return ERROR;
		case 'success':
			return SUCCESS;
		case 'warn':
			return WARN;
		case 'secondary':
			return SECONDARY;
		case 'primary':
			return PRIMARY;
		case 'greyscale':
			return SHADE_3;
		default:
			return color;
	}
}

export default getColorScheme;
