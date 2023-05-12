import styled from '@emotion/styled';
import { alterColor } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { SHADE_1, SHADE_6 } from '@src/constants/colors';
import type { ChipColor } from './Chip';

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
		${({ $color, theme }) => alterColor(getColorScheme($color, theme))} 0%,
		${({ $color, theme }) => getColorScheme($color, theme)} 100%
	);
	filter: contrast(120%) brightness(100%);
	color: ${SHADE_1};
`;
