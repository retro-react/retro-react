import styled from '@emotion/styled';
import '../fonts.css';

export const Input = styled.input`
	padding: 0.5rem;
	border-radius: 0;

	background: url(https://grainy-gradients.vercel.app/noise.svg);
	font-family: 'FrauncesLatin', sans-serif;
	box-shadow: inset 1px 1px 2px #000000, inset -1px -1px 2px #ffffff;
	text-shadow: 1x 1x 2px rgba(0, 0, 0, 0.5);

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus {
		outline: none;
	}
`;
