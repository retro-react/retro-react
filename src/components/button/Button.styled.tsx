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
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';
import type { ButtonSize, ButtonVariant } from './Button';

// Authentic retro button press effect
const retroButtonPress = css`
	&:active:not(:disabled) {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		transform: translate(1px, 1px);
		/* Slight darkening effect on press */
		filter: brightness(0.95);
	}
`;

// Get variant-specific styling
const getVariantStyles = (variant: ButtonVariant) => {
	switch (variant) {
		case 'primary':
			return css`
				background: ${VGA_BLUE};
				color: ${VGA_WHITE};
				border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
					${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};

				&:hover:not(:disabled) {
					/* Subtle brightness increase on hover */
					filter: brightness(1.1);
				}

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

				&:hover:not(:disabled) {
					/* Subtle brightness increase on hover */
					filter: brightness(1.05);
				}

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

				&:hover:not(:disabled) {
					filter: brightness(1.1);
				}

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

				&:hover:not(:disabled) {
					filter: brightness(1.1);
				}

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
	/* Base authentic WIN31 button styling */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;

	/* Authentic Windows button dimensions and spacing */
	min-width: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '60px';
			case 'large':
				return '100px';
			default:
				return '75px'; // medium
		}
	}};

	padding: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '1px 6px';
			case 'large':
				return '6px 16px';
			default:
				return '3px 12px'; // medium - authentic WIN31 spacing
		}
	}};

	height: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '18px';
			case 'large':
				return '28px';
			default:
				return '23px'; // medium - standard WIN31 button height
		}
	}};

	/* Authentic WIN31 typography */
	font-family: ${SYSTEM_FONT};
	font-size: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '10px';
			case 'large':
				return '12px';
			default:
				return '11px'; // Standard WIN31 button text size
		}
	}};
	font-weight: normal;
	text-align: center;
	line-height: 1;

	/* Authentic WIN31 border style */
	border: 2px solid;
	border-radius: 0; /* Sharp corners like authentic Windows */
	cursor: pointer;

	/* Remove all modern effects */
	box-shadow: none;
	transition: none;
	outline: none;
	text-decoration: none;
	user-select: none;

	/* Apply variant-specific styles */
	${(props) => getVariantStyles(props.variant)}

	/* Authentic button press effect */
	${(props) => !props.$disableClickEffect && retroButtonPress}
	
	/* Disabled state - authentic WIN31 grayed out look */
	&:disabled {
		cursor: not-allowed;
		color: ${WIN31_BUTTON_SHADOW};
		background: ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW};
		filter: none;
		transform: none;
	}

	/* ButtonGroup integration - seamless borders */
	${(props) =>
		props.$isButtonGroup &&
		css`
			border-radius: 0;

			/* Remove right border for group effect except last child */
			& + & {
				border-left-width: 1px;
			}
		`}

	/* Loading state */
	&[aria-busy='true'] {
		cursor: progress;
		position: relative;

		/* Simple loading indicator - no fancy spinners in retro UI */
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

	/* Responsive considerations */
	@media (max-width: 480px) {
		min-width: ${(props) => {
			switch (props.$size) {
				case 'small':
					return '50px';
				case 'large':
					return '80px';
				default:
					return '65px';
			}
		}};

		padding: ${(props) => {
			switch (props.$size) {
				case 'small':
					return '1px 4px';
				case 'large':
					return '4px 12px';
				default:
					return '2px 8px';
			}
		}};
	}
`;
