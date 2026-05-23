import styled from '@emotion/styled';
import { Flex } from 'theme-ui';
import { pressed, sunken } from '../../constants/bevels';
import { VGA_BLACK, WHITE } from '../../constants/colors';
import getColorScheme from '../../utils/getColorScheme';
import type { CheckboxColor } from './Checkbox';

const encodeSvgColor = (color: string) => `%23${color.substring(1)}`;

export const Checkbox = styled.input<{
	$color: CheckboxColor;
}>`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin: 0;
	outline: none;

	position: relative;
	box-sizing: border-box;
	height: 20px;
	width: 20px;
	cursor: pointer;
	background-color: ${WHITE};
	${sunken}

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 14px;
		height: 14px;
		opacity: 0;
	}

	&:checked::before {
		opacity: 1;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox="0 0 16 16" fill="${(
			props,
		) =>
			encodeSvgColor(
				getColorScheme(props.$color, props.theme),
			)}"%3E%3Cpath d="M6.61,11.72,3.35,8.47,2,9.82l4.61,4.61L18,3.06,16.65,1.71Z"/%3E%3C/svg%3E');
	}

	&:indeterminate::before {
		opacity: 1;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox="0 0 16 16" fill="${(
			props,
		) =>
			encodeSvgColor(
				getColorScheme(props.$color, props.theme),
			)}"%3E%3Cpath d="M2 8h12v2H2z"/%3E%3C/svg%3E');
	}

	&:active:not([disabled]) {
		${pressed}
	}

	&:focus-visible {
		outline: 1px dotted ${(props) => getColorScheme(props.$color, props.theme)};
		outline-offset: 2px;
	}

	&:disabled {
		cursor: not-allowed;
		filter: grayscale(80%);
		opacity: 0.6;
	}
`;

export const CheckboxWrapper = styled(Flex)`
	align-items: center;
`;

export const CheckboxLabel = styled.label<{
	$color: CheckboxColor;
}>`
	display: inline-flex;
	align-items: center;
	cursor: pointer;
	gap: 8px;
	color: ${VGA_BLACK};

	&:active ${Checkbox}:not([disabled]) {
		${pressed}
	}
`;
