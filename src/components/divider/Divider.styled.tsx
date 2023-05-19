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
	$pattern: ComponentPatterns;
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	background-color: ${(props) =>
		getColorScheme(props.$color, props.theme) || props.$color};
	position: relative;
	padding: 1rem;
	border-radius: 0;
	text-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)};
	font-size: 1.2rem;
	font-weight: bold;

	outline: 1rem solid transparent;

	background-image: url(${(props) => getPatternScheme(props.$pattern)});
`;
