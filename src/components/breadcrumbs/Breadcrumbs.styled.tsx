import styled from '@emotion/styled';

export const BreadcrumbsWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 4px 8px;
	background-color: #c0c0c0;
	border: 2px inset #c0c0c0;
	border-color: #ffffff #808080 #808080 #ffffff;
	font-family: 'MS Sans Serif', sans-serif;
	font-size: 11px;
	position: relative;

	/* Subtle dithering pattern for authentic texture */
	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.1) 1px,
		transparent 0
	);
	background-size: 2px 2px;

	@media (max-width: 768px) {
		padding: 3px 6px;
		font-size: 10px;
		flex-wrap: nowrap;
		overflow-x: auto;
		scrollbar-width: thin;
		scrollbar-color: #808080 #c0c0c0;

		&::-webkit-scrollbar {
			height: 12px;
		}
		&::-webkit-scrollbar-track {
			background: #c0c0c0;
			border: 1px inset #c0c0c0;
		}
		&::-webkit-scrollbar-thumb {
			background: #808080;
			border: 1px outset #808080;
		}
	}
`;

export const Breadcrumb = styled.span<{
	$active?: boolean;
	$disabled?: boolean;
}>`
	display: inline-flex;
	align-items: center;
	font-size: inherit;
	color: ${(props) => (props.$disabled ? '#808080' : '#000000')};
	font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
	opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
	white-space: nowrap;
`;

export const BreadcrumbSeparator = styled.span<{
	$type: 'arrow' | 'backslash' | 'dot' | 'pipe';
}>`
	color: #808080;
	font-weight: normal;
	margin: 0 4px;
	user-select: none;
	font-size: inherit;
`;

export const BreadcrumbAnchor = styled.a<{
	$disabled?: boolean;
}>`
	color: ${(props) => (props.$disabled ? '#808080' : '#000000')};
	text-decoration: none;
	padding: 1px 3px;
	border: 1px solid transparent;
	background: transparent;
	cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
	pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
	display: inline-flex;
	align-items: center;
	gap: 2px;

	&:hover:not([disabled]) {
		background-color: #0000ff;
		color: #ffffff;
		border: 1px outset #c0c0c0;
	}

	&:focus:not([disabled]) {
		outline: 1px dotted #000000;
		outline-offset: 1px;
	}

	&:active:not([disabled]) {
		border: 1px inset #c0c0c0;
		background-color: #c0c0c0;
		color: #000000;
	}
`;

export const BreadcrumbActive = styled.span`
	color: #000000;
	font-weight: bold;
	padding: 1px 3px;
	background: transparent;
	display: inline-flex;
	align-items: center;
	gap: 2px;
`;

export const BreadcrumbIcon = styled.span`
	display: inline-flex;
	align-items: center;
	font-size: 10px;
	margin-right: 2px;
`;

export const CopyButton = styled.button`
	background: #c0c0c0;
	border: 1px outset #c0c0c0;
	border-color: #ffffff #808080 #808080 #ffffff;
	color: #000000;
	font-family: 'MS Sans Serif', sans-serif;
	font-size: 10px;
	padding: 2px 4px;
	margin-left: 8px;
	cursor: pointer;

	&:hover {
		background: #e0e0e0;
	}

	&:active {
		border: 1px inset #c0c0c0;
		border-color: #808080 #ffffff #ffffff #808080;
	}

	&:focus {
		outline: 1px dotted #000000;
		outline-offset: 1px;
	}
`;

export const TruncationIndicator = styled.span`
	color: #808080;
	font-weight: normal;
	margin: 0 4px;
	cursor: help;
	user-select: none;
	position: relative;

	&:hover {
		color: #000000;
	}
`;
