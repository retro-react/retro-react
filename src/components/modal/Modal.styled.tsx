import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import { rgba } from '@src/utils/rgba';
import { SCREEN_XM } from '@src/constants/breakpoints';
import { BLACK } from '@src/constants/colors';
import '../fonts.css';
import { ModalPattern } from './Modal';

export const Modal = styled.div<{
	$color: string;
	$open: boolean;
	$pattern: ModalPattern;
	$backdrop: boolean;
}>`
	background-color: ${(props) => props.$color};
	box-shadow: inset 1px 1px 5px ${rgba(BLACK, 0.3)},
		inset -1px -1px 2px rgba(255, 255, 255, 0.2);
	padding: 1rem;
	font-family: 'FrauncesLatin', sans-serif;
	font-size: 1.5rem;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 90%;
	width: auto;
	box-sizing: border-box;
	overflow: auto;
	z-index: 1001;

	${(props) => {
		const gradient = `
			linear-gradient(
				${rgba(props.$color, 0.4)},
				${rgba(props.$color, 0.4)}
			)
		`;

		switch (props.$pattern) {
			case 'noise':
				return `
					background-image: ${gradient}, url(https://grainy-gradients.vercel.app/noise.svg);
				`;
			case 'stripes':
				return `
					background-image: ${gradient}, url(${require('../../assets/svg/diagonal_line_pattern.svg')});
				`;
			case 'dots':
			default:
				return `
					background-image: ${gradient}, url(${require('../../assets/svg/checkboard_pattern.svg')});
				`;
		}
	}}

	// Media query for mobile devices
	@media only screen and (max-width: ${SCREEN_XM}px) {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: none;
		border-radius: 0;
	}

	${(props) =>
		props.$open
			? `
		opacity: 1;
		visibility: visible;
		transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
	`
			: `
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
	`}
`;

export const CloseButton = styled.button<{
	$color: string;
}>`
	position: absolute;
	top: 10px;
	right: 5px;
	width: 2rem;
	height: 2rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1.5rem;
		height: 0.2rem;
		background-color: ${(props) => alterColorEnhanced(props.$color, 100)};
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&::after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}
`;

export const ModalBackdrop = styled.div<{ $open: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${rgba(BLACK, 0.5)};
	z-index: 1000;
	transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

	${(props) =>
		props.$open
			? `
		opacity: 1;
		visibility: visible;
		transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
	`
			: `
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
	`}
`;
