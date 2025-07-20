import styled from '@emotion/styled';
import { ComponentColors } from '@src/utils/getColorScheme';
import {
	ERROR,
	HIGHLIGHT,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	VGA_BLACK,
	VGA_WHITE,
	WARN,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '@src/constants/fonts';
import { BadgeSize } from './Badge';

interface BadgeProps {
	$color: ComponentColors | 'highlight';
	$pulsate?: boolean;
	$size: BadgeSize;
}

function getBadgeColorScheme(color: ComponentColors | 'highlight') {
	switch (color) {
		case 'error':
			return ERROR;
		case 'success':
			return SUCCESS;
		case 'warn':
			return WARN;
		case 'secondary':
			return SECONDARY;
		case 'highlight':
			return HIGHLIGHT;
		case 'primary':
		default:
			return PRIMARY;
	}
}

export const Badge = styled.span<BadgeProps>`
	position: absolute;
	top: -20%;
	right: -20%;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-family: ${SYSTEM_FONT};
	font-weight: bold;
	background: ${({ $color }) => getBadgeColorScheme($color)};
	color: ${({ $color }) =>
		$color === 'warn' || $color === 'highlight' ? VGA_BLACK : VGA_WHITE};
	text-shadow: ${({ $color }) =>
		$color === 'warn' || $color === 'highlight'
			? '1px 1px 0px rgba(255, 255, 255, 0.8)'
			: '1px 1px 0px rgba(0, 0, 0, 0.5)'};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	padding: 0.05rem;
	transition: none;

	/* Remove modern styling */
	border-radius: 0;

	/* Retro pulsate animation */
	${({ $pulsate }) =>
		$pulsate &&
		`
		animation: retrofunk 1.5s infinite;
		
		@keyframes retrofunk {
			0% { 
				transform: scale(1);
				filter: brightness(1);
			}
			50% { 
				transform: scale(1.1);
				filter: brightness(1.2);
			}
			100% { 
				transform: scale(1);
				filter: brightness(1);
			}
		}
	`}

	${({ $size }) => {
		switch ($size) {
			case 'small':
				return `
					min-width: 16px;
					min-height: 16px;
					font-size: ${FONT_SIZES.TINY};
					top: -10%;
					right: -10%;
				`;
			case 'medium':
				return `
					min-width: 20px;
					min-height: 20px;
					font-size: ${FONT_SIZES.SMALL};
					top: -15%;
					right: -15%;
				`;
			case 'large':
				return `
					min-width: 24px;
					min-height: 24px;
					font-size: ${FONT_SIZES.NORMAL};
					top: -20%;
					right: -20%;
				`;
		}
	}};
`;
