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
	font-family: 'FrauncesLatin', sans-serif;
`;

export const TabList = styled.div<{ $color: ComponentColors }>`
	display: flex;
	border-bottom: 1px solid ${(props) => getColorScheme[props.$color]};
`;

export const TabItem = styled.button<{
	$color: ComponentColors;
	$isActive: boolean;
}>`
	border: none;
	padding: 0.5rem 1rem;
	background-color: ${(props) =>
		props.$isActive ? getColorScheme[props.$color] : 'transparent'};
	color: ${(props) => (props.$isActive ? WHITE : getColorScheme[props.$color])};
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${(props) => getColorScheme[props.$color]};
		color: ${WHITE};
	}
`;

export const TabContent = styled.div`
	padding: 1rem;
`;

export const TabsHeader = styled.div<{
	$color: ComponentColors;
	$pattern: ComponentPatterns;
}>`
	display: flex;
	background-color: ${(props) => getColorScheme(props.$color)};
	background: ${(props) => `linear-gradient(${rgba(
		getColorScheme(props.$color),
		0.55,
	)}, ${rgba(getColorScheme(props.$color), 0.7)}),
		url(${getPatternScheme(props.$pattern)})`};

	border-bottom: 2px solid
		${(props) => alterColorEnhanced(getColorScheme(props.$color), 50)};

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
	$color: ComponentColors;
	isActive?: boolean;
	label: string;
}>`
	display: inline-block;
	padding: 10px 20px;
	cursor: pointer;

	color: ${WHITE};
	text-shadow: 0 0 4px ${BLACK};

	background-color: ${({ isActive, $color }) =>
		isActive ? getColorScheme($color) : 'transparent'};

	&:hover {
		background-color: ${({ $color }) =>
			alterColorEnhanced(getColorScheme($color), 50)};
	}
`;

export const TabContentWrapper = styled.div<{
	label: string;
}>`
	padding: 20px;
	border: 1px solid ${SHADE_2};
	border-top: none;
`;
