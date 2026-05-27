import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { sunken } from '../../constants/bevels';
import { VGA_BLUE, WIN31_BUTTON_FACE } from '../../constants/colors';
import { SYSTEM_FONT } from '../../constants/fonts';

const progressAnimation = keyframes`
	0% {
		background-position: 16px 0;
	}
	100% {
		background-position: 0 0;
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
		top: 1px;
		left: 1px;
		bottom: 1px;
		width: calc(${(props) => Math.min(Math.max(props.$value, 0), 100)}% - 2px);
		max-width: calc(100% - 2px);
		background-color: ${VGA_BLUE};
		background-image: linear-gradient(
			-45deg,
			${WIN31_BUTTON_FACE} 25%,
			transparent 25%,
			transparent 50%,
			${WIN31_BUTTON_FACE} 50%,
			${WIN31_BUTTON_FACE} 75%,
			transparent 75%,
			transparent
		);
		background-size: 16px 16px;

		${(props) =>
			props.$animated &&
			css`
				animation: ${progressAnimation} 1s linear infinite;
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
