import styled from '@emotion/styled';
import { alterColor } from '@src/utils/alterColor';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { PRIMARY, SECONDARY, SHADE_1, SUCCESS } from '@src/constants/colors';
import { SwitchColor, SwitchSize, SwitchVariant } from './Switch';

export const Switch = styled.label<{ $size: SwitchSize }>`
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
}>`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: ${({ $variant }) => ($variant === 'rounded' ? '34px' : '4px')};

	${({ $color }) => {
		switch ($color) {
			case 'primary':
				return `
				background: linear-gradient(
					to right,
					${rgba(alterColor(PRIMARY), 0.8)} 0%,
					${rgba(PRIMARY, 0.8)} 100%
				), url(${getPatternScheme('dots')}
				);
					`;
			case 'secondary':
				return `
				background: linear-gradient(
					to right,
					${rgba(alterColor(SECONDARY), 0.8)} 0%,
					${rgba(SECONDARY, 0.8)} 100%
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

		box-shadow: inset 1px 1px 2px #000000, inset -1px -1px 2px #ffffff;
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
		background-color: ${SUCCESS};
	}

	input:focus + & {
		box-shadow: 0 0 1px ${PRIMARY};
	}

	input:checked + &:before {
		${({ $color }) => {
			switch ($color) {
				case 'primary':
					return `
						background: linear-gradient(
							45deg,
							${alterColor(PRIMARY)} 0%,
							${PRIMARY} 100%
						);
							filter: saturate(2.5);
							`;
				case 'secondary':
					return `
						background: linear-gradient(
							45deg,
							${alterColor(SECONDARY)} 0%,
							${SECONDARY} 100%
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
`;
