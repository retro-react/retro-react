import styled from '@emotion/styled';
import { windowFrame } from '../../constants/bevels';
import { VGA_BLACK, WIN31_BUTTON_FACE } from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import { SPACING } from '../../constants/spacing';

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

	background: ${WIN31_BUTTON_FACE};
	${windowFrame}

	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	color: ${VGA_BLACK};

	transform: translate(-50%, 10px);

	top: ${({ $top }) => $top}px;
	left: ${({ $left }) => $left}px;

	padding: ${SPACING.MD};

	line-height: 1.3;
`;
