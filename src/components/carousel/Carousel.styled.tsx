import styled from '@emotion/styled';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { rgba } from '@src/utils/rgba';
import '../fonts.css';
import { CarouselPattern } from './Carousel';

const patternToUrl = (pattern: CarouselPattern) => {
	switch (pattern) {
		case 'noise':
			return 'https://grainy-gradients.vercel.app/noise.svg';
		case 'stripes':
			return require('../../assets/svg/diagonal_line_pattern.svg');
		case 'dots':
		default:
			return require('../../assets/svg/checkboard_pattern.svg');
	}
};

export const CarouselWrapper = styled.div<{
	$color: ComponentColors;
	$pattern: CarouselPattern;
}>`
	position: relative;
	overflow: hidden;
	background-image: ${(props) => `url(${patternToUrl(props.$pattern)})`};
	background-color: ${({ $color }) => getColorScheme($color)};
	display: flex;
	min-height: 0;
	padding: 1rem;
`;

export const CarouselItem = styled.div<{ isActive: boolean }>`
	display: ${(props) => (props.isActive ? 'block' : 'none')};
	width: 100%;
	transition: opacity 0.5s ease-in-out;

	flex-shrink: 0;
	min-height: 0;
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

	background-color: ${(props) => rgba(getColorScheme(props.$color), 0.5)};
	border-radius: 50%;
`;
