import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import { MarqueeSize } from './Marquee';

const scroll = keyframes`
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-50%);
	}
`;

export const MarqueeWrapper = styled.div`
	display: flex;
	overflow: hidden;
`;

export const MarqueeTrack = styled.div<{
	$speed: string;
	$pauseOnHover: boolean;
}>`
	display: flex;
	flex-shrink: 0;
	width: max-content;
	animation: ${scroll} ${(props) => props.$speed} linear infinite;

	${(props) =>
		props.$pauseOnHover &&
		`
		&:hover {
			animation-play-state: paused;
		}
	`}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
`;

export const MarqueeContent = styled.div<{
	$size: MarqueeSize;
	$color: string;
	$gap: string;
}>`
	flex-shrink: 0;
	white-space: nowrap;
	padding-right: ${(props) => props.$gap};
	font-family: ${SYSTEM_FONT};
	font-size: ${(props) =>
		props.$size === 'small'
			? FONT_SIZES.NORMAL
			: props.$size === 'medium'
			? FONT_SIZES.LARGE
			: FONT_SIZES.XLARGE};
	color: ${(props) => props.$color};
	font-weight: 400;
`;
