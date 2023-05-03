import styled from '@emotion/styled';
import { MarqueeSize } from './Marquee';

export const MarqueeWrapper = styled.div<{
	$gap: string;
}>`
	display: flex;
	overflow: hidden;
	gap: ${(props) => props.$gap};
`;

export const Marquee = styled.div<{
	$size: MarqueeSize;
	$gap: string;
	$color: string;
	$speed: string;
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: ${(props) =>
		props.$size === 'small'
			? '1rem'
			: props.$size === 'medium'
			? '1.5rem'
			: '2rem'};
	color: ${(props) => props.$color};
	font-weight: 400;

	flex-shrink: 0;
	display: flex;
	justify-content: space-around;
	min-width: 100%;
	gap: ${(props) => props.$gap};

	animation: marquee ${(props) => props.$speed} linear infinite;

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-100% + ${(props) => props.$gap}));
		}
	}
`;
