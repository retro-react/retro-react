import styled from '@emotion/styled';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';

export const Box = styled.div<{
	$color: string;
	$pattern: ComponentPatterns;
}>`
	background-color: ${(props) => props.$color};
	position: relative;
	color: #333333;
	padding: 1rem;
	border-radius: 0;
	text-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)};
	font-family: Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: bold;

	outline: 1rem solid transparent;

	background-image: url(${(props) => getPatternScheme(props.$pattern)});

	&:before {
		background: linear-gradient(to top left, #3d3c42 50%, #d8d8d8 50%);
		box-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)}, -1px -1px 2px ${WHITE};
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		padding: 1rem;
		left: -1rem;
		top: -1rem;
		z-index: -1;
	}
`;
