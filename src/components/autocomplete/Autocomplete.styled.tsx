import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '@src/constants/fonts';
import { AutocompleteSizes, AutocompleteVariants } from './Autocomplete';

const sizeStyles = {
	small: { fontSize: FONT_SIZES.TINY, padding: '2px 4px', height: '20px' },
	medium: { fontSize: FONT_SIZES.NORMAL, padding: '2px 6px', height: '24px' },
};

// Consistent styling with password input and input components
const getAutocompleteVariantStyles = (
	$variant: AutocompleteVariants,
	$color: string,
) => {
	// Authentic Windows 3.1/95 sunken style (consistent across all inputs)
	const retroInsetStyles = css`
		border: 2px solid;
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		background: ${VGA_WHITE};
		box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};

		/* Remove modern styling */
		border-radius: 0;
		transition: none;
		-webkit-appearance: none;
		appearance: none;

		&::placeholder {
			color: ${WIN31_BUTTON_SHADOW};
			font-style: normal;
		}

		&:focus {
			outline: 1px dotted ${VGA_BLACK};
			outline-offset: -3px;
			border-color: ${$color !== 'greyscale' ? $color : WIN31_BUTTON_SHADOW}
				${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT}
				${$color !== 'greyscale' ? $color : WIN31_BUTTON_SHADOW};
		}

		&:disabled {
			background: ${WIN31_BUTTON_FACE};
			color: ${WIN31_BUTTON_SHADOW};
			border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
				${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
			cursor: not-allowed;
		}
	`;

	// All variants use the same consistent styling
	return retroInsetStyles;
};

export const AutocompleteContainer = styled.div<{
	$fullWidth?: boolean;
	$size?: AutocompleteSizes;
	sx?: any; // Theme UI compatibility
}>`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
	font-family: ${SYSTEM_FONT};

	/* Apply Theme UI sx prop if provided */
	${(props) => props.sx}
`;

export const AutocompleteInput = styled.input<{
	$variant: AutocompleteVariants;
	$color: ComponentColors | 'greyscale';
	$size: AutocompleteSizes;
	$fullWidth?: boolean;
	$rounded?: boolean;
}>`
	width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
	min-width: ${(props) => (props.$size === 'small' ? '150px' : '200px')};
	font-size: ${(props) => sizeStyles[props.$size].fontSize};
	padding: ${(props) => sizeStyles[props.$size].padding};
	height: ${(props) => sizeStyles[props.$size].height};
	font-family: ${SYSTEM_FONT};
	outline: none;

	${(props) =>
		getAutocompleteVariantStyles(
			props.$variant,
			props.$color === 'greyscale'
				? WIN31_BUTTON_SHADOW
				: getColorScheme(props.$color, props.theme),
		)}
`;

export const AutocompleteDropdown = styled.div<{
	$variant?: AutocompleteVariants;
	$color: ComponentColors | 'greyscale';
	$open?: boolean;
}>`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	z-index: 1000;
	background: ${VGA_WHITE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	border-top: 1px solid ${WIN31_BUTTON_SHADOW};
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	max-height: 200px;
	overflow-y: auto;
	display: ${(props) => (props.$open === false ? 'none' : 'block')};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};

	/* Retro scrollbar */
	::-webkit-scrollbar {
		width: 16px;
		background: ${WIN31_BUTTON_FACE};
	}

	::-webkit-scrollbar-track {
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid ${WIN31_BUTTON_SHADOW};
	}

	::-webkit-scrollbar-thumb {
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	}

	::-webkit-scrollbar-button {
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		height: 16px;
	}
`;

export const AutocompleteOption = styled.div<{
	$selected: boolean;
	$highlighted: boolean;
	$color: ComponentColors | 'greyscale';
}>`
	padding: 4px 6px;
	cursor: pointer;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};
	color: ${VGA_BLACK};
	background: ${VGA_WHITE};
	border: none;

	/* Authentic Windows selection styling */
	${(props) =>
		props.$highlighted &&
		css`
			background: ${props.$color === 'greyscale'
				? WIN31_BUTTON_SHADOW
				: getColorScheme(props.$color, props.theme)};
			color: ${VGA_WHITE};
		`}

	${(props) =>
		props.$selected &&
		css`
			background: ${props.$color === 'greyscale'
				? WIN31_BUTTON_SHADOW
				: getColorScheme(props.$color, props.theme)};
			color: ${VGA_WHITE};
			font-weight: bold;
		`}

	&:hover {
		background: ${(props) =>
			props.$color === 'greyscale'
				? WIN31_BUTTON_FACE
				: getColorScheme(props.$color, props.theme)};
		color: ${VGA_WHITE};
	}
`;

export const AutocompleteNoOptions = styled.div`
	padding: 8px 6px;
	color: ${WIN31_BUTTON_SHADOW};
	font-style: italic;
	text-align: center;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};
`;

export const AutocompleteLabel = styled.label<{
	$required: boolean;
}>`
	display: block;
	margin-bottom: 2px;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};
	font-weight: normal;
	color: ${VGA_BLACK};

	${(props) =>
		props.$required &&
		css`
			&::after {
				content: ' *';
				color: #ff0000;
			}
		`}
`;

export const AutocompleteHelperText = styled.div<{
	$error: boolean;
}>`
	margin-top: 2px;
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.TINY};
	color: ${WIN31_BUTTON_SHADOW};

	${(props) =>
		props.$error &&
		css`
			color: #ff0000;
		`}
`;

// Legacy component names for compatibility
export const AutocompleteWrapper = AutocompleteContainer;
export const SuggestionsList = AutocompleteDropdown;
export const SuggestionItem = AutocompleteOption;

export const ClearButton = styled.button`
	position: absolute;
	right: 4px;
	top: 50%;
	transform: translateY(-50%);
	background: ${WIN31_BUTTON_FACE};
	border: 1px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	width: 16px;
	height: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: ${FONT_SIZES.TINY};
	line-height: 1;
	padding: 0;

	&:active {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		transform: translateY(-50%) translate(1px, 1px);
	}

	&:disabled {
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}
`;
