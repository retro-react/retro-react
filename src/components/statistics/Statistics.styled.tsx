import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';
import { pressed, raised } from '../../constants/bevels';
import { VGA_BLACK, WHITE, WIN31_BUTTON_FACE } from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import { SPACING } from '../../constants/spacing';
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
	margin: ${SPACING.XL};
	${raised}
	background-color: ${WIN31_BUTTON_FACE};
	padding: ${({ $size }) =>
		$size === 'small' ? SPACING.LG : $size === 'medium' ? SPACING.XL : '24px'};
	min-width: ${({ $size }) =>
		$size === 'small' ? '120px' : $size === 'medium' ? '160px' : '200px'};
	box-sizing: border-box;

	${({ $direction, $size }) =>
		$direction === 'horizontal' &&
		`
			gap: ${SPACING.XL};
			padding: ${
				$size === 'small'
					? SPACING.LG
					: $size === 'medium'
					? SPACING.XL
					: SPACING.XXXL
			};
			`}

	color: ${VGA_BLACK};

	@media (max-width: 768px) {
		margin: ${SPACING.MD};
		min-width: ${({ $size }) =>
			$size === 'small' ? '100px' : $size === 'medium' ? '140px' : '180px'};
	}

	${({ $isClickable }) =>
		$isClickable &&
		css`
			cursor: pointer;
			transition: background-color 80ms linear;

			&:hover {
				background-color: ${darken(0.05, WIN31_BUTTON_FACE)};
			}

			&:active {
				${pressed}
				background-color: ${darken(0.1, WIN31_BUTTON_FACE)};
			}
		`};
`;

export const StatNumberWrapper = styled.div<{
	$direction: StatisticsVariant;
	$size: StatisticsSize;
}>`
	position: relative;
	display: flex;
	flex-direction: ${(props) =>
		props.$direction === 'vertical' ? 'column' : 'row'};
	align-items: center;
	justify-content: center;

	${({ $direction, $size }) =>
		$direction === 'horizontal' &&
		`
		gap: ${
			$size === 'small' ? SPACING.MD : $size === 'medium' ? SPACING.XL : '24px'
		};
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
	margin-right: 24px;

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
		$size === 'small' ? '24px' : $size === 'medium' ? '32px' : '40px'};
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
		$size === 'small' ? '19px' : $size === 'medium' ? '26px' : '32px'};
	margin-left: ${SPACING.XXS};
	font-weight: normal;
	color: ${VGA_BLACK};
	text-shadow: 1px 1px 0px ${WHITE};
`;

export const StatPrefix = styled.span<{
	$size: StatisticsSize;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${({ $size }) =>
		$size === 'small' ? '19px' : $size === 'medium' ? '26px' : '32px'};
	margin-right: ${SPACING.XXS};
	font-weight: normal;
	color: ${VGA_BLACK};
	text-shadow: 1px 1px 0px ${WHITE};
`;

export const StatLabel = styled.span<{
	$size: StatisticsSize;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${({ $size }) =>
		$size === 'small'
			? FONT_SIZES.NORMAL
			: $size === 'medium'
			? FONT_SIZES.MEDIUM
			: '18px'};
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
