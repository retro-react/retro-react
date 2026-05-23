import styled from '@emotion/styled';
import { pressed, raised, sunken } from '../../constants/bevels';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';

export const SliderWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	font-family: ${SYSTEM_FONT};
	padding: 30px 0 20px 0;
`;

export const Slider = styled.input<{
	disabled: boolean;
}>`
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 20px;
	margin: 0;
	outline: none;
	background: transparent;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	position: relative;
	z-index: 1;

	&::-webkit-slider-runnable-track {
		width: 100%;
		height: 6px;
		background: ${WIN31_BUTTON_FACE};
		${sunken}
	}

	&::-moz-range-track {
		width: 100%;
		height: 6px;
		background: ${WIN31_BUTTON_FACE};
		${sunken}
	}

	&::-ms-track {
		width: 100%;
		height: 6px;
		background: ${WIN31_BUTTON_FACE};
		${sunken}
		color: transparent;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 18px;
		height: 18px;
		background: ${WIN31_BUTTON_FACE};
		${raised}
		cursor: ${(props) => (props.disabled ? 'not-allowed' : 'grab')};
		position: relative;
		transition: none;

		background-image: radial-gradient(
			circle at 2px 2px,
			${WIN31_BUTTON_SHADOW} 0.5px,
			transparent 0.5px
		);
		background-size: 4px 4px;
		background-position: 0 0;
	}

	&::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background: ${WIN31_BUTTON_FACE};
		${raised}
		cursor: ${(props) => (props.disabled ? 'not-allowed' : 'grab')};

		background-image: radial-gradient(
			circle at 2px 2px,
			${WIN31_BUTTON_SHADOW} 0.5px,
			transparent 0.5px
		);
		background-size: 4px 4px;
		background-position: 0 0;
	}

	&::-ms-thumb {
		width: 18px;
		height: 18px;
		background: ${WIN31_BUTTON_FACE};
		${raised}
		cursor: ${(props) => (props.disabled ? 'not-allowed' : 'grab')};
		margin-top: 0;

		background-image: radial-gradient(
			circle at 2px 2px,
			${WIN31_BUTTON_SHADOW} 0.5px,
			transparent 0.5px
		);
		background-size: 4px 4px;
		background-position: 0 0;
	}

	&:active::-webkit-slider-thumb {
		${pressed}
		cursor: grabbing;
	}

	&:active::-moz-range-thumb {
		${pressed}
		cursor: grabbing;
	}

	&:active::-ms-thumb {
		${pressed}
		cursor: grabbing;
	}

	&:disabled::-webkit-slider-thumb {
		background: ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW};
		background-image: none;
		box-shadow: none;
	}

	&:disabled::-webkit-slider-runnable-track {
		background: #d0d0d0;
		border-color: #a0a0a0 #e0e0e0 #e0e0e0 #a0a0a0;
	}

	&:disabled::-moz-range-thumb {
		background: ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW};
		background-image: none;
		box-shadow: none;
	}

	&:disabled::-moz-range-track {
		background: #d0d0d0;
		border-color: #a0a0a0 #e0e0e0 #e0e0e0 #a0a0a0;
	}

	&:disabled::-ms-thumb {
		background: ${WIN31_BUTTON_FACE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW};
		background-image: none;
		box-shadow: none;
	}

	&:disabled::-ms-track {
		background: #d0d0d0;
		border-color: #a0a0a0 #e0e0e0 #e0e0e0 #a0a0a0;
	}
`;

export const Tooltip = styled.div<{
	$leftPosition: number;
}>`
	font-family: ${SYSTEM_FONT};
	position: absolute;
	bottom: 100%;
	left: ${(props) => props.$leftPosition}%;
	transform: translate(-50%, -12px);
	background: ${WIN31_BUTTON_FACE};
	${raised}
	padding: 4px 8px;
	font-size: ${FONT_SIZES.NORMAL};
	font-weight: bold;
	color: ${VGA_BLACK};
	pointer-events: none;
	white-space: nowrap;
	z-index: 10;
	min-width: 32px;
	text-align: center;

	${(props) =>
		props.$leftPosition < 10 &&
		`
		left: 10%;
		transform: translate(-10%, -12px);
	`}

	${(props) =>
		props.$leftPosition > 90 &&
		`
		left: 90%;
		transform: translate(-90%, -12px);
	`}
`;

export const TickContainer = styled.div`
	position: absolute;
	top: 12px;
	left: 0;
	right: 0;
	height: 8px;
	pointer-events: none;
`;

export const Tick = styled.div<{
	$position: number;
}>`
	position: absolute;
	left: ${(props) => props.$position}%;
	transform: translateX(-50%);
	width: 1px;
	height: 6px;
	background: ${WIN31_BUTTON_SHADOW};
	border-right: 1px solid ${WIN31_BUTTON_HIGHLIGHT};
`;

export const MarksContainer = styled.div`
	position: absolute;
	top: 32px;
	left: 0;
	right: 0;
	height: 20px;
	pointer-events: none;
`;

export const Mark = styled.div<{
	$position: number;
}>`
	position: absolute;
	left: ${(props) => props.$position}%;
	bottom: 15px;
	transform: translateX(-50%);
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	color: ${VGA_BLACK};
	white-space: nowrap;
	text-align: center;
	background: ${WIN31_BUTTON_HIGHLIGHT};
	padding: 2px 4px;
	z-index: 5;
`;
