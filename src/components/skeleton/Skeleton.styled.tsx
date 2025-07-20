import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {
	SHADE_3,
	SHADE_4,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';

// Authentic retro "loading" animation - more like old CRT scan lines
const retroScanLines = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 8px;
  }
`;

// Authentic dithering pattern animation - like old graphics cards
const ditherBlink = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
`;

// Retro "processing" effect
const retroProcessing = keyframes`
  0% {
    border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
  }
  50% {
    border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
  }
  100% {
    border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
  }
`;

export const StyledSkeleton = styled.div<{
	$shape: string;
	$height: string | number;
	$effect: string;
}>`
	/* Proper sizing to prevent overflow */
	height: ${(props) => props.$height};
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;

	/* Base retro styling - authentic WIN31 inset appearance */
	background: ${WIN31_BUTTON_FACE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};

	/* Remove modern effects */
	border-radius: 0;
	box-shadow: none;

	margin-bottom: 8px;
	position: relative;
	overflow: hidden;

	/* Circle shape for retro icons/avatars */
	${(props) =>
		props.$shape === 'circle' &&
		css`
			width: ${props.$height};
			border-radius: 50%;
			flex-shrink: 0;
		`};

	/* Retro scan line effect - like old CRT monitors */
	${(props) =>
		props.$effect === 'scanlines' &&
		css`
			background-image: repeating-linear-gradient(
				0deg,
				${WIN31_BUTTON_FACE} 0px,
				${WIN31_BUTTON_FACE} 2px,
				${SHADE_3} 2px,
				${SHADE_3} 4px
			);
			background-size: 100% 8px;
			animation: ${retroScanLines} 1s infinite linear;
		`};

	/* Dithering pattern effect - authentic retro computer graphics */
	${(props) =>
		props.$effect === 'dither' &&
		css`
			background-image: repeating-linear-gradient(
				45deg,
				${WIN31_BUTTON_FACE} 0px,
				${WIN31_BUTTON_FACE} 2px,
				${SHADE_3} 2px,
				${SHADE_3} 4px
			);
			animation: ${ditherBlink} 1.2s infinite ease-in-out;
		`};

	/* Processing effect - like old Windows progress bars */
	${(props) =>
		props.$effect === 'processing' &&
		css`
			background: ${WIN31_BUTTON_FACE};
			animation: ${retroProcessing} 0.8s infinite ease-in-out;

			&::after {
				content: '';
				position: absolute;
				top: 2px;
				left: 2px;
				right: 2px;
				bottom: 2px;
				background-image: repeating-linear-gradient(
					90deg,
					${SHADE_4} 0px,
					${SHADE_4} 2px,
					transparent 2px,
					transparent 6px
				);
				animation: ${retroScanLines} 0.5s infinite linear;
			}
		`};
`;
