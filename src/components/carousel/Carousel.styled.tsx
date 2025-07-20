import styled from '@emotion/styled';
import {
	VGA_BLACK,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { SYSTEM_FONT } from '@src/constants/fonts';

export const CarouselWrapper = styled.div`
	position: relative;
	overflow: hidden;

	/* Authentic WIN31 inset border like picture frame */
	background: ${WIN31_BUTTON_FACE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};

	width: 100%;
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

	/* WIN31 button panel styling */
	background: ${WIN31_BUTTON_FACE};
	border: 1px solid;
	border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
		${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
`;

export const CarouselDot = styled.button<{ isActive: boolean }>`
	width: 8px;
	height: 8px;
	margin: 0;

	/* Authentic WIN31 radio button style */
	background: ${(props) => (props.isActive ? VGA_BLACK : WIN31_BUTTON_FACE)};
	border: 1px solid;
	border-color: ${(props) =>
		props.isActive
			? `${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}`
			: `${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}`};

	/* Square shape like old radio buttons */
	border-radius: 0;
	cursor: pointer;

	/* Remove modern effects */
	transition: none;
	outline: none;

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: 1px;
	}

	&:hover {
		filter: brightness(1.05);
	}
`;

export const CarouselTrack = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	/* Faster, more authentic transition */
	transition: transform 0.3s ease-in-out;
`;

export const CarouselItem = styled.div`
	width: 100%;
	flex-shrink: 0;

	& > * {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& img {
		max-width: 100%;
		height: auto;
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

	/* Authentic WIN31 button styling */
	width: 24px;
	height: 24px;
	padding: 0;

	background: ${WIN31_BUTTON_FACE};
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};

	/* Square button like WIN31 */
	border-radius: 0;
	cursor: pointer;

	/* Typography */
	font-family: ${SYSTEM_FONT};
	font-size: 12px;
	font-weight: bold;
	color: ${VGA_BLACK};

	/* Remove modern effects */
	transition: none;
	outline: none;

	/* Display arrow characters instead of icons */
	&::before {
		content: '${(props) => (props.$position === 'left' ? '‹' : '›')}';
		display: block;
		line-height: 1;
	}

	&:hover {
		filter: brightness(1.05);
	}

	&:active {
		/* Pressed button effect */
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
		transform: translateY(-50%) translate(1px, 1px);
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}
`;
