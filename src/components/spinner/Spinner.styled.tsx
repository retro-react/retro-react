import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { rgba } from '@src/utils/rgba';
import { SpinnerSize } from './Spinner';

const createLinearGradient = (colors: string[]) =>
	`linear-gradient(45deg, ${colors.join(', ')})`;

const createRadialGradient = (
	colors: string[],
	position: string = 'circle',
): string => {
	return `radial-gradient(${position}, ${colors.join(', ')})`;
};

const colorChange = (colors: string[]) => keyframes`
  ${colors
		.map(
			(color, index) => `
    ${(index / colors.length) * 100}% {
      border-color: ${color} transparent transparent transparent;
    }
  `,
		)
		.join('')}
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
	display: inline-block;
`;

const spinnerSize = {
	small: '32px',
	medium: '64px',
	large: '128px',
};

export const CircleSpinner = styled.div<{
	$colors: string[];
	$size: SpinnerSize;
}>`
	width: ${({ $size }) => spinnerSize[$size]};
	height: ${({ $size }) => spinnerSize[$size]};
	border: 8px solid;
	border-radius: 50%;
	animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite,
		${({ $colors }) =>
			css`
				${colorChange($colors)} 3s linear infinite
			`};
	border-color: ${({ $colors }) => $colors[0]} transparent transparent
		transparent;

	&:nth-child(1) {
		animation-delay: -0.45s;
	}

	&:nth-child(2) {
		animation-delay: -0.3s;
	}

	&:nth-child(3) {
		animation-delay: -0.15s;
	}
`;

export const SquareSpinner = styled.div<{
	$colors: string[];
	$size: SpinnerSize;
}>`
	position: relative;
	width: ${({ $size }) => spinnerSize[$size]};
	height: ${({ $size }) => spinnerSize[$size]};
	overflow: hidden;
	clip-path: polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%);

	${({ $size, $colors }) =>
		$size === 'small' &&
		css`
			background: ${createLinearGradient($colors)};
			animation: ${spin} 1s linear infinite;
		`}

	${({ $size, $colors }) =>
		($size === 'large' || $size === 'medium') &&
		css`
			&::before {
				content: '';
				position: absolute;
				top: -2px;
				left: -2px;
				width: ${spinnerSize[$size]};
				height: ${spinnerSize[$size]};
				background: ${createLinearGradient($colors)};
				animation: ${spin} 1s linear infinite;
			}

			&::after {
				content: '';
				position: absolute;
				width: ${$size === 'large'
					? spinnerSize['medium']
					: spinnerSize['small']};
				height: ${$size === 'large'
					? spinnerSize['medium']
					: spinnerSize['small']};
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: ${createLinearGradient($colors)};
				box-shadow: inset 0 0 0 2px ${rgba($colors[0], 0.2)};
			}
		`}
`;

export const StarSpinner = styled.div<{
	$colors: string[];
	$size: SpinnerSize;
}>`
	display: inline-block;
	width: ${({ $size }) => spinnerSize[$size]};
	height: ${({ $size }) => spinnerSize[$size]};
	background-image: ${({ $colors }) => createRadialGradient($colors)};
	clip-path: polygon(
		50% 0%,
		61% 35%,
		98% 35%,
		68% 57%,
		79% 91%,
		50% 70%,
		21% 91%,
		32% 57%,
		2% 35%,
		39% 35%
	);
	background-size: 100% 100%;

	animation: ${spin} 1.5s linear infinite;
`;

const spinnerHeight = {
	small: '48px',
	medium: '96px',
	large: '192px',
};

const spinnerBeforeWidth = {
	small: '50px',
	medium: '100px',
	large: '200px',
};

const spinnerBeforeLeft = {
	small: '-8px',
	medium: '-16px',
	large: '-32px',
};

export const DiamondSpinner = styled.div<{
	$colors: string[];
	$size: keyof typeof spinnerSize;
}>`
	position: relative;
	width: ${({ $size }) => spinnerSize[$size]};
	height: ${({ $size }) => spinnerHeight[$size]};
	margin-left: 16px;
	margin-right: 16px;
	overflow: hidden;
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);

	&::before {
		content: '';
		position: absolute;
		width: ${({ $size }) => spinnerBeforeWidth[$size]};
		height: ${({ $size }) => spinnerBeforeWidth[$size]};
		top: 0;
		left: ${({ $size }) => spinnerBeforeLeft[$size]};
		background-image: ${({ $colors }) => createLinearGradient($colors)};
		animation: ${spin} 1s linear infinite;
	}
`;
