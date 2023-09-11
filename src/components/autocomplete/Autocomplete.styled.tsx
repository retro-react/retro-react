import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, SHADE_2, SHADE_4, SHADE_6, WHITE } from '@src/constants/colors';
import { AutocompleteSizes, AutocompleteVariants } from './Autocomplete';

const sizeStyles = {
	small: '1rem',
	medium: '1.2rem',
};

const getAutocompleteVariantStyles = (
	$variant: AutocompleteVariants,
	$color: string,
) => {
	const filledStyles = css`
		background-color: ${$color};
		background-image: linear-gradient(
				${rgba($color, 0.8)},
				${rgba($color, 0.8)}
			),
			url(${getPatternScheme('stripes')});
		box-shadow: inset 1px 1px 2px ${BLACK},
			inset -1px -1px 2px ${rgba(WHITE, 0.45)};
		filter: contrast(130%) brightness(100%);

		color: ${WHITE};
		font-weight: normal;
		text-shadow: 1px 1px 2px ${BLACK};

		&::placeholder {
			color: ${rgba(WHITE, 0.65)};
			text-shadow: 1px 1px 2px ${BLACK};
			user-select: none;
		}
	`;

	switch ($variant) {
		case 'outlined':
			return css`
				background: ${WHITE};
				box-shadow: inset 1px 1px 1px ${$color} inset -1px -1px 1px ${$color},
					2px 2px 2px ${$color}, -2px -2px 2px ${$color};
				border-color: ${$color};

				color: ${BLACK};
				&::placeholder {
					color: ${$color};
					text-shadow: 1px 1px 1px ${WHITE};
					user-select: none;
				}
			`;
		case 'filled':
			if ($color === SHADE_4) {
				return css`
					background: linear-gradient(${rgba(BLACK, 0.8)}, ${rgba(BLACK, 0.8)}),
						url(${getPatternScheme('stripes')});
					box-shadow: inset 1px 1px 2px ${SHADE_4},
						inset -1px -1px 2px ${SHADE_6};
					filter: contrast(130%) brightness(100%);

					color: ${SHADE_2};
					font-weight: normal;
					text-shadow: 0 0 2px ${BLACK};

					&::placeholder {
						color: ${rgba(WHITE, 0.45)};
						text-shadow: 1px 1px 2px ${BLACK};
					}
				`;
			} else {
				return filledStyles;
			}
		default:
			return filledStyles;
	}
};

export const AutocompleteWrapper = styled.div`
	position: relative;
`;

export const AutocompleteInput = styled.input<{
	$variant: AutocompleteVariants;
	$size: AutocompleteSizes;
	$color: ComponentColors | 'greyscale';
	$rounded: boolean;
}>`
	padding: 0.5rem 1rem;
	box-sizing: border-box;
	border-radius: 0.5rem;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;

	${({ $color = 'primary', $variant = 'filled', theme }) =>
		getAutocompleteVariantStyles(
			$variant,
			$color === 'greyscale' ? SHADE_4 : getColorScheme($color, theme),
		)}

	${({ color, $variant }) =>
		$variant === 'filled' &&
		color === 'warn' &&
		`
    color: ${BLACK};
    text-shadow: 0 0 2px ${rgba(BLACK, 0.4)};

    &::placeholder {
      color: ${rgba(BLACK, 0.7)};
      text-shadow: 1px 1px 1px ${rgba(SHADE_4, 0.4)};
    }
  `}

  font-size: ${({ $size }) => sizeStyles[$size] || $size};
	width: 100%;

	${({ $rounded }) =>
		$rounded &&
		`
    border-radius: 1rem;
  `}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0.05rem 0.05rem
			${(props) =>
				rgba(
					props.$color === 'greyscale'
						? WHITE
						: getColorScheme(props.$color || 'primary', props.theme),
					0.6,
				)};
	}
`;

export const SuggestionsList = styled.ul<{
	$color: ComponentColors | 'greyscale';
}>`
	padding: 0;
	margin: 5px 0 0 0;
	border: 1px solid ${SHADE_4};
	border-radius: 0.5rem;
	background-color: ${({ $color, theme }) =>
		$color === 'greyscale' ? SHADE_4 : getColorScheme($color, theme)};
	box-shadow: 0 4px 6px ${rgba(BLACK, 0.1)};
	list-style-type: none;
	max-height: 150px;
	overflow-y: auto;
	color: ${WHITE};

	position: absolute;
	top: 100%;
	left: 0;
	box-sizing: border-box;
	width: 100%;
	z-index: 1000;

	li {
		padding: 0.5rem 1rem;
		transition: background-color 0.2s;

		&:hover {
			background-color: ${({ $color, theme }) =>
				$color === 'greyscale'
					? SHADE_2
					: alterColorEnhanced(getColorScheme($color, theme), 50)};
		}
	}

	.active-suggestion {
		background-color: ${({ $color, theme }) =>
			$color === 'greyscale'
				? SHADE_2
				: alterColorEnhanced(getColorScheme($color, theme), 70)};
		color: ${({ $color }) =>
			$color === 'greyscale' || $color === 'warn' ? BLACK : BLACK};
		font-weight: bold;
	}
`;

export const SuggestionItem = styled.li<{
	$color: ComponentColors | 'greyscale';
}>`
	cursor: pointer;

	&:hover {
		color: ${({ $color }) =>
			$color === 'greyscale' || $color === 'warn' ? BLACK : BLACK};
	}
`;

export const ClearButton = styled.button<{
	$icon: string;
	$color: ComponentColors | 'greyscale';
}>`
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	width: 1.5rem;
	height: 1.5rem;
	border: none;
	border-radius: 50%;
	cursor: pointer;

	mask: url(${({ $icon }) => $icon});
	background-color: ${({ $color, theme }) =>
		alterColorEnhanced(getColorScheme($color, theme), -80)};
`;
