import styled from '@emotion/styled';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BLUE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';

export type StepperVariant = 'default' | 'process' | 'warning' | 'success';

const getStepperColors = (variant: StepperVariant) => {
	switch (variant) {
		case 'process':
			return {
				active: '#008080',
				completed: '#008000',
				inactive: WIN31_BUTTON_SHADOW,
			};
		case 'warning':
			return {
				active: '#800000',
				completed: '#008000',
				inactive: WIN31_BUTTON_SHADOW,
			};
		case 'success':
			return {
				active: '#008000',
				completed: '#008000',
				inactive: WIN31_BUTTON_SHADOW,
			};
		default:
			return {
				active: WIN31_BLUE,
				completed: '#008000',
				inactive: WIN31_BUTTON_SHADOW,
			};
	}
};

export const StepperWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0;
	font-family: ${SYSTEM_FONT};
	padding: 8px;
`;

export const Step = styled.div<{
	$active: boolean;
	$completed: boolean;
	$variant: StepperVariant;
}>`
	width: 28px;
	height: 28px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	font-weight: bold;
	position: relative;

	box-shadow: inset 1px 1px 0 ${WIN31_BUTTON_HIGHLIGHT},
		inset -1px -1px 0 ${WIN31_BUTTON_SHADOW};

	${({ $active, $variant }) =>
		$active &&
		`
		background: ${getStepperColors($variant).active};
		color: ${VGA_WHITE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		box-shadow:
			inset 1px 1px 0 ${WIN31_BUTTON_SHADOW},
			inset -1px -1px 0 ${WIN31_BUTTON_HIGHLIGHT};
		font-weight: bold;
	`}

	${({ $completed, $active, $variant }) =>
		$completed &&
		!$active &&
		`
		background: ${getStepperColors($variant).completed};
		color: ${VGA_WHITE};
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		box-shadow:
			inset 1px 1px 0 ${WIN31_BUTTON_HIGHLIGHT},
			inset -1px -1px 0 ${WIN31_BUTTON_SHADOW};

		&::after {
			content: '✓';
			position: absolute;
			font-size: 12px;
			font-weight: bold;
		}
	`}

	${({ $active, $completed }) =>
		!$active &&
		!$completed &&
		`
		background: ${WIN31_BUTTON_SHADOW};
		color: ${VGA_WHITE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW};
		box-shadow: none;
		opacity: 0.7;
	`}
`;

export const StepConnector = styled.div<{
	$variant: StepperVariant;
	$showLabels: boolean;
	$completed: boolean;
}>`
	flex: 1;
	height: 2px;
	min-width: 40px;
	background: ${WIN31_BUTTON_SHADOW};
	margin: 14px 4px 0 4px;
	position: relative;
	border: 1px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};

	${({ $completed, $variant }) =>
		$completed &&
		`
		background: ${getStepperColors($variant).completed};
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		height: 3px;
	`}
`;

export const StepLabel = styled.p<{
	$active: boolean;
	$completed: boolean;
	$variant: StepperVariant;
}>`
	margin: 4px 0 0 0;
	font-size: ${FONT_SIZES.TINY};
	font-family: ${SYSTEM_FONT};
	text-align: center;
	max-width: 120px;
	line-height: 1.2;
	word-break: break-word;

	${({ $active, $variant }) =>
		$active &&
		`
		color: ${getStepperColors($variant).active};
		font-weight: bold;
	`}

	${({ $completed, $active, $variant }) =>
		$completed &&
		!$active &&
		`
		color: ${getStepperColors($variant).completed};
		font-weight: normal;
	`}

	${({ $active, $completed }) =>
		!$active &&
		!$completed &&
		`
		color: ${WIN31_BUTTON_SHADOW};
	`}
`;

export const StepWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	min-height: 50px;
`;
