import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { BLACK, HIGHLIGHT, SHADE_1 } from '@src/constants/colors';
import { BadgeSize } from './Badge';

interface BadgeProps {
	$color: ComponentColors | 'highlight';
	$pulsate?: boolean;
	$size: BadgeSize;
}

export const Badge = styled.span<BadgeProps>`
	position: absolute;
	top: -20%;
	right: -20%;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	color: ${SHADE_1};
	border-radius: 50%;
	animation: ${({ $pulsate }) => ($pulsate ? 'pulsate 1.5s infinite' : 'none')};

	@keyframes pulsate {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
	padding: 0.05rem;

	${({ $color, theme }) =>
		$color !== 'highlight'
			? `
	background-color: ${getColorScheme($color, theme)};
	border: 1px solid ${alterColorEnhanced(getColorScheme($color, theme), 75)};
	`
			: `
	background-color: ${HIGHLIGHT};
	color: ${BLACK};
	font-weight: bold;
	border: 2px solid ${alterColorEnhanced(HIGHLIGHT, 20)};
	border-radius: 100px / 50px 100px;
	`}

	${({ $size }) => {
		switch ($size) {
			case 'small':
				return `
					min-width: 1.2rem;
					min-height: 1.2rem;
					font-size: 0.6rem;
					top: -10%;
					right: -10%;
				`;
			case 'medium':
				return `
					min-width: 1.5rem;
					min-height: 1.5rem;
					font-size: 0.75rem;
					top: -15%;
					right: -15%;
				`;
			case 'large':
				return `
					min-width: 2rem;
					min-height: 2rem;
					font-size: 1rem;
					top: -20%;
					right: -20%;
				`;
		}
	}};
`;
