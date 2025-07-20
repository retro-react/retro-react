import styled from '@emotion/styled';
import {
	crtEffect,
	terminalBlink,
	terminalGlow,
} from '@src/utils/retroEffects';
import { CRT_GREEN, VGA_BLACK } from '@src/constants/colors';
import { CRT_FONT } from '@src/constants/fonts';

export const Terminal = styled.div`
	font-family: ${CRT_FONT};
	box-sizing: border-box;
	background-color: ${VGA_BLACK};
	position: relative;
	padding: 16px;
	border-radius: 0;
	color: ${CRT_GREEN};
	font-size: 12px;
	line-height: 1.2;
	white-space: pre-wrap;
	max-width: 100%;
	overflow-x: auto;
	overflow-y: auto;
	cursor: text;
	max-height: 300px;

	/* Apply authentic CRT effects */
	${crtEffect}
	${terminalGlow}
	
	/* Authentic CRT border */
	border: 4px solid #333;
	box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.3), 0 0 20px rgba(0, 0, 0, 0.8);

	/* Authentic character spacing */
	letter-spacing: 0.05em;

	/* Ensure text appears above CRT effects */
	& > * {
		position: relative;
		z-index: 3;
	}
`;

export const TerminalInput = styled.input`
	font-family: ${CRT_FONT};
	background-color: transparent;
	border: none;
	color: ${CRT_GREEN};
	font-size: 12px;
	outline: none;
	width: 80%;
	letter-spacing: 0.05em;

	/* Glowing cursor effect */
	&::after {
		content: '_';
		animation: ${terminalBlink} 1s infinite;
		color: ${CRT_GREEN};
		text-shadow: 0 0 5px ${CRT_GREEN};
	}
`;

export const TerminalCursor = styled.span`
	display: inline-block;
	width: 8px;
	height: 14px;
	background-color: ${CRT_GREEN};
	animation: ${terminalBlink} 1s infinite;
	box-shadow: 0 0 5px ${CRT_GREEN};
	margin-left: 2px;
`;
