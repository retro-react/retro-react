import styled from '@emotion/styled';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';

const POPOVER_WIDTH = '200px';
const POPOVER_Z_INDEX = 1000;

export const PopoverContent = styled.div<{
	$top?: number;
	$left?: number;
}>`
	box-sizing: border-box;
	position: absolute;
	z-index: ${POPOVER_Z_INDEX};
	width: ${POPOVER_WIDTH};

	/* Authentic WIN31 dialog styling */
	background: ${WIN31_BUTTON_FACE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};

	/* WIN31 drop shadow effect */
	box-shadow: 2px 2px 0 ${VGA_BLACK};

	/* Typography */
	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	color: ${VGA_BLACK};

	/* Remove modern effects */
	border-radius: 0;

	/* Positioning and transition */
	transform: translate(-50%, 10px);
	opacity: 0;
	transition: opacity 0.1s linear;

	&[data-visible='true'] {
		opacity: 1;
	}

	top: ${({ $top }) => $top}px;
	left: ${({ $left }) => $left}px;

	/* Inner content padding */
	padding: 8px;

	/* Ensure text is readable */
	line-height: 1.3;
`;
