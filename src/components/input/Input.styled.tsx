import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';
import { InputVariants } from './Input';

// TODO: Fix rgba colors to use constants
const getInputVariantStyles = (variant: InputVariants) => {
	switch (variant) {
		case 'outlined':
			return css`
				background: ${WHITE};
				box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3),
					inset -1px -1px 1px rgba(255, 255, 255, 0.3),
					2px 2px 2px rgba(0, 0, 0, 0.3), -2px -2px 2px rgba(255, 255, 255, 0.3);

				&::placeholder {
					color: rgba(0, 0, 0, 0.8);
					text-shadow: 1px 1px 1px ${WHITE};
				}
			`;
		case 'filled':
		default:
			return css`
				background: linear-gradient(${rgba(BLACK, 0.6)}, ${rgba(BLACK, 0.6)}),
					url(${getPatternScheme('noise')});
				box-shadow: inset 1px 1px 2px ${BLACK}, inset -1px -1px 2px ${WHITE};
				filter: contrast(130%) brightness(100%);

				color: ${WHITE};
				font-weight: normal;
				text-shadow: 0 0 2px ${BLACK};

				&::placeholder {
					color: rgba(255, 255, 255, 0.65);
					text-shadow: 1px 1px 2px ${BLACK};
				}
			`;
	}
};

export const Input = styled.input<{
	$variant: InputVariants;
}>`
	padding: 0.5rem;
	border-radius: 0;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	text-color: ${BLACK};

	${(props) => getInputVariantStyles(props.$variant)}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus {
		outline: none;
	}
`;
