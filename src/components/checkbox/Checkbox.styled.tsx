import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { BLACK } from '@src/constants/colors';
import type { CheckboxColor } from './Checkbox';

export const Checkbox = styled.input<{
	$color: CheckboxColor;
}>`
	/* Reset */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	outline: none;
	/* Custom */
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 0.25rem;
	cursor: pointer;

	background-image: linear-gradient(
			to bottom,
			${(props) =>
				alterColorEnhanced(getColorScheme(props.$color, props.theme), -20)},
			${(props) => getColorScheme(props.$color, props.theme)}
		),
		url(${getPatternScheme('noise')});

	box-shadow: inset 1px 1px 2px ${BLACK} inset -1px -1px 2px
		${(props) => getColorScheme(props.$color, props.theme)};

	&::before {
		content: '✖';
		position: absolute;
		top: 0.25rem;
		left: 0.25rem;
		width: 1rem;
		height: 1rem;
		color: ${(props) =>
			alterColorEnhanced(getColorScheme(props.$color, props.theme), 75)};
		line-height: 1rem;
		text-align: center;
		font-size: 1.3rem;
		font-weight: bold;

		box-shadow: inset 1px 1px 12px ${BLACK} inset -1px -1px 10px
			${(props) => getColorScheme(props.$color, props.theme)};
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}

	&:checked::before {
		opacity: 1;
	}

	&:hover:not([disabled]) {
		opacity: 0.8;
		box-shadow: inset 0 8px 6px -6px ${BLACK};
		filter: saturate(70%);
	}

	&:active:not([disabled]) {
		filter: contrast(60%);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;
