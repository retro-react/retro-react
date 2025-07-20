import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	VGA_BLACK,
	VGA_WHITE,
	WARN,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '@src/constants/fonts';
import type { AlertColor } from './Alert';

function getColorScheme(color: AlertColor) {
	switch (color) {
		case 'error':
			return ERROR;
		case 'success':
			return SUCCESS;
		case 'warn':
			return WARN;
		case 'secondary':
			return SECONDARY;
		case 'primary':
		default:
			return PRIMARY;
	}
}

const slideIn = keyframes`
	from {
		opacity: 0;
		transform: translateX(-100%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

const blink = keyframes`
	0%, 50% { opacity: 1; }
	51%, 100% { opacity: 0; }
`;

export const Alert = styled.div<{ $color: AlertColor; $isOpenProp?: boolean }>`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	padding: 12px 48px 12px 16px;
	font-size: ${FONT_SIZES.NORMAL};
	font-family: ${SYSTEM_FONT};
	font-weight: normal;
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	width: 100%;
	min-height: 40px;
	box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);

	/* Remove modern styling */
	border-radius: 0;

	/* Alert color indicator */
	&::before {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		bottom: 2px;
		width: 4px;
		background: ${({ $color }) => getColorScheme($color)};
	}

	/* Blinking indicator for errors */
	${({ $color }) =>
		$color === 'error' &&
		css`
			&::after {
				content: '●';
				position: absolute;
				top: 8px;
				right: 8px;
				color: ${ERROR};
				font-size: 12px;
				animation: ${blink} 1s infinite;
			}
		`}

	${({ $isOpenProp }) =>
		$isOpenProp &&
		css`
			animation: ${slideIn} 0.2s ease-out;
		`}
`;

export const Title = styled.div`
	font-weight: bold;
	margin-bottom: 4px;
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
`;

export const CloseButton = styled.button<{ $icon: string; $color: AlertColor }>`
	position: absolute;
	top: 8px;
	right: 8px;
	width: 20px;
	height: 20px;
	border: 1px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	font-size: 12px;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: none;

	/* X mark */
	&::before {
		content: '×';
		line-height: 1;
	}

	&:hover {
		background: ${({ $color }) => getColorScheme($color)};
		color: ${VGA_WHITE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	}

	&:active {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	}

	&:focus-visible {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}
`;
