import styled from '@emotion/styled';
import { pressed, raised, sunken } from '../../constants/bevels';
import { VGA_BLACK, WIN31_BUTTON_FACE } from '../../constants/colors';
import { SYSTEM_FONT } from '../../constants/fonts';

export const CarouselWrapper = styled.div`
	position: relative;
	overflow: hidden;

	background: ${WIN31_BUTTON_FACE};
	${sunken};

	width: 100%;
	height: 100%;
	min-height: 200px;
	font-family: ${SYSTEM_FONT};
`;

export const CarouselNav = styled.div`
	position: absolute;
	bottom: 8px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 4px;
	padding: 4px 8px;

	background: ${WIN31_BUTTON_FACE};
	${raised};
`;

export const CarouselDot = styled.button<{ isActive: boolean }>`
	width: 8px;
	height: 8px;
	margin: 0;

	background: ${(props) => (props.isActive ? VGA_BLACK : WIN31_BUTTON_FACE)};
	${(props) => (props.isActive ? sunken : raised)};

	cursor: pointer;

	transition: none;
	outline: none;

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: 1px;
	}
`;

export const CarouselTrack = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	transition: transform 0.3s ease-in-out;
`;

export const CarouselItem = styled.div`
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	& > * {
		width: 100%;
		height: 100%;
	}

	& img {
		max-width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
`;

export const CarouselButton = styled.button<{
	$position: 'left' | 'right';
}>`
	position: absolute;
	top: 50%;
	${(props) => props.$position}: 8px;
	transform: translateY(-50%);

	width: 24px;
	height: 24px;
	padding: 0;

	background: ${WIN31_BUTTON_FACE};
	${raised};

	cursor: pointer;

	font-family: ${SYSTEM_FONT};
	font-size: 12px;
	font-weight: bold;
	color: ${VGA_BLACK};

	transition: none;
	outline: none;

	&::before {
		content: '${(props) => (props.$position === 'left' ? '‹' : '›')}';
		display: block;
		line-height: 1;
	}

	&:active {
		${pressed};
		transform: translateY(-50%) translate(1px, 1px);
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}
`;
