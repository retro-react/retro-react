import styled from '@emotion/styled';
import getColorScheme from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { WHITE } from '@src/constants/colors';
import { SHADOWS } from '@src/constants/shadows';
import { SelectColor, SelectSize } from './Select';

const sizeStyles = {
	small: '1.2rem',
	medium: '1.5rem',
	large: '1.8rem',
};

export const Error = styled.span`
	color: ${getColorScheme('error')};
	margin-top: 0.5rem;
`;

export const SelectContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
`;

export const ClearButton = styled.button<{
	$icon: string;
}>`
	position: absolute;
	right: 0.2rem;
	top: 0.6rem;
	width: 1.5rem;
	height: 1.5rem;
	border: none;
	cursor: pointer;
	opacity: 0.65;

	mask: url(${({ $icon }) => $icon});
	background-color: ${rgba(WHITE, 0.8)};

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.9);
	}
`;

export const SelectWrapper = styled.div<{
	$color: SelectColor;
}>`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	padding: 0.25rem;
	margin-top: 1rem;
`;

export const Label = styled.label<{
	$color: SelectColor;
	$size: SelectSize;
	$disabled: boolean;
}>`
	z-index: 2;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: ${(props) => sizeStyles[props.$size]};
	color: ${WHITE};
	position: absolute;
	top: -1rem;
	left: 0.75rem;
	background: url(${getPatternScheme('noise')});
	filter: contrast(120%) brightness(100%);
	background-color: ${(props) =>
		getColorScheme(
			props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
			props.theme,
		)};
	background-size: 100%;
	background-repeat: repeat;
	padding: 0 0.65rem;
	pointer-events: none;
	border-radius: 0.5rem;
	text-shadow: ${SHADOWS.text[0]};

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 80%;

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

	${({ $disabled }) =>
		$disabled
			? `
		opacity: 1;
		z-index: 1;
		`
			: ''}
`;

export const Select = styled.select<{
	$color: SelectColor;
	$size: SelectSize;
	$required: boolean;
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: ${(props) => sizeStyles[props.$size]};
	color: ${WHITE};
	background-color: ${(props) =>
		getColorScheme(
			props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
			props.theme,
		)};
	background-image: ${(props) => `linear-gradient(
			${rgba(
				getColorScheme(
					props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
					props.theme,
				),
				0.8,
			)},
			${rgba(
				getColorScheme(
					props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
					props.theme,
				),
				0.8,
			)}
		),
		url(${getPatternScheme('stripes')})`};
	padding: 0.5rem 1rem;
	appearance: none;
	cursor: pointer;
	border: none;
	border-radius: 0.5rem;

	padding-right: ${(props) => (!props.$required ? '2rem' : '1rem')};

	&:focus {
		outline: none;
		box-shadow: 0 0 0.1rem 0.1rem
			${(props) =>
				getColorScheme(
					props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
					props.theme,
				)};
	}

	option {
		font-family: 'Trebuchet MS', Helvetica, sans-serif;
		background-color: ${WHITE};
		color: ${(props) =>
			getColorScheme(
				props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
				props.theme,
			)};
		text-shadow: ${SHADOWS.text[0]};
	}

	&:disabled {
		cursor: not-allowed;
	}
`;
