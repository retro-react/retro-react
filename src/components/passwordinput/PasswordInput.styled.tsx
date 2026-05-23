import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { pressed, raised, sunken } from '../../constants/bevels';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT, TERMINAL_FONT } from '../../constants/fonts';
import { alterColorEnhanced } from '../../utils/alterColor';
import { PasswordInputSizes, PasswordInputVariants } from './PasswordInput';

const sizeStyles = {
	small: { fontSize: FONT_SIZES.SMALL, padding: '2px 4px', height: '22px' },
	medium: { fontSize: FONT_SIZES.NORMAL, padding: '2px 6px', height: '26px' },
	large: { fontSize: FONT_SIZES.MEDIUM, padding: '4px 8px', height: '30px' },
};

const getPasswordInputVariantStyles = (variant: PasswordInputVariants) => {
	const classicStyles = css`
		${sunken}
		background: ${VGA_WHITE};
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};
		border-radius: 0;

		&::placeholder {
			color: ${WIN31_BUTTON_SHADOW};
			font-style: normal;
		}

		&:focus {
			outline: 1px dotted ${VGA_BLACK};
			outline-offset: -3px;
		}

		&:disabled {
			background: ${WIN31_BUTTON_FACE};
			color: ${WIN31_BUTTON_SHADOW};
			cursor: not-allowed;
		}
	`;

	const filledStyles = css`
		${raised}
		background: ${WIN31_BUTTON_FACE};
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};
		border-radius: 0;

		&::placeholder {
			color: ${WIN31_BUTTON_SHADOW};
			font-style: normal;
		}

		&:focus {
			outline: 1px dotted ${VGA_BLACK};
			outline-offset: -3px;
			background: ${VGA_WHITE};
		}

		&:active {
			${pressed}
		}

		&:disabled {
			background: ${WIN31_BUTTON_FACE};
			color: ${WIN31_BUTTON_SHADOW};
			cursor: not-allowed;
		}
	`;

	const outlinedStyles = css`
		border: 2px solid ${WIN31_BUTTON_SHADOW};
		background: ${VGA_WHITE};
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};
		border-radius: 0;
		box-shadow: none;

		&::placeholder {
			color: ${WIN31_BUTTON_SHADOW};
			font-style: normal;
		}

		&:focus {
			outline: none;
			border: 2px solid ${VGA_BLACK};
			box-shadow: 0 0 0 1px ${VGA_BLACK};
		}

		&:disabled {
			background: ${WIN31_BUTTON_FACE};
			color: ${WIN31_BUTTON_SHADOW};
			border-color: ${WIN31_BUTTON_SHADOW};
			cursor: not-allowed;
		}
	`;

	const terminalStyles = css`
		${sunken}
		background: #1a1a1a;
		color: #90ee90;
		font-family: ${TERMINAL_FONT};
		letter-spacing: 0.02em;

		&::placeholder {
			color: rgba(144, 238, 144, 0.4);
			font-style: normal;
		}

		&:focus {
			outline: 1px dotted #90ee90;
			outline-offset: -3px;
		}

		&:disabled {
			background: #0f0f0f;
			color: #444;
			cursor: not-allowed;
		}
	`;

	switch (variant) {
		case 'classic':
			return classicStyles;
		case 'filled':
			return filledStyles;
		case 'outlined':
			return outlinedStyles;
		case 'terminal':
			return terminalStyles;
		default:
			return filledStyles;
	}
};

export const PasswordInputContainer = styled.div`
	position: relative;
	display: inline-flex;
	align-items: center;
	font-family: ${SYSTEM_FONT};
`;

export const PasswordInputField = styled.input<{
	$variant: PasswordInputVariants;
	$size: PasswordInputSizes;
}>`
	border-radius: 0;
	font-family: ${({ $variant }) =>
		$variant === 'terminal' ? TERMINAL_FONT : SYSTEM_FONT};
	transition: none;
	outline: none;
	border: none;

	-webkit-appearance: none;
	appearance: none;

	${(props) => getPasswordInputVariantStyles(props.$variant)}

	${(props) => {
		const size =
			typeof props.$size === 'string' && props.$size in sizeStyles
				? (props.$size as keyof typeof sizeStyles)
				: 'medium';
		return css`
			font-size: ${sizeStyles[size].fontSize};
			padding: ${sizeStyles[size].padding};
			height: ${sizeStyles[size].height};
			min-width: ${size === 'small' ? '150px' : '200px'};
			padding-right: 24px;
		`;
	}}
`;

export const PasswordToggleButton = styled.button<{
	$variant: PasswordInputVariants;
}>`
	position: absolute;
	right: 2px;
	top: 50%;
	transform: translateY(-50%);
	width: 18px;
	height: 18px;
	${raised}
	background: ${WIN31_BUTTON_FACE};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	color: ${VGA_BLACK};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border-radius: 0;

	${(props) =>
		props.$variant === 'terminal' &&
		css`
			background: #333;
			color: #90ee90;
		`}

	&:active {
		${pressed}
		background: ${alterColorEnhanced(WIN31_BUTTON_FACE, -10)};
	}

	&:disabled {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;

		&:active {
			${raised}
			background: ${WIN31_BUTTON_FACE};
		}
	}
`;
