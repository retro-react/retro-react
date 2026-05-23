/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import { groove, pressed, raised, sunken } from '../../constants/bevels';
import { SCREEN_XM } from '../../constants/breakpoints';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BLUE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import { NavbarVariant } from './Navbar';

// Get authentic retro colors for navbar variants
const getNavbarColors = (variant: NavbarVariant) => {
	switch (variant) {
		case 'menu-bar':
			return {
				background: WIN31_BUTTON_FACE,
				text: VGA_BLACK,
				border: WIN31_BUTTON_SHADOW,
				highlight: WIN31_BUTTON_HIGHLIGHT,
			};
		case 'status-bar':
			return {
				background: WIN31_BUTTON_FACE,
				text: VGA_BLACK,
				border: WIN31_BUTTON_SHADOW,
				highlight: WIN31_BUTTON_HIGHLIGHT,
			};
		default:
			return {
				background: WIN31_BLUE,
				text: VGA_WHITE,
				border: WIN31_BUTTON_SHADOW,
				highlight: WIN31_BUTTON_HIGHLIGHT,
			};
	}
};

export const NavbarContainer = styled.nav<{
	$variant: NavbarVariant;
}>`
	display: flex;
	box-sizing: border-box;
	align-items: center;
	padding: ${({ $variant }) =>
		$variant === 'menu-bar'
			? '2px 8px'
			: $variant === 'status-bar'
			? '2px 8px'
			: '0.8em 2em'};
	font-family: ${SYSTEM_FONT};
	background: ${({ $variant }) => getNavbarColors($variant).background};
	color: ${({ $variant }) => getNavbarColors($variant).text};

	/* Authentic Windows 3.1 3D edge per variant */
	${({ $variant }) =>
		$variant === 'status-bar'
			? sunken
			: $variant === 'menu-bar'
			? `border-bottom: 1px solid ${WIN31_BUTTON_SHADOW};`
			: groove};

	position: sticky;
	top: 0;
	width: 100%;
	z-index: 1000;
	justify-content: space-between;
	font-size: ${({ $variant }) =>
		$variant === 'menu-bar' ? FONT_SIZES.SMALL : FONT_SIZES.NORMAL};

	/* Responsive adjustments */
	@media (max-width: ${SCREEN_XM}px) {
		padding: 0.6em 1em;
	}
`;

export const NavbarItemsContainer = styled.ul<{
	$open: boolean;
	$variant: NavbarVariant;
}>`
	display: flex;
	box-sizing: border-box;
	flex-direction: ${({ $variant }) =>
		$variant === 'menu-bar' ? 'row' : 'row'};
	align-items: center;
	gap: ${({ $variant }) => ($variant === 'menu-bar' ? '0' : '1em')};
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: ${SCREEN_XM}px) {
		flex-direction: column;
		max-height: ${({ $open }) => ($open ? '100vh' : '0')};
		${sunken}
		position: absolute;
		top: 100%;
		right: 0;
		width: 100%;
		background: ${({ $variant }) => getNavbarColors($variant).background};
		transition: max-height 0.3s ease-in-out, visibility 0.3s ease-in-out;
		visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
		opacity: ${({ $open }) => ($open ? '1' : '0')};
		z-index: 999;
		overflow: hidden;
		padding: 1em;
	}
`;

export const NavbarItemWrapper = styled.li`
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};

	@media (max-width: ${SCREEN_XM}px) {
		width: 100%;
		text-align: center;
		margin-bottom: 0.5em;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

export const NavItem = styled.span<{
	$variant: NavbarVariant;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${({ $variant }) =>
		$variant === 'menu-bar' ? FONT_SIZES.SMALL : FONT_SIZES.NORMAL};
	font-weight: normal;
	display: block;
	background: ${({ $variant }) =>
		$variant === 'menu-bar' ? 'transparent' : WIN31_BUTTON_FACE};
	/* Always have a 2px border to prevent layout shift */
	${({ $variant }) =>
		$variant === 'menu-bar' ? 'border: 2px solid transparent;' : raised};
	color: ${({ $variant }) => getNavbarColors($variant).text};
	padding: ${({ $variant }) =>
		$variant === 'menu-bar' ? '4px 8px' : '0.4em 1em'};
	cursor: pointer;
	position: relative;
	transition: none;
	text-shadow: none;
	margin: ${({ $variant }) => ($variant === 'menu-bar' ? '0 2px' : '0')};

	&:hover {
		background: ${({ $variant }) =>
			$variant === 'menu-bar' ? WIN31_BUTTON_FACE : '#d4d0c8'};
		${({ $variant }) => ($variant === 'menu-bar' ? raised : pressed)};
	}

	&:active {
		background: ${({ $variant }) =>
			$variant === 'menu-bar' ? WIN31_BUTTON_FACE : '#b8b4a8'};
		${pressed};
	}

	& a {
		color: inherit;
		text-decoration: none;
		font-family: ${SYSTEM_FONT};

		&:active,
		&:visited,
		&:focus {
			color: inherit;
		}
	}
`;

export const HamburgerMenu = styled.button<{
	$open: boolean;
	$variant: NavbarVariant;
}>`
	display: none;
	z-index: 1001;
	width: 32px;
	height: 24px;
	${raised}
	background: ${WIN31_BUTTON_FACE};
	cursor: pointer;
	padding: 4px;

	@media (max-width: ${SCREEN_XM}px) {
		display: block;
	}

	&:hover {
		background: #d4d0c8;
	}

	&:active {
		${pressed}
		background: #b8b4a8;
	}

	&::before {
		content: ${({ $open }) => ($open ? '"✕"' : '"☰"')};
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};
		font-size: 16px;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
`;

export const NavbarLogoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5em;
	margin-right: 1em;
`;

export const NavMenuContainer = styled.div`
	position: relative;
	display: inline-block;
`;

export const NavMenuTrigger = styled.span<{
	$variant: NavbarVariant;
	$isOpen: boolean;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: ${({ $variant }) =>
		$variant === 'menu-bar' ? FONT_SIZES.SMALL : FONT_SIZES.NORMAL};
	font-weight: normal;
	display: block;
	background: ${({ $variant, $isOpen }) =>
		$variant === 'menu-bar'
			? $isOpen
				? WIN31_BUTTON_FACE
				: 'transparent'
			: WIN31_BUTTON_FACE};
	/* Always have a 2px border to prevent layout shift */
	${({ $variant, $isOpen }) =>
		$variant === 'menu-bar'
			? $isOpen
				? pressed
				: 'border: 2px solid transparent;'
			: raised};
	color: ${({ $variant }) => getNavbarColors($variant).text};
	padding: ${({ $variant }) =>
		$variant === 'menu-bar' ? '4px 8px' : '0.4em 1em'};
	cursor: pointer;
	position: relative;
	transition: none;
	text-shadow: none;
	margin: ${({ $variant }) => ($variant === 'menu-bar' ? '0 1px' : '0')};

	&:hover {
		background: ${({ $variant }) =>
			$variant === 'menu-bar' ? WIN31_BUTTON_FACE : '#d4d0c8'};
		${pressed};
	}

	&:active {
		background: ${({ $variant }) =>
			$variant === 'menu-bar' ? WIN31_BUTTON_FACE : '#b8b4a8'};
		${pressed};
	}
`;

export const NavMenuDropdown = styled.div<{
	$variant: NavbarVariant;
}>`
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1001;
	${raised}
	background: ${WIN31_BUTTON_FACE};
	min-width: 120px;

	/* Add subtle dithering pattern for authentic WIN31 look */
	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.15) 1px,
		transparent 0
	);
	background-size: 2px 2px;
`;
