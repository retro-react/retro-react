import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';
import { BoxVariants } from './Box';

const getBoxVariantStyles = (variant: BoxVariants) => {
	// Raised 3D appearance - like a button or toolbar
	const raisedStyles = css`
		background: ${WIN31_BUTTON_FACE};
		border: 2px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
	`;

	// Sunken appearance - like text areas or content wells
	const sunkenStyles = css`
		background: ${WIN31_BUTTON_FACE};
		border: 2px solid;
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15);
	`;

	// Flat appearance - simple border only
	const flatStyles = css`
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid ${WIN31_BUTTON_SHADOW};
		box-shadow: none;
	`;

	// Panel appearance - classic Windows face color background
	const panelStyles = css`
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid ${WIN31_BUTTON_SHADOW};
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	`;

	switch (variant) {
		case 'raised':
			return raisedStyles;
		case 'sunken':
			return sunkenStyles;
		case 'flat':
			return flatStyles;
		case 'panel':
			return panelStyles;
		default:
			return panelStyles;
	}
};

export const Box = styled.div<{
	$variant: BoxVariants;
}>`
	font-family: ${SYSTEM_FONT};
	box-sizing: border-box;
	position: relative;
	padding: 8px;
	border-radius: 0; /* Sharp corners for authentic retro look */
	color: ${VGA_BLACK};
	font-size: 11px;
	font-weight: normal;

	/* Remove modern styling */
	text-shadow: none;
	outline: none;

	${(props) => getBoxVariantStyles(props.$variant)}
`;
