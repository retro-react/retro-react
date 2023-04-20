import styled from '@emotion/styled';
import { PRIMARY } from '@src/constants/colors';
import '../fonts.css';

export const Modal = styled.div<{
	$color: string;
	$borderSize: string;
	$open: boolean;
}>`
	background-image: url(https://grainy-gradients.vercel.app/noise.svg);
	background-color: ${(props) => props.$color};
	border-radius: 0.5rem;
	border: ${(props) => props.$borderSize} solid ${(props) => props.$color};
	box-shadow: 0 0 0.5rem 0.5rem ${(props) => props.$color};
	padding: 1rem;
	font-family: 'FrauncesLatin', sans-serif;
	font-size: 1.5rem;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	${(props) =>
		props.$open
			? `
		opacity: 1;
		visibility: visible;
		transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
	`
			: `
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
	`}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(https://grainy-gradients.vercel.app/noise.svg);
		background-color: ${(props) => props.$color};
		border-radius: 0.5rem;
		border: 0.5rem solid ${(props) => props.$color};
		box-shadow: 0 0 0.5rem 0.5rem ${(props) => props.$color};
		opacity: 0.5;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 5px;
	width: 2rem;
	height: 2rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1.5rem;
		height: 0.2rem;
		background-color: ${PRIMARY};
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&::after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}
`;
