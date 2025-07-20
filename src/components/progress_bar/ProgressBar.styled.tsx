import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {
	VGA_BLUE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';

// Authentic WIN31 progress bar animation - smooth barber pole effect
const progressAnimation = keyframes`
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: 12px 0;
	}
`;

export const ProgressBarWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	font-family: ${SYSTEM_FONT};
`;

export const ProgressBar = styled.div<{
	$value: number;
	$animated?: boolean;
}>`
	position: relative;
	width: 100%;
	height: 20px;
	background: ${WIN31_BUTTON_FACE};

	/* Authentic WIN31 inset border - recessed appearance */
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};

	/* Remove modern effects */
	border-radius: 0;
	box-shadow: none;

	/* Progress bar fill */
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: ${(props) => Math.min(Math.max(props.$value, 0), 100)}%;
		height: 100%;
		background: ${VGA_BLUE};

		/* Authentic WIN31 progress pattern - clean diagonal stripes */
		background-image: repeating-linear-gradient(
			45deg,
			${VGA_BLUE} 0px,
			${VGA_BLUE} 4px,
			${WIN31_BUTTON_FACE} 4px,
			${WIN31_BUTTON_FACE} 8px
		);
		background-size: 12px 12px;

		/* Animation for classic "barber pole" effect */
		${(props) =>
			props.$animated &&
			css`
				animation: ${progressAnimation} 1.2s linear infinite;
			`}

		/* Ensure fill doesn't overflow the border and clips cleanly */
		box-sizing: border-box;
		overflow: hidden;
	}

	/* When progress is 0, hide the fill completely */
	${(props) =>
		props.$value <= 0 &&
		css`
			&::after {
				display: none;
			}
		`}
`;
