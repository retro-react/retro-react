import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme from '@src/utils/getColorScheme';
import {
	CRT_GREEN,
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '@src/constants/fonts';
import type { UploadColor } from './DocumentUpload';

// Retro animations
const blink = keyframes`
	0%, 50% { opacity: 1; }
	51%, 100% { opacity: 0; }
`;

const scanLine = keyframes`
	0% { top: -2px; }
	100% { top: 100%; }
`;

const crtFlicker = keyframes`
	0%, 98%, 100% { opacity: 1; }
	99% { opacity: 0.98; }
`;

export const DropzoneWrapper = styled.label<{
	$color: UploadColor;
	$hasFile: boolean;
	$isDragOver: boolean;
	$isPressed: boolean;
	$isUploading: boolean;
}>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.$hasFile ? 'flex-start' : 'center')};
	padding: 16px;
	width: 100%;
	max-width: 100%;
	min-height: 120px;
	box-sizing: border-box;
	background: ${(props) => (props.$isDragOver ? WIN31_BUTTON_FACE : VGA_WHITE)};
	border: 2px solid;
	border-color: ${(props) =>
		props.$isPressed
			? `${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}`
			: `${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}`};
	box-shadow: ${(props) =>
		props.$isPressed ? 'none' : 'inset 1px 1px 2px rgba(0, 0, 0, 0.1)'};
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};
	font-weight: normal;
	cursor: ${(props) => (props.$isUploading ? 'wait' : 'pointer')};
	transition: none;
	outline: none;

	/* Remove modern styling */
	border-radius: 0;

	/* Responsive adjustments */
	@media (max-width: 768px) {
		padding: 12px;
		min-height: 100px;
	}

	@media (max-width: 480px) {
		padding: 8px;
		min-height: 80px;
	}

	&:focus {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}

	&:hover:not(:disabled) {
		background: ${WIN31_BUTTON_FACE};
	}

	&:disabled {
		background: ${WIN31_BUTTON_FACE};
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	}

	/* Add CRT scan line effect */
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(
			90deg,
			transparent,
			${CRT_GREEN}40,
			transparent
		);
		animation: ${scanLine} 2s linear infinite;
		opacity: ${(props) => (props.$isUploading ? 1 : 0)};
		transition: opacity 0.3s;
	}
`;

export const HiddenInput = styled.input`
	display: none;
`;

// --- Initial State Styles ---

export const UploadPrompt = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	text-align: center;
	position: relative;
	z-index: 1;
`;

export const UploadIconWrapper = styled.div<{
	$color?: UploadColor;
	theme?: any;
}>`
	color: ${(props) => {
		const baseColor = getColorScheme(props.$color || 'primary', props.theme);
		return alterColorEnhanced(baseColor, -30);
	}};
	filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3));

	svg {
		animation: ${crtFlicker} 4s infinite;
	}
`;

export const UploadText = styled.p`
	margin: 0;
	font-weight: bold;
	color: ${VGA_BLACK};
	text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
	font-size: 1.1rem;
	font-family: ${SYSTEM_FONT};
`;

export const SubText = styled.p`
	margin: 0;
	font-size: 0.85rem;
	color: ${WIN31_BUTTON_SHADOW};
	text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
	font-family: ${SYSTEM_FONT};
`;

export const BlinkingCursor = styled.span`
	font-size: 1.5rem;
	animation: ${blink} 1s infinite;
	color: ${VGA_BLACK};
`;

// --- Progress Bar Styles ---

export const ProgressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	font-family: ${SYSTEM_FONT};
	color: ${VGA_BLACK};
`;

export const ProgressText = styled.div`
	font-size: 0.9rem;
	font-weight: bold;
	letter-spacing: 1px;
	font-family: ${SYSTEM_FONT};
`;

export const ProgressBar = styled.div`
	font-family: ${SYSTEM_FONT};
	font-size: 0.8rem;
	letter-spacing: 1px;
	color: ${VGA_BLACK};
	text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`;

// --- File Selected State Styles ---

export const FileSelectedWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	width: 100%;
	max-width: 100%;
	color: ${VGA_BLACK};
	position: relative;
	z-index: 1;
	box-sizing: border-box;
	overflow: hidden;

	@media (max-width: 768px) {
		gap: 0.75rem;
	}

	@media (max-width: 480px) {
		gap: 0.5rem;
	}

	svg {
		flex-shrink: 0;
		filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.3));
	}
`;

export const FileInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	min-width: 0;
	flex-grow: 1;
	flex-shrink: 1;
	overflow: hidden;
`;

export const FileHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.25rem;
`;

export const FileType = styled.span<{ $color?: UploadColor; theme?: any }>`
	font-size: 0.7rem;
	color: ${(props) => {
		const baseColor = getColorScheme(props.$color || 'primary', props.theme);
		return alterColorEnhanced(baseColor, -40);
	}};
	font-weight: bold;
	background: ${VGA_WHITE};
	padding: 2px 4px;
	border: 1px solid ${WIN31_BUTTON_SHADOW};
	font-family: ${SYSTEM_FONT};
`;

export const FileStatus = styled.span`
	font-size: 0.7rem;
	color: ${CRT_GREEN};
	font-weight: bold;
	font-family: ${SYSTEM_FONT};
`;

export const FileName = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: bold;
	font-size: 1rem;
	text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
	font-family: ${SYSTEM_FONT};
`;

export const FileSize = styled.span`
	font-size: 0.8rem;
	color: ${WIN31_BUTTON_SHADOW};
	font-weight: bold;
	text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
	font-family: ${SYSTEM_FONT};
`;

export const FileDate = styled.span`
	font-size: 0.75rem;
	color: ${WIN31_BUTTON_SHADOW};
	font-family: ${SYSTEM_FONT};
`;

export const RemoveButton = styled.button<{ $color?: UploadColor }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3rem;
	height: 2rem;
	flex-shrink: 0;
	margin-left: auto;
	padding: 0;
	border: 2px solid;
	border-color: ${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW}
		${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT};
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	font-size: 0.75rem;
	font-weight: bold;
	font-family: ${SYSTEM_FONT};
	text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.8);
	cursor: pointer;
	transition: none;
	text-transform: uppercase;
	letter-spacing: 1px;

	@media (max-width: 480px) {
		width: 2.5rem;
		height: 1.8rem;
		font-size: 0.7rem;
	}

	&:hover:not(:disabled) {
		background: ${(props) => getColorScheme('error', props.theme)};
		color: ${VGA_WHITE};
		text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
	}

	&:active:not(:disabled) {
		border-color: ${WIN31_BUTTON_SHADOW} ${WIN31_BUTTON_HIGHLIGHT}
			${WIN31_BUTTON_HIGHLIGHT} ${WIN31_BUTTON_SHADOW};
	}

	&:focus-visible {
		outline: 1px dotted ${VGA_BLACK};
		outline-offset: -3px;
	}
`;

export const ButtonLabel = styled.span`
	position: relative;
	top: -1px;
`;

export const ScanLine = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(90deg, transparent, ${CRT_GREEN}40, transparent);
	height: 2px;
	animation: ${scanLine} 2s linear infinite;
	pointer-events: none;
	z-index: 1;
`;
