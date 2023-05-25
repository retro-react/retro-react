import { css, keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { alterColor, alterColorEnhanced } from '@src/utils/alterColor';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SHADE_1,
	SHADE_6,
	SUCCESS,
	WARN,
} from '@src/constants/colors';
import type { AlertColor } from './Alert';

function getColorScheme(color: AlertColor, theme: Theme) {
	switch (color) {
		case 'error':
			return (theme.colors && theme.colors[color]) || ERROR;
		case 'success':
			return (theme.colors && theme.colors[color]) || SUCCESS;
		case 'warn':
			return (theme.colors && theme.colors[color]) || alterColor(WARN, 150);
		case 'secondary':
			return (theme.colors && theme.colors[color]) || SECONDARY;
		case 'primary':
		default:
			return (theme.colors && theme.colors[color]) || PRIMARY;
	}
}

const opacityAnimation = keyframes`
	from {
		opacity: 0;
		transform: translateY(20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const Alert = styled.div<{ $color: AlertColor; $isOpenProp?: boolean }>`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	padding: 0.2rem 3rem 0.3rem 1.2rem;
	font-size: 0.875rem;
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	border-top: 2px solid ${SHADE_6};
	background: linear-gradient(
		to right,
		${({ $color, theme }) =>
				alterColorEnhanced(getColorScheme($color, theme), -20)}
			80%,
		${({ $color, theme }) => getColorScheme($color, theme)} 100%
	);
	color: ${SHADE_1};
	width: 100%;
	min-height: 2.5rem;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0.5rem;
		height: 100%;
		background: ${({ $color, theme }) => getColorScheme($color, theme)};
	}

	${({ $isOpenProp }) =>
		$isOpenProp &&
		css`
			animation: ${opacityAnimation} 0.15s ease-out;
		`}
`;

export const Title = styled.div`
	font-weight: 700;
	margin-bottom: 0.2rem;
`;

export const CloseButton = styled.button<{ $icon: string }>`
	position: absolute;
	top: 0.2rem;
	right: 0.2rem;
	width: 1.5rem;
	height: 1.5rem;
	border: none;
	border-radius: 50%;
	cursor: pointer;

	background-image: url(${({ $icon }) => $icon});
	background-color: transparent;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.9);
	}
`;
