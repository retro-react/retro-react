import styled from '@emotion/styled';

export const AccordionWrapper = styled.div`
	font-family: 'MS Sans Serif', sans-serif;
	margin-bottom: 2px;
	border: 1px solid #808080;
	background-color: #c0c0c0;

	/* Subtle dithering pattern for authentic texture */
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
	background-color: #c0c0c0;
	border: 2px outset #c0c0c0;
	border-color: #ffffff #808080 #808080 #ffffff;
	padding: 4px 8px;
	font-size: 11px;
	font-weight: normal;
	font-family: 'MS Sans Serif', sans-serif;
	color: ${(props) => (props.$disabled ? '#808080' : '#000000')};
	width: 100%;
	outline: none;
	cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
	text-align: left;
	opacity: ${(props) => (props.$loading ? 0.7 : 1)};

	&:hover:not(:disabled) {
		background-color: #e0e0e0;
		border-color: #ffffff #a0a0a0 #a0a0a0 #ffffff;
	}

	&:active:not(:disabled) {
		border: 2px inset #c0c0c0;
		border-color: #808080 #ffffff #ffffff #808080;
		background-color: #a0a0a0;
	}

	&:focus:not(:disabled) {
		outline: 1px dotted #000000;
		outline-offset: -3px;
	}

	&:disabled {
		background-color: #c0c0c0;
		border-color: #c0c0c0;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		padding: 3px 6px;
		font-size: 10px;
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
	color: #000000;
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
	background-color: #ffffff;
	border-top: 1px solid #808080;
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
	font-size: 11px;
	line-height: 1.4;
	color: #000000;

	@media (max-width: 768px) {
		padding: 6px 10px;
		font-size: 10px;
	}
`;

export const LoadingContent = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	color: #808080;
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
