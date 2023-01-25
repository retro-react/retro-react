import styled from '@emotion/styled';
import '../fonts.css';

export const Box = styled.div<{
	$color: string;
	$borderSize: string;
}>`
	background-image: url(https://grainy-gradients.vercel.app/noise.svg);
	background-color: ${(props) => props.$color};
	position: relative;
	color: #333333;
	padding: 1rem;
	border-radius: 0;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	font-family: Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: bold;

	outline: ${(props) => props.$borderSize} solid transparent;

	&:before {
		background: linear-gradient(to top left, #3d3c42 50%, #d8d8d8 50%);
		box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px #ffffff;
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		padding: ${(props) => props.$borderSize};
		left: -${(props) => props.$borderSize};
		top: -${(props) => props.$borderSize};
		z-index: -1;
	}
`;
