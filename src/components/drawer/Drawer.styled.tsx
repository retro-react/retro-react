import styled from '@emotion/styled';
import { windowFrame } from '../../constants/bevels';
import getColorScheme from '../../utils/getColorScheme';
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
	background-color: ${({ $color, theme }) => getColorScheme($color, theme)};
	${windowFrame};
	transition: transform 0.15s ease-in-out;
	overflow: auto;

	${({ $isOpen, $direction }) => {
		switch ($direction) {
			case 'left':
				return `
					top: 0;
					left: 0;
					transform: translateX(${!$isOpen ? '-110%' : '0'});
				`;
			case 'right':
				return `
					top: 0;
					right: 0;
					transform: translateX(${!$isOpen ? '110%' : '0'});
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
