import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { BLACK } from '@src/constants/colors';

export const RadioGroup = styled.fieldset`
	border: none;
	padding: 0;
	margin: 0;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Radio = styled.input<{ $color: ComponentColors | 'greyscale' }>`
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
	height: 20px;
	width: 20px;
	border-radius: 50%; // round corners
	cursor: pointer;
	padding: 0;

	background-image: linear-gradient(
			to bottom,
			${(props) =>
				alterColorEnhanced(
					getColorScheme(
						props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
						props.theme,
					),
					-20,
				)},
			${(props) =>
				getColorScheme(
					props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
					props.theme,
				)}
		),
		url(${getPatternScheme('noise')});

	box-shadow: inset 1px 1px 2px ${BLACK} inset -1px -1px 2px
		${(props) =>
			getColorScheme(
				props.$color === 'greyscale' ? 'greyscale-dark' : props.$color,
				props.theme,
			)};

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: ${(props) =>
			alterColorEnhanced(getColorScheme(props.$color, props.theme), 75)};
		transform: translate(-50%, -50%);
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}

	&:checked::after {
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

	&:focus {
		outline: 2px solid ${(props) => getColorScheme(props.$color, props.theme)};
		box-shadow: 0 0 5px ${(props) => getColorScheme(props.$color, props.theme)};
	}
`;

export const RadioWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const RadioLabel = styled.label`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 1rem;
`;
