import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { SCREEN_XM } from '@src/constants/breakpoints';
import { BLACK, SHADE_6, WHITE } from '@src/constants/colors';
import { NavbarColors } from './Navbar';

export const NavbarContainer = styled.nav<{
	$color: NavbarColors;
	$pattern: ComponentPatterns;
}>`
	display: flex;
	box-sizing: border-box;
	align-items: center;
	padding: 0.8em 2em;
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
	position: relative;
	justify-content: space-between;
`;

export const NavbarItemsContainer = styled.ul<{
	$open: boolean;
	$color: NavbarColors;
	$pattern: ComponentPatterns;
}>`
	display: flex;
	box-sizing: border-box;
	flex-direction: row;
	align-items: center;
	gap: 1em;
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: ${SCREEN_XM}px) {
		flex-direction: column;
		max-height: ${({ $open }) => ($open ? '100vh' : '0')};
		border-top: 2px solid
			${({ $color, theme }) =>
				alterColorEnhanced(getColorScheme($color, theme), 50)};
		position: absolute;
		top: 100%;
		right: 0;
		width: 100%;
		background-color: ${({ $color, theme }) => getColorScheme($color, theme)};
		background-image: ${({ $pattern }) =>
			`url(${getPatternScheme($pattern)});`};
		transition: max-height 0.5s, visibility 0.5s;
		visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
		opacity: ${({ $open }) => ($open ? '1' : '0')};
		z-index: 999;
		overflow-y: hidden;
		overflow-x: hidden;
		padding: 1em;
	}
`;

export const NavbarItemWrapper = styled.li`
	color: ${WHITE};

	@media (max-width: ${SCREEN_XM}px) {
		width: 100%;
		text-align: center;
	}
`;

export const NavItem = styled.span<{
	$color: NavbarColors;
	$background?: string;
}>`
	text-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 1em;
	font-weight: 600;
	display: block;

	background-color: ${({ $color, theme }) =>
		rgba(getColorScheme($color, theme), 0.55)};
	border: 2px solid
		${({ $color, theme }) =>
			alterColorEnhanced(getColorScheme($color, theme), 40)};
	color: ${({ $color }) => ($color === 'warn' ? BLACK : WHITE)};
	border-radius: 0.25em;
	padding: 0.5em 1em;
	cursor: pointer;
	position: relative;
	transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
	box-shadow: 3px 3px
		${({ $color, theme }) =>
			alterColorEnhanced(getColorScheme($color, theme), 40)};

	&:hover {
		box-shadow: inset 3px 3px
			${({ $color, theme }) =>
				alterColorEnhanced(getColorScheme($color, theme), -40)};
		border-color: ${SHADE_6};
		transform: translateY(1px);
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

export const HamburgerMenu = styled.button<{
	$open: boolean;
	$hamburgerIcon: string;
	$closeIcon: string;
	$color: NavbarColors;
}>`
	display: none;
	z-index: 1001;

	width: 1.5rem;
	height: 1.5rem;
	border: none;
	border-radius: 50%;
	cursor: pointer;

	@media (max-width: ${SCREEN_XM}px) {
		display: block;
	}

	mask-image: url(${({ $open, $hamburgerIcon, $closeIcon }) =>
		$open ? $closeIcon : $hamburgerIcon});
	background-color: ${({ $color }) => ($color === 'warn' ? BLACK : WHITE)};
`;

export const NavbarLogoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5em;
	margin-right: 1em;
`;
