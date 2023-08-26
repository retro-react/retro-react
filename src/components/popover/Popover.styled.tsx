import styled from '@emotion/styled';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';

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
	background-color: ${WHITE};
	border: 1px solid ${BLACK};
	box-shadow: 0px 0px 8px ${rgba(BLACK, 0.25)};
	transform: translate(-50%, 10px);
	opacity: 0;
	transition: opacity 0.2s linear;

	&[data-visible='true'] {
		opacity: 1;
	}

	top: ${({ $top }) => $top}px;
	left: ${({ $left }) => $left}px;
`;
