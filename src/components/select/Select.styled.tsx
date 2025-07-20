import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT, TERMINAL_FONT } from '@src/constants/fonts';
import { SelectSizes, SelectVariants } from './Select';

const sizeStyles = {
	small: { fontSize: FONT_SIZES.TINY, padding: '2px 4px', height: '20px' },
	medium: { fontSize: FONT_SIZES.NORMAL, padding: '2px 6px', height: '24px' },
	large: { fontSize: FONT_SIZES.MEDIUM, padding: '4px 8px', height: '28px' },
};

const getSelectVariantStyles = (variant: SelectVariants) => {
	// Classic sunken dialog select (Windows 95/98 style) - Deep inset appearance
	const classicStyles = css`
		border: 2px solid;
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		background: ${VGA_WHITE};
		box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15);
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};

		/* Add dropdown arrow */
		background-image: linear-gradient(45deg, transparent 50%, ${VGA_BLACK} 50%),
			linear-gradient(135deg, ${VGA_BLACK} 50%, transparent 50%);
		background-position: calc(100% - 10px) calc(50% - 2px),
			calc(100% - 6px) calc(50% - 2px);
		background-size: 4px 4px, 4px 4px;
		background-repeat: no-repeat;

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

	// Raised button-style select - Prominent 3D appearance
	const filledStyles = css`
		border: 2px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		background: ${WIN31_BUTTON_FACE};
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

		/* Add dropdown arrow */
		background-image: linear-gradient(45deg, transparent 50%, ${VGA_BLACK} 50%),
			linear-gradient(135deg, ${VGA_BLACK} 50%, transparent 50%);
		background-position: calc(100% - 10px) calc(50% - 2px),
			calc(100% - 6px) calc(50% - 2px);
		background-size: 4px 4px, 4px 4px;
		background-repeat: no-repeat;

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
		box-shadow: none;

		/* Add dropdown arrow */
		background-image: linear-gradient(45deg, transparent 50%, ${VGA_BLACK} 50%),
			linear-gradient(135deg, ${VGA_BLACK} 50%, transparent 50%);
		background-position: calc(100% - 10px) calc(50% - 2px),
			calc(100% - 6px) calc(50% - 2px);
		background-size: 4px 4px, 4px 4px;
		background-repeat: no-repeat;

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

		/* Add dropdown arrow */
		background-image: linear-gradient(45deg, transparent 50%, #90ee90 50%),
			linear-gradient(135deg, #90ee90 50%, transparent 50%);
		background-position: calc(100% - 10px) calc(50% - 2px),
			calc(100% - 6px) calc(50% - 2px);
		background-size: 4px 4px, 4px 4px;
		background-repeat: no-repeat;

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

		/* Terminal option styling */
		option {
			background: #1a1a1a;
			color: #90ee90;
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

export const SelectContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	font-family: ${SYSTEM_FONT};
`;

export const Select = styled.select<{
	$variant: SelectVariants;
	$size: SelectSizes;
	$fullWidth?: boolean;
}>`
	width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
	min-width: ${(props) => (props.$size === 'small' ? '150px' : '200px')};
	font-size: ${(props) => sizeStyles[props.$size].fontSize};
	padding: ${(props) => sizeStyles[props.$size].padding};
	height: ${(props) => sizeStyles[props.$size].height};
	border-radius: 0;
	outline: none;
	cursor: pointer;
	padding-right: 20px;

	/* Remove modern styling */
	-webkit-appearance: none;
	appearance: none;

	${(props) => getSelectVariantStyles(props.$variant)}

	/* Style option elements */
	option {
		font-family: ${SYSTEM_FONT};
		background: ${VGA_WHITE};
		color: ${VGA_BLACK};
		padding: 2px 6px;
	}
`;

export const ClearButton = styled.button`
	position: absolute;
	right: 22px;
	top: 50%;
	transform: translateY(-50%);
	width: 16px;
	height: 16px;
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

	&::before {
		content: '×';
		font-size: 12px;
		line-height: 1;
	}

	&:active {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		background: ${WIN31_BUTTON_FACE};
	}

	&:disabled {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}
`;

export const SelectWrapper = styled.div<{
	$variant: SelectVariants;
}>`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	font-family: ${SYSTEM_FONT};
`;

export const Label = styled.label<{
	$variant: SelectVariants;
	$size: SelectSizes;
	$disabled: boolean;
}>`
	font-family: ${({ $variant }) =>
		$variant === 'terminal' ? TERMINAL_FONT : SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};
	color: ${({ $variant }) => ($variant === 'terminal' ? '#90ee90' : VGA_BLACK)};
	margin-bottom: 2px;
	display: block;
	font-weight: normal;

	${({ $variant }) =>
		$variant === 'terminal' &&
		css`
			text-shadow: 0 0 8px #90ee90;
		`}
`;

export const Error = styled.span`
	color: #ff0000;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	margin-top: 2px;
`;
