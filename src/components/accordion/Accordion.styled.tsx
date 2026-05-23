import styled from '@emotion/styled';
import { pressed, raised } from '../../constants/bevels';
import {
	BLACK,
	WHITE,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';

export const AccordionWrapper = styled.div`
	font-family: ${SYSTEM_FONT};
	margin-bottom: 2px;
	border: 1px solid ${WIN31_BUTTON_SHADOW};
	background-color: ${WIN31_BUTTON_FACE};

	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.05) 1px,
		transparent 0
	);
	background-size: 2px 2px;
`;

export const AccordionHeader = styled.button<{
	$disabled?: boolean;
	$loading?: boolean;
}>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${WIN31_BUTTON_FACE};
	${raised};
	padding: 4px 8px;
	font-size: ${FONT_SIZES.SMALL};
	font-weight: normal;
	font-family: ${SYSTEM_FONT};
	color: ${(props) => (props.$disabled ? WIN31_BUTTON_SHADOW : BLACK)};
	width: 100%;
	outline: none;
	cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
	text-align: left;
	opacity: ${(props) => (props.$loading ? 0.7 : 1)};

	&:active:not(:disabled) {
		${pressed};
		background-color: #a0a0a0;
	}

	&:focus:not(:disabled) {
		outline: 1px dotted ${BLACK};
		outline-offset: -3px;
	}

	&:disabled {
		background-color: ${WIN31_BUTTON_FACE};
		cursor: not-allowed;
	}
`;

export const AccordionHeaderContent = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	flex: 1;
	min-width: 0;
`;

export const AccordionIcon = styled.span`
	display: inline-flex;
	align-items: center;
	font-size: 12px;
	line-height: 1;
	flex-shrink: 0;
`;

export const AccordionTitle = styled.span`
	font-size: inherit;
	font-weight: inherit;
	color: inherit;
	flex: 1;
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const AccordionToggleIcon = styled.span<{
	$isOpen: boolean;
	$loading?: boolean;
}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 8px;
	line-height: 1;
	color: ${BLACK};
	margin-left: 8px;
	min-width: 12px;
	height: 12px;
	flex-shrink: 0;

	${(props) =>
		props.$loading &&
		`
		animation: spin 1s linear infinite;

		@keyframes spin {
			0% { transform: rotate(0deg); }
			100% { transform: rotate(360deg); }
		}
	`}
`;

export const AccordionContent = styled.div<{
	$isOpen: boolean;
	$maxHeight: string;
	$animated?: boolean;
}>`
	background-color: ${WHITE};
	border-top: 1px solid ${WIN31_BUTTON_SHADOW};
	overflow: hidden;
	max-height: ${(props) => (props.$isOpen ? props.$maxHeight : '0')};

	${(props) =>
		props.$animated &&
		`
		transition: max-height 0.15s ease-out;
	`}
`;

export const AccordionContentInner = styled.div`
	padding: 8px 12px;
	font-size: ${FONT_SIZES.SMALL};
	line-height: 1.4;
	color: ${BLACK};
`;

export const LoadingContent = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	color: ${WIN31_BUTTON_SHADOW};
	font-style: italic;
	padding: 8px 0;
`;

export const LoadingSpinner = styled.span`
	display: inline-block;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
