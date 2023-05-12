import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
	WHITE,
} from '@src/constants/colors';
import { AvatarColor, AvatarSize, AvatarVariant } from './Avatar';

function getColorScheme(color: AvatarColor, theme: Theme) {
	switch (color) {
		case 'error':
			return (theme.colors && theme.colors[color]) || ERROR;
		case 'success':
			return (theme.colors && theme.colors[color]) || SUCCESS;
		case 'warn':
			return (theme.colors && theme.colors[color]) || WARN;
		case 'secondary':
			return (theme.colors && theme.colors[color]) || SECONDARY;
		case 'primary':
		default:
			return (theme.colors && theme.colors[color]) || PRIMARY;
	}
}

const sizeStyles = {
	small: '2rem',
	medium: '3rem',
	large: '4rem',
};

export const Avatar = styled.div<{
	$color: AvatarColor;
	$size: AvatarSize;
	$variant: AvatarVariant;
	$src?: string;
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-weight: bold;
	font-size: ${(props) =>
		props.$size === 'small'
			? '0.8rem'
			: props.$size === 'medium'
			? '1rem'
			: '1.6rem'};
	color: ${WHITE};
	text-align: center;
	line-height: ${(props) => sizeStyles[props.$size]};
	background-color: ${(props) => getColorScheme(props.$color, props.theme)};
	background-image: ${(props) =>
		props.$src ? `url(${props.$src})` : `url(${getPatternScheme('noise')})`};
	width: ${(props) => sizeStyles[props.$size]};
	height: ${(props) => sizeStyles[props.$size]};
	border: 0.1rem solid ${WHITE};
	overflow: hidden;

	${(props) =>
		props.$variant === 'circle' &&
		css`
			border-radius: 50%;
		`}

	${(props) =>
		props.$variant === 'square' &&
		css`
			border-radius: 0.5rem;
		`}


	${(props) =>
		props.$src &&
		css`
			background-size: cover;
			background-position: center;
			border: 0.1rem solid ${getColorScheme(props.$color, props.theme)};
			& > * {
				display: none;
			}
		`}
`;
