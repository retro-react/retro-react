import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';
import { SpinnerSize } from './Spinner';

// Authentic WIN31 spinning animation - simple rotation
const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

// Dot pulsing animation for classic loading dots - enhanced for better visibility
const dotPulse = keyframes`
	0%, 80%, 100% {
		transform: scale(1);
		opacity: 0.3;
	}
	40% {
		transform: scale(1.5);
		opacity: 1;
	}
`;

// Bar height animation for classic bar loading
const barHeight = keyframes`
	0%, 100% {
		height: 4px;
	}
	50% {
		height: 12px;
	}
`;

export const Wrapper = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-family: ${SYSTEM_FONT};
`;

const spinnerSize = {
	small: '16px',
	medium: '24px',
	large: '32px',
};

// Classic hourglass spinner like Windows 3.1 wait cursor
export const HourglassSpinner = styled.div<{ $size: SpinnerSize }>`
	width: ${({ $size }) => spinnerSize[$size]};
	height: ${({ $size }) => spinnerSize[$size]};
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: '⧗';
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: ${({ $size }) => spinnerSize[$size]};
		color: ${VGA_BLACK};
		line-height: 1;
		animation: ${spin} 1.5s linear infinite;
	}
`;

// Classic three-dot loading animation
export const DotsSpinner = styled.div<{ $size: SpinnerSize }>`
	display: flex;
	align-items: center;
	gap: ${({ $size }) =>
		$size === 'small' ? '2px' : $size === 'medium' ? '4px' : '6px'};
`;

export const Dot = styled.div`
	width: 4px;
	height: 4px;
	background: ${VGA_BLACK};
	border-radius: 0; /* Square dots for authentic feel */
	animation: ${dotPulse} 1s ease-in-out infinite;

	&:nth-of-type(1) {
		animation-delay: 0s;
	}
	&:nth-of-type(2) {
		animation-delay: 0.15s;
	}
	&:nth-of-type(3) {
		animation-delay: 0.3s;
	}
`;

// Classic bar loading animation like progress indicators
export const BarsSpinner = styled.div<{ $size: SpinnerSize }>`
	display: flex;
	align-items: flex-end;
	gap: 2px;
	height: ${({ $size }) =>
		$size === 'small' ? '12px' : $size === 'medium' ? '16px' : '20px'};
`;

export const Bar = styled.div`
	width: 3px;
	height: 4px;
	background: ${VGA_BLACK};
	animation: ${barHeight} 1.2s ease-in-out infinite;

	&:nth-of-type(1) {
		animation-delay: 0s;
	}
	&:nth-of-type(2) {
		animation-delay: 0.1s;
	}
	&:nth-of-type(3) {
		animation-delay: 0.2s;
	}
	&:nth-of-type(4) {
		animation-delay: 0.3s;
	}
`;

// Simple rotating square like classic loading indicators
export const RotatingSpinner = styled.div<{ $size: SpinnerSize }>`
	width: ${({ $size }) => spinnerSize[$size]};
	height: ${({ $size }) => spinnerSize[$size]};
	background: ${WIN31_BUTTON_FACE};

	/* Authentic WIN31 raised border */
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};

	animation: ${spin} 1s linear infinite;

	/* Add a small dot in center for visual reference */
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 2px;
		height: 2px;
		background: ${VGA_BLACK};
		transform: translate(-50%, -50%);
	}

	position: relative;
`;
