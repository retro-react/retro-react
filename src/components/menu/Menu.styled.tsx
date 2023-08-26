import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';

export const MenuContainer = styled.div<{
	$pattern: ComponentPatterns;
	$rounded: boolean;
	$color: ComponentColors | 'greyscale';
}>`
	position: relative;
	display: inline-block;
	background-color: ${(props) =>
		getColorScheme(props.$color, props.theme) || props.$color};

	background-image: ${(props) => `
		linear-gradient(
				${rgba(getColorScheme(props.$color, props.theme) || props.$color, 0.7)},
				${rgba(getColorScheme(props.$color, props.theme) || props.$color, 0.7)}
		), url(${getPatternScheme(props.$pattern)})
`};

	box-shadow: inset 1px 1px 2px ${rgba(BLACK, 0.2)},
		inset -1px -1px 2px ${rgba(WHITE, 0.2)};
	border: 2px solid
		${(props) => getColorScheme(props.$color, props.theme) || props.$color};
	border-radius: ${(props) => (props.$rounded ? '0.5rem' : '0')};

	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 1rem;
	overflow: auto;

	& .menu-item {
		color: ${({ $color }) => ($color === 'warn' ? BLACK : WHITE)};
	}
`;

export const MenuStyled = styled.ul`
	min-width: 140px;
	padding: 8px 12px;
	background-color: ${rgba(BLACK, 0.1)};
	list-style: none;
	margin: 0;

	${MenuContainer}:hover & {
		display: block;
	}
`;
export const MenuItemDivider = styled.hr<{
	$color: ComponentColors | 'greyscale';
}>`
	border: 1px solid
		${(props) =>
			alterColorEnhanced(getColorScheme(props.$color, props.theme), 20)};
	margin: 0.5rem 0;
`;

export const MenuItem = styled.li`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	padding: 0.3rem 0.5rem;
	background-color: transparent;

	&:hover {
		background-color: ${rgba(BLACK, 0.2)};
	}

	&:active {
		background-color: ${rgba(BLACK, 0.3)};
	}

	&:not(:last-child) {
		margin-bottom: 0.3rem;
	}
`;
