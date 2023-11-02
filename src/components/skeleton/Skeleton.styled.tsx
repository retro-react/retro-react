import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import { rgba } from '@src/utils/rgba';
import { BLACK } from '@src/constants/colors';

const pixelate = keyframes`
  0% {
    background-size: 80px 80px;
    opacity: 0.6;
    transform: translateX(0);
  }
  25% {
    background-size: 60px 60px;
    opacity: 0.7;
    transform: translateX(8px);
  }
  50% {
    background-size: 80px 80px;
    opacity: 0.6;
    transform: translateX(0);
  }
  75% {
    background-size: 60px 60px;
    opacity: 0.7;
    transform: translateX(-8px);
  }
  100% {
    background-size: 80px 80px;
    opacity: 0.6;
    transform: translateX(0);
  }
`;

export const StyledSkeleton = styled.div<{
	$color: string;
	$shape: string;
	$rounded: boolean;
	$effect: string;
	$height: string | number;
	$gradientWidth: number;
}>`
	height: ${(props) => props.$height};
	width: 100%;
	background-color: ${(props) => props.$color};

	${(props) =>
		props.$effect === 'blink' &&
		css`
			background-image: linear-gradient(
				90deg,
				${rgba(props.$color, 0.1)} 0px,
				${rgba(props.$color, 0.2)} 40px,
				${rgba(props.$color, 0.1)} 80px
			);
			background-size: 200% 100%;
			animation: ${pixelate} 2s infinite;
		`};

	margin-bottom: 10px;

	${(props) =>
		props.$shape === 'circle' &&
		css`
			width: ${props.$height};
			border-radius: 50%;
		`};

	${(props) =>
		props.$effect === 'shimmer' &&
		css`
			background-image: linear-gradient(
				to right,
				${props.$color} 0%,
				${lighten(0.2, props.$color)} 20%,
				${lighten(0.3, props.$color)} 40%,
				${props.$color} 100%
			);
			background-repeat: no-repeat;
			background-size: ${props.$gradientWidth}px
				${typeof props.$height === 'string'
					? props.$height
					: `${props.$height}px`};
			border-radius: ${props.$shape === 'circle'
				? '50%'
				: props.$rounded
				? '5px'
				: '0px'};
			animation: ${keyframes`
					0% { background-position: ${-props.$gradientWidth}px 0; }
					70% { background-position: ${props.$gradientWidth}px 0; }
					100% { background-position: ${props.$gradientWidth}px 0; }
				`} 3s infinite linear;
		`};

	box-shadow: 3px 3px 0px ${rgba(BLACK, 0.2)};
`;
