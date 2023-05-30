import styled from '@emotion/styled';
import { SCREEN_LG, SCREEN_XM } from '@src/constants/breakpoints';
import { COLUMN_WIDTH, GUTTER } from '@src/constants/spacing';

export const FluidContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 100%;
`;

export const Container = styled.div`
	box-sizing: border-box;
	width: 100%;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	max-width: ${COLUMN_WIDTH * 4 + GUTTER * 2 * 3}px;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: ${SCREEN_XM}px) {
		max-width: ${COLUMN_WIDTH * 8 + GUTTER * 2 * 7}px;
	}

	@media (min-width: ${SCREEN_LG}px) {
		max-width: ${COLUMN_WIDTH * 12 + GUTTER * 2 * 11}px;
	}
`;
