import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
} from '@src/constants/colors';

export type ComponentColors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn';

function getColorScheme(color: ComponentColors) {
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
		default:
			return color;
	}
}

export default getColorScheme;
