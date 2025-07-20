import styled from '@emotion/styled';
import { darken } from 'polished';
import {
	VGA_BLACK,
	WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';
import { StatisticsSize, StatisticsVariant } from './Statistics';

export const StatisticsWrapper = styled.div<{
	$direction: StatisticsVariant;
	$size: StatisticsSize;
	$isClickable: boolean;
}>`
	font-family: ${SYSTEM_FONT};
	position: relative;
	display: inline-flex;
	flex-direction: ${(props) =>
		props.$direction === 'vertical' ? 'row' : 'column'};
	align-items: center;
	justify-content: center;
	margin: 1rem;
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	border-radius: 0;
	background-color: ${WIN31_BUTTON_FACE};
	padding: ${({ $size }) =>
		$size === 'small' ? '0.75rem' : $size === 'medium' ? '1rem' : '1.5rem'};
	min-width: ${({ $size }) =>
		$size === 'small' ? '120px' : $size === 'medium' ? '160px' : '200px'};
	box-sizing: border-box;

	${({ $direction, $size }) =>
		$direction === 'horizontal' &&
		`
			gap: 1rem;
			padding: ${
				$size === 'small' ? '0.75rem' : $size === 'medium' ? '1rem' : '2rem'
			};
			`}

	color: ${VGA_BLACK};
	box-shadow: inset 1px 1px 0px ${WIN31_BUTTON_HIGHLIGHT};

	/* Responsive adjustments */
	@media (max-width: 768px) {
		margin: 0.5rem;
		min-width: ${({ $size }) =>
			$size === 'small' ? '100px' : $size === 'medium' ? '140px' : '180px'};
	}

	${({ $isClickable }) =>
		$isClickable &&
		`
		cursor: pointer;
		transition: none;
		
		&:hover {
			background-color: ${darken(0.05, WIN31_BUTTON_FACE)};
		}
		
		&:active {
			border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
			background-color: ${darken(0.1, WIN31_BUTTON_FACE)};
		}
	`};
`;

export const StatNumberWrapper = styled.div<{
	$direction: StatisticsVariant;
	$size: StatisticsSize;
}>`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: ${(props) =>
		props.$direction === 'vertical' ? 'column' : 'row'};
	align-items: center;
	justify-content: center;
	overflow: hidden;

	${({ $direction, $size }) =>
		$direction === 'horizontal' &&
		`
		gap: 
		${$size === 'small' ? '0.5rem' : $size === 'medium' ? '1rem' : '1.5rem'};
			`}
`;

export const StatIcon = styled.div<{
	$size: StatisticsSize;
}>`
	height: ${({ $size }) =>
		$size === 'small' ? '35px' : $size === 'medium' ? '50px' : '60px'};
	width: ${({ $size }) =>
		$size === 'small' ? '35px' : $size === 'medium' ? '50px' : '60px'};
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1.5rem;

	& > svg {
		height: 100%;
		width: 100%;
	}
`;

export const StatNumber = styled.span<{
	$size: StatisticsSize;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${({ $size }) =>
		$size === 'small' ? '1.5rem' : $size === 'medium' ? '2rem' : '2.5rem'};
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	color: ${VGA_BLACK};
	text-shadow: 1px 1px 0px ${WHITE};
`;

export const StatSuffix = styled.span<{
	$size: StatisticsSize;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${({ $size }) =>
		$size === 'small' ? '1.2rem' : $size === 'medium' ? '1.6rem' : '2rem'};
	margin-left: 0.2rem;
	font-weight: normal;
	color: ${VGA_BLACK};
	text-shadow: 1px 1px 0px ${WHITE};
`;

export const StatPrefix = styled.span<{
	$size: StatisticsSize;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${({ $size }) =>
		$size === 'small' ? '1.2rem' : $size === 'medium' ? '1.6rem' : '2rem'};
	margin-right: 0.2rem;
	font-weight: normal;
	color: ${VGA_BLACK};
	text-shadow: 1px 1px 0px ${WHITE};
`;

export const StatLabel = styled.span<{
	$size: StatisticsSize;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${({ $size }) =>
		$size === 'small' ? '0.75rem' : $size === 'medium' ? '0.9rem' : '1.1rem'};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${VGA_BLACK};
	text-shadow: 1px 1px 0px ${WHITE};
	font-weight: normal;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	max-width: 100%;
	display: inline-block;
	vertical-align: middle;
	text-align: center;
`;
