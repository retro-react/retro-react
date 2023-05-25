import styled from '@emotion/styled';
import getColorScheme from '@src/utils/getColorScheme';
import type { ButtonColor, ButtonVariant } from './Button';
import { getTheme } from './themes';

export const Button = styled.button<{
	$color: ButtonColor;
	variant: ButtonVariant;
	$disableClickEffect?: boolean;
}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: auto;
	width: fit-content;
	min-width: 6rem;
	outline: 0;
	border: 2px outset ${(props) => getColorScheme(props.$color, props.theme)};
	padding: 0.5rem 1.5rem;
	font-size: 0.875rem;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	cursor: pointer;
	${(props) => getTheme(props.$color, props.variant, props.theme)}

	${(props) =>
		!props.$disableClickEffect &&
		`
		transition: transform 0.1s, box-shadow 0.1s;

		&:active:not(:disabled) {
			transform: scale(0.98);
			box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.1);
		}
	`}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&.retro-active {
		transform: scale(0.98);
		box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.1);
	}
`;
