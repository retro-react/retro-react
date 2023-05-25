import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import getColorScheme from '@src/utils/getColorScheme';
import {
	fontSizeForBreakpoint,
	fontSizeForVariant,
} from './responsiveVariants';
import { TextVariant } from './Text';

const blinkEffect = keyframes`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const Text = styled.div<{
	$align: CSSProperties['textAlign'];
	$blink: boolean;
	$color: string;
	$bevel: boolean;
	$variant: TextVariant;
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 1rem;
	font-weight: 400;
	color: ${(props) => getColorScheme(props.$color, props.theme)};
	text-align: ${(props) => props.$align};
	margin: 0;
	padding: 0;

	${(props) =>
		props.$blink
			? css`
					animation: ${blinkEffect} 1s linear infinite;
			  `
			: ''}

	${(props) =>
		props.$bevel
			? `
				text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);
			`
			: ''}

			${(props) => {
				return `
					font-size: ${fontSizeForVariant(props.$variant)};
					font-weight: ${props.$variant.startsWith('h') ? '700' : '400'};
					${fontSizeForBreakpoint(props.$variant)}
				`;
			}}
	}}
`;
