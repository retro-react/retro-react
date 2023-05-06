import styled from '@emotion/styled';
import getColorScheme from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';

export const Card = styled.div<{ $pattern: ComponentPatterns; $color: string }>`
	background-color: ${(props) => getColorScheme(props.$color) || props.$color};
	background-image: ${(props) => `
linear-gradient(
	${rgba(getColorScheme(props.$color) || props.$color, 0.7)},
	${rgba(getColorScheme(props.$color) || props.$color, 0.7)}
), url(${getPatternScheme(props.$pattern)})
`};
	filter: brightness(1.3);
	box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.3),
		inset -1px -1px 2px rgba(255, 255, 255, 0.2),
		inset 1px 1px 10px rgba(0, 0, 0, 0.2),
		inset -1px -1px 10px rgba(255, 255, 255, 0.2);
	border: 3px outset ${(props) => getColorScheme(props.$color) || props.$color};
	border-radius: 0.5rem;
	padding: 1rem;
	font-family: 'Comic Sans MS', sans-serif;
	font-size: 1rem;
	overflow: auto;
	display: flex;
	flex-direction: column;
`;

export const CardContent = styled.div`
	margin-bottom: 1rem;
	flex: 1;
`;

export const CardTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: bold;
`;

export const CardImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	object-fit: cover;

	& > * {
		max-width: 100%;
		max-height: 100%;
	}
`;

export const CardImage = styled.img`
	display: block;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
	overflow: hidden;
`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;
