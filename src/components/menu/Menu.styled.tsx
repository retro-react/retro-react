import styled from '@emotion/styled';

export const MenuContainer = styled.div`
	position: relative;
	display: inline-block;
	background-color: #c0c0c0;
	border: 2px solid;
	border-color: #ffffff #808080 #808080 #ffffff;
	font-family: 'MS Sans Serif', sans-serif;
	font-size: 11px;
	min-width: 150px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

	/* Add subtle dithering pattern for authentic WIN31 look */
	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.15) 1px,
		transparent 0
	);
	background-size: 2px 2px;
`;

export const MenuStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding: 2px;
	background-color: #c0c0c0;
`;

export const MenuItemDivider = styled.hr`
	border: none;
	border-top: 1px solid #808080;
	border-bottom: 1px solid #ffffff;
	margin: 2px 4px;
	height: 0;
`;

export const MenuItem = styled.li`
	font-family: 'MS Sans Serif', sans-serif;
	font-size: 11px;
	padding: 4px 16px;
	background-color: transparent;
	color: #000000;
	cursor: pointer;
	position: relative;
	line-height: 1.2;

	&:hover {
		background-color: #0000ff;
		color: #ffffff;
	}

	&:active {
		background-color: #000080;
		color: #ffffff;
	}

	/* Add keyboard focus indicator */
	&:focus {
		outline: 1px dotted #000000;
		outline-offset: -1px;
	}

	&:hover:focus {
		outline-color: #ffffff;
	}
`;
