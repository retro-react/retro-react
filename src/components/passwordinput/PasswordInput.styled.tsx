import styled from '@emotion/styled';
import { alterColorEnhanced } from '@src/utils/alterColor';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { BLACK, WHITE } from '@src/constants/colors';
import { PasswordInputSizes } from './PasswordInput';

export const PasswordInputContainer = styled.div`
	gap: 10px;
	width: fit-content;
	display: flex;
	align-items: center;
`;

export const PasswordInputBlock = styled.input<{
	$pattern: ComponentPatterns | 'none';
	$rounded: boolean;
	$color: ComponentColors | 'greyscale';
	$size: PasswordInputSizes;
}>`
	width: 30px;
	height: 30px;
	text-align: center;
	border: 2px solid ${(props) => getColorScheme(props.$color, props.theme)};
	border-radius: ${(props) => (props.$rounded ? '50%' : '0')};

	&:focus {
		outline: none;
		outline: 2px solid ${(props) => getColorScheme(props.$color, props.theme)};
	}

	&:hover {
		outline: 2px solid ${(props) => getColorScheme(props.$color, props.theme)};
	}

	&:disabled {
		background-color: ${(props) => getColorScheme(props.$color, props.theme)};
		cursor: not-allowed;
		opacity: 0.6;
	}

	${(props) =>
		props.$pattern === 'none'
			? `
			border: 1px solid ${getColorScheme(props.$color, props.theme) || props.$color};
			color: ${getColorScheme(props.$color, props.theme) || props.$color};
			font-weight: bold;
			font-size: 1.2em;
			`
			: `
			background-image: url(${getPatternScheme(props.$pattern)});
			background-color: ${getColorScheme(props.$color, props.theme) || props.$color};
			border: 1px solid ${alterColorEnhanced(
				getColorScheme(props.$color, props.theme) || props.$color,
				50,
			)};

			color: ${props.$color === 'warn' ? BLACK : WHITE};
			font-weight: bold;
			font-size: 1.2em;
		`}

	${(props) =>
		props.$size === 'small'
			? `
			width: 20px;
			height: 20px;
			font-size: 0.8em;
			`
			: ''}
`;
