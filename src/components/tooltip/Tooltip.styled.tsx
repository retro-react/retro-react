import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeUICSSObject } from 'theme-ui';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import { TooltipVariants } from './Tooltip';

interface TooltipContentProps {
	$visible: boolean;
	$variant: TooltipVariants;
	sx?: ThemeUICSSObject;
}

const getTooltipVariantStyles = (variant: TooltipVariants) => {
	const defaultStyles = css`
		background: #ffffe1;
		color: ${VGA_BLACK};
		border: 1px solid ${VGA_BLACK};
	`;

	const helpStyles = css`
		background: #e1f5ff;
		color: ${VGA_BLACK};
		border: 1px solid #0066cc;
	`;

	const warningStyles = css`
		background: #ffe1e1;
		color: ${VGA_BLACK};
		border: 1px solid #cc0000;
	`;

	const infoStyles = css`
		background: ${WIN31_BUTTON_FACE};
		color: ${VGA_BLACK};
		border: 2px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
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
	border-radius: 0;
	width: max-content;
	max-width: 200px;
	box-sizing: border-box;
	word-wrap: break-word;
	text-shadow: none;
	pointer-events: none;

	opacity: ${(props) => (props.$visible ? 1 : 0)};

	${(props) =>
		!props.$visible &&
		`
		visibility: hidden;
		pointer-events: none;
	`}

	${(props) => getTooltipVariantStyles(props.$variant)}
`;
