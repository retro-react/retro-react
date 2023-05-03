import styled from '@emotion/styled';
import { alterColor } from '@src/utils/alterColor';
import type { CheckboxColor } from './Checkbox';
import { getColorScheme } from './themes';

export const Checkbox = styled.input<{
	$color: CheckboxColor;
}>`
	/* Reset */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	outline: none;
	/* Custom */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 0.25rem;
	cursor: pointer;

	background-image: linear-gradient(
			to bottom,
			${(props) => alterColor(getColorScheme(props.$color))},
			${(props) => getColorScheme(props.$color)}
		),
		url(https://grainy-gradients.vercel.app/noise.svg);

	box-shadow: inset 1px 1px 2px #000000,
		inset -1px -1px 2px ${(props) => getColorScheme(props.$color)};

	&::before {
		content: '';
		position: absolute;
		top: 0.25rem;
		left: 0.25rem;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-image: url(https://grainy-gradients.vercel.app/noise.svg);

		box-shadow: inset 1px 1px 12px #000000,
			inset -1px -1px 10px ${(props) => getColorScheme(props.$color)};
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}

	&:checked::before {
		opacity: 1;
	}

	&:hover:not([disabled]) {
		opacity: 0.8;
		box-shadow: inset 0 8px 6px -6px #000000;
		filter: saturate(70%);
	}

	&:active:not([disabled]) {
		filter: contrast(60%);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;
