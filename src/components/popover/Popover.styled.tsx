import styled from '@emotion/styled';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';

export const PopoverContent = styled.div<{
	$top?: number;
	$left?: number;
}>`
	position: absolute;
	z-index: 1;
	width: 200px;
	padding: 16px;
	background-color: ${WHITE};
	border: 1px solid ${BLACK};
	border-radius: 8px;
	box-shadow: 0px 0px 8px ${rgba(BLACK, 0.25)};
	transform: translate(-50%, 10px);

	top: ${({ $top }) => $top}px;
	left: ${({ $left }) => $left}px;
`;
