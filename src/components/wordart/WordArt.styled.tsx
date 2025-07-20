import styled from '@emotion/styled';
import { WordArtSize, WordArtStyle, WordArtVariant } from './WordArt';

// Retro color definitions for authentic 80s/90s aesthetics
const getWordArtVariantColor = (variant: WordArtVariant) => {
	switch (variant) {
		case 'primary':
			return '#0066cc'; // Classic blue
		case 'secondary':
			return '#808080'; // Classic gray
		case 'success':
			return '#00aa00'; // Classic green
		case 'warning':
			return '#ffaa00'; // Classic orange
		case 'retro':
			return 'linear-gradient(45deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #9900ff)';
		case 'terminal':
			return '#00ff00'; // Terminal green
		default:
			return '#0066cc';
	}
};

// Retro size definitions for authentic scaling
const getWordArtSize = (size: WordArtSize) => {
	switch (size) {
		case 'small':
			return '1.5rem';
		case 'medium':
			return '2.5rem';
		case 'large':
			return '4rem';
		case 'xlarge':
			return '6rem';
		default:
			return '2.5rem';
	}
};

// Art style effects for authentic retro styling
const getWordArtStyle = (artStyle: WordArtStyle, variant: WordArtVariant) => {
	const baseColor = getWordArtVariantColor(variant);
	const rainbowGradient =
		'linear-gradient(45deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #9900ff)';

	switch (artStyle) {
		case 'classic':
			return `
				color: ${baseColor};
				text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
			`;
		case 'beveled':
			return `
				color: ${baseColor};
				text-shadow: 
					1px 1px 0px #ffffff,
					2px 2px 0px #c0c0c0,
					3px 3px 0px #808080,
					4px 4px 2px rgba(0,0,0,0.6);
			`;
		case 'shadowed':
			return `
				color: ${baseColor};
				text-shadow: 
					3px 3px 0px rgba(0,0,0,0.7),
					6px 6px 4px rgba(0,0,0,0.3);
			`;
		case 'outlined':
			return `
				color: transparent;
				-webkit-text-stroke: 2px ${baseColor};
				text-stroke: 2px ${baseColor};
				text-shadow: 2px 2px 0px rgba(0,0,0,0.5);
			`;
		case 'retro3d':
			return `
				background: ${baseColor};
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
				text-shadow: 
					1px 1px 0px #ffffff,
					2px 2px 0px #e0e0e0,
					3px 3px 0px #c0c0c0,
					4px 4px 0px #a0a0a0,
					5px 5px 2px rgba(0,0,0,0.6);
			`;
		case 'pixelated':
			return `
				color: ${baseColor};
				image-rendering: pixelated;
				image-rendering: -moz-crisp-edges;
				image-rendering: crisp-edges;
				text-shadow: 1px 1px 0px rgba(0,0,0,0.8);
				font-family: 'Courier New', monospace;
			`;
		case 'rainbow':
			return `
				background: ${rainbowGradient};
				background-size: 400% 400%;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
				animation: rainbow-flow 3s ease-in-out infinite;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
			`;
		case 'wavy':
			return `
				background: ${rainbowGradient};
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
				transform-origin: center;
				animation: wavy-text 2s ease-in-out infinite;
			`;
		case 'curved':
			return `
				color: #ff3333;
				font-family: 'Arial Black', Arial, sans-serif;
				font-weight: 900;
				transform: 
					perspective(400px) 
					rotateY(25deg) 
					skewX(-8deg) 
					scaleY(1.2);
				transform-style: preserve-3d;
				text-shadow: 
					2px 0px 0px #0066ff,
					4px 0px 0px #0055dd,
					6px 0px 0px #0044bb,
					8px 0px 0px #003399,
					10px 0px 4px rgba(0,0,0,0.4);
				filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.3));
			`;
		case 'arch':
			return `
				color: #ff3333;
				font-family: 'Arial Black', Arial, sans-serif;
				font-weight: 900;
				text-shadow: 
					2px 2px 0px #0066ff,
					4px 4px 0px #0044bb,
					6px 6px 4px rgba(0,0,0,0.4);
				
				/* Individual letter transforms for true arch effect */
				span:nth-child(1) { transform: rotate(-15deg) translateY(10px); }
				span:nth-child(2) { transform: rotate(-10deg) translateY(5px); }
				span:nth-child(3) { transform: rotate(-5deg) translateY(2px); }
				span:nth-child(4) { transform: rotate(0deg) translateY(0px); }
				span:nth-child(5) { transform: rotate(5deg) translateY(2px); }
				span:nth-child(6) { transform: rotate(10deg) translateY(5px); }
				span:nth-child(7) { transform: rotate(15deg) translateY(10px); }
				span:nth-child(8) { transform: rotate(20deg) translateY(15px); }
				span:nth-child(9) { transform: rotate(25deg) translateY(20px); }
				span:nth-child(10) { transform: rotate(30deg) translateY(25px); }
				
				span {
					display: inline-block;
					transform-origin: center bottom;
				}
			`;
		case 'extruded':
			return `
				color: #ff4444;
				font-family: 'Arial Black', Arial, sans-serif;
				font-weight: 900;
				text-shadow: 
					1px 1px 0px #ff2222,
					2px 2px 0px #ff0000,
					3px 3px 0px #ee0000,
					4px 4px 0px #0088ff,
					5px 5px 0px #0077ee,
					6px 6px 0px #0066dd,
					7px 7px 0px #0055cc,
					8px 8px 0px #0044bb,
					9px 9px 0px #0033aa,
					10px 10px 0px #002299,
					11px 11px 0px #001188,
					12px 12px 0px #000077,
					13px 13px 6px rgba(0,0,0,0.5),
					14px 14px 10px rgba(0,0,0,0.3);
				letter-spacing: 0.05em;
			`;
		case 'perspective':
			return `
				color: ${baseColor};
				transform-origin: center bottom;
				transform: perspective(300px) rotateX(25deg);
				text-shadow: 
					0 1px 0 #ccc,
					0 2px 0 #c9c9c9,
					0 3px 0 #bbb,
					0 4px 0 #b9b9b9,
					0 5px 0 #aaa,
					0 6px 1px rgba(0,0,0,.1),
					0 0 5px rgba(0,0,0,.1),
					0 1px 3px rgba(0,0,0,.3),
					0 3px 5px rgba(0,0,0,.2),
					0 5px 10px rgba(0,0,0,.25);
			`;
		case 'inflate':
			return `
				color: ${baseColor};
				text-shadow: 
					0 0 10px rgba(255,255,255,0.8),
					0 0 20px rgba(255,255,255,0.6),
					0 0 30px rgba(255,255,255,0.4),
					inset 0 0 10px rgba(0,0,0,0.2);
				border: 2px solid rgba(255,255,255,0.3);
				border-radius: 10px;
				padding: 0.2em 0.4em;
				background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.1));
				animation: inflate-pulse 2s ease-in-out infinite;
			`;
		default:
			return `color: ${baseColor};`;
	}
};

