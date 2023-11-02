import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { WHITE } from '@src/constants/colors';

const textFlickerEffect = keyframes`
	from {
		text-shadow: 1px 0 0 #ea36af, -2px 0 0 #75fa69;
	}
	to {
		text-shadow: 2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69;
	}
`;

export const PagerBody = styled.div<{
	$color: ComponentColors | 'greyscale' | 'greyscale-dark';
}>`
	display: flex;
	flex-direction: column;
	width: 200px;
	border: 3px solid ${(props) => getColorScheme('greyscale-dark', props.theme)};
	border-radius: 10px;
	padding: 0.5rem;
	background: url(${getPatternScheme('noise')});
	filter: contrast(120%) brightness(100%);
	background-color: ${(props) =>
		alterColorEnhanced(getColorScheme(props.$color, props.theme), -30)};
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
			${(props) => getColorScheme('greyscale', props.theme)},
		inset -1px -1px 2px
			${(props) => getColorScheme('greyscale-dark', props.theme)};
	position: relative;
	color: white;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 18px;
	text-align: center;
`;

export const PagerButton = styled.button<{ color: string }>`
	padding: 5px 10px;
	margin: 5px;
	border-radius: 5px;
	background: url(${getPatternScheme('solid')});
	color: ${WHITE};
	filter: contrast(120%) brightness(100%);
	background-color: ${(props) => getColorScheme(props.color, props.theme)};
	border: 1.5px solid
		${(props) => alterColorEnhanced(getColorScheme(props.color, props.theme))};
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 1rem;
	cursor: pointer;
	border: 2px solid ${(props) => getColorScheme('greyscale-dark', props.theme)};

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

	text-shadow: 0.06rem 0 0.06rem #ea36af, -0.125rem 0 0.06rem #75fa69;
	letter-spacing: 0.125em;
	animation-duration: 0.01s;
	animation-name: ${textFlickerEffect};
	animation-iteration-count: infinite;
	animation-direction: alternate;
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	padding-top: 0.5rem;
`;
