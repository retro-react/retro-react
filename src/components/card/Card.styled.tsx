import styled from '@emotion/styled';
import { raised, sunken } from '../../constants/bevels';
import {
	BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { BODY_FONT, FONT_SIZES } from '../../constants/fonts';
import { SPACING } from '../../constants/spacing';

export const Card = styled.div`
	box-sizing: border-box;

	background-color: ${WIN31_BUTTON_FACE};
	${raised};

	padding: ${SPACING.MD};
	font-family: ${BODY_FONT};
	font-size: ${FONT_SIZES.SMALL};
	color: ${BLACK};
	overflow: auto;
	display: flex;
	flex-direction: column;
`;

export const CardContent = styled.div`
	margin-bottom: ${SPACING.MD};
	flex: 1;
	overflow: auto;
	font-size: ${FONT_SIZES.SMALL};
	line-height: 1.4;

	::-webkit-scrollbar {
		width: 16px;
		background: ${WIN31_BUTTON_FACE};
	}

	::-webkit-scrollbar-track {
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid ${WIN31_BUTTON_SHADOW};
	}

	::-webkit-scrollbar-thumb {
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	}

	::-webkit-scrollbar-button {
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		height: 16px;
	}
`;

export const CardFooter = styled.div`
	margin-top: ${SPACING.MD};
	padding-top: ${SPACING.SM};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${FONT_SIZES.SMALL};
	color: ${BLACK};
`;

export const CardTitle = styled.h2`
	font-size: ${FONT_SIZES.NORMAL};
	font-weight: bold;
	margin: 0 0 ${SPACING.MD} 0;
	font-family: ${BODY_FONT};
	color: ${BLACK};
`;

export const CardImage = styled.img`
	display: block;
	width: 100%;
	${sunken};
	image-rendering: -moz-crisp-edges;
	image-rendering: -webkit-crisp-edges;
	image-rendering: pixelated;
	image-rendering: crisp-edges;
`;

export const CardImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: ${SPACING.MD};

	& > * {
		max-width: 100%;
		max-height: 100%;
	}
`;
