import styled from '@emotion/styled';
import { lighten } from 'polished';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, WHITE } from '@src/constants/colors';

export const StepperWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Step = styled.div<{ active: boolean; color: ComponentColors }>`
	padding: 0.2em;
	border-radius: 50%;
	margin-right: 1em;
	width: 20px;
	height: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ active, color, theme }) =>
		active
			? getColorScheme(color, theme)
			: rgba(alterColorEnhanced(getColorScheme(color, theme)), 0.9)};
	color: ${({ active, color, theme }) =>
		active && color === 'warn'
			? BLACK
			: active
			? WHITE
			: lighten(0.3, getColorScheme(color, theme))};

	transition: color 350ms ease-in-out, background-color 150ms ease-in-out;
`;

export const StepConnector = styled.div<{
	color: ComponentColors;
	$showLabels: boolean;
}>`
	flex-grow: 1;
	border-bottom: 1px solid
		${({ color, theme }) =>
			rgba(alterColorEnhanced(getColorScheme(color, theme)), 0.9)};
	margin-left: -10px;
	margin-right: 10px;

	${({ $showLabels }) => $showLabels && 'margin-bottom: 1.8em;'}
`;

export const StepContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StepLabel = styled.p<{
	active: boolean;
	color: ComponentColors;
}>`
	height: 1em;
	width: 4em;
	margin-top: 0.3em;
	margin-bottom: 1em;
	margin-left: -1em;
	font-size: 0.8em;
	text-align: center;
	color: ${({ active, color, theme }) =>
		active
			? getColorScheme(color, theme)
			: color === 'warn'
			? BLACK
			: lighten(0.3, getColorScheme(color, theme))};

	transition: color 350ms ease-in-out, background-color 150ms ease-in-out;
`;

export const StepWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
