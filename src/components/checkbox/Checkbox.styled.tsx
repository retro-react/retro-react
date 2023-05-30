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
		content: '';
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="16" height="16" viewBox="0 0 16 16"%3E%3Cpath fill="${(
			props,
		) =>
			`%23${alterColorEnhanced(
				getColorScheme(props.$color, props.theme),
				75,
			).substring(
				1,
			)}`}" d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.499.499 0 0 0-.707 0L8 5L3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.499.499 0 0 0 0 .707L5 8L.146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.499.499 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.499.499 0 0 0 0-.707z"%2F%3E%3C%2Fsvg%3E');

		position: absolute;
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
