import styled from '@emotion/styled';
import {
	VGA_BLACK,
	VGA_BLUE,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';

export type TreeVariant = 'default' | 'file-manager' | 'explorer';

// Get authentic retro colors for tree variants
const getTreeColors = (variant: TreeVariant) => {
	switch (variant) {
		case 'file-manager':
			return {
				background: VGA_WHITE,
				text: VGA_BLACK,
				border: VGA_BLACK,
				selected: VGA_BLUE,
				selectedText: VGA_WHITE,
			};
		case 'explorer':
			return {
				background: WIN31_BUTTON_FACE,
				text: VGA_BLACK,
				border: WIN31_BUTTON_SHADOW,
				selected: VGA_BLUE,
				selectedText: VGA_WHITE,
			};
		default:
			return {
				background: VGA_WHITE,
				text: VGA_BLACK,
				border: VGA_BLACK,
				selected: VGA_BLUE,
				selectedText: VGA_WHITE,
			};
	}
};

export const NodeIcon = styled.span`
	display: inline-block;
	width: 16px;
	height: 16px;
	margin-right: 4px;
	font-size: 12px;
	line-height: 16px;
	text-align: center;
	vertical-align: middle;
`;

export const TreeContainer = styled.section<{
	$variant: TreeVariant;
}>`
	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	background: ${({ $variant }) => getTreeColors($variant).background};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};

	/* Authentic Windows 3.1 sunken panel styling */
	box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.3),
		inset -1px -1px 0 rgba(255, 255, 255, 0.1);

	overflow: auto;
	min-height: 200px;

	/* Retro scrollbar styling */
	::-webkit-scrollbar {
		width: 16px;
		background: ${WIN31_BUTTON_FACE};
	}

	::-webkit-scrollbar-track {
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid ${WIN31_BUTTON_SHADOW};
	}

	::-webkit-scrollbar-thumb {
		background: ${WIN31_BUTTON_FACE};
		border: 1px solid;
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	}
`;

export const TreeNodeContainer = styled.section<{
	$collapsed: boolean;
	$variant: TreeVariant;
	$selected?: boolean;
}>`
	position: relative;
	font-size: 11px;
	box-sizing: border-box;
	background: ${({ $selected, $variant }) =>
		$selected ? getTreeColors($variant).selected : 'transparent'};
	color: ${({ $selected, $variant }) =>
		$selected
			? getTreeColors($variant).selectedText
			: getTreeColors($variant).text};
	border: none;
	padding: 0;
	margin: 0;

	&:hover {
		background: ${({ $selected, $variant }) =>
			$selected ? getTreeColors($variant).selected : 'rgba(0, 0, 128, 0.1)'};
	}
`;

export const TreeLine = styled.div<{ $show: boolean }>`
	display: ${({ $show }) => ($show ? 'block' : 'none')};
	border-left: 1px dashed ${VGA_BLACK};
	height: 100%;
	position: absolute;
	left: 8px;
	top: 0;
	z-index: 1;
`;

export const NodeLabel = styled.div<{
	$collapsible: boolean;
	$variant: TreeVariant;
	$selected?: boolean;
}>`
	cursor: ${({ $collapsible }) => ($collapsible ? 'pointer' : 'default')};
	user-select: none;
	font-weight: normal;
	position: relative;
	font-size: 11px;
	font-family: ${SYSTEM_FONT};
	margin: 0;
	padding: 2px 4px;
	display: flex;
	align-items: center;
	min-height: 16px;
	background: ${({ $selected, $variant }) =>
		$selected ? getTreeColors($variant).selected : 'transparent'};
	color: ${({ $selected, $variant }) =>
		$selected
			? getTreeColors($variant).selectedText
			: getTreeColors($variant).text};

	&:hover {
		background: ${({ $selected, $variant }) =>
			$selected ? getTreeColors($variant).selected : 'rgba(0, 0, 128, 0.1)'};
	}
`;

export const NodeContent = styled.div`
	margin-left: 20px;
	padding: 2px 4px;
	font-family: ${SYSTEM_FONT};
	font-size: 11px;
	line-height: 1.2;
`;

export const TreeNodeWrapper = styled.div<{
	$expanded: boolean;
}>`
	display: ${({ $expanded }) => ($expanded ? 'block' : 'none')};
	margin-left: 16px;
`;

export const NodeContainer = styled.div`
	/* Simplified container for retro styling */
`;

export const ChildrenContainer = styled.div`
	/* Children already indented by TreeNodeWrapper */
`;

export const ExpandIcon = styled.span<{
	$variant: TreeVariant;
	$collapsed: boolean;
}>`
	display: inline-block;
	width: 12px;
	height: 12px;
	margin-right: 4px;
	font-family: ${SYSTEM_FONT};
	font-size: 10px;
	font-weight: bold;
	text-align: center;
	line-height: 10px;
	background: ${WIN31_BUTTON_FACE};
	border: 1px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	color: ${VGA_BLACK};
	cursor: pointer;

	/* Authentic Windows 3.1 button styling */
	box-shadow: inset 1px 1px 0 ${WIN31_BUTTON_HIGHLIGHT},
		inset -1px -1px 0 ${WIN31_BUTTON_SHADOW};

	&:active {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
	}
`;
