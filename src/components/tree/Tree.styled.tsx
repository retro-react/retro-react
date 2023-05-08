import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SHADE_3,
	SUCCESS,
	WARN,
} from '@src/constants/colors';
import { TreeColor } from './Tree';

const selectColorStyles = {
	primary: PRIMARY,
	secondary: SECONDARY,
	success: SUCCESS,
	error: ERROR,
	warn: WARN,
	greyscale: SHADE_3,
	none: 'transparent',
};

export const TreeContainer = styled.section<{
	$color: TreeColor;
}>`
	font-family: 'Trebuchet MS', sans-serif;

	${({ $color }) => `
		background-color: ${alterColorEnhanced(selectColorStyles[$color], 50)};
		border: 1px solid ${selectColorStyles[$color]};
	`};
`;

export const TreeNodeContainer = styled.section<{
	$collapsed: boolean;
	$color: TreeColor;
}>`
	font-size: 1rem;
	box-sizing: border-box;
	border: 1px solid ${({ $color }) => selectColorStyles[$color]};
	padding: 4px;

	${({ $collapsed, $color }) =>
		$collapsed &&
		`
    background-color: ${alterColorEnhanced(selectColorStyles[$color], 25)};
  `};

	&:not(:last-child) {
		border-bottom: none;
	}
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

export const NodeContainer = styled.div`
	opacity: 0;
	max-height: 0;
	overflow: auto;
	transition: opacity 0.1s ease-in-out, max-height 0.2s ease-in-out;

	&::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}

	/* Firefox */
	scrollbar-width: none;

	/* Internet Explorer */
	-ms-overflow-style: none;

	&.tree-expanded {
		opacity: 1;
		max-height: 1000px;
	}
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
	fill: ${({ $color }) =>
		$color ? alterColorEnhanced(selectColorStyles[$color], -100) : 'black'};
	transform-origin: center;
	transform: ${({ $collapsed }) =>
		$collapsed ? 'rotate(-90deg) translateX(-0.1rem)' : 'rotate(0deg)'};

	transition: transform 0.15s ease-in-out;
`;
