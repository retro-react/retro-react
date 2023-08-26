import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import { rgba } from '@src/utils/rgba';
import { BLACK } from '@src/constants/colors';

const blink = keyframes`
  0% { opacity: 1; }
  30% { opacity: 0.4; }
  70% { opacity: 1; }
  100% { opacity: 1; }
`;

const pixelate = keyframes`
  0% { background-size: 80px 80px; }
  50% { background-size: 40px 40px; }
  100% { background-size: 80px 80px; }
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
			background-image: repeating-linear-gradient(
				45deg,
				${lighten(0.1, props.$color)} 25%,
				${props.$color} 25%,
				${props.$color} 50%,
				${lighten(0.1, props.$color)} 50%,
				${lighten(0.1, props.$color)} 75%
			);
			background-size: 80px 80px;
			animation: ${pixelate} 3s infinite;
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
