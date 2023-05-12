import styled from '@emotion/styled';
import { ThemeUICSSObject } from 'theme-ui';
import getColorScheme from '@src/utils/getColorScheme';
import { SHADOWS } from '@src/constants/shadows';

interface TooltipContentProps {
	$visible: boolean;
	$color: string;
	$position: 'top' | 'bottom' | 'left' | 'right';
	sx?: ThemeUICSSObject;
}

export const TooltipWrapper = styled.div`
	position: relative;
	display: inline-block;
`;
export const TooltipContent = styled.div<TooltipContentProps>`
	visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
	background-color: ${({ $color, theme }) =>
		getColorScheme($color, theme) || $color};
	color: white;
	text-align: center;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	padding: 0.5rem;
	border: 1px solid black;
	border-radius: 4px;
	position: absolute;
	z-index: 1;
	opacity: ${(props) => (props.$visible ? 1 : 0)};
	transition: opacity 0.3s;
	text-shadow: ${SHADOWS.text[0]};

	display: -webkit-box;
	max-width: 200px;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	box-sizing: border-box;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.5rem;
		background: ${({ $color, theme }) =>
				getColorScheme($color, theme) || $color}
			0%;
	}
`;
