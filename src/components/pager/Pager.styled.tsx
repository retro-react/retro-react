import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { pressed, raised, sunken } from '../../constants/bevels';
import {
	CRT_GREEN,
	VGA_BLACK,
	VGA_GREEN,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT, TERMINAL_FONT } from '../../constants/fonts';
import { PagerVariant } from './Pager';

const lcdFlicker = keyframes`
	0%, 100% { opacity: 1; }
	98% { opacity: 0.97; }
`;

const scanlines = keyframes`
	0% { background-position: 0 0; }
	100% { background-position: 0 4px; }
`;

const getPagerColors = (variant: PagerVariant) => {
	switch (variant) {
		case 'terminal':
			return { screen: '#001100', text: CRT_GREEN };
		case 'retro':
			return { screen: '#000033', text: '#4488ff' };
		case 'amber':
			return { screen: '#221100', text: '#ffbb33' };
		default:
			return { screen: '#002200', text: VGA_GREEN };
	}
};

export const PagerBody = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	width: 300px;
	${raised}
	background: ${WIN31_BUTTON_FACE};
	font-family: ${SYSTEM_FONT};
	padding: 14px;

	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.08) 1px,
		transparent 0
	);
	background-size: 3px 3px;
`;

export const PagerHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 14px;
	margin-bottom: 10px;
`;

export const PagerLabel = styled.div`
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	font-weight: bold;
	color: ${VGA_BLACK};
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const StatusIndicator = styled.div<{
	$variant: PagerVariant;
}>`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: ${(props) => getPagerColors(props.$variant).text};
	box-shadow: 0 0 5px ${(props) => getPagerColors(props.$variant).text},
		inset 1px 1px 1px rgba(255, 255, 255, 0.4);
	animation: ${lcdFlicker} 2s ease-in-out infinite;
`;

export const PagerScreen = styled.div<{
	$variant: PagerVariant;
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	height: 110px;
	padding: 10px 14px;
	background: ${(props) => getPagerColors(props.$variant).screen};
	color: ${(props) => getPagerColors(props.$variant).text};
	${sunken}
	font-family: ${TERMINAL_FONT};
	overflow: hidden;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
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
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateY(${(props) => (props.visible ? '0%' : '100%')});
	font-family: ${TERMINAL_FONT};
	color: ${(props) => getPagerColors(props.$variant).text};
	font-size: 15px;
	font-weight: bold;
	letter-spacing: 1px;
	text-align: center;
	padding: 8px;
	line-height: 1.4;
	z-index: 1;
	text-shadow: 0 0 4px currentColor, 0 0 8px currentColor;
	animation: ${lcdFlicker} 4s ease-in-out infinite;
	word-wrap: break-word;
	overflow-wrap: break-word;
`;

export const PageIndicator = styled.div`
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	font-weight: bold;
	color: ${VGA_BLACK};
	text-align: center;
	margin: 8px 0;
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

export const PagerButton = styled.button`
	flex: 1;
	height: 30px;
	${raised}
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	font-weight: bold;
	cursor: pointer;

	&:active:not(:disabled) {
		${pressed}
	}

	&:focus-visible {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -4px;
	}

	&:disabled {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}
`;
