import styled from '@emotion/styled';
import { darken, lighten } from 'polished';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK } from '@src/constants/colors';
import { SwitchSize, SwitchVariant } from './Switch';

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
	$color: ComponentColors | 'greyscale';
	$disabled: boolean;
}>`
	transition: background-color 0.1s ease-in-out;

	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: ${({ $variant }) => ($variant === 'rounded' ? '34px' : '4px')};

	${({ $color, theme }) =>
		`
		background: linear-gradient(
			to right,
			${rgba(
				alterColorEnhanced(
					getColorScheme(
						$color === 'greyscale' ? 'greyscale-dark' : $color,
						theme,
					),
				),
				0.9,
			)} 0%,
			${rgba(
				getColorScheme(
					$color === 'greyscale' ? 'greyscale-dark' : $color,
					theme,
				),
				0.95,
			)} 100%
		), url(${getPatternScheme('dots')}
		);`}

	&:before {
		position: absolute;
		content: '';
		left: 4px;
		bottom: 4px;
		background: url(${getPatternScheme('noise')});
		background-size: 100%;
		background-repeat: repeat;
		background-color: ${({ theme, $color }) =>
			lighten(0.3, getColorScheme($color, theme))};
		-webkit-transition: 0.1s;
		transition: transform 0.1s ease-in-out, background 0.2s ease-in-out;
		border-radius: ${({ $variant }) =>
			$variant === 'rounded' ? '50%' : '4px'};

		box-shadow: ${({ theme, $color }) =>
			`1px 1px 2px ${rgba(BLACK, 0.3)}, 
			-1px -1px 2px ${lighten(0.1, getColorScheme($color, theme))}`};

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
		${({ $color, theme }) =>
			`
		background: linear-gradient(
			45deg,
			${lighten(
				0.1,
				getColorScheme(
					$color === 'greyscale' ? 'greyscale-dark' : $color,
					theme,
				),
			)} 0%,
			${getColorScheme(
				$color === 'greyscale' ? 'greyscale-dark' : $color,
				theme,
			)} 100%
		);
			filter: saturate(2.5);
		`}
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

		box-shadow: ${({ theme, $color }) =>
			`inset 1px 1px 2px ${BLACK}, inset -1px -1px 2px ${darken(
				0.1,
				getColorScheme($color, theme),
			)}`};
	}

	${({ $disabled }) =>
		$disabled &&
		`
		cursor: not-allowed;
		opacity: 0.8;
		pointer-events: none;
		filter: grayscale(0.5);
	`}

	input:focus + & {
		outline: ${({ theme, $color }) =>
			`1px solid ${darken(0.2, getColorScheme($color, theme))}`};
	}
`;
