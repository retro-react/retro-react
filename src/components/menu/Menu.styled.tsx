import styled from '@emotion/styled';
import { raised } from '../../constants/bevels';
import {
	BLACK,
	WHITE,
	WIN31_BLUE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';

export const MenuContainer = styled.div`
	position: relative;
	display: inline-block;
	${raised}
	background-color: ${WIN31_BUTTON_FACE};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	min-width: 150px;

	/* Add subtle dithering pattern for authentic WIN31 look */
	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.15) 1px,
		transparent 0
	);
	background-size: 2px 2px;
`;

export const MenuStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding: 2px;
	background-color: ${WIN31_BUTTON_FACE};
`;

export const MenuItemDivider = styled.hr`
	border: none;
	border-top: 1px solid ${WIN31_BUTTON_SHADOW};
	border-bottom: 1px solid ${WIN31_BUTTON_HIGHLIGHT};
	margin: 2px 4px;
	height: 0;
`;

export const MenuItem = styled.li`
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	padding: 4px 16px;
	background-color: transparent;
	color: ${BLACK};
	cursor: pointer;
	position: relative;
	line-height: 1.2;

	&:hover {
		background-color: ${WIN31_BLUE};
		color: ${WHITE};
	}

	&:active {
		background-color: ${WIN31_BLUE};
		color: ${WHITE};
	}

	&:focus {
		outline: 1px dotted ${BLACK};
		outline-offset: -1px;
	}

	&:hover:focus {
		outline-color: ${WHITE};
	}

	&[aria-disabled='true'] {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
		text-shadow: 1px 1px 0 ${WHITE};

		&:hover,
		&:active {
			background-color: transparent;
			color: ${WIN31_BUTTON_SHADOW};
		}
	}
`;
