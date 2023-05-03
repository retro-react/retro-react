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
import type { ChipColor } from './Chip';

function getColorScheme(color: ChipColor) {
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

export const Chip = styled.div<{ $color: ChipColor }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding: 0.2rem 3rem 0.3rem 1.2rem;
	font-size: 0.875rem;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	border-top: 2px solid ${SHADE_6};
	background: linear-gradient(
		to right,
		${({ $color }) => alterColor(getColorScheme($color))} 0%,
		${({ $color }) => getColorScheme($color)} 100%
	);
	filter: contrast(120%) brightness(100%);
	color: ${SHADE_1};
`;
