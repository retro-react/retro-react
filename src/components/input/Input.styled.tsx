import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BLACK, WHITE } from '@src/constants/colors';
import '../fonts.css';
import { InputVariants } from './Input';

const getInputVariantStyles = (variant: InputVariants) => {
	switch (variant) {
		case 'outlined':
			return css`
				background: transparent;
				box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3),
					inset -1px -1px 1px rgba(255, 255, 255, 0.3),
					2px 2px 2px rgba(0, 0, 0, 0.3), -2px -2px 2px rgba(255, 255, 255, 0.3);

				&::placeholder {
					color: rgba(0, 0, 0, 0.8);
					text-shadow: 1px 1px 1px #ffffff;
				}
			`;
		case 'filled':
		default:
			return css`
				background: url(https://grainy-gradients.vercel.app/noise.svg);
				box-shadow: inset 1px 1px 2px ${BLACK}, inset -1px -1px 2px #ffffff;
				filter: contrast(120%) brightness(100%);

				color: ${BLACK};

				&::placeholder {
					color: rgba(255, 255, 255, 0.5);
					text-shadow: 1px 1px 1px ${BLACK};
				}
			`;
	}
};

export const Input = styled.input<{
	$variant: InputVariants;
}>`
	padding: 0.5rem;
	border-radius: 0;
	font-family: 'FrauncesLatin', sans-serif;
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
