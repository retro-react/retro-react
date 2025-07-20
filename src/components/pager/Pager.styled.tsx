import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {
	CRT_GREEN,
	VGA_BLACK,
	VGA_GREEN,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT, TERMINAL_FONT } from '@src/constants/fonts';
import { PagerVariant } from './Pager';

// Authentic LCD flicker effect
const lcdFlicker = keyframes`
	0%, 100% {
		opacity: 1;
	}
	98% {
		opacity: 0.98;
	}
`;

// Scanline animation for authentic LCD look
const scanlines = keyframes`
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: 0 4px;
	}
`;

// Get authentic retro colors for pager variants
const getPagerColors = (variant: PagerVariant) => {
	switch (variant) {
		case 'terminal':
			return {
				screen: '#001100',
				text: CRT_GREEN,
			};
		case 'retro':
			return {
				screen: '#000033',
				text: '#4488ff',
			};
		case 'amber':
			return {
				screen: '#221100',
				text: '#ffbb33',
			};
		default:
			return {
				screen: '#002200',
				text: VGA_GREEN,
			};
	}
};

export const PagerBody = styled.div<{
	$variant: PagerVariant;
}>`
	display: flex;
	flex-direction: column;
	width: 280px;
	height: 200px;
	background: ${WIN31_BUTTON_FACE};
	border: 3px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	font-family: ${SYSTEM_FONT};
	padding: 12px;
	position: relative;
	border-radius: 8px;

	/* Authentic Windows 3.1 raised panel look with dithering */
	box-shadow: inset 2px 2px 0 ${WIN31_BUTTON_HIGHLIGHT},
		inset -2px -2px 0 ${WIN31_BUTTON_SHADOW}, 2px 2px 4px rgba(0, 0, 0, 0.3);

	/* Subtle dithering pattern for authentic texture */
	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.08) 1px,
		transparent 0
	);
	background-size: 3px 3px;
`;

export const PagerScreen = styled.div<{
	$variant: PagerVariant;
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => getPagerColors(props.$variant).screen};
	color: ${(props) => getPagerColors(props.$variant).text};
	height: 100px;
	margin: 12px 0;
	padding: 8px 12px;
	border: 3px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	border-radius: 4px;
	font-family: ${TERMINAL_FONT};
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	overflow: hidden;
	position: relative;

	/* Deep sunken LCD display look */
	box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.6),
		inset -2px -2px 3px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.4);

	/* Scanlines for authentic LCD effect */
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			rgba(0, 0, 0, 0.12) 2px,
			rgba(0, 0, 0, 0.12) 3px
		);
		pointer-events: none;
		animation: ${scanlines} 4s linear infinite;
	}

	/* Subtle screen glow effect */
	&::before {
		content: '';
		position: absolute;
		top: -2px;
		left: -2px;
		right: -2px;
		bottom: -2px;
		background: ${(props) => getPagerColors(props.$variant).text};
		opacity: 0.03;
		border-radius: 4px;
		pointer-events: none;
	}
`;

export const PagerButton = styled.button<{
	$variant: PagerVariant;
}>`
	padding: 8px 16px;
	margin: 0 4px;
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	border-radius: 2px;
	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	font-weight: bold;
	cursor: pointer;
	min-width: 60px;
	height: 32px;

	/* Authentic Windows 3.1 button styling with dithering */
	box-shadow: inset 1px 1px 0 ${WIN31_BUTTON_HIGHLIGHT},
		inset -1px -1px 0 ${WIN31_BUTTON_SHADOW}, 1px 1px 2px rgba(0, 0, 0, 0.2);

	/* Subtle dithering pattern */
	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.05) 1px,
		transparent 0
	);
	background-size: 2px 2px;

	&:hover:not(:disabled) {
		/* Subtle highlight on hover */
		filter: brightness(1.08);
		box-shadow: inset 1px 1px 0 ${WIN31_BUTTON_HIGHLIGHT},
			inset -1px -1px 0 ${WIN31_BUTTON_SHADOW}, 1px 1px 3px rgba(0, 0, 0, 0.25);
	}

	&:active:not(:disabled) {
		/* Authentic button press effect */
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.3),
			1px 1px 1px rgba(0, 0, 0, 0.1);
		transform: translate(1px, 1px);
		filter: brightness(0.95);
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -4px;
	}

	&:disabled {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
		filter: grayscale(0.3);
	}
`;

export const MessageContainer = styled.div`
	overflow: hidden;
	height: 100%;
	width: 100%;
	position: relative;
`;

export const MessageSlide = styled.div<{
	visible: boolean;
	$variant: PagerVariant;
}>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateY(${(props) => (props.visible ? '0%' : '100%')});
	transition: transform 0.3s ease-in-out;
	font-family: ${TERMINAL_FONT};
	color: ${(props) => getPagerColors(props.$variant).text};
	font-size: 13px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-align: center;
	padding: 8px;
	line-height: 1.3;
	z-index: 1;

	/* Enhanced LCD glow effect */
	text-shadow: 0 0 3px currentColor, 0 0 6px currentColor, 0 0 1px currentColor;
	animation: ${lcdFlicker} 4s ease-in-out infinite;

	/* Word wrapping for long messages */
	word-wrap: break-word;
	overflow-wrap: break-word;
	hyphens: auto;
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 8px;
	margin-top: auto;
	padding-top: 8px;
`;

export const PagerLabel = styled.div`
	position: absolute;
	top: 4px;
	left: 12px;
	font-family: ${SYSTEM_FONT};
	font-size: 8px;
	font-weight: bold;
	color: ${VGA_BLACK};
	text-transform: uppercase;
	letter-spacing: 0.5px;
	opacity: 0.7;
`;

export const StatusIndicator = styled.div<{
	$variant: PagerVariant;
}>`
	position: absolute;
	top: 8px;
	right: 12px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: ${(props) => getPagerColors(props.$variant).text};
	box-shadow: 0 0 4px ${(props) => getPagerColors(props.$variant).text},
		inset 1px 1px 1px rgba(255, 255, 255, 0.3);
	animation: ${lcdFlicker} 2s ease-in-out infinite;
`;

export const PageIndicator = styled.div`
	font-family: ${SYSTEM_FONT};
	font-size: 9px;
	color: ${VGA_BLACK};
	text-align: center;
	margin: 4px 0;
	opacity: 0.8;
	font-weight: bold;
`;
