import styled from '@emotion/styled';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';

export const Terminal = styled.div`
	font-family: 'Courier New', Courier, monospace;
	box-sizing: border-box;
	background-color: ${BLACK};
	position: relative;
	padding: 1rem;
	border-radius: 0;
	color: ${WHITE};
	font-size: 1.2rem;
	border: 1px solid transparent;
	outline: 1rem solid transparent;
	box-shadow: 3px 3px ${rgba(WHITE, 0.3)};
	line-height: 1.5;
	white-space: pre-wrap;
	max-width: 100%;
	overflow-x: auto;
	overflow-y: auto;
	cursor: text;
	max-height: 300px;
`;

export const TerminalInput = styled.input`
	font-family: 'Courier New', Courier, monospace;
	background-color: transparent;
	border: none;
	color: ${WHITE};
	font-size: 1.2rem;
	outline: none;
	width: 80%;
`;
