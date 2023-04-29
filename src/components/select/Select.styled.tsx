import styled from '@emotion/styled';
import { alterColor } from '@src/utils/alterColor';
import { rgba } from '@src/utils/rgba';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
} from '@src/constants/colors';
import { SHADOWS } from '@src/constants/shadows';
import '../fonts.css';
import { SelectColor, SelectSize } from './Select';

const selectColorStyles = {
	primary: PRIMARY,
	secondary: SECONDARY,
	success: SUCCESS,
	error: ERROR,
	warn: WARN,
};

const sizeStyles = {
	small: '1.2rem',
	medium: '1.5rem',
	large: '1.8rem',
};

export const SelectWrapper = styled.div<{
	$color: SelectColor;
}>`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	padding: 0.25rem;
	margin-top: 0.5rem;
`;

export const Label = styled.label<{
	$color: SelectColor;
	$size: SelectSize;
}>`
	font-family: 'FrauncesLatin', sans-serif;
	font-size: ${(props) => sizeStyles[props.$size]};
	color: #fff;
	position: absolute;
	top: -1rem;
	left: 0.75rem;
	background: url(https://grainy-gradients.vercel.app/noise.svg);
	filter: contrast(120%) brightness(100%);
	background-color: ${(props) => selectColorStyles[props.$color]};
	background-size: 100%;
	background-repeat: repeat;
	padding: 0 0.65rem;
	pointer-events: none;
	border-radius: 0.5rem;
	text-shadow: ${SHADOWS.text[0]};

	${({ $size }) => {
		switch ($size) {
			case 'small':
				return `
				top: -0.75rem;
				`;
			case 'medium':
				return `
				top: -1rem;
				`;
			case 'large':
				return `
				top: -1.25rem;
				`;
		}
	}};
`;

export const Select = styled.select<{
	$color: SelectColor;
	$size: SelectSize;
}>`
	font-family: 'FrauncesLatin', sans-serif;
	font-size: ${(props) => sizeStyles[props.$size]};
	color: #fff;
	background-color: ${(props) => selectColorStyles[props.$color]};
	background-image: linear-gradient(
			${rgba(PRIMARY, 0.8)},
			${rgba(PRIMARY, 0.8)}
		),
		url(${require('@src/assets/svg/diagonal_line_pattern.svg')});
	padding: 0.5rem 1rem;
	appearance: none;
	cursor: pointer;
	border: none;
	border-radius: 0.5rem;

	&:focus {
		outline: none;
		box-shadow: 0 0 0.1rem 0.1rem ${(props) => selectColorStyles[props.$color]};
	}

	option {
		font-family: 'FrauncesLatin', sans-serif;
		background-color: #fff;
		color: ${(props) => selectColorStyles[props.$color]};
		text-shadow: ${SHADOWS.text[0]};
	}
`;
