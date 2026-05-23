import styled from '@emotion/styled';
import { sunken } from '../../constants/bevels';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';

export const RadioGroup = styled.fieldset`
	border: none;
	padding: 0;
	margin: 0;

	display: flex;
	flex-direction: column;
	gap: 4px;

	font-family: ${SYSTEM_FONT};
`;

export const Radio = styled.input`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	outline: none;

	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 13px;
	width: 13px;

	border-radius: 50%;
	cursor: pointer;
	padding: 0;

	background: ${WIN31_BUTTON_FACE};
	${sunken}

	transition: none;

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

	&:active:not([disabled]) {
		transform: translate(0.5px, 0.5px);
	}

	&:disabled {
		cursor: not-allowed;
		background: ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW};

		&::after {
			background-color: ${WIN31_BUTTON_SHADOW};
		}
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: 2px;
	}
`;

export const RadioWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;

	cursor: pointer;
	line-height: 1;
`;

export const RadioLabel = styled.label`
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	color: ${VGA_BLACK};
	cursor: pointer;
	line-height: 1.2;

	input:disabled + & {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}
`;
