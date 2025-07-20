import styled from '@emotion/styled';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';

export type StepperVariant = 'default' | 'process' | 'warning' | 'success';

// Get authentic retro colors for stepper variants
const getStepperColors = (variant: StepperVariant) => {
	switch (variant) {
		case 'process':
			return {
				active: '#000080', // Classic Windows blue
				completed: '#008000', // Windows green
				inactive: WIN31_BUTTON_SHADOW,
			};
		case 'warning':
			return {
				active: '#800000', // Dark red
				completed: '#008000', // Windows green
				inactive: WIN31_BUTTON_SHADOW,
			};
		case 'success':
			return {
				active: '#008000', // Windows green
				completed: '#008000', // Windows green
				inactive: WIN31_BUTTON_SHADOW,
			};
		default:
			return {
				active: '#000080', // Classic Windows blue
				completed: '#008000', // Windows green
				inactive: WIN31_BUTTON_SHADOW,
			};
	}
};

export const StepperWrapper = styled.div`
	display: flex;
	align-items: flex-start; /* Align to top to prevent shifting */
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
	font-size: 11px;
	font-weight: bold;
	position: relative;

	/* Authentic Windows 3.1 button styling */
	box-shadow: inset 1px 1px 0 ${WIN31_BUTTON_HIGHLIGHT},
		inset -1px -1px 0 ${WIN31_BUTTON_SHADOW};

	/* Active step styling - sunken appearance */
	${({ $active, $variant }) =>
		$active &&
		`
		background: ${getStepperColors($variant).active};
		color: ${VGA_WHITE};
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} 
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		box-shadow: 
			inset 2px 2px 2px rgba(0, 0, 0, 0.3),
			inset -1px -1px 0 rgba(255, 255, 255, 0.1);
		font-weight: bold;
	`}

	/* Completed step styling - raised with checkmark */
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
	
	/* Inactive step styling - flat appearance */
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
	margin: 0 4px;
	margin-top: 14px; /* Fixed position from top to align with step centers */
	position: relative;
	border: 1px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};

	/* Completed connector - raised appearance */
	${({ $completed, $variant }) =>
		$completed &&
		`
		background: ${getStepperColors($variant).completed};
		border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} 
			${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
		height: 3px;
	`}
`;

export const StepContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const StepLabel = styled.p<{
	$active: boolean;
	$completed: boolean;
	$variant: StepperVariant;
}>`
	margin: 4px 0 0 0;
	font-size: 10px;
	font-family: ${SYSTEM_FONT};
	text-align: center;
	max-width: 60px;
	white-space: nowrap; /* Prevent wrapping to avoid alignment issues */
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.1;

	/* Active step label */
	${({ $active, $variant }) =>
		$active &&
		`
		color: ${getStepperColors($variant).active};
		font-weight: bold;
	`}

	/* Completed step label */
	${({ $completed, $active, $variant }) =>
		$completed &&
		!$active &&
		`
		color: ${getStepperColors($variant).completed};
		font-weight: normal;
	`}
	
	/* Inactive step label */
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
	min-height: 50px; /* Fixed height to prevent misalignment */
`;
