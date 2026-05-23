import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { groove, raised, sunken } from '../../constants/bevels';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { SYSTEM_FONT } from '../../constants/fonts';
import { BoxVariants } from './Box';

const getBoxVariantStyles = (variant: BoxVariants) => {
	const raisedStyles = css`
		background: ${WIN31_BUTTON_FACE};
		${raised}
	`;

	const sunkenStyles = css`
		background: ${WIN31_BUTTON_FACE};
		${sunken}
	`;

	const flatStyles = css`
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid ${WIN31_BUTTON_SHADOW};
		box-shadow: none;
	`;

	const panelStyles = css`
		background: ${WIN31_BUTTON_FACE};
		${groove}
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
	border-radius: 0;
	color: ${VGA_BLACK};
	font-size: 11px;
	font-weight: normal;

	text-shadow: none;
	outline: none;

	${(props) => getBoxVariantStyles(props.$variant)}
`;
