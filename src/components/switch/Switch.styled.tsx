import styled from '@emotion/styled';
import { alterColor } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, SHADE_1, WHITE } from '@src/constants/colors';
import { SwitchColor, SwitchSize, SwitchVariant } from './Switch';

export const Switch = styled.label<{ $size: SwitchSize; $disabled: boolean }>`
	position: relative;
	display: inline-block;

	${({ $size }) => {
		switch ($size) {
			case 'small':
				return `
					width: 60px;
					height: 34px;
					`;
			case 'medium':
				return `
					width: 80px;
					height: 44px;
					`;
			case 'large':
				return `
					width: 100px;
					height: 54px;
					`;
		}
	}}

	${({ $disabled }) =>
		$disabled &&
		`
		cursor: not-allowed;
	`}
`;

export const SwitchInput = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
`;

export const SwitchSlider = styled.span<{
	$variant: SwitchVariant;
	$size: SwitchSize;
	$color: SwitchColor;
	$disabled: boolean;
}>`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: ${({ $variant }) => ($variant === 'rounded' ? '34px' : '4px')};

	${({ $color, theme }) => {
		switch ($color) {
			case 'primary':
				return `
				background: linear-gradient(
					to right,
					${rgba(alterColor(getColorScheme('primary', theme)), 0.8)} 0%,
					${rgba(getColorScheme('primary', theme), 0.8)} 100%
				), url(${getPatternScheme('dots')}
				);
					`;
			case 'secondary':
				return `
				background: linear-gradient(
					to right,
					${rgba(alterColor(getColorScheme('secondary', theme)), 0.8)} 0%,
					${rgba(getColorScheme('secondary', theme), 0.8)} 100%
				), url(${getPatternScheme('dots')}
				);
					`;
		}
	}}

	&:before {
		position: absolute;
		content: '';
		left: 4px;
		bottom: 4px;
		background: url(${getPatternScheme('noise')});
		background-size: 100%;
		background-repeat: repeat;
		background-color: ${SHADE_1};
		-webkit-transition: 0.2s;
		transition: 0.2s;
		border-radius: ${({ $variant }) =>
			$variant === 'rounded' ? '50%' : '4px'};

		box-shadow: inset 1px 1px 2px ${BLACK}, inset -1px -1px 2px ${WHITE};
		${({ $size }) => {
			switch ($size) {
				case 'small':
					return `
						width: 26px;
						height: 26px;
						`;
				case 'medium':
					return `
						width: 36px;
						height: 36px;
						`;
				case 'large':
					return `
						width: 46px;
						height: 46px;
						`;
			}
		}}
	}

	input:checked + & {
		background-color: ${({ theme }) => getColorScheme('success', theme)};
	}

	input:focus + & {
		box-shadow: ${({ theme }) => `0 0 1px ${getColorScheme('primary', theme)}`};
	}

	input:checked + &:before {
		${({ $color, theme }) => {
			switch ($color) {
				case 'primary':
					return `
						background: linear-gradient(
							45deg,
							${alterColor(getColorScheme('primary', theme))} 0%,
							${getColorScheme('primary', theme)} 100%
						);
							filter: saturate(2.5);
							`;
				case 'secondary':
					return `
						background: linear-gradient(
							45deg,
							${alterColor(getColorScheme('secondary', theme))} 0%,
							${getColorScheme('secondary', theme)} 100%
						);
						filter: saturate(2.0);
							`;
			}
		}}
		${({ $size }) => {
			switch ($size) {
				case 'small':
					return `
						transform: translateX(26px);
						`;
				case 'medium':
					return `
						transform: translateX(36px);
						`;
				case 'large':
					return `
						transform: translateX(46px);
						`;
			}
		}}
	}

	${({ $disabled }) =>
		$disabled &&
		`
		cursor: not-allowed;
		opacity: 0.8;
		pointer-events: none;
		filter: grayscale(0.5);
	`}
`;
