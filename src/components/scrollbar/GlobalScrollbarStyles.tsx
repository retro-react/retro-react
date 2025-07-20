import { css, Global } from '@emotion/react';
import {
	VGA_BLACK,
	VGA_GREEN,
	VGA_YELLOW,
	WIN31_BUTTON_FACE,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';
import { ScrollbarVariant } from './Scrollbar';

const getScrollbarStyles = (variant: ScrollbarVariant) => css`
	.scrollbar-root.${variant} ::-webkit-scrollbar {
		width: 16px;
		height: 16px;
		background-color: ${variant === 'default'
			? WIN31_BUTTON_FACE
			: variant === 'windows'
			? '#c0c0c0'
			: variant === 'terminal'
			? VGA_BLACK
			: '#2b1810'}; /* amber */
		border: ${variant === 'terminal' || variant === 'amber'
			? '1px solid #333'
			: `2px inset ${WIN31_BUTTON_FACE}`};
	}

	.scrollbar-root.${variant} ::-webkit-scrollbar-track {
		background-color: ${variant === 'default'
			? WIN31_BUTTON_FACE
			: variant === 'windows'
			? '#c0c0c0'
			: variant === 'terminal'
			? VGA_BLACK
			: '#2b1810'};
		border: ${variant === 'terminal' || variant === 'amber'
			? 'none'
			: `1px inset ${WIN31_BUTTON_SHADOW}`};
	}

	.scrollbar-root.${variant} ::-webkit-scrollbar-thumb {
		background-color: ${variant === 'default'
			? WIN31_BUTTON_FACE
			: variant === 'windows'
			? '#999999'
			: variant === 'terminal'
			? VGA_GREEN
			: VGA_YELLOW};
		border: ${variant === 'default' || variant === 'windows'
			? `2px outset ${WIN31_BUTTON_FACE}`
			: '1px solid #444'};
		min-height: 20px;
	}

	.scrollbar-root.${variant} ::-webkit-scrollbar-thumb:hover {
		background-color: ${variant === 'default'
			? '#d4d0c8'
			: variant === 'windows'
			? '#666666'
			: variant === 'terminal'
			? '#00cc00'
			: '#ffcc00'};
	}

	.scrollbar-root.${variant} ::-webkit-scrollbar-thumb:active {
		background-color: ${variant === 'default'
			? '#c4c0b8'
			: variant === 'windows'
			? '#333333'
			: variant === 'terminal'
			? '#009900'
			: '#cc9900'};
		border: ${variant === 'default' || variant === 'windows'
			? `2px inset ${WIN31_BUTTON_FACE}`
			: '1px solid #222'};
	}

	.scrollbar-root.${variant} ::-webkit-scrollbar-button {
		background-color: ${variant === 'default'
			? WIN31_BUTTON_FACE
			: variant === 'windows'
			? '#c0c0c0'
			: variant === 'terminal'
			? VGA_BLACK
			: '#2b1810'};
		border: ${variant === 'default' || variant === 'windows'
			? `2px outset ${WIN31_BUTTON_FACE}`
			: '1px solid #444'};
		height: 16px;
		width: 16px;
	}

	.scrollbar-root.${variant} ::-webkit-scrollbar-button:hover {
		background-color: ${variant === 'default'
			? '#d4d0c8'
			: variant === 'windows'
			? '#b0b0b0'
			: variant === 'terminal'
			? '#111111'
			: '#3b2820'};
	}

	.scrollbar-root.${variant} ::-webkit-scrollbar-button:active {
		border: ${variant === 'default' || variant === 'windows'
			? `2px inset ${WIN31_BUTTON_FACE}`
			: '1px solid #222'};
	}

	.scrollbar-root.${variant} ::-webkit-scrollbar-corner {
		background-color: ${variant === 'default'
			? WIN31_BUTTON_FACE
			: variant === 'windows'
			? '#c0c0c0'
			: variant === 'terminal'
			? VGA_BLACK
			: '#2b1810'};
	}
`;

interface GlobalScrollbarStylesProps {
	variant: ScrollbarVariant;
}

export const GlobalScrollbarStyles: React.FC<GlobalScrollbarStylesProps> = ({
	variant,
}) => {
	return <Global styles={getScrollbarStyles(variant)} />;
};
