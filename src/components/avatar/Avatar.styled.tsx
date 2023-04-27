import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
	ERROR,
	PRIMARY,
	SECONDARY,
	SUCCESS,
	WARN,
} from '@src/constants/colors';
import '../fonts.css';
import { AvatarColor, AvatarSize, AvatarVariant } from './Avatar';

const avatarColorStyles = {
	primary: PRIMARY,
	secondary: SECONDARY,
	success: SUCCESS,
	error: ERROR,
	warn: WARN,
};

const sizeStyles = {
	small: '2rem',
	medium: '3rem',
	large: '4rem',
};

export const Avatar = styled.div<{
	$color: AvatarColor;
	$size: AvatarSize;
	$variant: AvatarVariant;
}>`
	font-family: 'FrauncesLatin', sans-serif;
	font-weight: bold;
	font-size: ${(props) =>
		props.$size === 'small'
			? '0.8rem'
			: props.$size === 'medium'
			? '1rem'
			: '1.6rem'};
	color: #fff;
	text-align: center;
	line-height: ${(props) => sizeStyles[props.$size]};
	background-color: ${(props) => avatarColorStyles[props.$color]};
	background-image: url(https://grainy-gradients.vercel.app/noise.svg);
	width: ${(props) => sizeStyles[props.$size]};
	height: ${(props) => sizeStyles[props.$size]};
	border: 0.5rem solid #fff;
	box-shadow: 0 0 0.5rem 0.5rem #fff;
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
`;
