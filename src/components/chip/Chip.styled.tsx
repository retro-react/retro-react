import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { SHADE_1, SHADE_6 } from '@src/constants/colors';
import type { ChipColor } from './Chip';

export const Chip = styled.div<{ $color: ChipColor; $clickable?: boolean }>`
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
		${({ $color, theme }) =>
				alterColorEnhanced(getColorScheme($color, theme), -40)}
			0%,
		${({ $color, theme }) => getColorScheme($color, theme)} 100%
	);
	filter: contrast(120%) brightness(100%);
	color: ${SHADE_1};

	${({ $clickable, $color, theme }) =>
		$clickable &&
		`
		&:hover {
			background: linear-gradient(
				to right,
				${alterColorEnhanced(getColorScheme($color, theme), -20)}
					0%,
				${alterColorEnhanced(getColorScheme($color, theme), 20)} 100%
			);
			cursor: pointer;

			transform: scale(1.01);
			transition: transform 0.1s linear, background 0.1s linear;
		}

		&:active {
			transform: scale(0.99);
			transition: transform 0.1s linear;
		}

		pointer-events: auto;
		user-select: none;
	`}
`;
