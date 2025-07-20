import styled from '@emotion/styled';
import { ComponentColors } from '@src/utils/getColorScheme';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BLUE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';

export const Modal = styled.div<{
	$color: ComponentColors | string;
	$open: boolean;
	$backdrop: boolean;
}>`
	/* Authentic Windows 3.1 dialog window styling */
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1001;

	/* WIN31 dialog dimensions */
	min-width: 300px;
	max-width: 90vw;
	max-height: 90vh;

	/* Authentic WIN31 raised border */
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	background: ${WIN31_BUTTON_FACE};

	/* Remove modern effects */
	border-radius: 0;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); /* Simple drop shadow like WIN31 */

	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	color: ${VGA_BLACK};

	/* Visibility control */
	opacity: ${(props) => (props.$open ? 1 : 0)};
	visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
	transition: opacity 0.1s linear, visibility 0.1s linear; /* Fast, simple transition */

	/* Responsive behavior */
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
	/* Authentic WIN31 title bar */
	background: ${WIN31_BLUE};
	color: ${VGA_WHITE};
	padding: 2px 4px;
	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	font-weight: bold;

	display: flex;
	justify-content: space-between;
	align-items: center;

	/* Title bar has inset border on top and left */
	border-bottom: 1px solid ${WIN31_BUTTON_SHADOW};
	margin: -2px -2px 0 -2px; /* Extend to modal edges */
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
	font-size: 11px;
	line-height: 1.4;

	/* Allow scrolling for long content */
	overflow-y: auto;
	max-height: calc(90vh - 60px); /* Account for title bar and padding */
`;

export const CloseButton = styled.button`
	/* Authentic WIN31 close button (X) */
	width: 16px;
	height: 14px;
	border: 1px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	background: ${WIN31_BUTTON_FACE};

	font-family: ${SYSTEM_FONT};
	font-size: 10px;
	font-weight: bold;
	color: ${VGA_BLACK};

	cursor: pointer;
	padding: 0;
	margin: 0;

	/* Remove modern styling */
	border-radius: 0;
	outline: none;

	/* Authentic button press effect */
	&:active {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		transform: translate(1px, 1px);
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}

	/* Cross symbol */
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
	background-color: rgba(
		0,
		0,
		0,
		0.3
	); /* Lighter backdrop like classic Windows */
	z-index: 1000;

	/* Simple visibility control */
	opacity: ${(props) => (props.$open ? 1 : 0)};
	visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
	transition: opacity 0.1s linear, visibility 0.1s linear;
`;

/* Optional: Modal footer for buttons */
export const ModalFooter = styled.div`
	padding: 8px 12px;
	background: ${WIN31_BUTTON_FACE};
	border-top: 1px solid ${WIN31_BUTTON_SHADOW};

	display: flex;
	justify-content: flex-end;
	gap: 8px;

	/* Extend to modal edges */
	margin: 0 -12px -12px -12px;
`;
