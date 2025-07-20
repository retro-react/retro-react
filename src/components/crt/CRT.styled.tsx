import styled from '@emotion/styled';
import { crtFlicker, scanlines } from '@src/utils/retroEffects';
import { CRT_GREEN, VGA_BLACK, VGA_BLUE } from '@src/constants/colors';

const phosphorColors = {
	green: CRT_GREEN,
	amber: '#FFB000', // Classic amber terminal color
	white: '#FFFFFF', // White phosphor
	blue: VGA_BLUE,
};

export const CRTContainer = styled.div<{
	$phosphor: 'green' | 'amber' | 'white' | 'blue';
	$scanlines: boolean;
	$curvature: boolean;
	$flicker: boolean;
	$glowIntensity: number;
}>`
	position: relative;
	background: #1a1a1a;
	border: 20px solid #2a2a2a;
	border-radius: 10px;
	padding: 20px;
	box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6);

	/* CRT monitor bezel styling */
	&::before {
		content: '';
		position: absolute;
		top: -20px;
		left: -20px;
		right: -20px;
		bottom: -20px;
		background: linear-gradient(135deg, #3a3a3a, #1a1a1a);
		border-radius: 10px;
		z-index: -1;
	}

	${(props) =>
		props.$flicker &&
		`
		animation: ${crtFlicker} 0.15s infinite linear;
	`}
`;

export const CRTScreen = styled.div`
	position: relative;
	background: ${VGA_BLACK};
	min-height: 200px;
	border: 2px solid #333;
	overflow: hidden;

	/* Authentic CRT screen curvature */
	border-radius: 8px;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			ellipse at center,
			transparent 60%,
			rgba(0, 0, 0, 0.4) 100%
		);
		pointer-events: none;
		z-index: 10;
	}
`;

export const CRTContent = styled.div<{
	$phosphor?: 'green' | 'amber' | 'white' | 'blue';
	$glowIntensity?: number;
}>`
	position: relative;
	padding: 16px;
	font-family: 'Courier New', 'MS Sans Serif', monospace;
	font-size: 14px;
	line-height: 1.2;
	color: ${(props) => phosphorColors[props.$phosphor || 'green']};
	z-index: 5;
	white-space: pre-wrap;

	/* Phosphor glow effect */
	text-shadow: 0 0 3px currentColor, 0 0 6px currentColor, 0 0 9px currentColor,
		0 0 12px currentColor;

	/* Letter spacing for authentic feel */
	letter-spacing: 0.05em;

	/* Ensure proper contrast and readability */
	text-rendering: optimizeLegibility;
`;

export const ScanlineOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: repeating-linear-gradient(
		0deg,
		transparent,
		transparent 2px,
		rgba(0, 0, 0, 0.3) 2px,
		rgba(0, 0, 0, 0.3) 4px
	);
	pointer-events: none;
	z-index: 8;

	/* Animated scanlines */
	animation: ${scanlines} 0.1s infinite linear;
`;

/* Additional CRT effects */
export const CRTNoise = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0.03;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath d='M0,0h1v1h-1z M2,2h1v1h-1z' fill='white'/%3E%3C/svg%3E");
	pointer-events: none;
	z-index: 9;
`;
