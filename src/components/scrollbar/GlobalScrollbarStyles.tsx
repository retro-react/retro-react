import { css, Global } from '@emotion/react';
import { alterColor, alterColorEnhanced } from '@src/utils/alterColor';
import { PRIMARY, SECONDARY } from '@src/constants/colors';
import { ScrollbarColor } from './Scrollbar';

const getScrollbarStyles = (theme: ScrollbarColor) => css`
	.scrollbar-root.${theme} ::-webkit-scrollbar {
		width: 16px;
		height: 16px;
		background-color: ${theme === 'pastel'
			? '#E0B0FF'
			: theme === 'neon'
			? '#00FFFF'
			: theme === 'grayscale'
			? '#C0C0C0'
			: theme === 'primary'
			? alterColorEnhanced(PRIMARY, 100)
			: alterColorEnhanced(SECONDARY, 100)};
		border: 2px solid
			${theme === 'pastel'
				? '#FFD700'
				: theme === 'neon'
				? '#FF4500'
				: theme === 'grayscale'
				? '#808080'
				: theme === 'primary'
				? alterColor(PRIMARY)
				: alterColor(SECONDARY)};
	}

	.scrollbar-root.${theme} ::-webkit-scrollbar-thumb {
		background-clip: padding-box;
		border: 3px solid transparent;
	}

	.scrollbar-root.${theme} ::-webkit-scrollbar-thumb {
		background-color: ${theme === 'pastel'
			? '#ff99cc'
			: theme === 'neon'
			? '#ff00ff'
			: theme === 'grayscale'
			? '#999999'
			: theme === 'primary'
			? PRIMARY
			: SECONDARY};
	}

	.scrollbar-root.${theme} ::-webkit-scrollbar-thumb:hover {
		background-color: ${theme === 'pastel'
			? '#ff66cc'
			: theme === 'neon'
			? '#cc00cc'
			: theme === 'grayscale'
			? '#666666'
			: theme === 'primary'
			? alterColor(PRIMARY)
			: alterColor(SECONDARY)};
	}
`;

interface GlobalScrollbarStylesProps {
	theme: ScrollbarColor;
}

export const GlobalScrollbarStyles: React.FC<GlobalScrollbarStylesProps> = ({
	theme,
}) => {
	return <Global styles={getScrollbarStyles(theme)} />;
};
