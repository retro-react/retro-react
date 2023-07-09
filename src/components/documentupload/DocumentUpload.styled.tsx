import styled from '@emotion/styled';
import getColorScheme from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { WHITE } from '@src/constants/colors';
import { UploadColor } from './DocumentUpload';

export const DocumentUploadWrapper = styled.label<{
	$color?: UploadColor;
	$pattern: ComponentPatterns;
	$animated?: boolean;
}>(({ $color, $pattern }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1em',
	border: `2px solid ${getColorScheme($color || 'primary')}`,
	borderRadius: '5px',
	cursor: 'pointer',
	backgroundColor: getColorScheme($color || 'primary'),
	backgroundImage: `url(${getPatternScheme($pattern)})`,
	position: 'relative',
	':hover': {
		borderColor: getColorScheme($color || 'primary'),
	},
}));

export const DocumentUpload = styled.input`
	display: none;
`;

export const FileName = styled.span<{
	$color: UploadColor;
}>`
	font-size: 1.2em;
	color: ${WHITE};
	background-color: ${({ $color }) => getColorScheme($color || 'primary')};
	padding: 5px;
	border-radius: 5px;
	min-height: 30px;
	display: flex;
	align-items: center;
`;

export const UploadIcon = styled.svg<{
	$color: UploadColor;
}>`
	background-color: ${({ $color }) => getColorScheme($color || 'primary')};
	border-radius: 5px;
	padding: 5px;
`;

export const DisplayWrapper = styled.div`
	min-height: 5em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 5px;
`;

export const StyledSVG = styled.svg<{ color: string }>`
	width: 24px;
	height: 24px;
	fill: none;
	stroke: white;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 2;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(50%, -50%);
	cursor: pointer;
	background-color: ${(props) => getColorScheme(props.color)};
	border-radius: 50%;
	transition: background-color 0.3s ease;
	padding: 2px;
	zoom: 0.8;

	&:hover {
		zoom: 1;
	}
`;
