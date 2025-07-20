// Tabs.styled.ts
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';

export const TabsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-family: ${SYSTEM_FONT};
	background: ${WIN31_BUTTON_FACE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
`;

export const TabList = styled.div`
	display: flex;
	background: ${WIN31_BUTTON_FACE};
	/* No bottom border - tabs connect to content area */
`;

export const TabItem = styled.button<{
	$isActive: boolean;
}>`
	/* Authentic WIN31 tab styling */
	border: 2px solid;
	border-color: ${(props) =>
		props.$isActive
			? `${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} transparent ${WIN31_BUTTON_HIGHLIGHT}`
			: `${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}`};
	border-bottom: ${(props) =>
		props.$isActive ? 'none' : `2px solid ${WIN31_BUTTON_SHADOW}`};

	padding: 4px 12px;
	margin: 0 1px 0 0;

	background: ${(props) =>
		props.$isActive ? WIN31_BUTTON_FACE : WIN31_BUTTON_FACE};

	color: ${(props) => (props.$isActive ? VGA_BLACK : VGA_BLACK)};

	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	font-weight: normal;
	cursor: pointer;

	/* Remove modern effects */
	border-radius: 0;
	transition: none;
	outline: none;

	/* Active tab appears "raised" and connected to content */
	${(props) =>
		props.$isActive &&
		css`
			position: relative;
			z-index: 1;
			margin-bottom: -2px;
			padding-bottom: 6px;
		`}

	/* Inactive tabs are slightly "pressed" */
	${(props) =>
		!props.$isActive &&
		css`
			border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
				${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
			transform: translate(1px, 1px);
		`}

	&:hover:not(:disabled) {
		/* Minimal hover effect - just slight highlight */
		filter: brightness(1.02);
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}

	&:disabled {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}

	/* First tab has no left margin */
	&:first-of-type {
		margin-left: 0;
	}
`;

export const TabContent = styled.div`
	padding: 12px;
	background: ${WIN31_BUTTON_FACE};
	border-top: none; /* Connected to active tab */
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	line-height: 1.4;
	min-height: 100px;
`;
