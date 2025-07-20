import { css, keyframes } from '@emotion/react';
import { CRT_GREEN, CRT_SCAN_LINE, VGA_BLACK } from '@src/constants/colors';

// CRT Scanline effect
export const scanlines = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

// CRT Flicker effect
export const crtFlicker = keyframes`
  0%, 98% { opacity: 1; }
  99% { opacity: 0.98; filter: brightness(0.95); }
  100% { opacity: 1; filter: brightness(1); }
`;

// Terminal cursor blink
export const terminalBlink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

// Retro glow effect
export const retroGlow = keyframes`
  0%, 100% { 
    text-shadow: 
      0 0 5px currentColor,
      0 0 10px currentColor,
      0 0 15px currentColor;
  }
  50% { 
    text-shadow: 
      0 0 2px currentColor,
      0 0 5px currentColor,
      0 0 8px currentColor;
  }
`;

// Screen interference/static
export const interference = keyframes`
  0% { filter: hue-rotate(0deg) saturate(1); }
  20% { filter: hue-rotate(5deg) saturate(1.1); }
  40% { filter: hue-rotate(-2deg) saturate(0.9); }
  60% { filter: hue-rotate(3deg) saturate(1.05); }
  80% { filter: hue-rotate(-1deg) saturate(0.95); }
  100% { filter: hue-rotate(0deg) saturate(1); }
`;

// CRT Monitor effect mixin
export const crtEffect = css`
	position: relative;
	background: ${VGA_BLACK};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			${CRT_SCAN_LINE} 2px,
			${CRT_SCAN_LINE} 4px
		);
		pointer-events: none;
		z-index: 1;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			ellipse at center,
			transparent 60%,
			rgba(0, 0, 0, 0.3) 100%
		);
		pointer-events: none;
		z-index: 2;
	}
`;

// Terminal glow effect
export const terminalGlow = css`
	color: ${CRT_GREEN};
	text-shadow: 0 0 5px ${CRT_GREEN}, 0 0 10px ${CRT_GREEN},
		0 0 15px ${CRT_GREEN};
	animation: ${retroGlow} 2s ease-in-out infinite alternate;
`;

// Retro border styles (authentic 90s GUI)
export const retroBorder = {
	raised: css`
		border: 2px solid;
		border-color: #ffffff #808080 #808080 #ffffff;
		background: #c0c0c0;
	`,

	sunken: css`
		border: 2px solid;
		border-color: #808080 #ffffff #ffffff #808080;
		background: #c0c0c0;
	`,

	flat: css`
		border: 1px solid #808080;
		background: #c0c0c0;
	`,

	thick: css`
		border: 3px solid;
		border-color: #ffffff #000000 #000000 #ffffff;
		background: #c0c0c0;
	`,
};

// Dithering pattern backgrounds
export const ditherPattern = (
	intensity: 'light' | 'medium' | 'heavy' = 'medium',
) => {
	const patterns = {
		light: `
      background-image: 
        radial-gradient(circle at 25% 25%, transparent 2px, currentColor 2px),
        radial-gradient(circle at 75% 75%, transparent 2px, currentColor 2px);
      background-size: 4px 4px;
    `,
		medium: `
      background-image: 
        linear-gradient(45deg, currentColor 25%, transparent 25%),
        linear-gradient(-45deg, currentColor 25%, transparent 25%);
      background-size: 4px 4px;
    `,
		heavy: `
      background-image: 
        repeating-linear-gradient(
          45deg,
          currentColor,
          currentColor 1px,
          transparent 1px,
          transparent 2px
        );
    `,
	};

	return css`
		${patterns[intensity]}
	`;
};

// Pixelated/chunky effect
export const pixelated = css`
	image-rendering: -moz-crisp-edges;
	image-rendering: -webkit-crisp-edges;
	image-rendering: pixelated;
	image-rendering: crisp-edges;
`;

// VGA-style color limitation
export const vgaColorLimit = css`
	filter: contrast(1.2) saturate(1.3) brightness(0.9);
`;

// Authentic retro button press effect
export const retroButtonPress = css`
	&:active {
		border-color: #808080 #ffffff #ffffff #808080;
		transform: translate(1px, 1px);
		box-shadow: none;
	}
`;

// Screen flicker for dramatic effect
export const screenFlicker = css`
	animation: ${crtFlicker} 0.15s infinite linear;
`;

// Matrix-style text effect
export const matrixText = css`
	color: ${CRT_GREEN};
	background: ${VGA_BLACK};
	text-shadow: 0 0 10px ${CRT_GREEN};
	font-family: 'Courier New', monospace;
	letter-spacing: 0.1em;
`;
