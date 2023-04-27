import styled from '@emotion/styled';
import { PRIMARY } from '@src/constants/colors';
import '../fonts.css';

export const SliderWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const Slider = styled.input<{
	$value: number;
}>`
	-webkit-appearance: none;
	appearance: none;
	background-image: url(https://grainy-gradients.vercel.app/noise.svg);
	background-color: #fff;
	width: 100%;
	height: 1.5rem;
	border-radius: 0.5rem;
	border: 0.5rem solid #fff;
	box-shadow: 0 0 0.5rem 0.5rem #fff;
	outline: none;
	font-family: 'FrauncesLatin', sans-serif;
	font-size: 1.5rem;
	cursor: pointer;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: ${PRIMARY};
		box-shadow: 0 0 0.5rem 0.5rem #fff;
		cursor: pointer;
		margin-top: -0.25rem;
	}

	&::-moz-range-thumb {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: ${PRIMARY};
		box-shadow: 0 0 0.5rem 0.5rem #fff;
		cursor: pointer;
	}

	&::-ms-thumb {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: ${PRIMARY};
		box-shadow: 0 0 0.5rem 0.5rem #fff;
		cursor: pointer;
		margin-top: 0;
	}

	&::-webkit-slider-runnable-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		background-image: url(https://grainy-gradients.vercel.app/noise.svg);
		background-color: #fff;
		border-radius: 0.5rem;
		border: 0.5rem solid #fff;
		box-shadow: 0 0 0.5rem 0.5rem #fff;
	}

	&::-moz-range-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		background-image: url(https://grainy-gradients.vercel.app/noise.svg);
		background-color: #fff;
		border-radius: 0.5rem;
		border: 0.5rem solid #fff;
		box-shadow: 0 0 0.5rem 0.5rem #fff;
	}

	&::-ms-track {
		width: 100%;
		height: 1.5rem;
		cursor: pointer;
		background-image: url(https://grainy-gradients.vercel.app/noise.svg);
		background-color: #fff;
		border-radius: 0.5rem;
		border: 0.5rem solid #fff;
		box-shadow: 0 0 0.5rem 0.5rem #fff;
		color: transparent;
	}
`;
