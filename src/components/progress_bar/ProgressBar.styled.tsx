import styled from '@emotion/styled';
import { PRIMARY } from '@src/constants/colors';
import '../fonts.css';

export const ProgressBarWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const ProgressBar = styled.div<{
	$value: number;
}>`
	background-image: url(https://grainy-gradients.vercel.app/noise.svg);

	background-color: #fff;
	border-radius: 0.5rem;
	border: 0.5rem solid #fff;
	box-shadow: 0 0 0.5rem 0.5rem #fff;
	padding: 1rem;
	font-family: 'FrauncesLatin', sans-serif;
	font-size: 1.5rem;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(https://grainy-gradients.vercel.app/noise.svg);
		background-color: #fff;
		border-radius: 0.5rem;
		border: 0.5rem solid #fff;

		box-shadow: 0 0 0.5rem 0.5rem #fff;
		opacity: 0.5;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: ${(props) => Math.min(Math.max(props.$value, 0), 100)}%;
		height: 100%;
		background-image: url(https://grainy-gradients.vercel.app/noise.svg);
		background-color: ${PRIMARY};
		border-radius: 0.5rem;
		border: 0.5rem solid #fff;
		box-shadow: 0 0 0.5rem 0.5rem #fff;
		opacity: 0.5;
	}
`;
