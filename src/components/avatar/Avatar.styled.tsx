import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { sunken } from '../../constants/bevels';
import { VGA_BLACK, VGA_WHITE } from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import getColorScheme from '../../utils/getColorScheme';
import { AvatarColor, AvatarSize, AvatarVariant } from './Avatar';

const isDarkFill = (color: AvatarColor) =>
	color === 'primary' ||
	color === 'secondary' ||
	color === 'error' ||
	color === 'greyscale-dark';

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
	color: ${(props) => (isDarkFill(props.$color) ? VGA_WHITE : VGA_BLACK)};
	text-align: center;
	line-height: ${(props) => sizeStyles[props.$size]};
	background: ${(props) =>
		props.$src
			? `url(${props.$src}) center/cover`
			: getColorScheme(props.$color, props.theme)};
	width: ${(props) => sizeStyles[props.$size]};
	height: ${(props) => sizeStyles[props.$size]};
	${sunken}
	overflow: hidden;
	position: relative;
	border-radius: 0;

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

	${(props) =>
		!props.$src &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			text-shadow: ${isDarkFill(props.$color)
				? '1px 1px 0 rgba(0, 0, 0, 0.4)'
				: '1px 1px 0 rgba(255, 255, 255, 0.6)'};
			background: ${getColorScheme(props.$color, props.theme)};
		`}
`;
