import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, SHADE_2, SHADE_4, SHADE_6, WHITE } from '@src/constants/colors';
import { InputSizes, InputVariants } from './Input';

const sizeStyles = {
	small: '1rem',
	medium: '1.2rem',
};

const getInputVariantStyles = (variant: InputVariants, color: string) => {
	const filledStyles = css`
		background-color: ${color};
		background-image: linear-gradient(${rgba(color, 0.8)}, ${rgba(color, 0.8)}),
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

	switch (variant) {
		case 'outlined':
			return css`
				background: ${WHITE};
				box-shadow: inset 1px 1px 1px ${color} inset -1px -1px 1px ${color},
					2px 2px 2px ${color}, -2px -2px 2px ${color};
				border-color: ${color};

				color: ${BLACK};
				&::placeholder {
					color: ${color};
					text-shadow: 1px 1px 1px ${WHITE};
					user-select: none;
				}
			`;
		case 'filled':
			if (color === SHADE_4) {
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

export const Input = styled.input<{
	$variant: InputVariants;
	$color: ComponentColors | 'greyscale';
	$size: InputSizes;
	$rounded: boolean;
}>`
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;

	${({ $color, $variant, theme }) =>
		getInputVariantStyles(
			$variant,
			$color === 'greyscale' ? SHADE_4 : getColorScheme($color, theme),
		)}

	${({ $color, $variant }) =>
		$variant === 'filled' &&
		$color === 'warn' &&
		`
		color: ${BLACK};
		text-shadow: 0 0 2px ${rgba(BLACK, 0.4)};

		&::placeholder {
			color: ${rgba(BLACK, 0.7)};
			text-shadow: 1px 1px 1px ${rgba(SHADE_4, 0.4)};
			
		}
		`}

	${({ $size }) =>
		`
		font-size: ${sizeStyles[$size] || $size};
	`}

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
						: getColorScheme(props.$color, props.theme),
					0.6,
				)};
	}
`;
