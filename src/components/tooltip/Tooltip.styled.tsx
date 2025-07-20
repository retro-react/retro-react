import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeUICSSObject } from 'theme-ui';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '@src/constants/fonts';
import { TooltipVariants } from './Tooltip';

interface TooltipContentProps {
	$visible: boolean;
	$variant: TooltipVariants;
	$position: 'top' | 'bottom' | 'left' | 'right';
	sx?: ThemeUICSSObject;
}

const getTooltipVariantStyles = (variant: TooltipVariants) => {
	// Classic Windows 95/98 yellow help tooltip
	const defaultStyles = css`
		background: #ffffe1;
		color: ${VGA_BLACK};
		border: 1px solid ${VGA_BLACK};
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	`;

	// Help tooltip with blue accent
	const helpStyles = css`
		background: #e1f5ff;
		color: ${VGA_BLACK};
		border: 1px solid #0066cc;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	`;

	// Warning tooltip with red accent
	const warningStyles = css`
		background: #ffe1e1;
		color: ${VGA_BLACK};
		border: 1px solid #cc0000;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	`;

	// Info tooltip with system colors
	const infoStyles = css`
		background: ${WIN31_BUTTON_FACE};
		color: ${VGA_BLACK};
		border: 2px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
	`;

	switch (variant) {
		case 'help':
			return helpStyles;
		case 'warning':
			return warningStyles;
		case 'info':
			return infoStyles;
		case 'default':
		default:
			return defaultStyles;
	}
};

export const TooltipWrapper = styled.div`
	position: relative;
	display: inline-block;
	/* Ensure wrapper doesn't block hover events */
	pointer-events: auto;
`;

export const TooltipContent = styled.div<TooltipContentProps>`
	position: fixed;
	z-index: 1000;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	font-weight: normal;
	text-align: left;
	padding: 4px 8px;
	border-radius: 0; /* Sharp corners for retro look */
	width: max-content;
	max-width: 200px;
	box-sizing: border-box;
	word-wrap: break-word;
	text-shadow: none;
	pointer-events: none; /* Prevent tooltip from interfering with mouse events */

	/* Use only opacity for visibility - simpler and more reliable */
	opacity: ${(props) => (props.$visible ? 1 : 0)};
	transition: opacity 0.2s ease-in-out;

	/* Hide completely when not visible to prevent layout issues */
	${(props) =>
		!props.$visible &&
		`
		visibility: hidden;
		pointer-events: none;
	`}

	${(props) => getTooltipVariantStyles(props.$variant)}
`;
