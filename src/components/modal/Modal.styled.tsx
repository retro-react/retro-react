import styled from '@emotion/styled';
import { pressed, raised, windowFrame } from '../../constants/bevels';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BLUE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import { ComponentColors } from '../../utils/getColorScheme';

export const Modal = styled.div<{
	$color: ComponentColors | string;
	$open: boolean;
	$backdrop: boolean;
}>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1001;

	min-width: 300px;
	max-width: 90vw;
	max-height: 90vh;

	${windowFrame}
	background: ${WIN31_BUTTON_FACE};

	border-radius: 0;

	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	color: ${VGA_BLACK};

	opacity: ${(props) => (props.$open ? 1 : 0)};
	visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
	transition: opacity 0.1s linear, visibility 0.1s linear;

	@media (max-width: 480px) {
		top: 10px;
		left: 10px;
		right: 10px;
		width: calc(100vw - 20px);
		max-width: none;
		transform: none;
	}
`;

export const ModalTitleBar = styled.div`
	background: ${WIN31_BLUE};
	color: ${VGA_WHITE};
	padding: 2px 4px;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	font-weight: bold;

	display: flex;
	justify-content: space-between;
	align-items: center;

	border-bottom: 1px solid ${WIN31_BUTTON_SHADOW};
	margin: -2px -2px 0 -2px;
`;

export const ModalTitle = styled.span`
	flex: 1;
	padding-left: 4px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ModalContent = styled.div`
	padding: 12px;
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	line-height: 1.4;

	overflow-y: auto;
	max-height: calc(90vh - 60px);
`;

export const CloseButton = styled.button`
	width: 18px;
	height: 16px;
	${raised}
	background: ${WIN31_BUTTON_FACE};

	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	font-weight: bold;
	color: ${VGA_BLACK};

	cursor: pointer;
	padding: 0;
	margin: 0;

	border-radius: 0;
	outline: none;

	&:active {
		${pressed}
		transform: translate(1px, 1px);
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}

	&::before {
		content: '×';
		display: block;
		line-height: 1;
	}
`;

export const ModalBackdrop = styled.div<{
	$open: boolean;
}>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 1000;

	opacity: ${(props) => (props.$open ? 1 : 0)};
	visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
	transition: opacity 0.1s linear, visibility 0.1s linear;
`;
