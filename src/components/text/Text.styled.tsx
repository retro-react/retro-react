import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import getColorScheme from '@src/utils/getColorScheme';
import { terminalBlink } from '@src/utils/retroEffects';
import { RAINBOW_GRADIENT } from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '@src/constants/fonts';
import {
	fontSizeForBreakpoint,
	fontSizeForVariant,
} from './responsiveVariants';
import { TextVariant } from './Text';

export const Text = styled.div<{
	$align: CSSProperties['textAlign'];
	$blink: boolean;
	$color: string;
	$bevel: boolean;
	$variant: TextVariant;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};
	font-weight: 400;

	text-align: ${(props) => props.$align};
	margin: 0;
	padding: 0;

	${(props) =>
		props.$blink
			? css`
					animation: ${terminalBlink} 1s linear infinite;
			  `
			: ''}

	${(props) =>
		props.$bevel
			? `
				/* Authentic retro bevel effect - more chunky and obvious */
				text-shadow: 
					1px 1px 0px rgba(255, 255, 255, 0.8), 
					2px 2px 0px rgba(0, 0, 0, 0.3);
				font-weight: bold;
			`
			: ''}

	${(props) => {
		return css`
			font-size: ${fontSizeForVariant(props.$variant)};
			font-weight: ${props.$variant.startsWith('h') ? '700' : '400'};
			${fontSizeForBreakpoint(props.$variant)}
		`;
	}}
	
	color: ${(props) => getColorScheme(props.$color, props.theme)};
	${(props) =>
		props.$color === 'rainbow'
			? css`
					background: linear-gradient(to right, ${RAINBOW_GRADIENT.join(',')});
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
			  `
			: ''}
`;
