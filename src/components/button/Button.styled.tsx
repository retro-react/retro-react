import styled from '@emotion/styled';
import { SHADE_6 } from '@src/constants/colors';
import '../fonts.css';
import type { Color, Variant } from './Button';
import { getTheme } from './themes';

export const Button = styled.button<{ $color: Color; variant: Variant }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: auto;
	outline: 0;
	border: 0;
	padding: 0.5rem 1.5rem;
	font-size: 0.875rem;
	font-family: 'FrauncesLatin', sans-serif;
	text-shadow: 2px 2px #000000;
	cursor: pointer;
	${(props) => getTheme(props.$color, props.variant)}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:hover:not([disabled]) {
		opacity: 0.8;
		box-shadow: inset 0 8px 6px -6px ${SHADE_6};
		filter: saturate(70%);
	}

	&:active:not([disabled]) {
		filter: contrast(60%);
	}
`;
