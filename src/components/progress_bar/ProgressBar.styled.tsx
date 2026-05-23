import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { sunken } from '../../constants/bevels';
import { VGA_BLUE, WIN31_BUTTON_FACE } from '../../constants/colors';
import { SYSTEM_FONT } from '../../constants/fonts';

const progressAnimation = keyframes`
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: 11.3137px 0;
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
	${sunken}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: ${(props) => Math.min(Math.max(props.$value, 0), 100)}%;
		height: 100%;
		background: ${VGA_BLUE};
		background-image: repeating-linear-gradient(
			45deg,
			${VGA_BLUE} 0px,
			${VGA_BLUE} 4px,
			${WIN31_BUTTON_FACE} 4px,
			${WIN31_BUTTON_FACE} 8px
		);

		${(props) =>
			props.$animated &&
			css`
				animation: ${progressAnimation} 1.2s linear infinite;
			`}

		box-sizing: border-box;
		overflow: hidden;
	}

	${(props) =>
		props.$value <= 0 &&
		css`
			&::after {
				display: none;
			}
		`}
`;
