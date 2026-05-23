import styled from '@emotion/styled';
import { pressed, raised, sunken } from '../../constants/bevels';
import {
	VGA_BLACK,
	VGA_WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import { SPACING } from '../../constants/spacing';
import { alterColorEnhanced } from '../../utils/alterColor';
import getColorScheme from '../../utils/getColorScheme';
import type { UploadColor } from './DocumentUpload';

export const DropzoneWrapper = styled.label<{
	$hasFile: boolean;
	$isDragOver: boolean;
	$isPressed: boolean;
	$isUploading: boolean;
	$color: UploadColor;
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
	background: ${(props) => (props.$isDragOver ? VGA_WHITE : WIN31_BUTTON_FACE)};
	${(props) => (props.$isPressed ? pressed : sunken)};
	color: ${VGA_BLACK};
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.NORMAL};
	font-weight: normal;
	cursor: ${(props) => (props.$isUploading ? 'wait' : 'pointer')};
	transition: outline-color 80ms linear, background-color 80ms linear;
	outline: none;

	${(props) =>
		props.$isDragOver &&
		`
		outline: 2px dashed ${getColorScheme(props.$color || 'primary', props.theme)};
		outline-offset: -6px;
		background: ${VGA_WHITE};
	`}

	&:hover:not(:disabled) {
		outline: 1px dashed
			${(props) => getColorScheme(props.$color || 'primary', props.theme)};
		outline-offset: -4px;
	}

	&:focus-visible {
		outline: 1px dotted
			${(props) => getColorScheme(props.$color || 'primary', props.theme)};
		outline-offset: -3px;
	}

	&:disabled {
		background: ${WIN31_BUTTON_FACE};
		color: ${WIN31_BUTTON_SHADOW};
		cursor: not-allowed;
	}
`;

export const HiddenInput = styled.input`
	display: none;
`;

export const UploadPrompt = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${SPACING.SM};
	text-align: center;
`;

export const UploadText = styled.p`
	margin: 0;
	font-weight: bold;
	color: ${VGA_BLACK};
	font-size: ${FONT_SIZES.NORMAL};
	font-family: ${SYSTEM_FONT};
`;

export const SubText = styled.p`
	margin: 0;
	font-size: ${FONT_SIZES.SMALL};
	color: ${WIN31_BUTTON_SHADOW};
	font-family: ${SYSTEM_FONT};
`;

export const ProgressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${SPACING.MD};
	font-family: ${SYSTEM_FONT};
	color: ${VGA_BLACK};
`;

export const ProgressText = styled.div`
	font-size: ${FONT_SIZES.NORMAL};
	font-weight: bold;
	font-family: ${SYSTEM_FONT};
`;

export const ProgressBar = styled.div`
	font-family: ${SYSTEM_FONT};
	font-size: ${FONT_SIZES.SMALL};
	letter-spacing: 1px;
	color: ${VGA_BLACK};
`;

export const FileSelectedWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	gap: ${SPACING.XL};
	width: 100%;
	max-width: 100%;
	color: ${VGA_BLACK};
	box-sizing: border-box;
	overflow: hidden;

	svg {
		flex-shrink: 0;
	}
`;

export const FileInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${SPACING.XS};
	min-width: 0;
	flex-grow: 1;
	flex-shrink: 1;
	overflow: hidden;
`;

export const FileHeader = styled.div`
	display: flex;
	align-items: center;
	gap: ${SPACING.MD};
	margin-bottom: ${SPACING.XS};
`;

export const FileType = styled.span<{ $color?: UploadColor }>`
	font-size: ${FONT_SIZES.TINY};
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
	font-size: ${FONT_SIZES.TINY};
	color: ${VGA_BLACK};
	font-weight: bold;
	font-family: ${SYSTEM_FONT};
`;

export const FileName = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: bold;
	font-size: ${FONT_SIZES.NORMAL};
	font-family: ${SYSTEM_FONT};
`;

export const FileSize = styled.span`
	font-size: ${FONT_SIZES.SMALL};
	color: ${WIN31_BUTTON_SHADOW};
	font-family: ${SYSTEM_FONT};
`;

export const FileDate = styled.span`
	font-size: ${FONT_SIZES.SMALL};
	color: ${WIN31_BUTTON_SHADOW};
	font-family: ${SYSTEM_FONT};
`;

export const RemoveButton = styled.button<{ $color?: UploadColor }>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 23px;
	flex-shrink: 0;
	margin-left: auto;
	padding: 0 12px;
	${raised};
	background: ${WIN31_BUTTON_FACE};
	color: ${VGA_BLACK};
	font-size: ${FONT_SIZES.SMALL};
	font-family: ${SYSTEM_FONT};
	cursor: pointer;
	transition: none;

	&:hover:not(:disabled) {
		background: ${(props) => getColorScheme('error', props.theme)};
		color: ${VGA_WHITE};
	}

	&:active:not(:disabled) {
		${pressed};
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
