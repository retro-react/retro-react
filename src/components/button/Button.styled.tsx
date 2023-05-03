import styled from '@emotion/styled';
import type { ButtonColor, ButtonVariant } from './Button';
import { getColorScheme, getTheme } from './themes';

export const Button = styled.button<{
	$color: ButtonColor;
	variant: ButtonVariant;
}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: auto;
	outline: 0;
	border: 2px outset ${(props) => getColorScheme(props.$color)};
	padding: 0.5rem 1.5rem;
	font-size: 0.875rem;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	cursor: pointer;
	${(props) => getTheme(props.$color, props.variant)}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;
