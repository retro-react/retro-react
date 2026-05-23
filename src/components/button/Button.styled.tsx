import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	VGA_BLACK,
	VGA_BLUE,
	VGA_GREEN,
	VGA_WHITE,
	VGA_YELLOW,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { SYSTEM_FONT } from '../../constants/fonts';
import type { ButtonSize, ButtonVariant } from './Button';

const retroButtonPress = css`
	&:active:not(:disabled) {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		transform: translate(1px, 1px);
	}
`;

const getVariantStyles = (variant: ButtonVariant) => {
	switch (variant) {
		case 'primary':
			return css`
				background: ${VGA_BLUE};
				color: ${VGA_WHITE};
				border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
					${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};

				&:focus:not(:disabled) {
					outline: 1px dotted ${VGA_WHITE};
					outline-offset: -3px;
				}
			`;

		case 'secondary':
			return css`
				background: ${WIN31_BUTTON_FACE};
				color: ${VGA_BLACK};
				border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
					${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};

				&:focus:not(:disabled) {
					outline: 1px dotted ${VGA_BLACK};
					outline-offset: -3px;
				}
			`;

		case 'success':
			return css`
				background: ${VGA_GREEN};
				color: ${VGA_WHITE};
				border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
					${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};

				&:focus:not(:disabled) {
					outline: 1px dotted ${VGA_WHITE};
					outline-offset: -3px;
				}
			`;

		case 'warning':
			return css`
				background: ${VGA_YELLOW};
				color: ${VGA_BLACK};
				border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
					${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};

				&:focus:not(:disabled) {
					outline: 1px dotted ${VGA_BLACK};
					outline-offset: -3px;
				}
			`;

		case 'outline':
			return css`
				background: ${WIN31_BUTTON_FACE};
				color: ${VGA_BLUE};
				border-color: ${VGA_BLUE} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW}
					${VGA_BLUE};

				&:hover:not(:disabled) {
					background: ${VGA_BLUE};
					color: ${VGA_WHITE};
					border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
						${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
				}

				&:focus:not(:disabled) {
					outline: 1px dotted ${VGA_BLUE};
					outline-offset: -3px;
				}
			`;

		case 'flat':
		default:
			return css`
				background: transparent;
				color: ${VGA_BLUE};
				border-color: transparent transparent transparent transparent;

				&:hover:not(:disabled) {
					background: ${WIN31_BUTTON_FACE};
					border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
						${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
				}

				&:focus:not(:disabled) {
					outline: 1px dotted ${VGA_BLUE};
					outline-offset: -3px;
					background: ${WIN31_BUTTON_FACE};
					border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
						${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
				}
			`;
	}
};

export const Button = styled.button<{
	$size: ButtonSize;
	variant: ButtonVariant;
	$isButtonGroup?: boolean;
	$disableClickEffect?: boolean;
}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;

	min-width: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '60px';
			case 'large':
				return '100px';
			default:
				return '75px';
		}
	}};

	padding: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '1px 6px';
			case 'large':
				return '6px 16px';
			default:
				return '3px 12px';
		}
	}};

	height: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '20px';
			case 'large':
				return '28px';
			default:
				return '24px';
		}
	}};

	font-family: ${SYSTEM_FONT};
	font-size: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '10px';
			case 'large':
				return '12px';
			default:
				return '11px';
		}
	}};
	font-weight: normal;
	text-align: center;
	line-height: 1;

	border: 2px solid;
	border-radius: 0;
	cursor: pointer;

	box-shadow: none;
	transition: none;
	outline: none;
	text-decoration: none;
	user-select: none;

	${(props) => getVariantStyles(props.variant)}

	${(props) => !props.$disableClickEffect && retroButtonPress}

	&:disabled {
		cursor: not-allowed;
		color: ${WIN31_BUTTON_SHADOW};
		background: ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW};
		filter: none;
		transform: none;
	}

	${(props) =>
		props.$isButtonGroup &&
		css`
			border-radius: 0;

			& + & {
				border-left-width: 1px;
			}
		`}

	&[aria-busy='true'] {
		cursor: progress;
		position: relative;

		&::after {
			content: '...';
			position: absolute;
			right: 4px;
			animation: loading 1s infinite;
		}
	}

	@keyframes loading {
		0%,
		33% {
			opacity: 0;
		}
		34%,
		66% {
			opacity: 0.5;
		}
		67%,
		100% {
			opacity: 1;
		}
	}
`;
