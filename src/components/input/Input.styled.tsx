import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	CRT_GREEN,
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT, TERMINAL_FONT } from '@src/constants/fonts';
import { InputSizes, InputVariants } from './Input';

const sizeStyles = {
	small: { fontSize: FONT_SIZES.TINY, padding: '2px 4px', height: '20px' },
	medium: { fontSize: FONT_SIZES.NORMAL, padding: '2px 6px', height: '24px' },
	large: { fontSize: FONT_SIZES.MEDIUM, padding: '4px 8px', height: '28px' },
};

const getInputVariantStyles = (variant: InputVariants) => {
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
			return classicStyles;
	}
};

export const Input = styled.input<{
	$variant: InputVariants;
	$size: InputSizes;
	$multiline: boolean;
}>`
	/* Base styles */
	border-radius: 0; /* Sharp corners like classic Windows */
	font-family: ${({ $variant }) =>
		$variant === 'terminal' ? TERMINAL_FONT : SYSTEM_FONT};
	transition: none; /* Remove modern transitions for authentic feel */
	outline: none;
	border: none;

	${(props) => getInputVariantStyles(props.$variant)}

	/* Size styles - consistent with password input */
	${(props) => css`
		font-size: ${sizeStyles[props.$size].fontSize};
		padding: ${sizeStyles[props.$size].padding};
		height: ${sizeStyles[props.$size].height};
		min-width: ${props.$size === 'small' ? '150px' : '200px'};
	`}

	/* Multi-line textarea specific */
	${(props) =>
		props.$multiline &&
		css`
			resize: vertical;
			min-height: 60px;
			line-height: 1.4;
		`}

	/* Disabled state */
	&:disabled {
		background: ${WIN31_BUTTON_FACE};
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}
`;

export const InputContainer = styled.div<{
	$variant: InputVariants;
	$fullWidth: boolean;
}>`
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
	position: relative;

	/* Terminal variant gets special container styling */
	${(props) =>
		props.$variant === 'terminal' &&
		css`
			background: ${VGA_BLACK};
			padding: 4px;
			border: 4px solid #333;
			box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6);
		`}
`;

export const InputLabel = styled.label<{
	$variant: InputVariants;
	$required: boolean;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};
	font-weight: normal;
	color: ${VGA_BLACK};
	margin-bottom: 2px;
	display: block;

	${(props) =>
		props.$variant === 'terminal' &&
		css`
			color: ${CRT_GREEN};
			font-family: ${TERMINAL_FONT};
			text-shadow: 0 0 8px ${CRT_GREEN};
		`}

	${(props) =>
		props.$required &&
		css`
			&::after {
				content: ' *';
				color: #ff0000;
			}
		`}
`;

export const InputHelperText = styled.div<{
	$variant: InputVariants;
	$error: boolean;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	margin-top: 2px;
	color: ${WIN31_BUTTON_SHADOW};

	${(props) =>
		props.$error &&
		css`
			color: #ff0000;
		`}

	${(props) =>
		props.$variant === 'terminal' &&
		css`
			color: ${CRT_GREEN};
			font-family: ${TERMINAL_FONT};
			opacity: 0.7;
		`}
`;

export const InputIcon = styled.div<{
	$position: 'left' | 'right';
	$variant: InputVariants;
}>`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	${(props) => (props.$position === 'left' ? 'left: 8px;' : 'right: 8px;')}
	display: flex;
	align-items: center;
	pointer-events: none;
	color: ${WIN31_BUTTON_SHADOW};

	${(props) =>
		props.$variant === 'terminal' &&
		css`
			color: ${CRT_GREEN};
			filter: drop-shadow(0 0 4px ${CRT_GREEN});
		`}
`;
