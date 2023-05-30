import styled from '@emotion/styled';
import { darken, lighten } from 'polished';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { DrawerDirection } from './Drawer';

export const DrawerContainer = styled.div<{
	$isOpen: boolean;
	$direction: DrawerDirection;
	$color: string;
}>`
	z-index: 100;
	box-sizing: border-box;
	position: fixed;
	width: 300px;
	height: 100%;
	background-color: ${({ $color, theme }) =>
		alterColorEnhanced(getColorScheme($color, theme), 25)};
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
	transition: transform 0.3s ease-in-out;
	overflow: auto;

	border: 3px dashed
		${({ $color, theme }) => lighten(0.7, getColorScheme($color, theme))};
	box-shadow: inset 0px 0px 10px
		${({ $color, theme }) => darken(0.2, getColorScheme($color, theme))};

	background: linear-gradient(
		135deg,
		${({ $color, theme }) => getColorScheme($color, theme)},
		${({ $color, theme }) =>
			alterColorEnhanced(getColorScheme($color, theme), -20)}
	);

	${({ $isOpen, $direction }) => {
		switch ($direction) {
			case 'left':
				return `
					top: 0;
					left: 0;
					transform: translateX(${!$isOpen ? '-110%' : '0'});
					border: none;
					border-right: 1px dashed
				`;
			case 'right':
				return `
					top: 0;
					right: 0;
					transform: translateX(${!$isOpen ? '110%' : '0'});
					border: none;
					border-left: 1px dashed
				`;
		}
	}};
`;

export const Backdrop = styled.div`
	z-index: 99;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: transparent;
`;
