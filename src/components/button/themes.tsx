import { css } from '@emotion/react';
import { alterColor, alterColorEnhanced } from '@src/utils/alterColor';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
	WHITE,
} from '@src/constants/colors';
import type { ButtonColor, ButtonVariant } from './Button';

export function getColorScheme(color: ButtonColor) {
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
		default:
			return PRIMARY;
	}
}

export function getTheme(color: ButtonColor, variant: ButtonVariant) {
	const colorScheme = getColorScheme(color);
	switch (variant) {
		case 'outline':
			return css`
				color: ${colorScheme};
				background-color: transparent;
				border: 1px solid ${colorScheme};
				&:hover:not([disabled]) {
					background-color: ${rgba(colorScheme, 0.15)};
					border-color: ${alterColor(colorScheme)};
				}
				&:active:not([disabled]) {
					background-color: ${rgba(colorScheme, 0.25)};
					border-color: ${alterColor(colorScheme)};
				}
			`;
		case 'text':
			return css`
				color: ${colorScheme};
				background-color: transparent;
				border: 1px solid transparent;
				&:hover:not([disabled]) {
					background-color: ${rgba(colorScheme, 0.05)};
					border-color: ${rgba(colorScheme, 0.05)};
				}
				&:active:not([disabled]) {
					background-color: ${rgba(colorScheme, 0.1)};
					border-color: ${rgba(colorScheme, 0.1)};
				}
			`;
		case 'solid':
		default:
			return css`
				color: ${WHITE};
				background: url(${getPatternScheme('noise')});
				filter: contrast(120%) brightness(100%);
				background-color: ${colorScheme};
				border: 1.5px solid ${alterColorEnhanced(colorScheme)};

				transition: all 0.1s ease-in-out;

				&:hover:not([disabled]) {
					box-shadow: inset -2px -2px 0px 0px rgba(255, 255, 255, 0.4),
						inset 2px 2px 1px 0px rgba(0, 0, 0, 0.8);
					filter: contrast(120%) saturate(130%);
				}
				&:active:not([disabled]) {
					box-shadow: inset -2px -2px 0px 0px rgba(255, 255, 255, 0.2),
						inset 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
					filter: contrast(100%);
				}
			`;
	}
}
