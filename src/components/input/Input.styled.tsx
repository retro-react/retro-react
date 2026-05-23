import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { pressed, raised, sunken } from '../../constants/bevels';
import {
	CRT_GREEN,
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT, TERMINAL_FONT } from '../../constants/fonts';
import { InputSizes, InputVariants } from './Input';

const sizeStyles = {
	small: { fontSize: FONT_SIZES.SMALL, padding: '2px 4px', height: '22px' },
	medium: { fontSize: FONT_SIZES.NORMAL, padding: '2px 6px', height: '26px' },
	large: { fontSize: FONT_SIZES.MEDIUM, padding: '4px 8px', height: '30px' },
};

const getInputVariantStyles = (variant: InputVariants) => {
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
			return classicStyles;
	}
};

export const Input = styled.input<{
	$variant: InputVariants;
	$size: InputSizes;
	$multiline: boolean;
}>`
	border-radius: 0;
	font-family: ${({ $variant }) =>
		$variant === 'terminal' ? TERMINAL_FONT : SYSTEM_FONT};
	transition: none;
	outline: none;
	border: none;

	${(props) => getInputVariantStyles(props.$variant)}

	${(props) => {
		const isKnownSize =
			typeof props.$size === 'string' && props.$size in sizeStyles;
		if (isKnownSize) {
			const size = props.$size as keyof typeof sizeStyles;
			return css`
				font-size: ${sizeStyles[size].fontSize};
				padding: ${sizeStyles[size].padding};
				height: ${sizeStyles[size].height};
				min-width: ${size === 'small' ? '150px' : '200px'};
			`;
		}
		return css`
			font-size: ${props.$size};
			padding: 2px 6px;
		`;
	}}

	${(props) =>
		props.$multiline &&
		css`
			resize: vertical;
			min-height: 60px;
			line-height: 1.4;
		`}

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

	${(props) =>
		props.$variant === 'terminal' &&
		css`
			background: ${VGA_BLACK};
			padding: 4px;
			border: 4px solid #333;
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
