import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getColorScheme from '@src/utils/getColorScheme';
import {
	VGA_BLACK,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '@src/constants/fonts';
import { AvatarColor, AvatarSize, AvatarVariant } from './Avatar';

const sizeStyles = {
	small: '32px',
	medium: '48px',
	large: '64px',
};

const fontSizeStyles = {
	small: FONT_SIZES.SMALL,
	medium: FONT_SIZES.NORMAL,
	large: FONT_SIZES.LARGE,
};

export const Avatar = styled.div<{
	$color: AvatarColor;
	$size: AvatarSize;
	$rounded: boolean;
	$variant: AvatarVariant;
	$src?: string;
}>`
	font-family: ${SYSTEM_FONT};
	font-weight: bold;
	font-size: ${(props) => fontSizeStyles[props.$size]};
	color: ${VGA_BLACK};
	text-align: center;
	line-height: ${(props) => sizeStyles[props.$size]};
	background: ${(props) =>
		props.$src
			? `url(${props.$src}) center/cover`
			: getColorScheme(props.$color, props.theme)};
	width: ${(props) => sizeStyles[props.$size]};
	height: ${(props) => sizeStyles[props.$size]};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;

	/* Remove modern styling */
	border-radius: 0;

	/* Add retro computer effect */
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: ${(props) =>
			props.$src
				? 'none'
				: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0.03) 2px)'};
		pointer-events: none;
	}

	${(props) =>
		props.$variant === 'circle' &&
		css`
			border-radius: 50%;
			&::before {
				border-radius: 50%;
			}
		`}

	${(props) =>
		props.$variant === 'square' &&
		props.$rounded &&
		css`
			border-radius: 4px;
			&::before {
				border-radius: 2px;
			}
		`}

	/* Text styling for initials */
	${(props) =>
		!props.$src &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
			background: ${getColorScheme(props.$color, props.theme)};
		`}
`;
