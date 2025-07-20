import styled from '@emotion/styled';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';

export const RadioGroup = styled.fieldset`
	border: none;
	padding: 0;
	margin: 0;

	display: flex;
	flex-direction: column;
	gap: 4px;

	/* Authentic WIN31 fieldset styling */
	font-family: ${SYSTEM_FONT};
`;

export const Radio = styled.input`
	/* Reset default radio button appearance */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	outline: none;

	/* Authentic WIN31 radio button styling */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 13px;
	width: 13px;

	/* Perfect circle with WIN31 inset styling */
	border-radius: 50%;
	cursor: pointer;
	padding: 0;

	/* Authentic inset border like WIN31 radio buttons */
	background: ${WIN31_BUTTON_FACE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};

	/* Remove modern effects */
	transition: none;
	box-shadow: none;

	/* Authentic selected state - black dot in center */
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: ${VGA_BLACK};
		transform: translate(-50%, -50%);
		opacity: 0;
	}

	&:checked::after {
		opacity: 1;
	}

	/* Minimal hover effect */
	&:hover:not([disabled]) {
		filter: brightness(1.02);
	}

	/* No active effect - keep authentic */
	&:active:not([disabled]) {
		/* Slight press effect */
		transform: translate(0.5px, 0.5px);
	}

	/* Disabled state */
	&:disabled {
		cursor: not-allowed;
		background: ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW};

		&::after {
			background-color: ${WIN31_BUTTON_SHADOW};
		}
	}

	/* Authentic focus state with dotted outline */
	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: 2px;
	}
`;

export const RadioWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;

	/* Better click target */
	cursor: pointer;

	/* Ensure proper alignment */
	line-height: 1;
`;

export const RadioLabel = styled.label`
	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	color: ${VGA_BLACK};
	cursor: pointer;

	/* Ensure text aligns properly with radio button */
	line-height: 1.2;

	/* Disabled state */
	input:disabled + & {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}
`;
