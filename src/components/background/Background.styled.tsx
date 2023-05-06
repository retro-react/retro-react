// Background.styled.ts
import styled from '@emotion/styled';

export const Background = styled.div<{
	$color: string;
	$backgroundImage?: string;
	$backgroundRepeat?: string;
	$backgroundSize?: string;
	$backgroundPosition?: string;
}>`
	background-color: ${({ $color }) => $color};
	background-image: ${({ $backgroundImage }) =>
		$backgroundImage && `url(${$backgroundImage})`};
	background-repeat: ${({ $backgroundRepeat }) => $backgroundRepeat};
	background-size: ${({ $backgroundSize }) => $backgroundSize};
	background-position: ${({ $backgroundPosition }) => $backgroundPosition};
	background-attachment: fixed;
	width: 100%;
	height: 100%;

	position: absolute;
	top: 0;
	left: 0;
`;
