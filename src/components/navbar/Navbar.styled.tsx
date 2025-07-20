/** @jsxImportSource theme-ui */
import styled from '@emotion/styled';
import { SCREEN_XM } from '@src/constants/breakpoints';
import {
	VGA_BLACK,
	VGA_BLUE,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';
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
				background: VGA_BLUE,
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
	border: ${({ $variant }) =>
		$variant === 'menu-bar'
			? 'none'
			: $variant === 'status-bar'
			? '2px solid'
			: '1px solid'};
	border-color: ${({ $variant }) =>
		$variant === 'status-bar'
			? `${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}`
			: WIN31_BUTTON_SHADOW};
	border-bottom: ${({ $variant }) =>
		$variant === 'menu-bar'
			? `1px solid ${WIN31_BUTTON_SHADOW}`
			: $variant === 'status-bar'
			? 'inherit'
			: `2px solid ${WIN31_BUTTON_SHADOW}`};
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 1000;
	justify-content: space-between;
	font-size: ${({ $variant }) => ($variant === 'menu-bar' ? '11px' : '12px')};

	/* Authentic Windows 3.1 effects */
	box-shadow: ${({ $variant }) =>
		$variant === 'status-bar'
			? 'inset 2px 2px 2px rgba(0, 0, 0, 0.3)'
			: $variant === 'menu-bar'
			? 'none'
			: '0 1px 0 rgba(255, 255, 255, 0.3)'};

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
		border: 2px solid;
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
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
		box-shadow: inset 1px 1px 0px ${WIN31_BUTTON_HIGHLIGHT};
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
	font-size: ${({ $variant }) => ($variant === 'menu-bar' ? '11px' : '12px')};
	font-weight: normal;
	display: block;
	background: ${({ $variant }) =>
		$variant === 'menu-bar' ? 'transparent' : WIN31_BUTTON_FACE};
	/* Always have border to prevent layout shift */
	border: ${({ $variant }) =>
		$variant === 'menu-bar' ? '1px solid' : '2px solid'};
	border-color: ${({ $variant }) =>
		$variant === 'menu-bar'
			? 'transparent'
			: `${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}`};
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
		border-color: ${({ $variant }) =>
			$variant === 'menu-bar'
				? `${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}`
				: `${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}`};
	}

	&:active {
		background: ${({ $variant }) =>
			$variant === 'menu-bar' ? '#c0c0c0' : '#b8b4a8'};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
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
	width: 2rem;
	height: 1.5rem;
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	background: ${WIN31_BUTTON_FACE};
	cursor: pointer;
	padding: 0.25rem;

	@media (max-width: ${SCREEN_XM}px) {
		display: block;
	}

	&:hover {
		background: #d4d0c8;
	}

	&:active {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		background: #b8b4a8;
	}

	&::before {
		content: ${({ $open }) => ($open ? '"✕"' : '"☰"')};
		color: ${VGA_BLACK};
		font-family: ${SYSTEM_FONT};
		font-size: 1rem;
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
	font-size: ${({ $variant }) => ($variant === 'menu-bar' ? '11px' : '12px')};
	font-weight: normal;
	display: block;
	background: ${({ $variant, $isOpen }) =>
		$variant === 'menu-bar'
			? $isOpen
				? WIN31_BUTTON_FACE
				: 'transparent'
			: WIN31_BUTTON_FACE};
	/* Always have border to prevent layout shift */
	border: ${({ $variant }) =>
		$variant === 'menu-bar' ? '1px solid' : '2px solid'};
	border-color: ${({ $variant, $isOpen }) =>
		$variant === 'menu-bar'
			? $isOpen
				? `${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}`
				: 'transparent'
			: `${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}`};
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
		border-color: ${({ $variant }) =>
			$variant === 'menu-bar'
				? `${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}`
				: `${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}`};
	}

	&:active {
		background: ${({ $variant }) =>
			$variant === 'menu-bar' ? '#c0c0c0' : '#b8b4a8'};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	}
`;

export const NavMenuDropdown = styled.div<{
	$variant: NavbarVariant;
}>`
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1001;
	background: ${WIN31_BUTTON_FACE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	min-width: 120px;

	/* Add subtle dithering pattern for authentic WIN31 look */
	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.15) 1px,
		transparent 0
	);
	background-size: 2px 2px;
`;
