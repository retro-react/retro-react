import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT, TERMINAL_FONT } from '@src/constants/fonts';
import { PasswordInputSizes, PasswordInputVariants } from './PasswordInput';

const sizeStyles = {
	small: { fontSize: FONT_SIZES.TINY, padding: '2px 4px', height: '20px' },
	medium: { fontSize: FONT_SIZES.NORMAL, padding: '2px 6px', height: '24px' },
	large: { fontSize: FONT_SIZES.MEDIUM, padding: '4px 8px', height: '28px' },
};

const getPasswordInputVariantStyles = (variant: PasswordInputVariants) => {
	// Classic sunken dialog input (Windows 95/98 style) - Deep inset appearance
	const classicStyles = css`
		border: 2px solid;
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		background: ${VGA_WHITE};
		box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15);
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
			border-color: ${VGA_BLACK} ${WIN31_BUTTON_HIGHLIGHT}
				${WIN31_BUTTON_HIGHLIGHT} ${VGA_BLACK};
			box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
		}

		&:disabled {
			background: ${WIN31_BUTTON_FACE};
			color: ${WIN31_BUTTON_SHADOW};
			cursor: not-allowed;
			box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
		}
	`;

	// Raised button-style input - Prominent 3D appearance
	const filledStyles = css`
		border: 2px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		background: ${WIN31_BUTTON_FACE};
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};
		border-radius: 0;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

		&::placeholder {
			color: ${WIN31_BUTTON_SHADOW};
			font-style: normal;
		}

		&:focus {
			outline: 1px dotted ${VGA_BLACK};
			outline-offset: -3px;
			background: ${VGA_WHITE};
			border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
				${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
			box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
		}

		&:active {
			border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
				${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
			box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15);
		}

		&:disabled {
			background: ${WIN31_BUTTON_FACE};
			color: ${WIN31_BUTTON_SHADOW};
			cursor: not-allowed;
			box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
		}
	`;

	// Flat outlined style - Simple, clean appearance
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

	// Terminal style - Subtle retro computer aesthetic
	const terminalStyles = css`
		background: #1a1a1a;
		color: #90ee90;
		font-family: ${TERMINAL_FONT};
		border: 1px solid #333;
		letter-spacing: 0.02em;
		box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);

		&::placeholder {
			color: rgba(144, 238, 144, 0.4);
			font-style: normal;
		}

		&:focus {
			outline: none;
			border-color: #555;
			box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
				0 0 2px rgba(144, 238, 144, 0.3);
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
	/* Base styles */
	border-radius: 0; /* Sharp corners like classic Windows */
	font-family: ${({ $variant }) =>
		$variant === 'terminal' ? TERMINAL_FONT : SYSTEM_FONT};
	transition: none; /* Remove modern transitions for authentic feel */
	outline: none;
	border: none;

	/* Remove modern input styling */
	-webkit-appearance: none;
	appearance: none;

	${(props) => getPasswordInputVariantStyles(props.$variant)}

	/* Size styles - consistent with input */
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
			padding-right: 24px; /* Space for toggle button */
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
	background: ${WIN31_BUTTON_FACE};
	border: 1px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	color: ${VGA_BLACK};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border-radius: 0;

	/* Terminal variant adjustments */
	${(props) =>
		props.$variant === 'terminal' &&
		css`
			background: #333;
			border-color: #555 #222 #222 #555;
			color: #90ee90;
		`}

	&:active {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		background: ${alterColorEnhanced(WIN31_BUTTON_FACE, -10)};
	}

	&:disabled {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;

		&:active {
			border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
				${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
			background: ${WIN31_BUTTON_FACE};
		}
	}
`;
