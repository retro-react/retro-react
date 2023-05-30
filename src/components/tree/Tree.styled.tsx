import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { BLACK } from '@src/constants/colors';
import { TreeColor } from './Tree';

export const TreeContainer = styled.section<{
	$color: TreeColor;
}>`
	font-family: 'Trebuchet MS', sans-serif;

	${({ $color, theme }) => `
		background-color: ${alterColorEnhanced(getColorScheme($color, theme), 50)};
		border: 1px solid ${getColorScheme($color, theme)};
	`};
`;

export const TreeNodeContainer = styled.section<{
	$collapsed: boolean;
	$color: TreeColor;
}>`
	position: relative;
	font-size: 1rem;
	box-sizing: border-box;
	border: 1px solid ${({ $color, theme }) => getColorScheme($color, theme)};
	padding: 4px;

	${({ $collapsed, $color, theme }) =>
		$collapsed &&
		`
    background-color: ${alterColorEnhanced(getColorScheme($color, theme), 25)};
  `};

	&:not(:last-child) {
		border-bottom: none;
	}
`;

export const DottedLine = styled.div<{ $show: boolean }>`
	display: ${({ $show }) => ($show ? 'block' : 'none')};
	border-left: 1px dashed ${BLACK};
	height: 100%;
	position: absolute;
	left: 0;
`;

export const NodeLabel = styled.h3<{ $collapsible: boolean }>`
	cursor: ${({ $collapsible }) => ($collapsible ? 'pointer' : 'default')};
	user-select: none;
	font-weight: ${({ $collapsible }) => ($collapsible ? 'bold' : 'normal')};
	position: relative;

	font-size: 1rem;
	margin: 0;
	padding: 0;
`;

export const NodeContent = styled.div`
	margin-left: 16px;
	padding: 4px;
`;

export const TreeNodeWrapper = styled.div<{
	$expanded: boolean;
}>`
	display: grid;
	grid-template-rows: ${({ $expanded }) => ($expanded ? '1fr' : '0fr')};
	overflow: hidden;
	transition: grid-template-rows 0.2s;
`;

export const NodeContainer = styled.div`
	min-height: 0;

	&::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}

	/* Firefox */
	scrollbar-width: none;

	/* Internet Explorer */
	-ms-overflow-style: none;
`;

export const ChildrenContainer = styled.div`
	margin-left: 16px;
`;

export const ChevronIcon = styled.svg<{
	$color?: TreeColor;
	$collapsed: boolean;
}>`
	width: 1rem;
	height: 1rem;
	fill: ${({ $color, theme }) =>
		$color ? alterColorEnhanced(getColorScheme($color, theme), -100) : 'black'};
	transform-origin: center;
	transform: ${({ $collapsed }) =>
		$collapsed ? 'rotate(-90deg) translateX(-0.1rem)' : 'rotate(0deg)'};

	transition: transform 0.15s ease-in-out;
`;
