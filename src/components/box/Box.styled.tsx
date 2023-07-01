import styled from '@emotion/styled';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK } from '@src/constants/colors';

export const Box = styled.div<{
	$color: ComponentColors | string;
	$pattern: ComponentPatterns | 'none';
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	box-sizing: border-box;
	background-color: ${(props) =>
		getColorScheme(props.$color, props.theme) || props.$color};
	position: relative;
	padding: 1rem;
	border-radius: 0;
	text-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)};
	font-size: 1.2rem;
	font-weight: bold;
	border: 1px solid transparent;

	outline: 1rem solid transparent;

	${(props) =>
		props.$pattern === 'none'
			? `
		background-color: transparent;
		border: 1px solid ${getColorScheme(props.$color, props.theme) || props.$color};
			`
			: `
		background-image: url(${getPatternScheme(props.$pattern)});
		`}
`;
