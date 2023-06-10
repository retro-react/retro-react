import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';

export const NavbarContainer = styled.div<{
	$color: ComponentColors;
	$pattern: ComponentPatterns;
}>`
	display: flex;
	align-items: center;
	padding: 0.8em 0;
	text-family: 'Trebuchet MS', Helvetica, sans-serif;
	background-color: ${({ $color, theme }) => getColorScheme($color, theme)};
	background-image: ${({ $pattern }) => `url(${getPatternScheme($pattern)});`};
	background-repeat: repeat;
	border-bottom: 2px solid
		${({ $color, theme }) =>
			alterColorEnhanced(getColorScheme($color, theme), 50)};
	box-shadow: 0 4px 10px -2px ${rgba(BLACK, 0.5)};
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 1000;
`;

export const NavbarItemWrapper = styled.div`
	margin: 0 1em;
	color: ${WHITE};
`;

export const NavItem = styled.div<{
	$color: ComponentColors;
	$background?: string;
}>`
	text-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 1em;
	font-weight: 600;

	background-color: ${({ $color, theme }) =>
		rgba(getColorScheme($color, theme), 0.55)};
	border: 1px solid transparent;
	color: ${({ $color }) => ($color === 'warn' ? BLACK : WHITE)};
	border-radius: 0.25em;
	padding: 0.5em 1em;
	cursor: pointer;
	position: relative;
	transition: box-shadow 0.3s, transform 0.3s;

	&:hover {
		box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
			0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
		transform: scale(1.02);
	}

	& a {
		color: ${({ $color }) => ($color === 'warn' ? BLACK : WHITE)};
		text-decoration: none;

		&:active,
		&:visited,
		&:focus {
			color: ${({ $color }) => ($color === 'warn' ? BLACK : WHITE)};
		}
	}
`;
