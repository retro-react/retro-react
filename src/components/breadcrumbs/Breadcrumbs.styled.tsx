import styled from '@emotion/styled';
import { sunken } from '../../constants/bevels';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BLUE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';

export const BreadcrumbsWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 4px 8px;
	background-color: ${WIN31_BUTTON_FACE};
	${sunken}
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	position: relative;

	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.1) 1px,
		transparent 0
	);
	background-size: 2px 2px;

	@media (max-width: 768px) {
		padding: 3px 6px;
		flex-wrap: nowrap;
		overflow-x: auto;
		scrollbar-width: thin;
		scrollbar-color: #808080 #c0c0c0;

		&::-webkit-scrollbar {
			height: 12px;
		}
		&::-webkit-scrollbar-track {
			background: #c0c0c0;
			border: 1px inset #c0c0c0;
		}
		&::-webkit-scrollbar-thumb {
			background: #808080;
			border: 1px outset #808080;
		}
	}
`;

export const Breadcrumb = styled.span<{
	$active?: boolean;
	$disabled?: boolean;
}>`
	display: inline-flex;
	align-items: center;
	font-size: inherit;
	color: ${(props) => (props.$disabled ? WIN31_BUTTON_SHADOW : VGA_BLACK)};
	font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
	opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
	white-space: nowrap;
`;

export const BreadcrumbSeparator = styled.span<{
	$type: 'arrow' | 'backslash' | 'dot' | 'pipe';
}>`
	color: ${WIN31_BUTTON_SHADOW};
	font-weight: normal;
	margin: 0 4px;
	user-select: none;
	font-size: inherit;
`;

export const BreadcrumbAnchor = styled.a<{
	$disabled?: boolean;
}>`
	color: ${(props) => (props.$disabled ? WIN31_BUTTON_SHADOW : VGA_BLACK)};
	text-decoration: none;
	padding: 1px 3px;
	border: 1px solid transparent;
	background: transparent;
	cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
	pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
	display: inline-flex;
	align-items: center;
	gap: 2px;

	&:hover:not([disabled]) {
		background-color: ${WIN31_BLUE};
		color: ${VGA_WHITE};
		border: 1px outset ${WIN31_BUTTON_FACE};
	}

	&:focus:not([disabled]) {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: 1px;
	}

	&:active:not([disabled]) {
		border: 1px inset ${WIN31_BUTTON_FACE};
		background-color: ${WIN31_BUTTON_FACE};
		color: ${VGA_BLACK};
	}
`;

export const BreadcrumbActive = styled.span`
	color: ${VGA_BLACK};
	font-weight: bold;
	padding: 1px 3px;
	background: transparent;
	display: inline-flex;
	align-items: center;
	gap: 2px;
`;

export const BreadcrumbIcon = styled.span`
	display: inline-flex;
	align-items: center;
	font-size: ${FONT_SIZES.TINY};
	margin-right: 2px;
`;

export const CopyButton = styled.button`
	background: ${WIN31_BUTTON_FACE};
	border: 1px outset ${WIN31_BUTTON_FACE};
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	padding: 2px 4px;
	margin-left: 8px;
	cursor: pointer;

	&:hover {
		background: #e0e0e0;
	}

	&:active {
		border: 1px inset ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: 1px;
	}
`;

export const TruncationIndicator = styled.span`
	color: ${WIN31_BUTTON_SHADOW};
	font-weight: normal;
	margin: 0 4px;
	cursor: help;
	user-select: none;
	position: relative;

	&:hover {
		color: ${VGA_BLACK};
	}
`;
