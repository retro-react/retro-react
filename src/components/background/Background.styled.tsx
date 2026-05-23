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
	${({ $backgroundImage }) =>
		$backgroundImage && `background-image: url(${$backgroundImage});`}
	${({ $backgroundRepeat }) =>
		$backgroundRepeat && `background-repeat: ${$backgroundRepeat};`}
	${({ $backgroundSize }) =>
		$backgroundSize && `background-size: ${$backgroundSize};`}
	${({ $backgroundPosition }) =>
		$backgroundPosition && `background-position: ${$backgroundPosition};`}
	background-attachment: fixed;
	width: 100%;
	min-height: 100%;

	position: relative;
	top: 0;
	left: 0;
`;
