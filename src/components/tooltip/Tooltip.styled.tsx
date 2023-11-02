import styled from '@emotion/styled';
import { ThemeUICSSObject } from 'theme-ui';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { SHADOWS } from '@src/constants/shadows';

interface TooltipContentProps {
	$visible: boolean;
	$color: string;
	$position: 'top' | 'bottom' | 'left' | 'right';
	$rounded: boolean;
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
	border: 1px solid
		${({ $color, theme }) =>
			alterColorEnhanced(getColorScheme($color, theme), 50)};
	border-radius: ${({ $rounded }) => ($rounded ? '6px' : '0')};
	position: absolute;
	z-index: 1;
	opacity: ${(props) => (props.$visible ? 1 : 0)};
	transition: opacity 0.5s;
	text-shadow: ${SHADOWS.text[0]};
	width: max-content;
	max-width: 200px;
	box-sizing: border-box;

	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
`;
