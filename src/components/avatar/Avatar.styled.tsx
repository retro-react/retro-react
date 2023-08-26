import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getColorScheme from '@src/utils/getColorScheme';
import { getPatternScheme } from '@src/utils/getPatternScheme';
import { WHITE } from '@src/constants/colors';
import { AvatarColor, AvatarSize, AvatarVariant } from './Avatar';

const sizeStyles = {
	small: '2rem',
	medium: '3rem',
	large: '4rem',
};

export const Avatar = styled.div<{
	$color: AvatarColor;
	$size: AvatarSize;
	$rounded: boolean;
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
			border-radius: ${props.$rounded ? '0.5rem' : '0'};
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
