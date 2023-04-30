import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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

export const CircleSpinner = styled.div<{ $colors: string[] }>`
	width: 64px;
	height: 64px;
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

export const SquareSpinner = styled.div<{ $colors: string[] }>`
	width: 64px;
	height: 64px;
	background-image: ${({ $colors }) => createLinearGradient($colors)};
	clip-path: polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%);
	animation: ${spin} 1s linear infinite;
`;

export const StarSpinner = styled.div<{ $colors: string[] }>`
	display: inline-block;
	width: 64px;
	height: 64px;
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
	animation: ${spin} 1.5s linear infinite;
`;

export const DiamondSpinner = styled.div<{ $colors: string[] }>`
	width: 64px;
	height: 96px;
	margin-left: 16px;
	margin-right: 16px;
	background-image: ${({ $colors }) => createLinearGradient($colors)};
	transform: rotate(45deg);
	animation: ${spin} 1s linear infinite;
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
`;
