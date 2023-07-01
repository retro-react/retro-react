// Tabs.styled.ts
import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, SHADE_2, WHITE } from '@src/constants/colors';

export const TabsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
`;

export const TabList = styled.div<{
	$color: ComponentColors | 'greyscale-dark';
}>`
	display: flex;
	border-bottom: 1px solid
		${(props) => getColorScheme(props.$color, props.theme)};
`;

export const TabItem = styled.button<{
	$color: ComponentColors | 'greyscale-dark';
	$isActive: boolean;
}>`
	border: none;
	padding: 0.5rem 1rem;
	background-color: ${(props) =>
		props.$isActive
			? getColorScheme(props.$color, props.theme)
			: 'transparent'};
	color: ${(props) =>
		props.$isActive ? WHITE : getColorScheme(props.$color, props.theme)};
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${(props) => getColorScheme(props.$color, props.theme)};
		color: ${WHITE};
	}
`;

export const TabContent = styled.div`
	padding: 1rem;
`;

export const TabsHeader = styled.div<{
	$color: ComponentColors | 'greyscale-dark';
	$pattern: ComponentPatterns;
}>`
	display: flex;
	background-color: ${(props) => getColorScheme(props.$color, props.theme)};
	background: ${(props) => `linear-gradient(${rgba(
		getColorScheme(props.$color, props.theme),
		0.55,
	)}, ${rgba(getColorScheme(props.$color, props.theme), 0.7)}),
		url(${getPatternScheme(props.$pattern)})`};

	border-bottom: 2px solid
		${(props) =>
			alterColorEnhanced(getColorScheme(props.$color, props.theme), 50)};

	overflow: auto;

	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: rgba(255, 255, 255, 0.8);
	}

	/* Firefox scrollbar */
	& {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.2);
	}
`;

export const TabWrapper = styled.div<{
	$color: ComponentColors | 'greyscale-dark';
	isActive?: boolean;
	label: string;
}>`
	display: inline-block;
	box-sizing: border-box;
	padding: 10px 20px;
	margin-top: 1px;
	margin-bottom: 1px;
	cursor: pointer;

	color: ${WHITE};
	text-shadow: 0 0 4px ${BLACK};

	background-color: ${({ isActive, $color, theme }) =>
		isActive
			? alterColorEnhanced(getColorScheme($color, theme), 60)
			: 'transparent'};

	&:hover {
		box-shadow: inset 3px 3px
			${({ $color, theme }) =>
				alterColorEnhanced(getColorScheme($color, theme), -40)};
		border-color: ${BLACK};
		transform: translateY(1px);
	}

	${({ isActive, $color, theme }) =>
		isActive &&
		`
		box-shadow: inset 3px 3px ${alterColorEnhanced(
			getColorScheme($color, theme),
			-40,
		)};
		border-color: ${BLACK};
		transform: translateY(1px);
	`}

	&:focus {
		outline: 1px solid
			${({ $color, theme }) =>
				alterColorEnhanced(getColorScheme($color, theme), -30)};
	}

	&:first-child {
		margin-left: 3px;
	}

	&:last-child {
		margin-right: 3px;
	}
`;

export const TabContentWrapper = styled.div<{
	label: string;
}>`
	padding: 20px;
	border: 1px solid ${SHADE_2};
	border-top: none;

	background-color: ${WHITE};
`;
