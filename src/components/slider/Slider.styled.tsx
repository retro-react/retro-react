import styled from '@emotion/styled';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { PRIMARY, WHITE } from '@src/constants/colors';

const commonTrackStyles = `
  width: 100%;
  height: 0.5rem;
  cursor: pointer;
  background-image: url(${getPatternScheme('noise')});
  background-color: ${WHITE};
  border-radius: 0.5rem;
`;

export const SliderWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const Slider = styled.input<{
	$color: ComponentColors;
	$value: number;
	disabled: boolean;
}>`
	-webkit-appearance: none;
	appearance: none;
	${commonTrackStyles}
	margin: 1rem 0;
	outline: none;
	font-size: 1.5rem;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: ${(props) => getColorScheme(props.$color, props.theme)};
		cursor: pointer;
		transform: translateY(-25%);
		transition: transform 0.2s, background-color 0.2s;
		cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

		&::before {
			content: '';
			position: absolute;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			background-color: transparent;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	&::-moz-range-thumb {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: ${PRIMARY};
		cursor: pointer;
		transition: transform 0.2s, background-color 0.2s;
	}

	&::-ms-thumb {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: ${PRIMARY};
		cursor: pointer;
		margin-top: 0;
		transition: transform 0.2s, background-color 0.2s;
	}

	&::-webkit-slider-runnable-track {
		${commonTrackStyles}
	}

	&::-moz-range-track {
		${commonTrackStyles}
	}

	&::-ms-track {
		${commonTrackStyles}
	}
`;
