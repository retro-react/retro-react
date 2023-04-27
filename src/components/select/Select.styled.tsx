import styled from '@emotion/styled';
import { alterColor } from '@src/utils/alterColor';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
} from '@src/constants/colors';
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
	border: 1px solid ${(props) => selectColorStyles[props.$color]};
	border-radius: 0.5rem;
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
	background-color: ${(props) => alterColor(props.$color)};
	padding: 0 0.25rem;
	pointer-events: none;
`;

export const Select = styled.select<{
	$color: SelectColor;
	$size: SelectSize;
}>`
	font-family: 'FrauncesLatin', sans-serif;
	font-size: ${(props) => sizeStyles[props.$size]};
	color: #fff;
	background-color: ${(props) => selectColorStyles[props.$color]};
	background-image: url(https://grainy-gradients.vercel.app/noise.svg);
	padding: 0.5rem 1rem;
	appearance: none;
	cursor: pointer;
	border: none;
	border-radius: 0.5rem;

	&:focus {
		outline: none;
		box-shadow: 0 0 0.5rem 0.5rem ${(props) => alterColor(props.$color)};
	}

	option {
		font-family: 'FrauncesLatin', sans-serif;
		background-color: #fff;
		color: #000;
	}
`;
