import styled from '@emotion/styled';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { PRIMARY, WHITE } from '@src/constants/colors';
import { ProgressBarPattern } from './ProgressBar';

export const ProgressBarWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const ProgressBar = styled.div<{
	$value: number;
	$color?: string;
	$pattern: ProgressBarPattern;
}>`
	background-image: url(${getPatternScheme('noise')});

	background-color: ${WHITE};
	border-radius: 0.5rem;
	border: 0.5rem solid ${WHITE};
	box-shadow: 0 0 0.5rem 0.5rem ${WHITE};
	padding: 1rem;
	font-size: 1.5rem;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${getPatternScheme('noise')});
		background-color: ${WHITE};
		border-radius: 0.5rem;
		border: 0.5rem solid ${WHITE};

		box-shadow: 0 0 0.5rem 0.5rem ${WHITE};
		opacity: 0.5;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: ${(props) => Math.min(Math.max(props.$value, 0), 100)}%;
		height: 100%;
		background-color: ${(props) => props.$color || PRIMARY};
		border-radius: 0.5rem;
		border: 0.5rem solid ${WHITE};
		box-shadow: 0 0 0.5rem 0.5rem #fff;
		opacity: 0.5;

		${(props) => {
			switch (props.$pattern) {
				case 'noise':
					return `
						background-image: url(${getPatternScheme('noise')});
					`;
				case 'stripes':
					return `
						background-image: url(${getPatternScheme('stripes')});
					`;
				case 'dots':
				default:
					return `
						background-image: url(${getPatternScheme('dots')});
					`;
			}
		}}
`;
