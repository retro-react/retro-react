import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { SHADE_6, WHITE } from '@src/constants/colors';

export const PagerBody = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	border: 3px solid ${(props) => getColorScheme('greyscale-dark', props.theme)};
	border-radius: 10px;
	padding: 0.5rem;
	background: url(${getPatternScheme('noise')});
	filter: contrast(120%) brightness(100%);
	background-color: ${(props) => getColorScheme('greyscale', props.theme)};
	box-shadow: inset 2px 2px 5px
			${(props) => rgba(getColorScheme('greyscale-dark', props.theme), 0.5)},
		inset -2px -2px 5px
			${(props) => rgba(getColorScheme('greyscale', props.theme), 0.8)};
	margin: 1rem;
	position: relative;
`;

export const PagerScreen = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => getColorScheme('greyscale-dark', props.theme)};
	height: 80px;
	margin: 0.5rem 0;
	padding: 5px;
	border-radius: 5px;
	box-shadow: inset 1px 1px 2px
			${(props) => getColorScheme('greyscale-dark', props.theme)},
		inset -1px -1px 2px ${(props) => getColorScheme('greyscale', props.theme)};
	position: relative;
`;

export const PagerButton = styled.button<{ color: string }>`
	padding: 5px 10px;
	margin: 5px;
	border-radius: 5px;
	background: url(${getPatternScheme('noise')});
	filter: contrast(120%) brightness(100%);
	background-color: ${(props) => getColorScheme(props.color, props.theme)};
	border: 1.5px solid
		${(props) => alterColorEnhanced(getColorScheme(props.color, props.theme))};
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		box-shadow: inset -2px -2px 0px 0px rgba(255, 255, 255, 0.4),
			inset 2px 2px 1px 0px rgba(0, 0, 0, 0.8);
		filter: contrast(120%) saturate(130%);
	}

	&:active {
		box-shadow: inset -2px -2px 0px 0px rgba(255, 255, 255, 0.2),
			inset 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
		filter: contrast(100%);
	}
`;

export const MessageContainer = styled.div`
	overflow: hidden;
	height: 100%;
	width: 100%;
	position: relative;
`;

export const MessageSlide = styled.div<{ visible: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateY(${(props) => (props.visible ? '0%' : '100%')});
	transition: transform 0.3s;
	font-family: 'Courier New', Courier, monospace;
	color: ${WHITE};
	text-shadow: 1px 1px 2px ${SHADE_6};
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	padding-top: 0.5rem;
`;
