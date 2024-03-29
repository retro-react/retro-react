import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, PRIMARY, WHITE } from '@src/constants/colors';

const move = keyframes`
	0% {
		background-position: 0% 0%;
	}
	100% {
		background-position: 100% 0%;
	}
`;

export const ProgressBarWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
`;

export const ProgressBar = styled.div<{
	$bg?: string;
	$value: number;
	$color?: string;
	$pattern: ComponentPatterns;
	$animated?: boolean;
}>`
	background-image: url(${getPatternScheme('noise')});

	background-color: ${(props) => props.$bg || WHITE};
	padding: 1rem;
	font-size: 1.5rem;
	box-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)},
		-1px -1px 2px ${(props) => props.$bg || WHITE};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${getPatternScheme('noise')});
		padding: 0.5rem;
		opacity: 0.5;
		filter: blur(0.8rem) brightness(0.5);
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 5px;
		width: calc(${(props) => Math.min(Math.max(props.$value, 0), 100)}% - 10px);
		height: 100%;
		background-color: ${(props) => props.$color || PRIMARY};
		border-radius: ${(props) =>
			props.$value >= 100 ? '0.5rem' : '0.5rem 0 0 0.5rem'};
		opacity: 0.5;
		margin: 0.3rem 0;

		background-image: url(${(props) => getPatternScheme(props.$pattern)});
		background-repeat: repeat;
		box-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)};

		${(props) =>
			props.$animated &&
			props.$pattern !== 'solid' &&
			css`
				animation: ${move} ${props.$value * 0.2}s linear infinite;
			`}
	}

	${({ $bg }) =>
		$bg === 'none' &&
		`
	box-shadow: none;
	background: none;

	&::before {
		content: none;
	}

`}
`;
