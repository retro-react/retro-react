import styled from '@emotion/styled';
import { alterColor } from '@src/utils/alterColor';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SHADE_1,
	SHADE_6,
	SUCCESS,
	WARN,
} from '@src/constants/colors';
import '../fonts.css';
import type { Color } from './Alert';

function getColorScheme(color: Color) {
	switch (color) {
		case 'error':
			return ERROR;
		case 'success':
			return SUCCESS;
		case 'warn':
			return alterColor(WARN, 150);
		case 'secondary':
			return SECONDARY;
		case 'primary':
		default:
			return PRIMARY;
	}
}

export const Alert = styled.div<{ $color: Color }>`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	padding: 0.2rem 3rem 0.3rem 1.2rem;
	font-size: 0.875rem;
	font-family: 'FrauncesLatin', sans-serif;
	border-top: 2px solid ${SHADE_6};
	background: linear-gradient(
		to right,
		${({ $color }) => alterColor(getColorScheme($color))} 80%,
		${({ $color }) => getColorScheme($color)} 100%
	);
	color: ${SHADE_1};
	width: 100%;
	min-height: 2.5rem;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0.5rem;
		height: 100%;
		background: ${({ $color }) => getColorScheme($color)};
	}
`;

export const Title = styled.div`
	font-weight: 700;
	margin-bottom: 0.2rem;
`;
