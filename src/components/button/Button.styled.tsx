import styled from '@emotion/styled';
import getColorScheme from '@src/utils/getColorScheme';
import { rgba } from '@src/utils/rgba';
import type { ButtonColor, ButtonSize, ButtonVariant } from './Button';
import { getTheme } from './themes';

export const Button = styled.button<{
	$size: ButtonSize;
	$color: ButtonColor;
	variant: ButtonVariant;
	$isButtonGroup?: boolean;
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

	${(props) =>
		props.$isButtonGroup &&
		`
			border-radius: 0;

			&:first-child {
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
			}

			&:last-child {
				border-top-right-radius: 4px;
				border-bottom-right-radius: 4px;
			}
		`}

	padding: ${(props) => {
		switch (props.$size) {
			case 'small':
				return '0.25rem 0.5rem';
			case 'large':
				return '1rem 2rem';
			default:
				return '0.5rem 1rem'; // medium size
		}
	}};

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px
			${(props) => rgba(getColorScheme(props.$color, props.theme), 0.5)};
	}

	&[aria-busy='true'] {
		cursor: progress;
	}
`;
