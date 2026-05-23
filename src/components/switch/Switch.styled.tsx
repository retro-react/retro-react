import styled from '@emotion/styled';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import getColorScheme, { ComponentColors } from '../../utils/getColorScheme';
import { SwitchSize, SwitchVariant } from './Switch';

export const Switch = styled.label<{ $size: SwitchSize; $disabled: boolean }>`
	position: relative;
	display: inline-block;
	font-family: ${SYSTEM_FONT};
	cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

	${({ $size }) => {
		switch ($size) {
			case 'small':
				return `
					width: 48px;
					height: 20px;
				`;
			case 'medium':
				return `
					width: 60px;
					height: 24px;
				`;
			case 'large':
				return `
					width: 72px;
					height: 28px;
				`;
		}
	}}
`;

export const SwitchInput = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
	position: absolute;
`;

export const SwitchSlider = styled.span<{
	$variant: SwitchVariant;
	$size: SwitchSize;
	$color: ComponentColors | 'greyscale';
	$disabled: boolean;
}>`
	position: absolute;
	cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: ${WIN31_BUTTON_FACE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	border-radius: ${({ $variant }) => ($variant === 'rounded' ? '20px' : '0')};
	box-shadow: inset 1px 1px 0 ${WIN31_BUTTON_SHADOW};
	transition: none;

	&:before {
		position: absolute;
		content: '';
		left: 2px;
		top: 2px;
		background: ${VGA_WHITE};
		border: 1px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		border-radius: ${({ $variant }) => ($variant === 'rounded' ? '50%' : '0')};
		transition: none;

		${({ $size }) => {
			switch ($size) {
				case 'small':
					return `
						width: 12px;
						height: 12px;
					`;
				case 'medium':
					return `
						width: 16px;
						height: 16px;
					`;
				case 'large':
					return `
						width: 20px;
						height: 20px;
					`;
			}
		}}
	}

	input:checked + &:before {
		${({ $size }) => {
			switch ($size) {
				case 'small':
					return `transform: translateX(24px);`;
				case 'medium':
					return `transform: translateX(32px);`;
				case 'large':
					return `transform: translateX(40px);`;
			}
		}}
		background: ${(props) =>
			props.$color === 'greyscale'
				? WIN31_BUTTON_SHADOW
				: getColorScheme(props.$color, props.theme)};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	}

	input:checked + & {
		background: ${(props) =>
			props.$color === 'greyscale'
				? WIN31_BUTTON_FACE
				: getColorScheme(props.$color, props.theme)};
		border-color: ${(props) =>
				props.$color === 'greyscale'
					? WIN31_BUTTON_SHADOW
					: getColorScheme(props.$color, props.theme)}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT}
			${(props) =>
				props.$color === 'greyscale'
					? WIN31_BUTTON_SHADOW
					: getColorScheme(props.$color, props.theme)};
	}

	${(props) =>
		props.$disabled &&
		`
		background: ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW};
		
		&:before {
			background: ${WIN31_BUTTON_SHADOW};
			border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW};
		}
	`}
`;

export const SwitchLabel = styled.span<{
	$size: SwitchSize;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${(props) => {
		switch (props.$size) {
			case 'small':
				return FONT_SIZES.TINY;
			case 'medium':
				return FONT_SIZES.NORMAL;
			case 'large':
				return FONT_SIZES.MEDIUM;
		}
	}};
	color: ${VGA_BLACK};
	margin-left: 8px;
	vertical-align: middle;
`;

export const SwitchText = SwitchLabel;
