import styled from '@emotion/styled';
import {
	ERROR,
	HIGHLIGHT,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	VGA_BLACK,
	VGA_WHITE,
	WARN,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '@src/constants/fonts';
import type { ChipColor } from './Chip';

function getChipColorScheme(color: ChipColor) {
	switch (color) {
		case 'error':
			return ERROR;
		case 'success':
			return SUCCESS;
		case 'warn':
			return WARN;
		case 'secondary':
			return SECONDARY;
		case 'highlight':
			return HIGHLIGHT;
		case 'greyscale':
			return WIN31_BUTTON_FACE;
		case 'primary':
		default:
			return PRIMARY;
	}
}

export const Chip = styled.div<{ $color: ChipColor; $clickable?: boolean }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding: 3px 10px;
	font-size: ${FONT_SIZES.SMALL};
	font-family: ${SYSTEM_FONT};
	font-weight: normal;
	border: 1px solid ${VGA_BLACK};
	background: ${({ $color }) => getChipColorScheme($color)};
	color: ${({ $color }) =>
		$color === 'warn' || $color === 'highlight' || $color === 'greyscale'
			? VGA_BLACK
			: VGA_WHITE};
	text-shadow: none;
	cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
	user-select: none;
	transition: none;
	min-height: 18px;

	/* Flat retro label appearance - different from buttons */
	border-radius: 0;
	box-shadow: 1px 1px 0px ${VGA_BLACK};

	/* Add a subtle inset appearance for non-clickable chips */
	${({ $clickable }) =>
		!$clickable &&
		`
		border-color: ${WIN31_BUTTON_SHADOW};
		box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
	`}

	${({ $clickable }) =>
		$clickable &&
		`
		&:hover {
			box-shadow: 2px 2px 0px ${VGA_BLACK};
			transform: translate(-1px, -1px);
		}

		&:active {
			box-shadow: 0px 0px 0px ${VGA_BLACK};
			transform: translate(1px, 1px);
		}

		&:focus-visible {
			outline: 1px dotted ${VGA_WHITE};
			outline-offset: -2px;
		}
	`}
`;
