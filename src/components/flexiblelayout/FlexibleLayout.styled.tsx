import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SCREEN_LG } from '@src/constants/breakpoints';
import { WHITE } from '@src/constants/colors';

const flexibleLayoutCell = css`
	background-color: ${WHITE};
	padding: 1rem;
`;

export const FlexibleLayout = styled.div`
	display: grid;
	height: 100%;
	width: 100%;

	grid-template-areas:
		'header'
		'main-content'
		'sidebar-left'
		'sidebar-right'
		'footer';
	grid-template-columns: 1fr;
	grid-template-rows: auto auto 1fr auto auto;
	background-color: ${WHITE};

	@media only screen and (min-width: ${SCREEN_LG}px) {
		grid-template-areas:
			'header header header'
			'sidebar-left main-content sidebar-right'
			'footer footer footer';
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr auto;
	}
`;

export const Header = styled.header`
	grid-area: header;
	${flexibleLayoutCell}
`;

export const Footer = styled.footer`
	grid-area: footer;
	${flexibleLayoutCell}
`;

export const SidebarLeft = styled.aside`
	grid-area: sidebar-left;
	${flexibleLayoutCell}
`;

export const SidebarRight = styled.aside`
	grid-area: sidebar-right;
	${flexibleLayoutCell}
`;

export const Content = styled.main`
	grid-area: main-content;
	${flexibleLayoutCell}
`;
