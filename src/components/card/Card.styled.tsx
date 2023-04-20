import styled from '@emotion/styled';
import '../fonts.css';

export const Card = styled.div<{
	$color: string;
}>`
	background-image: url(https://grainy-gradients.vercel.app/noise.svg);
	background-color: ${(props) => props.$color};
	border-radius: 0.5rem;
	border: 0.5rem solid ${(props) => props.$color};
	box-shadow: 0 0 0.5rem 0.5rem ${(props) => props.$color};
	padding: 1rem;
	font-family: 'FrauncesLatin', sans-serif;
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
	font-weight: 700;
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
