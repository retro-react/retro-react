import styled from '@emotion/styled';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';

export const Card = styled.div<{ $color: string }>`
	background-color: ${(props) => props.$color};
	background-image: ${(props) => `
linear-gradient(
	${rgba(props.$color, 0.4)},
	${rgba(props.$color, 0.4)}
), url(${getPatternScheme('stripes')})
`};
	box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.3),
		inset -1px -1px 2px rgba(255, 255, 255, 0.2),
		inset 1px 1px 10px rgba(0, 0, 0, 0.2),
		inset -1px -1px 10px rgba(255, 255, 255, 0.2);
	border: 3px outset ${(props) => props.$color};
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
`;

export const CardImage = styled.img`
	display: block;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;
