import styled from '@emotion/styled';
import { Flex } from 'theme-ui';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { WHITE } from '@src/constants/colors';
import type { CheckboxColor } from './Checkbox';

const encodeSvgColor = (color: string) => `%23${color.substring(1)}`;

export const Checkbox = styled.input<{
	$color: CheckboxColor;
}>`
	/* Reset */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin: 0;
	border: none;
	outline: none;

	/* Custom */
	position: relative;
	height: 1.25rem; /* 20px */
	width: 1.25rem; /* 20px */
	cursor: pointer;
	background-color: ${(props) =>
		alterColorEnhanced(getColorScheme(props.$color, props.theme), -40)};

	/* A sharper, more "8-bit" shadow for the retro feel */
	box-shadow: inset -2px -2px 0 0
			${(props) =>
				alterColorEnhanced(getColorScheme(props.$color, props.theme), -20)},
		inset 2px 2px 0 0
			${(props) =>
				alterColorEnhanced(getColorScheme(props.$color, props.theme), 20)};

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 1rem; /* 16px */
		height: 1rem; /* 16px */
		opacity: 0;
		transition: opacity 0.1s ease-in-out;
	}

	/* --- Checked State --- */
	&:checked::before {
		opacity: 1;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox="0 0 16 16" fill="${(
			props,
		) =>
			encodeSvgColor(
				WHITE,
			)}"%3E%3Cpath d="M6.61,11.72,3.35,8.47,2,9.82l4.61,4.61L18,3.06,16.65,1.71Z"/%3E%3C/svg%3E');
	}

	/* --- Indeterminate State --- */
	&:indeterminate::before {
		opacity: 1;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox="0 0 16 16" fill="${(
			props,
		) => encodeSvgColor(WHITE)}"%3E%3Cpath d="M2 8h12v2H2z"/%3E%3C/svg%3E');
	}

	/* --- Hover State --- */
	&:hover:not([disabled]) {
		/* Slightly lighten the box on hover for better feedback */
		background-color: ${(props) =>
			alterColorEnhanced(getColorScheme(props.$color, props.theme), -20)};
	}

	/* --- Active (Click) State --- */
	&:active:not([disabled]) {
		/* "Press-in" effect by reversing the shadow */
		box-shadow: inset 2px 2px 0 0
				${(props) =>
					alterColorEnhanced(getColorScheme(props.$color, props.theme), -20)},
			inset -2px -2px 0 0
				${(props) =>
					alterColorEnhanced(getColorScheme(props.$color, props.theme), 20)};
	}

	/* --- Focus State for Accessibility --- */
	&:focus-visible {
		outline: 2px dotted ${(props) => getColorScheme(props.$color, props.theme)};
		outline-offset: 2px;
	}

	/* --- Disabled State --- */
	&:disabled {
		cursor: not-allowed;
		filter: grayscale(80%);
		opacity: 0.6;
	}
`;

export const CheckboxWrapper = styled(Flex)`
	align-items: center;
`;

export const CheckboxLabel = styled.label<{
	$color: CheckboxColor;
}>`
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	gap: 0.5rem; /* spacing between checkbox and label text */
	color: ${(props) => getColorScheme(props.$color, props.theme)};

	/* CRITICAL UX FIX: Do NOT show the checkmark on hover. */
	/* The hover effect is now handled on the Checkbox itself. */

	&:active ${Checkbox} {
		/* Also trigger the "press-in" effect when the label is clicked */
		box-shadow: inset 2px 2px 0 0
				${(props) =>
					alterColorEnhanced(getColorScheme(props.$color, props.theme), -20)},
			inset -2px -2px 0 0
				${(props) =>
					alterColorEnhanced(getColorScheme(props.$color, props.theme), 20)};
	}
`;
