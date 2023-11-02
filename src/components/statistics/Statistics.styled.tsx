import styled from '@emotion/styled';
import { darken } from 'polished';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, SHADE_2, SHADE_3, WHITE } from '@src/constants/colors';
import { StatisticsSize, StatisticsVariant } from './Statistics';

const getTextColors = (color: ComponentColors | string) => {
	switch (color) {
		case 'primary':
		case 'secondary':
		case 'success':
		case 'error':
			return WHITE;
		default:
			return BLACK;
	}
};

export const StatisticsWrapper = styled.div<{
	$color: ComponentColors | string;
	$direction: StatisticsVariant;
	$size: StatisticsSize;
	$isClickable: boolean;
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	position: relative;
	display: inline-flex;
	flex-direction: ${(props) =>
		props.$direction === 'vertical' ? 'row' : 'column'};
	align-items: center;
	justify-content: center;
	margin: 1rem;
	border: 2px solid;
	border-radius: 5px;
	padding: ${({ $size }) =>
		$size === 'small' ? '0.5rem' : $size === 'medium' ? '1rem' : '1.5rem'};
	min-width: ${({ $size }) =>
		$size === 'small' ? '150px' : $size === 'medium' ? '200px' : '250px'};

	${({ $direction, $size }) =>
		$direction === 'horizontal' &&
		`
			gap: 1rem;
			padding: ${
				$size === 'small' ? '0.5rem' : $size === 'medium' ? '1rem' : '2.5rem'
			};
			`}

	${({ $color }) => `
		border-color: ${
			$color === 'none' ? SHADE_2 : darken(0.1, getColorScheme($color))
		};
		background-color: ${$color === 'none' ? 'transparent' : getColorScheme($color)};
	`}

	color: ${({ $color }) => getTextColors($color)};
	box-shadow: 2px 2px 5px ${rgba(BLACK, 0.3)};

	${({ $isClickable, $color }) =>
		$isClickable &&
		`
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		
		&:hover {
			::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				background-color: ${rgba(
					$color === 'none' ? SHADE_3 : darken(0.3, getColorScheme($color)),
					0.3,
				)};
				border-radius: 5px;
			}
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
	font-size: ${({ $size }) =>
		$size === 'small' ? '1.5rem' : $size === 'medium' ? '2rem' : '2.5rem'};
	font-weight: 700;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
	display: inline-block;
	vertical-align: middle;
	text-align: center;
`;

export const StatSuffix = styled.span<{
	$size: StatisticsSize;
}>`
	font-size: ${({ $size }) =>
		$size === 'small' ? '1.3rem' : $size === 'medium' ? '1.8rem' : '2.3rem'};
	margin-left: 0.2rem;
	font-weight: bold;
`;

export const StatPrefix = styled.span<{
	$size: StatisticsSize;
}>`
	font-size: ${({ $size }) =>
		$size === 'small' ? '1.3rem' : $size === 'medium' ? '1.8rem' : '2.3rem'};
	margin-right: 0.2rem;
	font-weight: bold;
`;

export const StatLabel = styled.span<{
	$size: StatisticsSize;
}>`
	font-size: ${({ $size }) =>
		$size === 'small' ? '0.8rem' : $size === 'medium' ? '1rem' : '1.2rem'};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 100%;
	display: inline-block;
	vertical-align: middle;
	text-align: center;
`;