export const WordArt = styled.div<{
	$variant: WordArtVariant;
	$size: WordArtSize;
	$artStyle: WordArtStyle;
	$rotation: number;
}>`
	/* Base retro font styling */
	font-family: 'Impact', 'Arial Black', sans-serif;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	display: inline-block;

	/* Rotation */
	transform: ${({ $rotation }) => `rotate(${$rotation}deg)`};

	/* Size */
	font-size: ${({ $size }) => getWordArtSize($size)};

	/* Art style effects */
	${({ $artStyle, $variant }) => getWordArtStyle($artStyle, $variant)}

	/* Prevent text selection for better visual effect */
	user-select: none;

	/* Ensure proper rendering */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	/* Animations for various effects */
	@keyframes rainbow-flow {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}

	@keyframes wavy-text {
		0%,
		100% {
			transform: skewX(0deg) scaleY(1);
		}
		25% {
			transform: skewX(-5deg) scaleY(1.1);
		}
		75% {
			transform: skewX(5deg) scaleY(0.9);
		}
	}

	@keyframes curve-wave {
		0%,
		100% {
			transform: skewX(-10deg) rotateY(-15deg) rotateX(0deg);
		}
		25% {
			transform: skewX(-15deg) rotateY(-20deg) rotateX(5deg);
		}
		50% {
			transform: skewX(-5deg) rotateY(-10deg) rotateX(-5deg);
		}
		75% {
			transform: skewX(-12deg) rotateY(-18deg) rotateX(3deg);
		}
	}

	@keyframes inflate-pulse {
		0%,
		100% {
			transform: scale(1);
			text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
				0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
		}
		50% {
			transform: scale(1.05);
			text-shadow: 0 0 15px rgba(255, 255, 255, 1),
				0 0 25px rgba(255, 255, 255, 0.8), 0 0 35px rgba(255, 255, 255, 0.6);
		}
	}
`;
