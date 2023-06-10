import styled from '@emotion/styled';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { SHADE_4, WHITE } from '@src/constants/colors';

export const CarouselWrapper = styled.div<{
	$color: ComponentColors;
	$pattern: ComponentPatterns;
}>`
	position: relative;
	overflow: hidden;
	background-image: ${(props) => `url(${getPatternScheme(props.$pattern)})`};
	background-color: ${({ $color, theme }) => getColorScheme($color, theme)};
	width: 100%;
`;

export const CarouselNav = styled.div`
	position: absolute;
	bottom: 5%;
	left: 50%;
	transform: translateX(-50%);
`;

export const CarouselDot = styled.button<{ isActive: boolean }>`
	position: relative;
	width: 0.3em;
	aspect-ratio: 1;
	margin: 0 0.5rem;
	background: ${({ isActive }) =>
		isActive ? rgba(WHITE, 0.7) : rgba(SHADE_4, 0.5)};
	border: none;
	border-radius: 50%;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;

export const CarouselTrack = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	transition: transform 0.5s ease-in-out;
`;

export const CarouselItem = styled.div`
	width: 100%;
	flex-shrink: 0;

	& > * {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& img {
		max-width: 100%;
		height: auto;
	}
`;

export const CarouselButton = styled.button<{
	$position: 'left' | 'right';
}>`
	position: absolute;
	top: 50%;
	${(props) => props.$position}: 0;
	transform: translateY(-50%);
	border: none;
	border-radius: 50%;
	padding: 0.5rem;
	cursor: pointer;

	background: none;

	&:focus {
		outline: none;
	}
`;

export const CarouselButtonIcon = styled.img<{
	$position: 'left' | 'right';
	$color: ComponentColors;
}>`
	width: 2rem;
	height: 2rem;

	transform: ${(props) =>
		props.$position === 'left' ? 'rotate(180deg)' : 'none'};

	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: ${(props) =>
			props.$position === 'left' ? 'rotate(180deg) scale(1.1)' : 'scale(1.1)'};
	}

	&:active {
		transform: ${(props) =>
			props.$position === 'left' ? 'rotate(180deg) scale(0.8)' : 'scale(0.8)'};
	}

	background-color: ${(props) =>
		rgba(getColorScheme(props.$color, props.theme), 0.5)};
	border-radius: 50%;
`;
