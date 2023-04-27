import styled from '@emotion/styled';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
} from '@src/constants/colors';

const selectColorStyles = {
	primary: PRIMARY,
	secondary: SECONDARY,
	success: SUCCESS,
	error: ERROR,
	warn: WARN,
};

interface TooltipContentProps {
	$visible: boolean;
	$color: string;
	$position: 'top' | 'bottom' | 'left' | 'right';
}

export const TooltipWrapper = styled.div`
	position: relative;
	display: inline-block;
`;
export const TooltipContent = styled.div<TooltipContentProps>`
	visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
	background-color: ${({ $color }) => selectColorStyles[$color] || $color};
	color: white;
	text-align: center;
	font-family: 'Courier New', Courier, monospace;
	padding: 0.5rem;
	border: 1px solid black;
	border-radius: 4px;
	position: absolute;
	z-index: 1;
	opacity: ${(props) => (props.$visible ? 1 : 0)};
	transition: opacity 0.3s;
`;
