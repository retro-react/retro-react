import styled from '@emotion/styled';
import { pressed, raised } from '../../constants/bevels';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import getColorScheme, { ComponentColors } from '../../utils/getColorScheme';

export const WindowContainer = styled.div<{
	$active: boolean;
}>`
	position: fixed;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	color: ${VGA_BLACK};
	background: ${WIN31_BUTTON_FACE};
	${raised}
	user-select: none;
	z-index: ${(props) => (props.$active ? 200 : 100)};
	outline: none;
`;

export const WindowTitleBar = styled.div<{
	$color: ComponentColors | string;
	$active: boolean;
	$draggable: boolean;
}>`
	display: flex;
	align-items: center;
	gap: 4px;
	height: 18px;
	padding: 2px 2px 2px 4px;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	font-weight: bold;
	color: ${VGA_WHITE};
	background: ${(props) =>
		props.$active
			? getColorScheme(props.$color, props.theme)
			: WIN31_BUTTON_SHADOW};
	cursor: ${(props) => (props.$draggable ? 'move' : 'default')};
	flex-shrink: 0;
`;

export const WindowIcon = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 16px;
	flex-shrink: 0;
`;

export const WindowTitle = styled.span`
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const WindowControls = styled.div`
	display: flex;
	gap: 2px;
	flex-shrink: 0;
`;

export const WindowButton = styled.button`
	width: 16px;
	height: 14px;
	padding: 0;
	margin: 0;
	${raised}
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	font-size: 9px;
	font-weight: bold;
	line-height: 1;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	&:active:not(:disabled) {
		${pressed}
	}

	&:focus-visible {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}

	&:disabled {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}
`;

export const WindowContent = styled.div`
	flex: 1;
	min-height: 0;
	overflow: auto;
	padding: 8px;
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	user-select: text;
`;

export const WindowResizeHandle = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 16px;
	height: 16px;
	cursor: nwse-resize;
	background-image: linear-gradient(
		135deg,
		transparent 0,
		transparent 30%,
		${WIN31_BUTTON_SHADOW} 30%,
		${WIN31_BUTTON_SHADOW} 40%,
		transparent 40%,
		transparent 50%,
		${WIN31_BUTTON_SHADOW} 50%,
		${WIN31_BUTTON_SHADOW} 60%,
		transparent 60%,
		transparent 70%,
		${WIN31_BUTTON_SHADOW} 70%,
		${WIN31_BUTTON_SHADOW} 80%,
		transparent 80%
	);
`;
